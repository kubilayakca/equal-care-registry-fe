import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

export type StoredSnippet = {
    snippet: string;
    note?: string | null;
    verified?: boolean;
    startChar?: number;
    endChar?: number;
};

export type StoredFieldData = {
    value: string | string[] | null;
    supportSnippets?: StoredSnippet[];
};

export type ReferenceSnippet = {
    id?: string;
    snippet: string;
    note?: string | null;
    startChar: number;
    endChar: number;
    verified?: boolean;
    sourceIndex?: number;
    sourceType?: 'prevalence' | 'main';
};

export type FieldWithSnippets = {
    value: string | null;
    supportSnippets: ReferenceSnippet[];
};

export type ComputedField = {
    value: string | null;
    computed_from: string;
};

export type NumericRange = {
    min: number;
    max: number;
} | null;

export type EnrichedSexSpecificData = {
    gender_distribution: FieldWithSnippets;
    prevalence_in_population: FieldWithSnippets;
    clinical_study_participation: FieldWithSnippets;
    representation_gap: ComputedField;
    efficacy: FieldWithSnippets;
    posology: FieldWithSnippets;
    dose_adjustments: FieldWithSnippets;
    difference_in_possible_side_effects: FieldWithSnippets;
    pregnancy_lactation: FieldWithSnippets;
    sex_gender_specific_nonclinical_findings: FieldWithSnippets;
};

export type EnrichedIndication = {
    indication_name: string;
    men: EnrichedSexSpecificData;
    women: EnrichedSexSpecificData;
    prevalence_source: string[];
};

export type EnrichedEvaluationOutput = {
    description: FieldWithSnippets;
    indications: EnrichedIndication[];
};

export type FieldData = {
    key: string;
    label: string;
    value: string | string[] | null;
    references: ReferenceSnippet[];
};

export type BrandDoc = {
    id: string;
    inn: string;
    brandName: string;
    therapeuticArea?: string;
    condition?: string;
    s3ObjectKey: string;
    docText: string;
    fields: FieldData[];
    resultS3Key?: string;
    feedbackHistory?: FeedbackHistoryItem[];
    currentVersion?: number;
    totalVersions?: number;
    sourceUrl?: string;
    source?: string;
};

export type BrandDocSummary = {
    id: string;
    brandName: string;
    condition?: string;
    therapeuticArea?: string;
    source?: string;
    processingStatus?: ProcessingStatus;
};

export type InnIndexBrandDoc = {
    id: string;
    brandName: string;
    therapeuticArea: string;
    condition: string;
    source: string;
    sourceUrl?: string;
    downloadDate?: string;
    extraction?: {
        isDone: boolean;
    };
    evaluation?: {
        published: boolean;
        isDone: boolean;
    };
};

export type InnIndexGroup = {
    inn: string;
    brandDocs: InnIndexBrandDoc[];
};

export type InnIndex = InnIndexGroup[];

export type FieldFeedback = Record<string, string>;

export type FeedbackPayload = {
    fieldFeedback: FieldFeedback;
    generalFeedback: string;
};

export type FeedbackHistoryItem = {
    version: number;
    timestamp: string;
    fieldFeedback: FieldFeedback;
    generalFeedback: string;
};

export type ExtractionIteration = {
    version: number;
    timestamp: string;
    extractionResult: {
        fields: Record<string, unknown>;
    };
    feedback: FeedbackPayload | null;
};

export type ExtractionHistory = {
    documentGivenAtIteration: number;
    iterations: ExtractionIteration[];
};

export type ExtractionRequestBody = {
    docId: string;
    docText: string;
    inn?: string;
    therapeuticArea?: string;
    condition?: string;
    brandNames?: string[];
    resultS3Key?: string;
    feedback?: FeedbackPayload;
    loadHistory?: boolean;
};

export type ExtractionResponseBody = {
    docId: string;
    docText: string;
    knownMetadata?: {
        inn?: string;
        therapeuticArea?: string;
        condition?: string;
        brandNames?: string[];
    };
    fields?: Record<string, unknown>;
    fieldsNeedingRepair?: string[];
    loopCount?: number;
    maxRepairLoops?: number;
    iterationNumber?: number;
    previousIterations?: ExtractionIteration[];
    currentFeedback?: FeedbackPayload;
    fieldsToExtract?: string[];
    version: number;
    totalVersions: number;
};

export type ProcessingPhase =
    | 'idle'
    | 'extracting'
    | 'verifying'
    | 'repairing'
    | 'saving'
    | 'completed'
    | 'failed';

export type ProcessingStatus = {
    docId: string;
    phase: ProcessingPhase;
    startTime: number;
    durationMs: number;
    progress: number;
    errorMessage?: string;
    currentVersion?: number;
    totalVersions?: number;
};

export type ProcessingStatusWithMeta = ProcessingStatus & {
    hasResults: boolean;
    totalVersions: number;
};

export type SexSpecificData = {
    gender_distribution: NumericRange;
    prevalence_in_population: NumericRange;
    clinical_study_participation: NumericRange;
    representation_gap: NumericRange;
    efficacy: string | null;
    posology: string | null;
    dose_adjustments: string | null;
    difference_in_possible_side_effects: string | null;
    pregnancy_lactation: string | null;
    sex_gender_specific_nonclinical_findings: string | null;
};

export type IndicationEvaluation = {
    indication_name: string;
    men: SexSpecificData;
    women: SexSpecificData;
    prevalence_source: string[];
    possible_side_effects: string[];
};

export type GeneralInfo = {
    certification_item: string;
    description: string;
    item_type: string;
    active_ingredient: string;
    therapeutic_area: string;
    disease_area: string;
    indications: string[];
    source: string | null;
    source_url: string | null;
};

export type EvaluationResult = {
    general_info: GeneralInfo;
    indications: IndicationEvaluation[];
};

export type PrevalenceSource = {
    id: string;
    filename: string;
    s3Key: string;
    createdAt: string;
    content?: string;
    url?: string;
};

export type EvaluationIteration = {
    version: number;
    timestamp: string;
    evaluationResult: EvaluationResult;
    enrichedEvaluation?: EnrichedEvaluationOutput;
    feedback: FeedbackPayload | null;
};

export type EvaluationHistory = {
    documentGivenAtIteration: number;
    iterations: EvaluationIteration[];
};

export type EvaluationData = {
    brandId: string;
    evaluation: EvaluationResult;
    enrichedEvaluation?: EnrichedEvaluationOutput;
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
    const normalizedKeyLowerId = `registry/output/INNs/${normalizedInn}/${id.toLowerCase()}/evaluation/evaluation.json`;
    const rawKey = `registry/output/INNs/${inn}/${id}/evaluation/evaluation.json`;

    try {
        const jsonString = await getObjectFromS3(normalizedKeyUpperId);
        return JSON.parse(jsonString) as EvaluationData;
    } catch (upperIdError) {
        // If that fails, try with lowercase ID (matching slug format)
        try {
            const jsonString = await getObjectFromS3(normalizedKeyLowerId);
            return JSON.parse(jsonString) as EvaluationData;
        } catch (lowerIdError) {
            // If normalized paths fail, try with raw INN (preserving spaces)
            try {
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

