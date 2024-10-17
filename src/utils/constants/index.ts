export const IMAGE_REGEX = /(https?:\/\/.*\.)/i;

export const LOCALES = ['en'];

export const ROUTES = {
  root: '/',
  certificateTypeMedication: '/medication',
  certificateTypeDiagnosticTreatment: '/diagnostic-treatment',
  certificateTypeDigitalDiagnosticTreatment: '/digital-diagnostic-treatment',
  certificateTypeAiSupportedDiagnosticTreatment:
    '/ai-supported-diagnostic-treatment',
  certificateTypeFemaleTech: '/femtech',
  certificateTypeMaleTech: '/maletech',

  certificateMedication: '/medication/[slug]',
  certificateTreatment: '/treatment/[slug]',
  certificateService: '/service/[slug]',
};

export const CERTIFICATION_TYPES = {
  medication: 'medication',
  diagnosticTreatment: 'diagnostic_treatment',
  digitalDiagnosticTreatment: 'digital_diagnostic_treatment',
  aiSupportedDiagnosticTreatment: 'ai_supported_diagnostic_treatment',
  femaleTech: 'femaletech',
  maleTech: 'maletech',
};

const SAMPLE_COMPANY = {
  name: 'Johnson & Johnson LTD',
  image: '/companies/j&j_logo.svg',
  country: 'United Kingdom',
  website: 'https://www.jnj.com/',
  address:
    '50 -100 Holmers Farm Way, High Wycombe,\n Buckinghamshire, HP12 4EG, UK',
  medicalInfoLine: '0808 238 9999',
  medicalInfoEmail: 'consumer-gb@kenvue.com',
};

const SAMPLE_CERTIFICATE = {
  name: 'Pregabalin - Mylan 25mg Hard Capsules',
  slug: 'pregabalin-mylan-25mg-hard-capsules',
  image: '',
  type: 'medication',
  description:
    'Pregabalin is a medicine used to treat type 2 diabetes, chronic (long-term) heart failure and chronic kidney disease.',
  company: SAMPLE_COMPANY,
  atc: {
    code: 'D11AC30',
    description:
      'ATC Code is assigned to a medication according to the organ it works on and its mode of action.',
  },
  ingredients: [
    {
      icon: 'ingredient',
      name: 'Paracetamol',
    },
  ],
  lastUpdated: '2023-10-10',
};

export const COMPANIES = [SAMPLE_COMPANY, SAMPLE_COMPANY, SAMPLE_COMPANY];

export const CERTIFICATES = [
  { ...SAMPLE_CERTIFICATE, type: CERTIFICATION_TYPES.medication },
  { ...SAMPLE_CERTIFICATE, type: CERTIFICATION_TYPES.diagnosticTreatment },
  {
    ...SAMPLE_CERTIFICATE,
    type: CERTIFICATION_TYPES.digitalDiagnosticTreatment,
  },
  {
    ...SAMPLE_CERTIFICATE,
    type: CERTIFICATION_TYPES.aiSupportedDiagnosticTreatment,
  },
  { ...SAMPLE_CERTIFICATE, type: CERTIFICATION_TYPES.femaleTech },
  { ...SAMPLE_CERTIFICATE, type: CERTIFICATION_TYPES.maleTech },
];

export const INDICATIONS = [
  {
    title: 'indications_1_title',
    description: 'indications_1_description',
  },
  {
    title: 'indications_2_title',
    description: 'indications_2_description',
  },
  {
    title: 'indications_3_title',
    description: 'indications_3_description',
  },
  {
    title: 'indications_4_title',
    description: 'indications_4_description',
  },
  {
    title: 'indications_5_title',
    description: 'indications_5_description',
  },
  {
    title: 'indications_6_title',
    description: 'indications_6_description',
  },
];

export const ICON_MAPPING = {
  [CERTIFICATION_TYPES.medication]: '/icons/ic-medication.svg',
  [CERTIFICATION_TYPES.diagnosticTreatment]: '/icons/ic-treatment.svg',
  [CERTIFICATION_TYPES.digitalDiagnosticTreatment]: '/icons/ic-treatment.svg',
  [CERTIFICATION_TYPES.aiSupportedDiagnosticTreatment]:
    '/icons/ic-treatment.svg',
  [CERTIFICATION_TYPES.femaleTech]: '/icons/ic-service.svg',
  [CERTIFICATION_TYPES.maleTech]: '/icons/ic-service.svg',
};

export const CERTIFICATE_TYPE_ICON_MAPPING = {
  [CERTIFICATION_TYPES.medication]: 'medication',
  [CERTIFICATION_TYPES.diagnosticTreatment]: 'diagnostic-treatment',
  [CERTIFICATION_TYPES.digitalDiagnosticTreatment]:
    'digital-diagnostic-treatment',
  [CERTIFICATION_TYPES.aiSupportedDiagnosticTreatment]:
    'ai-supported-diagnostic-treatment',
  [CERTIFICATION_TYPES.femaleTech]: 'femaletech',
  [CERTIFICATION_TYPES.maleTech]: 'maletech',
};

export const BADGE_ICON_MAPPING = {
  [CERTIFICATION_TYPES.medication]: '/icons/badge-medication.svg',
  [CERTIFICATION_TYPES.diagnosticTreatment]:
    '/icons/badge-diagnostic-treatment.svg',
  [CERTIFICATION_TYPES.digitalDiagnosticTreatment]:
    '/icons/badge-digital-diagnostic-treatment.svg',
  [CERTIFICATION_TYPES.aiSupportedDiagnosticTreatment]:
    '/icons/badge-ai-supported-diagnostic-treatment.svg',
  [CERTIFICATION_TYPES.femaleTech]: '/icons/badge-femaletech.svg',
  [CERTIFICATION_TYPES.maleTech]: '/icons/badge-maletech.svg',
};
