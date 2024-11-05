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
  femTech: 'femtech',
  maleTech: 'maletech',
};

const HEXAL_AG_COMPANY = {
  name: 'Hexal AG',
  image: '/companies/hexal.png',
  country: 'Germany',
  website: 'https://www.hexal.de/hcp/produkte/atorvastatin-hexal',
  address:
    'Hexal AG, Industriestraße 25, 83607 Holzkirchen',
  medicalInfoLine: '0808 238 9999',
  medicalInfoEmail: 'consumer-gb@kenvue.com',
};

const MEDICSTREAM_COMPANY = {
  name: 'medicstream GmbH',
  image: '/companies/medicstream-logo.jpg',
  country: 'Germany',
  website: 'www.medicstream.net',
  address: 'Trierer Str. 43 50354 Hürth',
  medicalInfoLine: '0808 238 9999',
  medicalInfoEmail: 'info@medicstream.net',
};

const Bristol_Myers_COMPANY = {
  name: 'Bristol Myers Squibb®',
  image: '/companies/bmy-logo.png',
  country: 'Germany',
  website: 'https://www.bms.com/',
  address: 'Arnulfstraße 29, 80636 München',
  medicalInfoLine: '0808 238 9999',
  medicalInfoEmail: 'medwiss.info@bms.com',
};

const Exploris_Health_AG_COMPANY = {
  name: 'Exploris Health AG',
  image: '/companies/exploris.jpg',
  country: 'Switzerland',
  website: 'https://www.explorishealth.com/loesungen/cardio-explorer',
  address: 'Industriestrasse 44 CH-8304 Wallisellen',
  medicalInfoLine: '+41 43 355 80 10',
  medicalInfoEmail: 'info@explorishealth.com',
};

const PIPRA_COMPANY = {
  name: 'PIPRA AG',
  image: '/companies/pipra-logo.png',
  country: 'Switzerland',
  website: 'https://www.pipra.ch',
  address: 'Tessinerplatz 7 CH-8002 Zurich',
  medicalInfoLine: '0808 238 9999',
  medicalInfoEmail: 'info@pipra.ch',
};

const HERMAID_COMPANY = {
  name: 'Her-Medical-Aid GmbH',
  image: '/companies/hermaid.svg',
  country: 'Germany',
  website: 'https://www.hermaid.me',
  address: 'Gleimstraße 56 10437 Berlin',
  medicalInfoLine: '0808 238 9999',
  medicalInfoEmail: 'anne@hermaid.me',
};

export const enum TargetGender {
  MALE='male',
  FEMALE='female',
  BOTH='both',
}
const HERMAID_CERTIFICATE = {
  name: 'herMaid Platform for Female Health',
  slug: 'hermaid-platform-for-female-health',
  image: '',
  type: 'FemTech',
  targetGender: TargetGender.FEMALE,
  description: 'herMaid is a health service for companies that supports your employees with health issues that are often overlooked.',
  company: HERMAID_COMPANY,
  ingredients: [],
  indications: [
    {
      title: 'Menopausal related symptoms',
      description: 'The platform provides comprehensive support to women during menopause by acting as a digital health companion. It facilitates health data tracking, AI-supported anamnesis (patient history taking), and personalized education. The platform also offers matching and onboarding services with healthcare professionals, enabling individualized care to manage menopause symptoms effectively.',
      indicationRows: [
        {
          column: {label: 'prevalence', tooltip: 'prevalence_tooltip'},
          values: [
            {column: 'both', content: 'In Germany, an estimated 7.3 million women experience menopause-related symptoms that warrant medical attention. These symptoms can significantly impact both health and workplace performance, highlighting the urgent need for targeted healthcare interventions during this stage of life.'},
          ]
        },
        {
          column: {label: 'healthcare_gap_closure', tooltip: 'healthcare_gap_closure_tooltip'},
          values: [
            {column: 'both', content: 'On average, it takes three years for women experiencing menopause-related symptoms to receive appropriate medical care. The platform addresses this delay by encouraging employers to offer menopause care as part of their health benefits package, thereby raising awareness among employees. This can foster a broader understanding of menopause among both male and female employees, promoting timely recognition and care. Through comprehensive health data tracking, AI-driven personalized anamnesis, and individualized patient education, the platform supports earlier diagnosis and intervention, helping to reduce the healthcare gap in menopause care.'},
          ]
        },
        {
          column: {label: 'efficacy/accuracy', tooltip: 'efficacy/accuracy_tooltip'},
          values: [
            {column: 'both', content: 'In a self-reported survey, 92% of platform users noted significant improvements in their health and well-being after utilizing the services. These outcomes suggest the platform’s efficacy in addressing menopause-related health challenges, particularly in terms of symptom management and care accessibility.'},
          ]
        },
        {
          column: {label: 'accessibility', tooltip: 'accessibility_tooltip'},
          values: [
            {column: 'both', content: 'The platform provides users with access to a broad catalogue of menopause specialists, who can be booked directly through the platform. This ensures that women have a wide variety of treatment options and can even seek second opinions, promoting more personalized and well-rounded care. The platform is designed to be user-friendly, ensuring that women of all technological skill levels can easily navigate it.'},
          ]
        },
        {
          column: {label: 'affordability', tooltip: 'affordability_tooltip'},
          values: [
            {column: 'both', content: 'The platform offers flexible payment models, including employer-sponsored care options, making it accessible to a wide range of users. The educational courses provided are priced competitively, offering substantial value compared to market standards, while care and coaching services remain consistent with industry norms.'},
          ]
        },
        {
          column: {label: 'level_of_evidence', tooltip: 'level_of_evidence_tooltip'},
          values: [
            {column: 'both', content: `At present, the efficacy data is based on self-reported outcomes, with 92% of users expressing improvement in symptoms. Continued data collection and validation efforts are underway to strengthen the evidence base supporting the platform's effectiveness.`},
          ]
        }
      ]
    }
  ]
};

const Atorvastatin_CERT = {
  name: 'Atorvastatin HEXAL®',
  slug: 'atorvastatin-hexal',
  image: '',
  type: 'medication',
  targetGender: TargetGender.BOTH,
  description:
    'Atorvastatin is a medicine used to treat hypercholesterolemia and to prevent cardiovascular diseases.',
  company: HEXAL_AG_COMPANY,
  atc: {
    code: 'D11AC30',
    description:
      'ATC Code is assigned to a medication according to the organ it works on and its mode of action.',
  },
  ingredients: [
    {
      icon: 'ingredient',
      name: 'Atorvastatin Calcium 3-Wasser',
    },
  ],
  lastUpdated: '2023-10-10',
};

const PIPRA_CERT = {
  name: 'PIPRA',
  slug: 'pipra',
  image: '',
  type: 'Preoperative risk assessment tool',
  targetGender: TargetGender.BOTH,
  description:
    'Preoperative risk assessment tool, to assess the risk of a patient developing postoperative delirium. The test uses standard medical data and provides an immediate score-based risk assessment.',
  company: PIPRA_COMPANY,
  atc: {
    code: 'D11AC30',
    description:
      'ATC Code is assigned to a medication according to the organ it works on and its mode of action.',
  },
  indications: [
    {
      title: 'Postoperative Delirium Risk Assessment',
      description: 'Postoperative Delirium Risk Assessment',
      indicationRows: [
        {
          column: {label: 'prevalence', tooltip: 'prevalence_tooltip'},
          values: [
            {column: 'men', type: 'text', content: '18%', align: 'right',bg: 'light', alignContent: 'center'},
            {column: 'women', type: 'text', content: '18%', align: 'left', bg: 'dark', alignContent: 'center'}
          ]
        },
        {
          column: {label: 'gender_distribution', tooltip: 'gender_distribution_tooltip'},
          values: [{column: 'men', type: 'number', value: 51, align: 'right'},{column: 'women', type: 'number', value: 49, align: 'left', bg: 'dark'}]
        },
        {
          column: {label: 'study_participation', tooltip: 'study_participation_tooltip'},
          values: [
            {column: 'men', type: 'number', value: 52, align: 'right'},
            {column: 'women', type: 'number', value: 48, align: 'left', bg: 'dark', representationGap: 1}
          ]
        },
        {
          column: {label: 'training_data_distribution', tooltip: 'training_data_distribution_tooltip'},
          values: [
            {column: 'men', type: 'number', value: 54, align: 'right'},
            {column: 'women', type: 'number', value: 46, align: 'left', bg: 'dark', representationGap: 3}
          ]
        },
        {
          column: {label: 'validation_data_distribution', tooltip: 'validation_data_distribution_tooltip'},
          values: [
            {column: 'men', type: 'number', value: 55, align: 'right'},
            {column: 'women', type: 'number', value: 45, align: 'left', bg: 'dark', representationGap: 4}
          ]
        },
        {
          column: {label: 'accuracy', tooltip: 'accuracy_tooltip'},
          values: [{column: 'men', type: 'number', value: 90, align: 'right'},{column: 'women', type: 'number', value: 90, align: 'left', bg: 'dark'}]
        },
        {
          column: {label: 'study_representation', tooltip: 'study_representation_tooltip'},
          values: [
            {column: 'both', type: 'text', content: 'The study used as basis for development includes data for 2,250 patients, with a gender distribution of 54.6% male and 45.4% female. This indicates a balanced representation of genders. In the subset of patients who developed delirium, 52.3% were male and 47.7% were female. The gender distribution in the foundational research only has a minimal representation gap.', align: 'left'},
          ]
        },
        {
          column: {label: 'training_data_quality', tooltip: 'training_data_quality_tooltip'},
          values: [
            {column: 'both', type: 'text', content: 'Gender Representation: As noted above, the training data includes 54.6% male and 45.4% female participants, which is balanced compared to the prevalence in the population. - Origin and Quality of Training Data: The article details that the data were sourced from eight high-quality studies (randomized control trials and cohort studies) - Transparency in Data Preprocessing: The study describes the preprocessing steps, including the handling of missing data and standardization procedures. - Investigation and Documentation of Biases: The study used the Quality In Prognosis Studies (QUIPS) tool to evaluate the risk of bias in several domains, including study participation, attrition, exposure measurement, outcome measurement, and study confounding. This comprehensive bias assessment indicates thorough investigation and documentation of potential biases and their impacts.', align: 'left'},
          ]
        },
        {
          column: {label: 'validation_data_quality', tooltip: 'validation_data_quality_tooltip'},
          values: [
            {column: 'both', type: 'text', content: 'PIPRA was externally validated using two datasets from independent sources: Bern Dataset (Switzerland): Data were prospectively collected from patients undergoing surgery at a 70-bed Orthopaedic Surgery and Traumatology Department at the University Hospital of Bern. Patients were systematically assessed for postoperative delirium (POD) using the Delirium Observational Screening Scale (DOSS). This dataset provided robust, systematically collected data from a clinical environment, ensuring high external validity. LMU Dataset (Germany): A second dataset was collected from a study conducted at the Ludwig Maximilian University of Munich. Here, the 4AT Tool (and CAM-ICU for intubated patients) was used to assess POD in surgical patients. This data, although preliminary due to the ongoing nature of the study, contributes to a broader, real-world validation of PIPRA\'s predictive power. The external datasets were collected using validated, systematic methods for diagnosing POD, ensuring consistency and reliability in the outcomes. Handling of Missing Data: For the Bern dataset, missing variables such as ASA scores and CRP values were imputed based on predictor averages, minimizing data loss and maintaining model robustness without compromising the validity of the results. Diversity and Real-world Applicability: Both validation datasets were collected in diverse surgical settings, from orthopaedic to general surgery, enhancing the algorithm\'s applicability across various clinical environments. The systematic approach to collecting POD data and the high level of control over patient assessments ensures that the findings can be generalized to other settings where PIPRA might be used.', align: 'left'},
          ]
        },
        {
          column: {label: 'algorithm_adaptability', tooltip: 'algorithm_adaptability_tooltip'},
          values: [
            {column: 'both', type: 'text', content: 'The PIPRA algorithm explicitly excludes gender as an input variable because the development it was determined that it is not a significant factor in predicting postoperative delirium. While this decision is based on the algorithm\'s performance and the analysis conducted during its development, it indicates that gender-specific needs were assessed and found not to be a determining factor for this particular prediction task. This approach reflects a data-driven decision to focus on more impactful variables, even though it means gender-specific adaptability is not directly addressed in the model.', align: 'left'},
          ]
        },
        {
          column: {label: 'accuracy', tooltip: 'accuracy_tooltip'},
          values: [
            {column: 'both', type: 'text', content: 'The PIPRA algorithm explicitly excludes gender as an input variable because the development it was determined that it is not a significant factor in predicting postoperative delirium. Therefore, the accuracy is identical for men and women. The algorithm has a high sensitivity of 90% for high-risk patients (meaning it correctly identifies 90% of patients who will experience delirium). This high sensitivity indicates that the algorithm is effective at catching most cases of delirium and therefore has a low likelihood of missing patients at risk. For patients classified as low risk by the algorithm, there is an 86% to 95% probability that they will not experience delirium. This high probability suggests that the algorithm is reliable in identifying patients who are genuinely at low risk.', align: 'left'},
          ]
        },
        {
          column: {label: 'transparency', tooltip: 'transparency_tooltip'},
          values: [
            {column: 'both', type: 'text', content: 'The PIPRA provides details on the hyperparameters (logistic regression with an L1 penalty), the training dataset (data from eight studies), and the training process (10-fold cross-validation for predictor selection and internal validation).', align: 'left'},
          ]
        },
        {
          column: {label: 'accessibility', tooltip: 'accessibility_tooltip'},
          values: [
            {column: 'both', type: 'text', content: 'The PIPRA algorithm\'s user interface is designed for clinical use, providing meaningful output of absolute risk percentages and the importance of variables. The documentation enables the healthcare professional to use PIPRA.', align: 'left'},
          ]
        },
        {
          column: {label: 'affordability', tooltip: 'affordability_tooltip'},
          values: [
            {column: 'both', type: 'text', content: 'PIPRA is purchased by hospitals and practices and applied free of charge in the preoperative checkup of a patient.', align: 'left'},
          ]
        },
        {
          column: {label: 'possible_side_effects', tooltip: 'possible_side_effects_tooltip'},
          values: [
            {column: 'both', type: 'text', content: 'No known side effects.', align: 'left'},
          ]
        },
        {
          column: {label: 'regulatory_compliance', tooltip: 'regulatory_compliance_tooltip'},
          values: [
            {column: 'both', type: 'text', content: 'The PIPRA algorithm is certified as a Class IIa under MDR in Europe, indicating compliance with European medical device regulations. Ethical compliance is suggested through this certification and the study\'s adherence to international guidelines for delirium prevention', align: 'left'},
          ]
        },
        {
          column: {label: 'level_of_evidence', tooltip: 'level_of_evidence_tooltip'},
          values: [
            {column: 'both', type: 'text', content: 'Level of evidence for AI development The PIPRA algorithm\'s level of evidence can be assessed based on the systematic review included in its development and validation, as well as the thoroughness of the analysis methods. Study Quality and Data Sources: An Individual Patient Data (IPD) meta-analysis was performed using data from 21 studies involving 8,528 patients. These studies were rigorously selected and included a wide range of perioperative factors. Most included studies were cohort studies from diverse geographical regions, including Europe, Asia, North America, Australia, and South America, enhancing the generalizability of the findings . Level of evidence for AI validation The algorithm was validated using both internal and external datasets, with performance metrics such as the area under the receiver operating characteristic curve (AUC) reported. Internal validation showed an AUC of 0.80 (95% CI: 0.77-0.82), while external validation reported an AUC of 0.74 (95% CI: 0.68-0.80) . Multiple imputations were used to handle missing data, and the one-stage IPD meta-analysis approach was employed to account for clustering within studies and enhance the robustness of the findings. Results and Sensitivity Analysis: The probability of experiencing POD was calculated using a multilevel mixed-effects logistic regression model. The results were consistent across various sensitivity analyses, indicating the stability and reliability of the model.', align: 'left'},
          ]
        },
      ]
    }
  ]
};

const CAMZYOS_CERT = {
  name: 'CAMZYOS 2.5mg, 5mg, 10mg and 15mg hard capsules',
  slug: 'camzyos-hard-capsules',
  image: '',
  type: 'medication',
  targetGender: TargetGender.BOTH,
  description:
    'CAMZYOS is used in adult patients to treat symptomatic (New York Heart Association classification, NYHA, class II – III) hypertrophic obstructive cardiomyopathy',
  company: Bristol_Myers_COMPANY,
  atc: {
    code: 'D11AC30',
    description:
      'ATC Code is assigned to a medication according to the organ it works on and its mode of action.',
  },
  ingredients: [
    {
      icon: 'ingredient',
      name: 'Mavacamten',
    },
  ],
  indications: [
    {
      title: 'Hypertrophic Obstructive Cardiomyopathy',
      description: 'Hypertrophic Obstructive Cardiomyopathy',
      indicationRows: [
        {
          column: {label: 'prevalence', tooltip: 'prevalence_tooltip'},
          values: [
            {column: 'men', type: 'text', content: '0.00722%', align: 'right',bg: 'light',alignContent: 'center'},
            {column: 'women', type: 'text', content: '0.00405%', bg: 'dark',align: 'left',  alignContent: 'center'}
          ]
        },
        {
          column: {label: 'gender_distribution', tooltip: 'gender_distribution_tooltip'},
          values: [{column: 'men', type: 'number', value: 64, align: 'right'},{column: 'women', type: 'number', value: 36, align: 'left', bg: 'dark'}]
        },
        {
          column: {label: 'study_participation', tooltip: 'study_participation_tooltip'},
          values: [
            {column: 'men', type: 'number', value: 57, align: 'right',representationGap: -7 },
            {column: 'women', type: 'number', value: 43, align: 'left', bg: 'dark'}
          ]
        },
        {
          column: {label: 'efficacy', tooltip: 'efficacy_tooltip'},
          values: [{column: 'men', type: 'number', value: 19, align: 'right'},{column: 'women', type: 'number', value: 22, align: 'left', bg: 'dark'}]
        },
        {
          column: {label: 'posology', tooltip: 'posology_tooltip'},
          values: [
            {column: 'men', type: 'text', content: 'The dosage of Camzyos (mavacamten) for hypertrophic cardiomyopathy is determined through a combination of clinical trial data, patient-specific factors, and ongoing PK/PD monitoring. Initial dosages typically start at 2.5 to 5 mg/day, with adjustments based on therapeutic response and safety assessments', align: 'left'},
            {column: 'women', type: 'text', content: 'The dosage of Camzyos (mavacamten) for hypertrophic cardiomyopathy is determined through a combination of clinical trial data, patient-specific factors, and ongoing PK/PD monitoring. Initial dosages typically start at 2.5 to 5 mg/day, with adjustments based on therapeutic response and safety assessments', align: 'left', bg: 'dark'}
          ]
        },
        {
          column: {label: 'difference_in_side_effects', tooltip: 'difference_in_side_effects_tooltip'},
          values: [
            {column: 'men', type: 'text', content: 'Not applicable', align: 'left'},
            {column: 'women', type: 'text', content: 'Not applicable', align: 'left', bg: 'dark'}
          ]
        },
        {
          column: {label: 'possible_side_effects', tooltip: 'possible_side_effects_tooltip'},
          values: [
            {column: 'both', type: 'text', content: `Common Side Effects:

Dizziness or lightheadedness – This can occur due to its effect on lowering heart rate and blood pressure.
Fatigue – Feeling unusually tired is a common reaction as the medication reduces the force of the heart's contractions.
Shortness of breath – Though it aims to improve symptoms of obstructive HCM, in some cases it may cause or worsen breathing difficulties.
Headache – A general headache may occur as a result of the body's adjustment to the medication.
Low blood pressure (hypotension) – CAMZYOS can lower blood pressure, leading to symptoms such as lightheadedness or fainting.
Serious Side Effects:

Heart failure – CAMZYOS can affect heart function, sometimes causing or worsening heart failure, particularly if there is already some form of cardiac impairment.
Arrhythmias – Irregular heart rhythms may develop, which could be serious and require medical attention.
Bradycardia – A significantly slowed heart rate, which may require adjustment of the dosage or discontinuation.
Additional Notable Side Effects:

Decreased Left Ventricular Ejection Fraction (LVEF) – Noted in clinical trials as a significant side effect, especially at higher plasma concentrations 4 9.
Atrial Fibrillation – Reported as a possible side effect, particularly at higher doses 4.`, align: 'left'},
          ]
        },
      ]
    }
  ]
};

const CardioExplorerCert = {
  name: 'Cardio Explorer',
  slug: 'cardio-explorer',
  image: '',
  type: 'AI-supported test for coronary heart disease.',
  targetGender: TargetGender.BOTH,
  description:
    'Cardio Explorer is a non-invasive test that detects life-threatening narrowing of the coronary arteries (coronary artery disease).',
  company: Exploris_Health_AG_COMPANY,
  ingredients: [],
  indications: [
    {
      title: 'Coronary Artery Disease',
      description: 'Coronary Artery Disease',
      indicationRows: [
        {
          column: {label: 'prevalence', tooltip: 'prevalence_tooltip'},
          values: [
            {column: 'men', type: 'text', content: '1.79%', align: 'right',bg: 'light', alignContent: 'center'},
            {column: 'women', type: 'text', content: '1.52%', bg: 'dark',align: 'left', alignContent: 'center'}
          ]
        },
        {
          column: {label: 'gender_distribution', tooltip: 'gender_distribution_tooltip'},
          values: [{column: 'men', type: 'number', value: 54, align: 'right'},{column: 'women', type: 'number', value: 46, align: 'left', bg: 'dark'}]
        },
        {
          column: {label: 'study_participation', tooltip: 'study_participation_tooltip'},
          values: [
            {column: 'men', type: 'number', value: 66, align: 'right'},
            {column: 'women', type: 'number', value: 34, align: 'left', bg: 'dark', representationGap: -12}
          ]
        },
        {
          column: {label: 'training_data_distribution', tooltip: 'training_data_distribution_tooltip'},
          values: [
            {column: 'men', type: 'number', value: 70, align: 'right'},
            {column: 'women', type: 'number', value: 30, align: 'left', bg: 'dark', representationGap: -16}
          ]
        },
        {
          column: {label: 'validation_data_distribution', tooltip: 'validation_data_distribution_tooltip'},
          values: [
            {column: 'men', type: 'number', value: 58, align: 'right'},
            {column: 'women', type: 'number', value: 42, align: 'left', bg: 'dark', representationGap: -4}
          ]
        },
        {
          column: {label: 'accuracy', tooltip: 'accuracy_tooltip'},
          values: [
            {column: 'men', type: 'text', content: 'Cardio Explorer® correctly identifies <b>obstructive CAD</b> (defined as anatomic stenosis of > 50%) in <b>88% of male cases</b>.', align: 'right'},
            {column: 'women', type: 'text', content: 'Cardio Explorer® correctly identifies <b>obstructive CAD</b> (defined as anatomic stenosis of > 50%) in <b>82% of female cases</b>.', align: 'left', bg: 'dark'}
          ]
        },
        {
          column: {label: 'study_representation', tooltip: 'study_representation_tooltip'},
          values: [
            {column: 'both', type: 'text', content: 'The study population in the foundational research included in the development of the Cardio Explorer algorithm for diagnosing coronary artery disease (CAD) shows a balanced gender representation: 66% male, 34% female​, aligning with general population gender distribution of 554% male and 46% female with a representation gap of 12% for women. The representation gap is reduced to only 3.7% in the validation data distribution.'}
          ]
        },
        {
          column: {label: 'training_data_quality', tooltip: 'training_data_quality_tooltip'},
          values: [
            {column: 'both', type: 'text', content: `
              <p>For training the algorithm was further refined with data from the LURIC study with 987 participants with a gender distribution of 61% male and 29% female. Additionally,  a simulated data set for low-risk patients that had 30303 patients with 43% females was used for training of the algorithm. Aligning closely with general population gender distribution of 53% male and 47% female.</p>
              <br/>
              <ul>
              <li>•<b>Gender Representation:</b> The data used for training compensated the lack of female representation in the simulated data reducing the representation gap to only 3%.</li>
              <li>•<b>Origin and Quality:</b> Data was sourced from multiple high-quality study, with validation in real-world outpatient settings​.</li>
              <li>•<b>Data Preprocessing and Transformations:</b> The preprocessing steps, including handling of missing data and data transformations, are well documented. For example, missing values were replaced with median values or constants within normal ranges​.</li>
              <li>•<b>Bias Investigation and Documentation:</b> The studies utilized robust statistical methods and sensitivity analyses to ensure the stability and reliability of the models. The comprehensive analysis indicates a thorough investigation of biases.</li>
              <ul>
            `}
          ]
        },
        {
          column: {label: 'validation_data_quality', tooltip: 'validation_data_quality_tooltip'},
          values: [
            {column: 'both', type: 'text', content: `
              <p>The algorithm was validated in two independent cohorts. The Maastricht cohort (CVC study) included 696 participants, with a gender distribution of 51% female and 49% male, closely reflecting the general population's gender distribution. Additionally, the Basel II (PET Study) cohort comprised 2,417 participants, with a gender distribution of 68% male and 32% female. Both cohorts represent real-world clinical settings, ensuring that the validation reflects practical applicability in outpatient scenarios.</p>
              <br/>
              <ul>
              <li>•<b>Gender Representation:</b> The Maastricht cohort demonstrated gender parity, aligning closely with the general population distribution, while the Basel II cohort had a higher proportion of males, reflecting typical representation in coronary artery disease (CAD) studies. In aggregation the validation data has a representation gap of only 10% for women.</li>
              <li>•<b>Origin and Quality:</b> Both validation datasets were sourced from high-quality studies in outpatient and diagnostic settings, enhancing the reliability of the algorithm’s validation results.</li>
              <li>•<b>Bias Investigation and Documentation:</b> The validation was conducted with thorough statistical analyses, ensuring the algorithm's performance remained unbiased across gender and risk categories.</li>
              <ul>
            `}
          ]
        },
        {
          column: {label: 'algorithm_adaptability', tooltip: 'algorithm_adaptability_tooltip'},
          values: [
            {column: 'both', type: 'text', content: `
              <p>The Cardio Explorer algorithm includes a comprehensive set of clinical and laboratory variables. Among these variables, sex (gender) is explicitly listed as one of the inputs.</p>
              <br/>
              <ul>
              <li>•<b>Clinical Variables:</b>Age, sex, weight, height, presence and type of chest pain, diabetes, nicotine use, pathological Q-waves (at ECG), systolic and diastolic blood pressure, and relevant medication like statin use.</li>
              <li>•<b>Laboratory Variables:</b>Mean corpuscular hemoglobin concentration (MCHC), white blood cells, urea, uric acid, troponin, glucose, total cholesterol, low-density lipoprotein cholesterol, high-density lipoprotein cholesterol, alanine aminotransferase (ALAT), alkaline phosphatase, amylase, total protein, albumin, and bilirubin.</li>
              <ul>
            `}
          ]
        },
        {
          column: {label: 'accuracy', tooltip: 'accuracyy_tooltip'},
          values: [
            {column: 'both', type: 'text', content: `
              <p>The accuracy of the tool is measured by <b>AUC (Area Under the Curve)</b>, which ranges from 0.5 (random guessing) to 1.0 (perfect accuracy). In its general performance, Cardio Explorer demonstrates a strong diagnostic capability with:</p>
              <br/>

              <ul>
                <li><b>AUC = 0.82</b>, meaning it correctly identifies whether a patient has CAD in 82% of cases. This level of accuracy is considered high in clinical diagnostics.</li>
                <li>Cardio Explorer’s predictive performance has been evaluated separately for men and women, with slightly different results:</li>
                <li><b>For men</b>, the tool shows an <b>AUC of 0.708</b>. This indicates that the algorithm correctly identifies CAD in 70.8% of male cases.</li>
                <li><b>For men</b>, the tool shows an <b>AUC of 0.708</b>. This indicates that the algorithm correctly identifies CAD in 70.8% of male cases.</li>
              <ul>
              <br/>
              <b>In clinical practice:</b>

              <ul>
                <li>•Cardio Explorer performs reliably across both male and female populations.</li>
                <li>•Its slightly higher accuracy for women (77% versus 70.8% for men) reflects differences in how CAD may present in different genders, a common consideration in cardiovascular risk assessment.</li>
              <ul>
              <br/>
              Overall, the tool provides clinicians with an evidence-based, non-invasive method to evaluate CAD risk, and the results demonstrate strong accuracy, making it a valuable asset in patient evaluation.
              
            `}
          ]
        },
        {
          column: {label: 'transparency', tooltip: 'transparency_tooltip'},
          values: [
            {column: 'both', type: 'text', content: 'The publicly available papers provide details on the training process in detail, including the use of ensemble methods and evolutionary learning optimization. (www.explorishealth.com)'}
          ]
        },
        {
          column: {label: 'accessibility', tooltip: 'accessibility_tooltip'},
          values: [
            {column: 'both', type: 'text', content: 'The Cardio Explorer provides extensive material that explains the functionality of the tests for patients. '}
          ]
        },
        {
          column: {label: 'affordability', tooltip: 'affordability_tooltip'},
          values: [
            {column: 'both', type: 'text', content: 'The Cardio Explorer is a cost-effective alternative to more expensive imaging procedures like Stress-ECG, CCTA (Coronary Computed Tomography Angiography), and MRI (Magnetic Resonance Imaging). Unlike these traditional methods, the Cardio Explorer offers a non-invasive option that carries no side effects, making it a safer and more accessible choice for patients. Its affordability and safety could make it particularly beneficial in routine screenings.'}
          ]
        },
        {
          column: {label: 'possible_side_effects', tooltip: 'possible_side_effects_tooltip'},
          values: [
            {column: 'both', type: 'text', content: 'No known side effects.'}
          ]
        },
        {
          column: {label: 'regulatory_compliance', tooltip: 'regulatory_compliance_tooltip'},
          values: [
            {column: 'both', type: 'text', content: 'Approved medical device in the EU.'}
          ]
        },
        {
          column: {label: 'level_of_evidence', tooltip: 'level_of_evidence_tooltip'},
          values: [
            {column: 'both', type: 'text', content: `
              <b>Level of evidence for AI development:</b> The Cardio Explorer algorithm's level of evidence can be assessed based on the systematic review included in its development and validation, as well as the thoroughness of the analysis methods. The model was originally developed on the basis of the BASEL Study and then trained and validated using the LURIC Study, both cohort studies.
              <br/>
              <b>Level of evidence for AI validation:</b> The algorithm was validated using external dataset, with performance metrics such as the area under the receiver operating characteristic curve (AUC) reported.
              <br/>
              <b>Results and Sensitivity Analysis:</b> The results of the algorithm prediction were compared to established diagnostic procedures across coronary artery disease risk classes. For low-risk to intermediate-risk cohort referred for cardiac evaluation, the Cardio Explorer algorithm is a useful tool in the evaluation for CAD, superior to the generally used risk scores.
              `}
          ]
        },
        
        
      ]
    }
  ]
};

const MEDICSTREAM_CERT = {
  name: 'Medicstream Platform',
  slug: 'medicstream-platform',
  image: '',
  type: 'Digital',
  targetGender: TargetGender.BOTH,
  description:
    'medicstream is a digital platform that allows healthcare professionals to share individualizes content with their patients',
  company: MEDICSTREAM_COMPANY,
  indications: [
    {
      title: 'Applicable to all indications',
      description: 'Applicable to all indications',
      indicationRows: [
        {
          column: {label: 'gender_distribution', tooltip: 'gender_distribution_tooltip'},
          values: [
            {column: 'men', type: 'number', value: 49, align: 'right'},
            {column: 'women', type: 'number', value: 51, align: 'left', bg: 'dark'}
          ]
        },
        {
          column: {label: 'study_participation', tooltip: 'study_participation_tooltip'},
          values: [
            {column: 'men', type: 'number', value: 49, align: 'right'},
            {column: 'women', type: 'number', value: 51, align: 'left', bg: 'dark'}
          ]
        },
        {
          column: {label: 'efficacy', tooltip: 'efficacy_tooltip'},
          values: [
            {column: 'men', type: 'text', content: 'Not Applicable', align: 'left'},
            {column: 'women', type: 'text', content: 'Not Applicable', align: 'left', bg: 'dark'}
          ]
        },
        {
          column: {label: 'functionality', tooltip: 'functionality_tooltip'},
          values: [
            {column: 'both', type: 'text', content: `medicstream allows to share curated digital medical content from health practitioners to patient on three layers. The highest layer of a library would allow to create gender-specific libraries per medical field or a library with gender medicine as own topic. Within a library the content is structured by indication, also offering the possibility to create gender-specific indications. Indications also can be structured into chapters also with the possibility to have gender-specific content within.`, align: 'left'}
          ]
        },
        {
          column: {label: 'personalization', tooltip: 'personalization_tooltip'},
          values: [
            {column: 'both', type: 'text', content: `medicstream’s core value is the enablement of personalized health content curated by healthcare professionals for the patient. Therefore, the possibilities of personalization are given to a maximum degree.`, align: 'left'}
          ]
        },
        {
          column: {label: 'accessibility', tooltip: 'accessibility_tooltip'},
          values: [
            {column: 'both', type: 'text', content: `To be able to benefit from medicstream the patient needs an internet connected device and an email address. medicstream is free of charge for patients. The patient individual content is accessible at any time. These are the lowest possible prerequisites for digital interventions. Therefore the accessibility is high for men and women. The most relevant barrier to accessibility is the dependency on the healthcare professional to provide the individualizes content to the patient. `, align: 'left'}
          ]
        },
        {
          column: {label: 'affordability', tooltip: 'affordability_tooltip'},
          values: [
            {column: 'both', type: 'text', content: `medicstream is a cost-effective platform that is free of charge for the patient.`, align: 'left'}
          ]
        },
        {
          column: {label: 'possible_side_effects', tooltip: 'possible_side_effects_tooltip'},
          values: [
            {column: 'both', type: 'text', content: `No known side effects.`, align: 'left'}
          ]
        },
        {
          column: {label: 'regulatory_compliance', tooltip: 'regulatory_compliance_tooltip'},
          values: [
            {column: 'both', type: 'text', content: `medicstream is GDPR conform. The personalize access to the patient individual content allows privacy for the patient. Ethics and privacy are given equally for men and women.`, align: 'left'}
          ]
        },
        {
          column: {label: 'scientific_evidence', tooltip: 'scientific_evidence_tooltip'},
          values: [
            {column: 'both', type: 'text', content: `Patient individual content provision has positive impact on health competence, psychosocial health outcomes and compliance.`, align: 'left'}
          ]
        },
      ]
    }
  ]
};

export const COMPANIES = [MEDICSTREAM_COMPANY, Exploris_Health_AG_COMPANY, PIPRA_COMPANY, HERMAID_COMPANY];

export const CERTIFICATES = [
  { ...HERMAID_CERTIFICATE, type: CERTIFICATION_TYPES.femTech },
  // { ...Atorvastatin_CERT, type: CERTIFICATION_TYPES.medication },
  { ...CAMZYOS_CERT, type: CERTIFICATION_TYPES.medication },
  { ...MEDICSTREAM_CERT, type: CERTIFICATION_TYPES.diagnosticTreatment }, 
  { ...CardioExplorerCert, type: CERTIFICATION_TYPES.aiSupportedDiagnosticTreatment }, 
  { ...PIPRA_CERT, type: CERTIFICATION_TYPES.aiSupportedDiagnosticTreatment }, 
];

export const ICON_MAPPING = {
  [CERTIFICATION_TYPES.medication]: '/icons/ic-medication.svg',
  [CERTIFICATION_TYPES.diagnosticTreatment]: '/icons/ic-treatment.svg',
  [CERTIFICATION_TYPES.digitalDiagnosticTreatment]: '/icons/ic-treatment.svg',
  [CERTIFICATION_TYPES.aiSupportedDiagnosticTreatment]:
    '/icons/ic-treatment.svg',
  [CERTIFICATION_TYPES.femTech]: '/icons/ic-service.svg',
  [CERTIFICATION_TYPES.maleTech]: '/icons/ic-service.svg',
};

export const CERTIFICATE_TYPE_ICON_MAPPING = {
  [CERTIFICATION_TYPES.medication]: 'medication',
  [CERTIFICATION_TYPES.diagnosticTreatment]: 'diagnostic-treatment',
  [CERTIFICATION_TYPES.digitalDiagnosticTreatment]:
    'digital-diagnostic-treatment',
  [CERTIFICATION_TYPES.aiSupportedDiagnosticTreatment]:
    'ai-supported-diagnostic-treatment',
  [CERTIFICATION_TYPES.femTech]: 'femaletech',
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
  [CERTIFICATION_TYPES.femTech]: '/icons/badge-femaletech.svg',
  [CERTIFICATION_TYPES.maleTech]: '/icons/badge-maletech.svg',
};
