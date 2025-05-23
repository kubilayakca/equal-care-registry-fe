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
  certificateTypeDigitalPrevention: '/digital-prevention/',

  certificatePrevention: '/digital-prevention/[slug]',
  certificateMedication: '/medication/[slug]',
  certificateTreatment: '/treatment/[slug]',
  certificateService: '/service/[slug]',
};

export const CERTIFICATION_TYPES = {
  medication: 'medication',
  diagnosticTreatment: 'diagnostic_treatment',
  digitalDiagnosticTreatment: 'digital_diagnostic_treatment',
  digitalPrevention: 'digital_prevention',
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

const ROOT_HEALTH_COMPANY = {
  name: 'Roots Health GmbH',
  image: '/companies/hello_inside_logo.webp',
  country: 'Austria',
  website: 'https://helloinside.com',
  address: 'Kopernikusgasse 8/20 1060 Wien Austria',
  medicalInfoLine: null,
  medicalInfoEmail: 'office@helloinside.com',
};

const MEPHA_COMPANY = {
  name: 'Mepha Pharma AG',
  image: '/companies/mepha_logo.svg',
  country: 'Switzerland',
  website: 'https://www.mepha.ch',
  address: 'Kirschgartenstrasse 14, 4051 Basel',
  medicalInfoLine: '+41 61 705 43 43',
  medicalInfoEmail: 'digital.support@mepha.ch',
};

export const enum TargetGender {
  MALE = 'male',
  FEMALE = 'female',
  BOTH = 'both',
}

const HELLO_INSIDE_CERT = {
  name: 'HELLO INSIDE',
  slug: 'hello-inside',
  image: '/companies/hello_inside_logo.webp',
  type: 'Preoperative risk assessment tool',
  targetGender: TargetGender.BOTH,
  description:
    'Hello Inside is a digital platform that empowers users to optimize their metabolism through a personalized health approach using continuous blood glucose monitoring.',
  company: ROOT_HEALTH_COMPANY,
  atc: {
    code: 'D11AC30',
    description:
      'ATC Code is assigned to a medication according to the organ it works on and its mode of action.',
  },
  indications: [
    {
      title: 'Continuous glucose monitoring',
      description: 'Continuous glucose monitoring',
      indicationRows: [
        {
          column: { label: 'healthcare_gap_relevance', tooltip: 'healthcare_gap_relevance_tooltip' },
          values: [
            { column: 'both', type: 'text', content: 'Hello Inside explicitly invites users to explore how nutrition, stress, sleep, movement and hormones affect their metabolic responses—day by day, cycle by cycle. The app includes cycle-specific symptom tracking, allowing menstruating users to observe how hormonal phases influence glucose levels. This is a meaningful and often-overlooked feature in general health tech tools, where the female hormonal cycle is either ignored or treated as a confounding variable.By enabling users to correlate subjective symptoms with real-time physiological data, Hello Inside helps bridge an important gap: the lack of actionable, sex-specific feedback in mainstream health tracking tools.  The app includes educational program content on perimenopause and menopause; an often over-looked life stage and variable in health tech. While not a medical device, the app offers a strong step toward more equitable, data-driven preventive care.', align: 'left' },
          ]
        },
        {
          column: { label: 'efficacy/accuracy', tooltip: 'efficacy/accuracy_tooltip' },
          values: [
            {
              column: 'both', type: 'text', content: `
              Hello Inside meaningfully supports gender-aware interpretation of metabolic data. The app places continuous glucose measurements in the context of a user’s menstrual cycle, nutrition, stress levels, sleep, and physical activity, allowing individuals—particularly women—to understand how hormonal fluctuations and lifestyle choices influence their glucose response.
Rather than applying a uniform threshold or rule, Hello Inside promotes self-experimentation and insight-building. This approach supports the development of personalized patterns that are more reflective of female physiology, which is often underrepresented in both medical research and digital health design.
By encouraging users to track and interpret their data through a gendered lens, Hello Inside helps close the gap in how biological sex differences are considered in preventive health.
            `}
          ]
        },
        {
          column: { label: 'accessibility', tooltip: 'accessibility_tooltip' },
          values: [
            {
              column: 'both', type: 'text', content: `
<p>Hello Inside lowers the barrier to understanding complex metabolic data by focusing on core usability principles. The app applies best practices in interface design to ensure that users—regardless of their medical or technical background—can easily navigate, understand, and act on their health information.
Key usability strengths include:</p>
          <br/>
              <ul>
              <li>•A clean and intuitive layout that minimizes cognitive load</li>
              <li>•Consistent feedback and guidance during onboarding and daily use</li>
              <li>•Use of visual explanations to translate raw data into understandable trends</li>
          <ul>
          <br/>
<p>
Clear language and supportive prompts that follow principles of recognition over recall
Hello Inside demonstrates a high degree of usability in line with well-established design heuristics. This approach ensures that a wide range of users can meaningfully engage with their metabolic data and make informed choices—without needing expert knowledge.
</p>
            `}
          ]
        },
        {
          column: { label: 'affordability', tooltip: 'affordability_tooltip' },
          values: [
            { column: 'both', type: 'text', content: 'Hello Inside uses a direct-to-consumer subscription model. The pricing is transparent and competitive within the wellness space. The main cost factor is the CGM sensor, which may pose a barrier for some, but overall, the offering is well-positioned for accessibility among health-conscious users.', align: 'left' },
          ]
        },
        {
          column: { label: 'regulatory_compliance', tooltip: 'regulatory_compliance_tooltip' },
          values: [
            { column: 'both', type: 'text', content: 'Hello Inside complies with GDPR, and shows strong data ethics in handling sensitive personal health data. As a wellness-focused application, Hello Inside is not subject to MDR or FDA oversight, and does not claim to diagnose or treat disease.', align: 'left' },
          ]
        },
        {
          column: { label: 'possible_side_effects', tooltip: 'possible_side_effects_tooltip' },
          values: [
            { column: 'both', type: 'text', content: 'There are no known side effects associated with using Hello Inside. The tool is non-invasive, data-driven, and designed for informational and educational purposes.', align: 'left' },
          ]
        },
      ]
    }
  ]
};

const LOSARTAN_CERT = {
  name: 'Losartan',
  slug: 'losartan',
  image: '/companies/mepha_logo.svg',
  type: 'Medication',
  targetGender: TargetGender.BOTH,
  description:
    'Losartan is a medicine used to treat high blood pressure (hypertension), hytertension with left entricular hypertrophy, nephropathy in type 2 diabetes.',
  company: MEPHA_COMPANY,
  atc: {
    code: 'D11AC30',
    description:
      'ATC Code is assigned to a medication according to the organ it works on and its mode of action.',
  },
  indications: [
    {
      title: 'Mild and moderate hypertension',
      description: 'Mild and moderate hypertension',
      indicationRows: [
        {
          column: { label: 'prevalence', tooltip: 'prevalence_tooltip' },
          values: [
            { column: 'men', type: 'number', value: 24.1, align: 'right' },
            { column: 'women', type: 'number', value: 20.1, align: 'left', bg: 'dark' }
          ]
        },
        {
          column: { label: 'gender_distribution', tooltip: 'gender_distribution_tooltip' },
          values: [
            { column: 'men', type: 'number', value: 55, align: 'right' },
            { column: 'women', type: 'number', value: 45, align: 'left', bg: 'dark' }
          ]
        },
        {
          column: { label: 'clinical_study_participation', tooltip: 'clinical_study_participation_tooltip' },
          values: [
            { column: 'men', type: 'number', value: 41, align: 'right' },
            { column: 'women', type: 'number', value: 59, align: 'left', bg: 'dark', representationGap: -14 }
          ]
        },
        {
          column: { label: 'efficacy/accuracy', tooltip: 'efficacy/accuracy_tooltip' },
          values: [
            {
              column: 'men', type: 'text', content: `
                67.8% of patients reached target systolic blood pressure (SBP).
                81.1% reached target diastolic blood pressure (DBP).
                Mean reduction in blood pressure:
                SBP decreased by 21.8%
                DBP decreased by 21.1%
            `},
            {
              column: 'women', type: 'text', content: `
                67.8% of patients reached target systolic blood pressure (SBP).
                81.1% reached target diastolic blood pressure (DBP).
                Mean reduction in blood pressure:
                SBP decreased by 21.8%
                DBP decreased by 21.1%
            `},
          ]
        },
        {
          column: { label: 'posology', tooltip: 'posology_tooltip' },
          values: [
            {
              column: 'men', type: 'text', content: `
                The recommended starting dosage of losartan is 50 mg once per day. If this dosage isn't managing your blood pressure, they may recommend increasing your dosage to 100 mg once per day.
            `},
            {
              column: 'women', type: 'text', content: `
                The recommended starting dosage of losartan is 50 mg once per day. If this dosage isn't managing your blood pressure, they may recommend increasing your dosage to 100 mg once per day.
            `},
          ]
        },
        {
          column: { label: 'difference_in_possible_side_effects', tooltip: 'difference_in_possible_side_effects_tooltip' },
          values: [
            {
              column: 'men', type: 'text', content: `
                No known differences
            `},
            {
              column: 'women', type: 'text', content: `
                No known differences
            `},
          ]
        },
        {
          column: { label: 'possible_side_effects', tooltip: 'possible_side_effects_tooltip' },
          values: [
            {
              column: 'both', type: 'text', content: `
              Common Side Effects:
Dizziness: Reported in more than 1 in 100 people. To mitigate, rise slowly from sitting or lying positions. 
Headache: Often subsides after the first week. Adequate rest and hydration can help. 
Nausea or Vomiting: Taking the medication with food may alleviate these symptoms. 
Diarrhea: Maintaining hydration is essential if this occurs. 
Fatigue: Some patients report tiredness. 

Serious Side Effects:
Allergic Reactions: Symptoms include swelling of the face, lips, throat, or tongue, and difficulty breathing or swallowing. Immediate medical attention is crucial. 
High Potassium Levels (Hyperkalemia): May manifest as muscle weakness, slow or irregular heartbeat. Regular blood tests are recommended to monitor potassium levels.
Low Blood Pressure (Hypotension): Signs include dizziness, lightheadedness, or fainting. Patients should report these symptoms to their healthcare provider. 
Kidney Problems: Indicated by swelling in the feet, ankles, or hands, or unexplained weight gain. Monitoring kidney function during treatment is advisable.
            `}
          ]
        },


      ]
    }
  ]
};

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
          column: { label: 'prevalence', tooltip: 'prevalence_tooltip' },
          values: [
            { column: 'both', content: 'In Germany, an estimated 7.3 million women experience menopause-related symptoms that warrant medical attention. These symptoms can significantly impact both health and workplace performance, highlighting the urgent need for targeted healthcare interventions during this stage of life.' },
          ]
        },
        {
          column: { label: 'healthcare_gap_closure', tooltip: 'healthcare_gap_closure_tooltip' },
          values: [
            { column: 'both', content: 'On average, it takes three years for women experiencing menopause-related symptoms to receive appropriate medical care. The platform addresses this delay by encouraging employers to offer menopause care as part of their health benefits package, thereby raising awareness among employees. This can foster a broader understanding of menopause among both male and female employees, promoting timely recognition and care. Through comprehensive health data tracking, AI-driven personalized anamnesis, and individualized patient education, the platform supports earlier diagnosis and intervention, helping to reduce the healthcare gap in menopause care.' },
          ]
        },
        {
          column: { label: 'efficacy/accuracy', tooltip: 'efficacy/accuracy_tooltip' },
          values: [
            { column: 'both', content: 'In a self-reported survey, 92% of platform users noted significant improvements in their health and well-being after utilizing the services. These outcomes suggest the platform’s efficacy in addressing menopause-related health challenges, particularly in terms of symptom management and care accessibility.' },
          ]
        },
        {
          column: { label: 'accessibility', tooltip: 'accessibility_tooltip' },
          values: [
            { column: 'both', content: 'The platform provides users with access to a broad catalogue of menopause specialists, who can be booked directly through the platform. This ensures that women have a wide variety of treatment options and can even seek second opinions, promoting more personalized and well-rounded care. The platform is designed to be user-friendly, ensuring that women of all technological skill levels can easily navigate it.' },
          ]
        },
        {
          column: { label: 'affordability', tooltip: 'affordability_tooltip' },
          values: [
            { column: 'both', content: 'The platform offers flexible payment models, including employer-sponsored care options, making it accessible to a wide range of users. The educational courses provided are priced competitively, offering substantial value compared to market standards, while care and coaching services remain consistent with industry norms.' },
          ]
        },
        {
          column: { label: 'level_of_evidence', tooltip: 'level_of_evidence_tooltip' },
          values: [
            { column: 'both', content: `At present, the efficacy data is based on self-reported outcomes, with 92% of users expressing improvement in symptoms. Continued data collection and validation efforts are underway to strengthen the evidence base supporting the platform's effectiveness.` },
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
          column: { label: 'prevalence', tooltip: 'prevalence_tooltip' },
          values: [
            { column: 'men', type: 'text', content: '18%', align: 'right', bg: 'light', alignContent: 'center' },
            { column: 'women', type: 'text', content: '18%', align: 'left', bg: 'dark', alignContent: 'center' }
          ]
        },
        {
          column: { label: 'gender_distribution', tooltip: 'gender_distribution_tooltip' },
          values: [{ column: 'men', type: 'number', value: 51, align: 'right' }, { column: 'women', type: 'number', value: 49, align: 'left', bg: 'dark' }]
        },
        {
          column: { label: 'study_participation', tooltip: 'study_participation_tooltip' },
          values: [
            { column: 'men', type: 'number', value: 52, align: 'right' },
            { column: 'women', type: 'number', value: 48, align: 'left', bg: 'dark', representationGap: 1 }
          ]
        },
        {
          column: { label: 'training_data_distribution', tooltip: 'training_data_distribution_tooltip' },
          values: [
            { column: 'men', type: 'number', value: 54, align: 'right' },
            { column: 'women', type: 'number', value: 46, align: 'left', bg: 'dark', representationGap: 3 }
          ]
        },
        {
          column: { label: 'validation_data_distribution', tooltip: 'validation_data_distribution_tooltip' },
          values: [
            { column: 'men', type: 'number', value: 55, align: 'right' },
            { column: 'women', type: 'number', value: 45, align: 'left', bg: 'dark', representationGap: 4 }
          ]
        },
        {
          column: { label: 'accuracy', tooltip: 'accuracy_tooltip' },
          values: [{ column: 'men', type: 'number', value: 90, align: 'right' }, { column: 'women', type: 'number', value: 90, align: 'left', bg: 'dark' }]
        },
        {
          column: { label: 'study_representation', tooltip: 'study_representation_tooltip' },
          values: [
            { column: 'both', type: 'text', content: 'The study used as basis for development includes data for 2,250 patients, with a gender distribution of 54.6% male and 45.4% female. This indicates a balanced representation of genders. In the subset of patients who developed delirium, 52.3% were male and 47.7% were female. The gender distribution in the foundational research only has a minimal representation gap.', align: 'left' },
          ]
        },
        {
          column: { label: 'training_data_quality', tooltip: 'training_data_quality_tooltip' },
          values: [
            { column: 'both', type: 'text', content: 'Gender Representation: As noted above, the training data includes 54.6% male and 45.4% female participants, which is balanced compared to the prevalence in the population. - Origin and Quality of Training Data: The article details that the data were sourced from eight high-quality studies (randomized control trials and cohort studies) - Transparency in Data Preprocessing: The study describes the preprocessing steps, including the handling of missing data and standardization procedures. - Investigation and Documentation of Biases: The study used the Quality In Prognosis Studies (QUIPS) tool to evaluate the risk of bias in several domains, including study participation, attrition, exposure measurement, outcome measurement, and study confounding. This comprehensive bias assessment indicates thorough investigation and documentation of potential biases and their impacts.', align: 'left' },
          ]
        },
        {
          column: { label: 'validation_data_quality', tooltip: 'validation_data_quality_tooltip' },
          values: [
            { column: 'both', type: 'text', content: 'PIPRA was externally validated using two datasets from independent sources: Bern Dataset (Switzerland): Data were prospectively collected from patients undergoing surgery at a 70-bed Orthopaedic Surgery and Traumatology Department at the University Hospital of Bern. Patients were systematically assessed for postoperative delirium (POD) using the Delirium Observational Screening Scale (DOSS). This dataset provided robust, systematically collected data from a clinical environment, ensuring high external validity. LMU Dataset (Germany): A second dataset was collected from a study conducted at the Ludwig Maximilian University of Munich. Here, the 4AT Tool (and CAM-ICU for intubated patients) was used to assess POD in surgical patients. This data, although preliminary due to the ongoing nature of the study, contributes to a broader, real-world validation of PIPRA\'s predictive power. The external datasets were collected using validated, systematic methods for diagnosing POD, ensuring consistency and reliability in the outcomes. Handling of Missing Data: For the Bern dataset, missing variables such as ASA scores and CRP values were imputed based on predictor averages, minimizing data loss and maintaining model robustness without compromising the validity of the results. Diversity and Real-world Applicability: Both validation datasets were collected in diverse surgical settings, from orthopaedic to general surgery, enhancing the algorithm\'s applicability across various clinical environments. The systematic approach to collecting POD data and the high level of control over patient assessments ensures that the findings can be generalized to other settings where PIPRA might be used.', align: 'left' },
          ]
        },
        {
          column: { label: 'algorithm_adaptability', tooltip: 'algorithm_adaptability_tooltip' },
          values: [
            { column: 'both', type: 'text', content: 'The PIPRA algorithm explicitly excludes gender as an input variable because the development it was determined that it is not a significant factor in predicting postoperative delirium. While this decision is based on the algorithm\'s performance and the analysis conducted during its development, it indicates that gender-specific needs were assessed and found not to be a determining factor for this particular prediction task. This approach reflects a data-driven decision to focus on more impactful variables, even though it means gender-specific adaptability is not directly addressed in the model.', align: 'left' },
          ]
        },
        {
          column: { label: 'accuracy', tooltip: 'accuracy_tooltip' },
          values: [
            { column: 'both', type: 'text', content: 'The PIPRA algorithm explicitly excludes gender as an input variable because the development it was determined that it is not a significant factor in predicting postoperative delirium. Therefore, the accuracy is identical for men and women. The algorithm has a high sensitivity of 90% for high-risk patients (meaning it correctly identifies 90% of patients who will experience delirium). This high sensitivity indicates that the algorithm is effective at catching most cases of delirium and therefore has a low likelihood of missing patients at risk. For patients classified as low risk by the algorithm, there is an 86% to 95% probability that they will not experience delirium. This high probability suggests that the algorithm is reliable in identifying patients who are genuinely at low risk.', align: 'left' },
          ]
        },
        {
          column: { label: 'transparency', tooltip: 'transparency_tooltip' },
          values: [
            { column: 'both', type: 'text', content: 'The PIPRA provides details on the hyperparameters (logistic regression with an L1 penalty), the training dataset (data from eight studies), and the training process (10-fold cross-validation for predictor selection and internal validation).', align: 'left' },
          ]
        },
        {
          column: { label: 'accessibility', tooltip: 'accessibility_tooltip' },
          values: [
            { column: 'both', type: 'text', content: 'The PIPRA algorithm\'s user interface is designed for clinical use, providing meaningful output of absolute risk percentages and the importance of variables. The documentation enables the healthcare professional to use PIPRA.', align: 'left' },
          ]
        },
        {
          column: { label: 'affordability', tooltip: 'affordability_tooltip' },
          values: [
            { column: 'both', type: 'text', content: 'PIPRA is purchased by hospitals and practices and applied free of charge in the preoperative checkup of a patient.', align: 'left' },
          ]
        },
        {
          column: { label: 'possible_side_effects', tooltip: 'possible_side_effects_tooltip' },
          values: [
            { column: 'both', type: 'text', content: 'No known side effects.', align: 'left' },
          ]
        },
        {
          column: { label: 'regulatory_compliance', tooltip: 'regulatory_compliance_tooltip' },
          values: [
            { column: 'both', type: 'text', content: 'The PIPRA algorithm is certified as a Class IIa under MDR in Europe, indicating compliance with European medical device regulations. Ethical compliance is suggested through this certification and the study\'s adherence to international guidelines for delirium prevention', align: 'left' },
          ]
        },
        {
          column: { label: 'level_of_evidence', tooltip: 'level_of_evidence_tooltip' },
          values: [
            { column: 'both', type: 'text', content: 'Level of evidence for AI development The PIPRA algorithm\'s level of evidence can be assessed based on the systematic review included in its development and validation, as well as the thoroughness of the analysis methods. Study Quality and Data Sources: An Individual Patient Data (IPD) meta-analysis was performed using data from 21 studies involving 8,528 patients. These studies were rigorously selected and included a wide range of perioperative factors. Most included studies were cohort studies from diverse geographical regions, including Europe, Asia, North America, Australia, and South America, enhancing the generalizability of the findings . Level of evidence for AI validation The algorithm was validated using both internal and external datasets, with performance metrics such as the area under the receiver operating characteristic curve (AUC) reported. Internal validation showed an AUC of 0.80 (95% CI: 0.77-0.82), while external validation reported an AUC of 0.74 (95% CI: 0.68-0.80) . Multiple imputations were used to handle missing data, and the one-stage IPD meta-analysis approach was employed to account for clustering within studies and enhance the robustness of the findings. Results and Sensitivity Analysis: The probability of experiencing POD was calculated using a multilevel mixed-effects logistic regression model. The results were consistent across various sensitivity analyses, indicating the stability and reliability of the model.', align: 'left' },
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
          column: { label: 'prevalence', tooltip: 'prevalence_tooltip' },
          values: [
            { column: 'men', type: 'text', content: '0.00722%', align: 'right', bg: 'light', alignContent: 'center' },
            { column: 'women', type: 'text', content: '0.00405%', bg: 'dark', align: 'left', alignContent: 'center' }
          ]
        },
        {
          column: { label: 'gender_distribution', tooltip: 'gender_distribution_tooltip' },
          values: [{ column: 'men', type: 'number', value: 64, align: 'right' }, { column: 'women', type: 'number', value: 36, align: 'left', bg: 'dark' }]
        },
        {
          column: { label: 'study_participation', tooltip: 'study_participation_tooltip' },
          values: [
            { column: 'men', type: 'number', value: 57, align: 'right', representationGap: -7 },
            { column: 'women', type: 'number', value: 43, align: 'left', bg: 'dark' }
          ]
        },
        {
          column: { label: 'efficacy', tooltip: 'efficacy_tooltip' },
          values: [{ column: 'men', type: 'number', value: 19, align: 'right' }, { column: 'women', type: 'number', value: 22, align: 'left', bg: 'dark' }]
        },
        {
          column: { label: 'posology', tooltip: 'posology_tooltip' },
          values: [
            { column: 'men', type: 'text', content: 'The dosage of Camzyos (mavacamten) for hypertrophic cardiomyopathy is determined through a combination of clinical trial data, patient-specific factors, and ongoing PK/PD monitoring. Initial dosages typically start at 2.5 to 5 mg/day, with adjustments based on therapeutic response and safety assessments', align: 'left' },
            { column: 'women', type: 'text', content: 'The dosage of Camzyos (mavacamten) for hypertrophic cardiomyopathy is determined through a combination of clinical trial data, patient-specific factors, and ongoing PK/PD monitoring. Initial dosages typically start at 2.5 to 5 mg/day, with adjustments based on therapeutic response and safety assessments', align: 'left', bg: 'dark' }
          ]
        },
        {
          column: { label: 'difference_in_side_effects', tooltip: 'difference_in_side_effects_tooltip' },
          values: [
            { column: 'men', type: 'text', content: 'Not applicable', align: 'left' },
            { column: 'women', type: 'text', content: 'Not applicable', align: 'left', bg: 'dark' }
          ]
        },
        {
          column: { label: 'possible_side_effects', tooltip: 'possible_side_effects_tooltip' },
          values: [
            {
              column: 'both', type: 'text', content: `Common Side Effects:

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
Atrial Fibrillation – Reported as a possible side effect, particularly at higher doses 4.`, align: 'left'
            },
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
    'A novel, artificial intelligence-based, non-invasive tool for the diagnosis and exclusion of obstructive coronary artery disease and myocardial ischemia. ',
  company: Exploris_Health_AG_COMPANY,
  ingredients: [],
  indications: [
    {
      title: 'Obstructive Coronary Artery Disease (defined as anatomic stenosis of > 50%)',
      description: 'Coronary Artery Disease',
      indicationRows: [
        {
          column: { label: 'prevalence', tooltip: 'prevalence_tooltip' },
          values: [
            { column: 'men', type: 'text', content: '1.786% ', align: 'right', bg: 'light', alignContent: 'center' },
            { column: 'women', type: 'text', content: '1.522%', bg: 'dark', align: 'left', alignContent: 'center' }
          ]
        },
        {
          column: { label: 'gender_distribution', tooltip: 'gender_distribution_tooltip' },
          values: [
            { column: 'men', type: 'number', value: '54', align: 'right', bg: 'light', alignContent: 'center' },
            { column: 'women', type: 'number', value: '46', bg: 'dark', align: 'left', alignContent: 'center' }
          ]
        },
        {
          column: { label: 'initial_study_participation', tooltip: 'initial_study_participation_tooltip' },
          values: [
            { column: 'men', type: 'number', value: 66, align: 'right' },
            { column: 'women', type: 'number', value: 34, align: 'left', bg: 'dark', representationGap: -12 }
          ]
        },
        {
          column: { label: 'training_data_distribution', tooltip: 'training_data_distribution_tooltip' },
          values: [
            { column: 'men', type: 'number', value: 70, align: 'right' },
            { column: 'women', type: 'number', value: 30, align: 'left', bg: 'dark', representationGap: -16 }
          ]
        },
        {
          column: { label: 'validation_data_distribution', tooltip: 'validation_data_distribution_tooltip' },
          values: [
            { column: 'men', type: 'number', value: 58, align: 'right' },
            { column: 'women', type: 'number', value: 42, align: 'left', bg: 'dark', representationGap: -4 }
          ]
        },
        {
          column: { label: 'study_representation', tooltip: 'study_representation_tooltip' },
          values: [
            { column: 'both', type: 'text', content: 'The study population in the foundational research included in the development of the Cardio Explorer algorithm for diagnosing coronary artery disease (CAD) shows a balanced gender representation: 66% male, 34% female​, aligning with general population gender distribution of 54% male and 46% female with a representation gap of 12% for women. The representation gap is reduced to only 3.7% in the validation data distribution.', align: 'right' },
          ]
        },
        {
          column: { label: 'accuracy', tooltip: 'accuracy_tooltip' },
          values: [
            { column: 'men', type: 'text', content: 'Cardio Explorer® correctly identifies <b>obstructive CAD</b> (defined as anatomic stenosis of > 50%) in <b>88% of male cases</b>.', align: 'right' },
            { column: 'women', type: 'text', content: 'Cardio Explorer® correctly identifies <b>obstructive CAD</b> (defined as anatomic stenosis of > 50%) in <b>82% of female cases</b>.', align: 'left', bg: 'dark' }
          ]
        },
        {
          column: { label: 'training_data_quality', tooltip: 'training_data_quality_tooltip' },
          values: [
            {
              column: 'both', type: 'text', content: `
              <p>The initial algorithm derived from the <b>foundational research in Basel</b> was <b>further optimized</b> with data from the LURIC study.</p>
              <br/>
              <ul>
              <li><b>•The optimized algorithm was then</b> broadly validated in real-world in- and outpatient settings with a female representation gap of only 3.7%.</li>
              <li><b>•Origin and Quality:</b> Data was sourced from multiple high-quality clinical studies.</li>
              <li><b>•Data Preprocessing and Transformations:</b>The preprocessing steps, including handling of missing data and data transformations, are well documented. For example, missing values were replaced with median values or constants within normal ranges​.</li>
              <li>•<b>Bias Investigation and Documentation:</b> The studies utilized robust statistical methods and sensitivity analyses to ensure the stability and reliability of the models. The comprehensive analysis indicates a thorough investigation of biases.</li>
<ul>
            `}
          ]
        },
        {
          column: { label: 'algorithm_adaptability', tooltip: 'algorithm_adaptability_tooltip' },
          values: [
            {
              column: 'both', type: 'text', content: `
              <p><b>The Cardio Explorer algorithm requires only easily accessible patient data from a set of clinical and laboratory variables. </b></p>
              <p>Among these variables, sex (gender) is explicitly listed as one of the inputs.</p>
              <br/>
              <ul>
              <li>•<b>Clinical Variables:</b>Age, sex, weight, height, presence and type of chest pain, diabetes, nicotine use, pathological Q-waves (at ECG), systolic and diastolic blood pressure, and relevant medication like statin use.</li>
              <li>•<b>Laboratory Variables:</b>Mean corpuscular hemoglobin concentration (MCHC), white blood cells, urea, uric acid, troponin, glucose, total cholesterol, low-density lipoprotein cholesterol, high-density lipoprotein cholesterol, alanine aminotransferase (ALAT), alkaline phosphatase, amylase, total protein, albumin, and bilirubin.</li>
              <ul>
            `}
          ]
        },
        {
          column: { label: 'accuracy', tooltip: 'accuracyy_tooltip' },
          values: [
            {
              column: 'both', type: 'text', content: `
              <p>The diagnostic accuracy of the tool is evaluated using the Area Under the Curve (AUC) from receiver operating characteristic (ROC) analysis. The AUC value ranges from 0.5, which reflects random chance, to 1.0, representing perfect diagnostic accuracy.</p>

<p>In clinical use, the Cardio Explorer algorithm <b>demonstrates robust and strong diagnostic performance</b> in predicting the presence of obstructive CAD:</p>
<br/>
<ul>
    <li><b>In high-prevalence CAD settings (inpatient setting):</b> The AUC is 0.87, indicating the model accurately identifies obstructive CAD in 87% of cases. This level of accuracy is considered high and clinically significant.</li>
    <li><b>In low-prevalence CAD settings (outpatient setting):</b> The AUC remains 0.87 overall, reflecting a strong and robust diagnostic performance also in lower prevalence settings.</li>
</ul>
<p>These results underscore the tool’s consistent diagnostic accuracy across different clinical settings and patient populations. </p>
<p>Additionally, Cardio Explorer® has been validated for its ability to detect <b>myocardial ischemia</b>, as measured by PET imaging, with an AUC of 0.76. Interestingly, its performance is even better in female patients (AUC 0.77).</p>
<p>The slightly lower AUC in ischemia detection is attributable to the fact that the algorithm was specifically trained and validated to identify the <b>anatomical presence of coronary artery disease (CAD)</b> defined as >50% stenosis via invasive coronary angiography, rather than ischemia itself.</p>
            `}
          ]
        },
        {
          column: { label: 'validation_data_quality', tooltip: 'validation_data_quality_tooltip' },
          values: [
            {
              column: 'both', type: 'text', content: `
              <p>The algorithm was validated in four independent cohorts: Validation sample from the LURIC cohort (494 patients, with 33% female), a simulated low-prevalence population (30’303 patients, with 43% female), an independent outpatient cohort (696 patients, with 51% female) and a validation cohort for myocardial ischemia (2417 patients, 32% female). Overall, the validation data distribution consists of 42.3% female and thus, closely reflecting the general population's gender distribution. </p>
<br/>
              <ul>
                  <li><b>•Origin and Quality:</b> Both validation datasets were sourced from high-quality studies in outpatient and diagnostic settings, enhancing the reliability of the algorithm’s validation results.</li>
                  <li><b>•Bias Investigation:</b> The validation was conducted with thorough statistical analyses, ensuring the algorithm's performance remained unbiased across gender and risk categories.</li>
              </ul>

              `}
          ]
        },
        {
          column: { label: 'transparency', tooltip: 'transparency_tooltip' },
          values: [
            { column: 'both', type: 'text', content: 'The publicly available papers provide details on the training process in detail, including the use of ensemble methods and evolutionary learning optimization. (www.explorishealth.com)' }
          ]
        },
        {
          column: { label: 'accessibility', tooltip: 'accessibility_tooltip' },
          values: [
            { column: 'both', type: 'text', content: 'The Cardio Explorer provides extensive material that explains the functionality of the tests for patients. ' }
          ]
        },
        {
          column: { label: 'affordability', tooltip: 'affordability_tooltip' },
          values: [
            { column: 'both', type: 'text', content: 'The Cardio Explorer is a cost-effective alternative to more expensive imaging procedures like Stress-ECG, CCTA (Coronary Computed Tomography Angiography), and MRI (Magnetic Resonance Imaging). Unlike these traditional methods, the Cardio Explorer offers a non-invasive option that carries no side effects, making it a safer and more accessible choice for patients. Its affordability and safety could make it particularly beneficial in routine screenings, improving cardiology by identifying the relevant patients earlier and avoiding unnecessary referrals of patients without treatable stenosis and therefore saving significantly healthcare spendings.' }
          ]
        },
        {
          column: { label: 'possible_side_effects', tooltip: 'possible_side_effects_tooltip' },
          values: [
            { column: 'both', type: 'text', content: 'No known side effects.' }
          ]
        },
        {
          column: { label: 'regulatory_compliance', tooltip: 'regulatory_compliance_tooltip' },
          values: [
            { column: 'both', type: 'text', content: 'Approved medical device in the EU.' }
          ]
        },
        {
          column: { label: 'level_of_evidence', tooltip: 'level_of_evidence_tooltip' },
          values: [
            {
              column: 'both', type: 'text', content: `
              <b>Level of evidence for AI development:</b> The Cardio Explorer algorithm's level of evidence can be assessed based on the systematic review included in its development and validation, as well as the thoroughness of the analysis methods. The model was originally developed with data from Basel (Zellweger et al. 2014) and then further optimized with data from the German LURIC Study (Zellweger et al. 2018).
              <br/>
              <b>Level of evidence for AI validation:</b> The algorithm was validated using external dataset, with performance metrics such as the area under the receiver operating characteristic curve (AUC) reported. 
              <br/>
              <b>Results and Sensitivity Analysis:</b> The results of the algorithm prediction were compared to established diagnostic procedures. The tool remains a highly valuable, evidence-based, non-invasive method for diagnosis and exclusion of obstructive coronary artery disease and myocardial ischemia.
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
          column: { label: 'gender_distribution', tooltip: 'gender_distribution_tooltip' },
          values: [
            { column: 'men', type: 'number', value: 49, align: 'right' },
            { column: 'women', type: 'number', value: 51, align: 'left', bg: 'dark' }
          ]
        },
        {
          column: { label: 'study_participation', tooltip: 'study_participation_tooltip' },
          values: [
            { column: 'men', type: 'number', value: 49, align: 'right' },
            { column: 'women', type: 'number', value: 51, align: 'left', bg: 'dark' }
          ]
        },
        {
          column: { label: 'efficacy', tooltip: 'efficacy_tooltip' },
          values: [
            { column: 'men', type: 'text', content: 'Not Applicable', align: 'left' },
            { column: 'women', type: 'text', content: 'Not Applicable', align: 'left', bg: 'dark' }
          ]
        },
        {
          column: { label: 'functionality', tooltip: 'functionality_tooltip' },
          values: [
            { column: 'both', type: 'text', content: `medicstream allows to share curated digital medical content from health practitioners to patient on three layers. The highest layer of a library would allow to create gender-specific libraries per medical field or a library with gender medicine as own topic. Within a library the content is structured by indication, also offering the possibility to create gender-specific indications. Indications also can be structured into chapters also with the possibility to have gender-specific content within.`, align: 'left' }
          ]
        },
        {
          column: { label: 'personalization', tooltip: 'personalization_tooltip' },
          values: [
            { column: 'both', type: 'text', content: `medicstream’s core value is the enablement of personalized health content curated by healthcare professionals for the patient. Therefore, the possibilities of personalization are given to a maximum degree.`, align: 'left' }
          ]
        },
        {
          column: { label: 'accessibility', tooltip: 'accessibility_tooltip' },
          values: [
            { column: 'both', type: 'text', content: `To be able to benefit from medicstream the patient needs an internet connected device and an email address. medicstream is free of charge for patients. The patient individual content is accessible at any time. These are the lowest possible prerequisites for digital interventions. Therefore the accessibility is high for men and women. The most relevant barrier to accessibility is the dependency on the healthcare professional to provide the individualizes content to the patient. `, align: 'left' }
          ]
        },
        {
          column: { label: 'affordability', tooltip: 'affordability_tooltip' },
          values: [
            { column: 'both', type: 'text', content: `medicstream is a cost-effective platform that is free of charge for the patient.`, align: 'left' }
          ]
        },
        {
          column: { label: 'possible_side_effects', tooltip: 'possible_side_effects_tooltip' },
          values: [
            { column: 'both', type: 'text', content: `No known side effects.`, align: 'left' }
          ]
        },
        {
          column: { label: 'regulatory_compliance', tooltip: 'regulatory_compliance_tooltip' },
          values: [
            { column: 'both', type: 'text', content: `medicstream is GDPR conform. The personalize access to the patient individual content allows privacy for the patient. Ethics and privacy are given equally for men and women.`, align: 'left' }
          ]
        },
        {
          column: { label: 'scientific_evidence', tooltip: 'scientific_evidence_tooltip' },
          values: [
            { column: 'both', type: 'text', content: `Patient individual content provision has positive impact on health competence, psychosocial health outcomes and compliance.`, align: 'left' }
          ]
        },
      ]
    }
  ]
};

export const COMPANIES = [MEDICSTREAM_COMPANY, Exploris_Health_AG_COMPANY, PIPRA_COMPANY, HERMAID_COMPANY, ROOT_HEALTH_COMPANY, MEPHA_COMPANY];

export const CERTIFICATES = [
  { ...HERMAID_CERTIFICATE, type: CERTIFICATION_TYPES.femTech },
  // { ...Atorvastatin_CERT, type: CERTIFICATION_TYPES.medication },
  { ...CAMZYOS_CERT, type: CERTIFICATION_TYPES.medication },
  { ...MEDICSTREAM_CERT, type: CERTIFICATION_TYPES.diagnosticTreatment },
  { ...CardioExplorerCert, type: CERTIFICATION_TYPES.aiSupportedDiagnosticTreatment },
  { ...PIPRA_CERT, type: CERTIFICATION_TYPES.aiSupportedDiagnosticTreatment },
  { ...HELLO_INSIDE_CERT, type: CERTIFICATION_TYPES.digitalPrevention },
  { ...LOSARTAN_CERT, type: CERTIFICATION_TYPES.medication }
];

export const ICON_MAPPING = {
  [CERTIFICATION_TYPES.medication]: '/icons/ic-medication.svg',
  [CERTIFICATION_TYPES.diagnosticTreatment]: '/icons/ic-treatment.svg',
  [CERTIFICATION_TYPES.digitalDiagnosticTreatment]: '/icons/ic-treatment.svg',
  [CERTIFICATION_TYPES.digitalPrevention]: '/icons/ic-treatment.svg',
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
  [CERTIFICATION_TYPES.digitalPrevention]:
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
  [CERTIFICATION_TYPES.digitalPrevention]: '/icons/badge-digital-diagnostic-treatment.svg',
};
