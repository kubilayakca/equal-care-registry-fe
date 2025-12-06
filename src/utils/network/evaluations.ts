import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

export type InnIndexBrandDoc = {
    id: string;
    brandName: string;
    therapeuticArea: string;
    condition: string;
    source: string; // "EMA" | "SwissMedic"
    sourceUrl?: string; // URL of the source PDF document (can be empty string)
    downloadDate?: string; // Download date in YYYY-MM-DD format (can be empty string)
    evaluation?: {
        published: boolean;
    };
};

export type InnIndexGroup = {
    inn: string;
    brandDocs: InnIndexBrandDoc[];
};

export type InnIndex = InnIndexGroup[]; // Array of INN groups

export type EvaluationData = {
    brandId: string;
    evaluation: {
        general_info: {
            certification_item: string;
            description: string;
            item_type: string;
            active_ingredient: string;
            therapeutic_area: string;
            disease_area: string;
            indications: string[];
            source: string;
            source_url: string | null;
        };
        indications: Array<{
            indication_name: string;
            men: {
                gender_distribution: string;
                prevalence_in_population: string;
                clinical_study_participation: string;
                representation_gap: string;
                efficacy: string;
                posology: string;
                dose_adjustments: string;
                difference_in_possible_side_effects: string;
                pregnancy_lactation: string | null;
                sex_gender_specific_nonclinical_findings: string;
            };
            women: {
                gender_distribution: string;
                prevalence_in_population: string;
                clinical_study_participation: string;
                representation_gap: string;
                efficacy: string;
                posology: string;
                dose_adjustments: string;
                difference_in_possible_side_effects: string;
                pregnancy_lactation: string | null;
                sex_gender_specific_nonclinical_findings: string;
            };
            prevalence_source: string;
            possible_side_effects: string[];
        }>;
    };
    extractedAt?: string;
    version?: number;
};

// Initialize S3 client with environment variables
const s3Client = new S3Client({
    region: process.env.S3_REGION || 'eu-central-1',
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
    },
});

const BUCKET_NAME = process.env.S3_BUCKET || 'equalcare';

async function getObjectFromS3(key: string): Promise<string> {
    const command = new GetObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
    });

    const response = await s3Client.send(command);

    if (!response.Body) {
        throw new Error(`Empty response body for key: ${key}`);
    }

    // Convert stream to string for Node.js environment
    // @ts-ignore - Body is a Readable stream in Node.js
    const stream = response.Body as any;
    const chunks: Uint8Array[] = [];

    return new Promise((resolve, reject) => {
        stream.on('data', (chunk: Uint8Array) => {
            chunks.push(chunk);
        });
        stream.on('error', reject);
        stream.on('end', () => {
            // Combine all chunks into a single Uint8Array
            const totalLength = chunks.reduce((acc, chunk) => acc + chunk.length, 0);
            const combined = new Uint8Array(totalLength);
            let offset = 0;
            for (const chunk of chunks) {
                combined.set(chunk, offset);
                offset += chunk.length;
            }
            // Convert to string
            const decoder = new TextDecoder('utf-8');
            resolve(decoder.decode(combined));
        });
    });
}

export async function fetchInnIndex(): Promise<InnIndex> {
    try {
        const jsonString = await getObjectFromS3('registry/inn_index.json');
        return JSON.parse(jsonString) as InnIndex;
    } catch (error) {
        throw new Error(`Failed to fetch inn_index.json from S3: ${error instanceof Error ? error.message : String(error)}`);
    }
}

export async function fetchEvaluation(inn: string, id: string): Promise<EvaluationData> {
    // Normalize INN for S3 path (same as slug generation - convert spaces/special chars to hyphens)
    const normalizedInn = inn.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    
    // Try normalized path with uppercase ID first (most common case)
    const normalizedKeyUpperId = `registry/output/INNs/${normalizedInn}/${id}/evaluation/evaluation.json`;
    
    try {
        const jsonString = await getObjectFromS3(normalizedKeyUpperId);
        return JSON.parse(jsonString) as EvaluationData;
    } catch (upperIdError) {
        // If that fails, try with lowercase ID (matching slug format)
        try {
            const normalizedKeyLowerId = `registry/output/INNs/${normalizedInn}/${id.toLowerCase()}/evaluation/evaluation.json`;
            const jsonString = await getObjectFromS3(normalizedKeyLowerId);
            return JSON.parse(jsonString) as EvaluationData;
        } catch (lowerIdError) {
            // If normalized paths fail, try with raw INN (preserving spaces)
            try {
                const rawKey = `registry/output/INNs/${inn}/${id}/evaluation/evaluation.json`;
                const jsonString = await getObjectFromS3(rawKey);
                return JSON.parse(jsonString) as EvaluationData;
            } catch (rawError) {
                throw new Error(`Failed to fetch evaluation for ${inn}/${id} from S3. Tried paths: ${normalizedKeyUpperId}, ${normalizedKeyLowerId}, ${rawKey}. Last error: ${rawError instanceof Error ? rawError.message : String(rawError)}`);
            }
        }
    }
}

export function getPublishedEvaluations(innIndex: InnIndex): Array<{
    inn: string;
    brandDoc: InnIndexBrandDoc;
}> {
    const published: Array<{ inn: string; brandDoc: InnIndexBrandDoc }> = [];

    for (const group of innIndex) {
        for (const brandDoc of group.brandDocs) {
            if (brandDoc.evaluation?.published === true) {
                published.push({
                    inn: group.inn,
                    brandDoc,
                });
            }
        }
    }

    return published;
}

export function generateEvaluationSlug(inn: string, id: string): string {
    // Convert to lowercase and replace spaces/special chars with hyphens
    const innSlug = inn.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return `${innSlug}-${id.toLowerCase()}`;
}

export function getUniqueTherapeuticAreas(innIndex: InnIndex): string[] {
    const areas = new Set<string>();
    for (const group of innIndex) {
        for (const brandDoc of group.brandDocs) {
            if (brandDoc.evaluation?.published === true && brandDoc.therapeuticArea) {
                areas.add(brandDoc.therapeuticArea);
            }
        }
    }
    return Array.from(areas).sort();
}

export function getConditionsByTherapeuticArea(innIndex: InnIndex, therapeuticArea: string): string[] {
    const conditions = new Set<string>();
    for (const group of innIndex) {
        for (const brandDoc of group.brandDocs) {
            if (
                brandDoc.evaluation?.published === true &&
                brandDoc.therapeuticArea === therapeuticArea &&
                brandDoc.condition
            ) {
                conditions.add(brandDoc.condition);
            }
        }
    }
    return Array.from(conditions).sort();
}

export function getUniqueSources(innIndex: InnIndex): string[] {
    const sources = new Set<string>();
    for (const group of innIndex) {
        for (const brandDoc of group.brandDocs) {
            if (brandDoc.evaluation?.published === true && brandDoc.source) {
                sources.add(brandDoc.source);
            }
        }
    }
    return Array.from(sources).sort();
}

