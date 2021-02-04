'use strict';

module.exports.condition = async event => {
  return {
    statusCode: 200,
	headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(
      {
  "conditions": [
    {
      "label": "Acanthosis nigricans",
      "synonyms": ["Acquired acanthosis nigricans", "Keratosis nigricans"]
    },
    {
      "snippet": "Addison’s disease (also known as primary adrenal insufficiency or hypoadrenalism) is a rare disorder of the adrenal glands.",
      "label": "Addison's disease",
      "synonyms": [
        "Addison disease",
        "Primary adrenocortical insufficiency",
        "Primary hypoadrenalism",
        "Adison's disease",
        "hypocorticism",
        "adrenal cortex dysplasia",
        "Bronzed disease",
        "adrenal cortex dysfunction",
        "adrenal cortex insufficiency",
        "Melasma addisonii",
        "Adrenal storm",
        "Primary adrenal deficiency",
        "Suppression adrenal",
        "Adrenal Suppresion",
        "adrenal insufficiency"
      ],
      "keywords": [
        "addisons disease",
        "hypoadrenalism",
        "primary adrenal insufficiency"
      ]
    },
    {
      "snippet": "Alzheimer's disease is the most common cause of dementia. Dementia is a group of symptoms associated with a decline in the way your brain functions, affecting your memory and the way you behave.",
      "label": "Alzheimer's disease",
      "synonyms": ["AD", "Alzheimer disease", "Alzheimers disease"],
      "keywords": ["Alzheimer's disease", "dementia"],
      "image": "https://assets.your.md/conditions/alzheimers-disease/card/alzheimers-disease-male-card.jpg"
    },
    {
      "label": "Sickle cell anaemia",
      "synonyms": ["Sickle", "sickle cell"]
    },
    {
      "snippet": "Anorexia nervosa is an eating disorder and mental health condition that can be life-threatening.",
      "label": "Anorexia nervosa",
      "synonyms": ["appetite impaired", "appetite absent"],
      "keywords": ["Anorexia nervosa", "eating disorder", "anorexic"],
      "image": "https://s3-us-west-2.amazonaws.com/staging.gutenberg-output/article_images/anorexia-nervosa-female.jpg"
    },
    {
      "snippet": "Appendicitis is a swollen appendix that gives severe increasing tummy pain. Treatment is urgent surgery",
      "label": "Appendicitis",
      "synonyms": ["Inflammed appendix"],
      "keywords": ["appendicitis", "appendectomy"],
      "image": "https://assets.your.md/conditions/appendicitis/card/appendicitis-male-card.jpg"
    },
    {
      "snippet": "Arthritis is a common condition that causes pain and inflammation within a joint.",
      "label": "Arthritis",
      "synonyms": [
        "Joint inflammation",
        "Inflammatory arthritis",
        "Arthritus",
        "Arthiritis",
        "arthritides"
      ],
      "keywords": [
        "arthritis",
        "arthritis and children",
        "osteoarthritis",
        "rheumatoid arthritis"
      ]
    },
    {
      "snippet": "Psoriasis can cause a painful and damaging inflammation of joints over time, which needs rheumatological treatment.",
      "label": "Psoriasis with arthropathy",
      "synonyms": ["Psoriatic arthropathy"],
      "keywords": ["psoriatic arthritis", "psoriatic arthropathy"],
      "image": "https://assets.your.md/conditions/psoriatic-arthritis/card/psoriatic-arthritis-female-card.jpg"
    },
    {
      "snippet": "Asthma is a long-term lung condition which currently has no cure however treatments are available to control symptoms",
      "label": "Asthma",
      "synonyms": [
        "Airway hyperreactivity",
        "Asthmatic",
        "Bronchial hyperreactivity",
        "Bronchial asthma",
        "Hyperreactive airway disease",
        "BHR",
        "Bronchial hyperresponsiveness",
        "Bronchial hypersensitivity",
        "Athsma",
        "asthmatics",
        "asma"
      ],
      "keywords": ["asthma", "asthma attack"],
      "image": "https://assets.your.md/conditions/asthma/card/asthma-male-card.jpg"
    },
    {
      "snippet": "Blepharitis is a condition where the rims of the eyelids become inflamed (red and swollen).",
      "label": "Blepharitis",
      "synonyms": [
        "Eyelid inflammation",
        "Inflammation of lid margin",
        "Inflammation of eyelid",
        "Stie",
        "Chalazion"
      ],
      "keywords": ["blepharitis", "inflammation of eyelids"],
      "image": "https://assets.your.md/conditions/blepharitis/card/blepharitis-male-card.jpg"
    },
    {
      "snippet": "Find everything you need to know about Bone Cancer (Sarcoma) including causes, symptoms, diagnosis and treatment, with links to other useful resources.",
      "label": "Bone tumour",
      "synonyms": ["Neoplasm of bone"],
      "keywords": [
        "bone cancer",
        "Osteosarcoma",
        "Ewing's sarcoma",
        "Chondrosarcoma",
        "Spindle cell sarcoma"
      ],
      "image": "https://assets.your.md/conditions/cancer-of-the-bone/card/cancer-of-the-bone-male-card.jpg"
    },
    {
      "snippet": "Botulism is a rare but potentially fatal infection caused by toxins produced by bacteria called Clostridium botulinum.",
      "label": "Botulism",
      "synonyms": [
        "Lame sickness",
        "Infection due to Clostridium botulinum",
        "Intoxication with Clostridium botulinum toxin"
      ],
      "keywords": ["botulism", "Clostridium botulinum", "botulinum toxin"]
    },
    {
      "snippet": "Bronchiectasis is a long-term condition where the airways of the lungs become abnormally widened, leading to a build-up of excess mucus.",
      "label": "Bronchiectasis",
      "synonyms": ["bronchiectasia"],
      "keywords": ["bronchiectasis"],
      "image": "https://assets.your.md/conditions/bronchiectasis/card/bronchiectasis-male-card.jpg"
    },
    {
      "snippet": "Brucellosis is a bacterial infection caught from animals, which can cause long-lasting flu-like symptoms and needs to be treated with antibiotics.",
      "label": "Brucellosis",
      "synonyms": [
        "Malta fever",
        "Mediterranean fever",
        "Undulant fever",
        "Cyprus fever",
        "Rock fever",
        "Gibraltar fever",
        "Bang''s disease",
        "Brucelloses"
      ],
      "keywords": ["brucellosis"],
      "image": "https://assets.your.md/conditions/brucellosis/card/brucellosis-female-card.jpg"
    },
    {
      "snippet": "Sore, white patches in the mouth can be caused by oral thrush and can be caused by some medications, or hygiene issues",
      "label": "Candidiasis",
      "synonyms": [
        "Infection by Candida species",
        "Moniliasis",
        "Candidosis",
        "Monilia infection",
        "Candida infection",
        "Thrush",
        "Candidiasis of mouth",
        "Mycotic stomatitis",
        "Oral candidiasis",
        "Candida of mouth",
        "Oral thrush",
        "Oral moniliasis",
        "Oral candidosis",
        "Candidosis of mouth",
        "Candida infection of mouth",
        "Moniliasis of mouth",
        "Esophageal candidiasis",
        "Frush"
      ],
      "keywords": ["oral thrush ", "thrush in adults", "fungal infection"],
      "image": "https://assets.your.md/conditions/oral-thrush-adults/card/oral-thrush-adults-male-card.jpg"
    },
    {
      "snippet": "Chickenpox is a mild and common childhood illness that most children catch at some point.",
      "label": "Varicella",
      "synonyms": [
        "Varicella infection",
        "Chicken pox",
        "Chicken poxs",
        "Chicken pocks",
        "Chicken pocs"
      ],
      "keywords": ["chickenpox", "varicella-zoster virus ", "varicella"],
      "image": "https://assets.your.md/conditions/chickenpox/card/chickenpox-male-card.jpg"
    },
    {
      "snippet": "Chilblains are small, itchy swellings on the skin that occur as a reaction to cold temperatures. They affect the body's extremities, such as the toes.",
      "label": "Chilblains",
      "synonyms": ["Chilblain", "Perniosis", "Erythema pernio", "Pernio"],
      "keywords": ["chilblains"],
      "image": "https://assets.your.md/conditions/chilblains/card/chilblains-female-card.jpg"
    },
    {
      "snippet": "Iron deficiency anaemia occurs when the body does not have enough iron. The main symptoms are tiredness and lethargy (lack of energy).",
      "label": "Iron deficiency anaemia",
      "synonyms": [
        "Asiderotic anemia",
        "Chlorotic anemia",
        "Sideropenic anemia",
        "IDA",
        "Iron deficiency anemia",
        "Iron deficiency anemia syndrome",
        "Asiderotic anaemia",
        "Sideropenic anaemia",
        "Iron deficiency anaemia syndrome",
        "Chlorotic anaemia",
        "chlorosis"
      ],
      "keywords": ["iron deficiency anaemia", "Anaemia "],
      "image": "https://assets.your.md/conditions/anaemia-iron-deficiency/card/anaemia-iron-deficiency-female-card.jpg"
    },
    {
      "snippet": "The cholera vaccination is not recommended for all travellers, but is needed for some higher risk groups.",
      "label": "Cholera",
      "synonyms": ["Vibrio cholerae infection"],
      "keywords": ["cholera"],
      "image": "https://assets.your.md/conditions/cholera/card/cholera-female-card.jpg"
    },
    {
      "snippet": "Claustrophobia is the irrational fear of confined spaces. It affects about 10% of the UK population.",
      "label": "Claustrophobia",
      "synonyms": ["Fear of confined spaces", "Fear of enclosed spaces"],
      "keywords": ["claustrophobia", "fear of confined spaces"],
      "image": "https://assets.your.md/conditions/claustrophobia/card/claustrophobia-male-card.jpg"
    },
    {
      "snippet": "Find everything you need to know about ulcerative colitis including causes, symptoms, diagnosis and treatment, with links to other useful resources.",
      "label": "Ulcerative colitis",
      "synonyms": [
        "Colitis gravis",
        "UC",
        "Idiopathic proctocolitis",
        "Ulcerative colitus",
        "Ulcerative collitis"
      ],
      "keywords": ["ulcerative colitis", "UC", "inflammatory bowel disease"],
      "image": "https://assets.your.md/conditions/ulcerative-colitis/card/ulcerative-colitis-male-card.jpg"
    },
    {
      "snippet": "Croup is a childhood condition that affects the windpipe (trachea), the airways to the lungs (the bronchi) and the voice box (larynx).",
      "label": "Croup",
      "synonyms": ["Croup syndrome"],
      "keywords": ["croup", "barking cough"],
      "image": "https://assets.your.md/conditions/croup/card/croup-male-card.jpg"
    },
    {
      "snippet": "Find everything you need to know about Cystic Fibrosis including causes, symptoms, diagnosis and treatment, with links to other useful resources.",
      "label": "Cystic fibrosis",
      "synonyms": [
        "CF",
        "Fibrocystic disease",
        "Mucoviscidosis",
        "Cistic fibrosis",
        "Systic fibrosis"
      ],
      "keywords": ["Cystic fibrosis", "CF", "lung disease", "sweat test"],
      "image": "https://assets.your.md/conditions/cystic-fibrosis/card/cystic-fibrosis-female-card.jpg"
    },
    {
      "snippet": "Find everything you need to know about Dengue including causes, symptoms, diagnosis and treatment, with links to other useful resources.",
      "label": "Dengue",
      "synonyms": ["Dengue fever", "Breakbone fever"],
      "keywords": ["Dengue", "Fever"],
      "image": "https://assets.your.md/conditions/dengue/card/dengue-female-card.jpg"
    },
    {
      "snippet": "Clinical depression causes feelings of unhappiness, hopelessness and lack of interest in things you used to enjoy.",
      "label": "Mood disorder of depressed type",
      "synonyms": [
        "Mood disorder with depressive feature",
        "Depressive disorder",
        "Depression",
        "Depressive episode",
        "Depressive illness",
        "Depressed",
        "Depressed mood",
        "Dysthymia",
        "Depressive neurosis",
        "Neurasthenic neurosis",
        "Neurasthenia",
        "Neurotic depression",
        "Nervous breakdown",
        "Neurasthaenic neurosis",
        "Neurasthaenia",
        "Nervous debility",
        "Depreshun",
        "Not happy",
        "Depresion",
        "depressions",
        "morose",
        "miserable"
      ],
      "keywords": ["depression", "low mood"],
      "image": "https://assets.your.md/conditions/depression/card/depression-male-card.jpg"
    },
    {
      "snippet": "Atopic eczema, also known as atopic dermatitis, is the most common form of eczema. It mainly affects children, but can continue into adulthood.",
      "label": "Atopic neurodermatitis",
      "synonyms": [
        "Atopic dermatitis",
        "Atopic eczema",
        "Allergic eczema",
        "Allergic dermatitis",
        "Disseminated neurodermatitis",
        "Keratosis polaris"
      ],
      "keywords": [
        "atopic eczema",
        "atopic dermatitis",
        "itchy skin",
        "dry skin",
        "allergy"
      ],
      "image": "https://assets.your.md/conditions/eczema-atopic/card/eczema-atopic-female-card.jpg"
    },
    {
      "snippet": "Dyspraxia, a type of developmental co-ordination disorder (DCD), is a disability that affects movement and co-ordination.",
      "label": "Developmental coordination disorder",
      "synonyms": ["Developmental dyspraxia"],
      "keywords": [
        "childhood dyspraxia",
        "developmental coordination disorder",
        "DCD"
      ],
      "image": "https://s3-us-west-2.amazonaws.com/staging.gutenberg-output/article_images/dyspraxia-female.jpg"
    },
    {
      "snippet": "Di George syndrome is a severe genetic disorder that is noticeable at birth. At the very worst, it can result in heart defects, learning difficulties, a cleft palate and potentially many other problems.",
      "label": "DiGeorge sequence",
      "synonyms": [
        "Branchial arch syndrome",
        "DiGeorge anomaly",
        "Agenesis of the parathyroid AND thymus glands",
        "Third AND fourth pharyngeal pouch syndrome",
        "Thymic hypoplasia syndrome",
        "Pharyngeal pouch syndrome",
        "Thymic-parathyroid aplasia",
        "DiGeorge syndrome",
        "Third AND fourth pharyngeal arch syndrome"
      ],
      "keywords": ["digeorge syndrome", "congenital", "deletion"]
    },
    {
      "snippet": "Find everything you need to know about diverticular disease and diverticulitis including causes, symptoms, diagnosis and treatment, with links to other useful resources.",
      "label": "Diverticulitis",
      "synonyms": ["diverticulitus"],
      "keywords": [
        "diverticular disease",
        "diverticulitis",
        "diverticulosis",
        "abdominal pain"
      ],
      "image": "https://assets.your.md/conditions/diverticular-disease-and-diverticulitis/card/diverticular-disease-and-diverticulitis-female-card.jpg"
    },
    {
      "snippet": "An air embolism is an air bubble trapped in a blood vessel. An air embolism usually happens when a scuba diver surfaces too quickly.",
      "label": "Air embolism",
      "synonyms": ["Air embolus", "Air embolism"],
      "keywords": [
        "air embolism",
        "Pulmonary barotrauma",
        "Decompression sickness"
      ],
      "image": "https://assets.your.md/conditions/air-embolism/card/air-embolism-female-card.jpg"
    },
    {
      "snippet": "Fibromyalgia, also called fibromyalgia syndrome, is a long-term condition which causes pain all over the body.",
      "label": "Muscular rheumatism",
      "synonyms": [
        "Fibromyositis",
        "MPDS",
        "Myofacial pain dysfunction syndrome",
        "Myofascial pain syndrome",
        "Fibromyalgia",
        "Diffuse myofascial pain syndrome",
        "Fibrositis",
        "Fybromyalgia",
        "Fibromyalga",
        "Fibromyalgia Syndrome"
      ],
      "keywords": ["fibromyalgia", "body pain"]
    },
    {
      "snippet": "Bird flu, or avian flu, is an infectious viral illness that spreads among birds. In rare cases, it can affect humans.",
      "label": "Avian influenza",
      "synonyms": ["Avian flu", "Bird flu", "Fowl plague"],
      "keywords": ["avian flu", "bird flu"],
      "image": "https://assets.your.md/conditions/avian-flu/card/avian-flu-female-card.jpg"
    },
    {
      "snippet": "Giardiasis (gee-ar-dye-a-sis) is an infection of the digestive system caused by tiny parasites called Giardia intestinalis.",
      "label": "Infection by Giardia lamblia",
      "synonyms": [
        "Lambliasis",
        "Giardial colitis",
        "Giardial enteritis",
        "Giardiasis",
        "Giardiosis",
        "Giardiases",
        "Lambliases",
        "lamblia"
      ],
      "keywords": ["giardiasis"],
      "image": "https://assets.your.md/conditions/giardiasis/card/giardiasis-female-card.jpg"
    },
    {
      "snippet": "Read NHS information about Gilbert’s syndrome, which is a common and harmless condition where people experience occasional episodes of jaundice (yellowing of the skin and whites of the eyes).",
      "label": "Gilbert's syndrome",
      "synonyms": [
        "Gilberts syndrome",
        "Gilbert-Lereboullet syndrome",
        "Familial nonhemolytic bilirubinemia",
        "Chronic intermittent juvenile jaundice",
        "Constitutional hepatic dysfunction",
        "Cholemia familiaris simplex",
        "Familial nonhemolytic jaundice",
        "Gilbert's disease",
        "Hereditary nonhemolytic jaundice",
        "Benign unconjugated bilirubinemia syndrome",
        "Meulengracht syndrome",
        "Low-grade chronic hyperbilirubinemia syndrome",
        "Congenital familial cholemia",
        "Benign unconjugated bilirubinaemia syndrome",
        "Congenital familial cholaemia",
        "Cholaemia familiaris simplex",
        "Gilbert syndrome",
        "Familial nonhaemolytic bilirubinaemia",
        "Hereditary nonhaemolytic jaundice",
        "Familial nonhaemolytic jaundice",
        "Low-grade chronic hyperbilirubinaemia syndrome"
      ],
      "keywords": ["gilberts syndrome", "jaundice"],
      "image": "https://assets.your.md/conditions/gilbertssyndrome/card/gilbertssyndrome-female-card.jpg"
    },
    {
      "snippet": "Gum disease, also known as gingivitis, is where the gums become swollen, sore or infected.",
      "label": "Gingival disease",
      "synonyms": ["Gingival disorder", "Gum disease"],
      "keywords": ["Gum disease", "bleeding gums", "painful gums"]
    },
    {
      "snippet": "Find everything you need to know about Gout including causes, symptoms, diagnosis and treatment, with links to other useful resources.",
      "label": "Gout",
      "synonyms": ["urarthritis"],
      "keywords": ["gout", "painful toe"],
      "image": "https://assets.your.md/conditions/gout/card/gout-female-card.jpg"
    },
    {
      "snippet": "A bunion is a bony deformity of the joint at the base of the big toe.",
      "label": "Hallux valgus",
      "synonyms": ["Hallux abductovalgus"],
      "keywords": ["bunion", "hallux valgus"],
      "image": "https://assets.your.md/conditions/bunion/card/bunion-female-card.jpg"
    },
    {
      "snippet": "Hand, foot and mouth disease (HFMD) is a viral infection that can affect young children.",
      "label": "Enteroviral vesicular stomatitis with exanthem",
      "synonyms": [
        "Hand, foot and mouth disease",
        "Hand foot and mouth disease",
        "Vesicular stomatitis with xanthem"
      ],
      "keywords": ["hand foot and mouth disease", "HFMD"]
    },
    {
      "snippet": "A heart block is when the electrical pulses that control the beating of the heart are disrupted. Usually, only serious types of heart block cause symptoms.",
      "label": "Heart block",
      "synonyms": ["HB"],
      "keywords": ["heart block", "arrhythmia"],
      "image": "https://assets.your.md/conditions/heart-block/card/heart-block-female-card.jpg"
    },
    {
      "snippet": "Heat exhaustion and heatstroke are two heat-related health conditions. If they are not quickly treated, they can both be very serious.",
      "label": "Heat exhaustion",
      "synonyms": ["Heat prostration"],
      "keywords": ["heat exhaution", "heat stroke"],
      "image": "https://assets.your.md/conditions/heat-exhaustion-and-heatstroke/card/heat-exhaustion-and-heatstroke-male-card.jpg"
    },
    {
      "snippet": "Find everything you need to know about Haemochromatosis including causes, symptoms, diagnosis and treatment, with links to other useful resources.",
      "label": "Bronze diabetes",
      "synonyms": [
        "Bronzed diabetes",
        "Haemochromatosis",
        "Iron storage disease",
        "hemachromatosis",
        "hematochromatosis"
      ],
      "keywords": ["haemochromatosis", "high iron levels"],
      "image": "https://assets.your.md/conditions/haemochromatosis/card/haemochromatosis-male-card.jpg"
    },
    {
      "snippet": "Hepatitis is a term used to describe inflammation of the liver. It can occur as a result of a viral infection or because the liver is exposed to harmful substances such as alcohol.",
      "label": "Inflammatory disease of liver",
      "synonyms": [
        "Inflammatory disorder of liver",
        "Hepatitis",
        "Inflammatory liver disease",
        "Hepititus"
      ],
      "keywords": ["hepatitis", "hep"],
      "image": "https://s3-us-west-2.amazonaws.com/staging.gutenberg-drupal-files/article_images/liver_disease_alcoholic-male.jpg"
    },
    {
      "snippet": "A stye, also known as a hordeolum, is a small abscess (painful collection of pus) on the eyelid. It appears as a painful lump on the outside or inside of the eyelid.",
      "label": "External hordeolum",
      "synonyms": [
        "Stye",
        "Boil of eyelid",
        "Sty",
        "Furuncle of eyelid",
        "Hordeolum, external",
        "Hordeolum externum",
        "Hordeolum",
        "styes",
        "sties"
      ],
      "keywords": ["stye", "eye lump", "eyelid lump"],
      "image": "https://assets.your.md/conditions/stye/card/stye-male-card.jpg"
    },
    {
      "snippet": "Find everything you need to know about high blood pressure (hypertension), including causes, symptoms, diagnosis and treatment, with links to other useful resources.",
      "label": "Hypertensive disorder",
      "synonyms": [
        "HTN",
        "Hypertension",
        "Hypertensive disorder, systemic arterial",
        "BP - High blood pressure",
        "Systemic arterial hypertension",
        "HBP",
        "High blood pressure",
        "HT",
        "High blood pressure disorder",
        "BP+ - Hypertension",
        "Hypertensive vascular disease",
        "Hypertensive vascular degeneration",
        "Hypertenshun",
        "Blood presure",
        "High blood presure",
        "Hypertenssion"
      ],
      "keywords": ["high blood pressure", "hypertension "],
      "image": "https://assets.your.md/conditions/blood-pressure-high/card/blood-pressure-high-female-card.jpg"
    },
    {
      "snippet": "Pulmonary hypertension is raised blood pressure within the pulmonary arteries, which are the blood vessels that supply the lungs.",
      "label": "Pulmonary hypertension",
      "synonyms": ["PHT"],
      "keywords": ["pulmonary hyertension"],
      "image": "https://assets.your.md/conditions/pulmonary-hypertension/card/pulmonary-hypertension-male-card.jpg"
    },
    {
      "snippet": "An overactive thyroid produces too many thyroid hormones. Symptoms include anxiety, tiredness and weight loss.",
      "label": "Hyperthyroidism",
      "synonyms": ["Thyroid over active"],
      "keywords": ["overactive thyroid", "hyperthyroidism", "thyroid disease"],
      "image": "https://assets.your.md/conditions/thyroid-over-active/card/thyroid-over-active-female-card.jpg"
    },
    {
      "snippet": "NHS Choices information on Klinefelter syndrome, with links to other useful resources",
      "label": "Klinefelter's syndrome, XXY",
      "synonyms": [
        "XXY syndrome",
        "Klinefelter's syndrome karyotype 47 XXY",
        "XXY Klinefelter's syndrome",
        "Klinefelter syndrome, XXY"
      ],
      "keywords": ["klinefelter's syndrome", "klinefelter syndrome"]
    },
    {
      "snippet": "Labyrinthitis is an inner ear infection. It causes a delicate structure deep inside your ear called the labyrinth to become inflamed, affecting your hearing and balance.",
      "label": "Labyrinthitis",
      "synonyms": [
        "Labirynthitis",
        "Labyrynthitis",
        "Labrynthitis",
        "Inner ear inflammation"
      ],
      "keywords": ["labyrinthitis", "vestibular rehabilitation therapy (VRT)"],
      "image": "https://assets.your.md/conditions/labyrinthitis/card/labyrinthitis-male-card.jpg"
    },
    {
      "snippet": "Lactose intolerance is a digestive problem which can cause stomach upsets after eating dairy products.",
      "label": "Lactose intolerance",
      "synonyms": [
        "LM",
        "Lactose malabsorption",
        "Cow's milk enteropathy",
        "Milk intolerance"
      ],
      "keywords": [
        "lactose intolerance",
        "milk intolerance",
        "calcium",
        "vitamin D"
      ],
      "image": "https://assets.your.md/conditions/lactose-intolerance/card/lactose-intolerance-male-card.jpg"
    },
    {
      "snippet": "Laryngitis is swelling of the larynx, mostly due to viral infections or voice strains. Often treatment is not needed",
      "label": "Laryngitis",
      "synonyms": ["Larnygitis"],
      "keywords": ["laryngitis", "inflamed voice box"],
      "image": "https://assets.your.md/conditions/laryngitis/card/laryngitis-female-card.jpg"
    },
    {
      "snippet": "Find everything you need to know about Chronic Myeloid Leukaemia, including causes, symptoms, diagnosis and treatment, with links to other useful resources.",
      "label": "Chronic myeloid leukaemia",
      "synonyms": [
        "Chronic granulocytic leukemia",
        "Chronic myelogenous leukemia",
        "Chronic myelocytic leukemia",
        "Chronic myelogenous leukemia, no ICD-O subtype",
        "Chronic myelogenous leukemia, no International Classification of Diseases for Oncology subtype",
        "Chronic granulocytic leukaemia",
        "Chronic myelogenous leukaemia",
        "Chronic myelocytic leukaemia",
        "CML",
        "CGL",
        "Chronic myeloid leukemia",
        "Chronic myeloid leukaemia, disease",
        "Chronic myeloid leukemia, disease"
      ],
      "keywords": ["chronic leukaemia"],
      "image": "https://assets.your.md/conditions/leukaemia-chronic/card/leukaemia-chronic-male-card.jpg"
    },
    {
      "snippet": "Lymphoedema is swelling due to problems in the lymphatic system. Treatment isn’t curative but may help control symptoms",
      "label": "Lymphedema",
      "synonyms": [
        "Lymphatic oedema",
        "Lymphatic edema",
        "Acquired lymphoedema",
        "Lymphoedema",
        "Acquired lymphedema"
      ],
      "keywords": ["lymphoedema", "limb swelling"],
      "image": "https://assets.your.md/conditions/lymphoedema/card/lymphoedema-female-card.jpg"
    },
    {
      "snippet": "Marfan syndrome is a disorder of the body's connective tissues. Children usually inherit it from one of their parents.",
      "label": "Marfan's syndrome",
      "synonyms": ["Marfan syndrome", "Marfan's disease"],
      "keywords": ["marfan syndrome"],
      "image": "https://assets.your.md/conditions/marfan-syndrome/card/marfan-syndrome-male-card.jpg"
    },
    {
      "snippet": "Mastitis is a condition that causes a woman's breast tissue to become painful and inflamed. It usually occurs in women who are breastfeeding.",
      "label": "Mastitis",
      "synonyms": [],
      "keywords": ["mastitis", "breast lump", "breastfeeding"],
      "image": "https://assets.your.md/conditions/mastitis/card/mastitis-female-card.jpg"
    },
    {
      "snippet": "Multiple sclerosis (MS) is a disease affecting nerves in the brain and spinal cord, causing problems with muscle movement, balance and vision.",
      "label": "Generalised multiple sclerosis",
      "synonyms": [
        "Multiple sclerosis",
        "Disseminated sclerosis",
        "MS",
        "DS",
        "Multiple scrosis",
        "Multiple sclrosis"
      ],
      "keywords": ["multiple sclerosis"],
      "image": "https://assets.your.md/conditions/multiple-sclerosis/card/multiple-sclerosis-female-card.jpg"
    },
    {
      "snippet": "Mumps is a contagious viral infection that used to be common in children.",
      "label": "Mumps parotitis",
      "synonyms": ["Infectious parotitis", "Epidemic parotitis", "Mumps"],
      "keywords": ["mumps", "MMR vaccine"]
    },
    {
      "snippet": "Nail patella syndrome is an uncommon genetic condition that causes problems with the nails, bones, kidneys and eyes.",
      "label": "Nail-patella syndrome",
      "synonyms": ["Hereditary osteo-onychodysplasia", "Nail patella syndrome"],
      "keywords": ["nail patella syndrome"],
      "image": "https://assets.your.md/conditions/nail-patella-syndrome/card/nail-patella-syndrome-female-card.jpg"
    },
    {
      "snippet": "Find everything you need to know about Nasal And Sinus Cancer including causes, symptoms, diagnosis and treatment, with links to other useful resources.",
      "label": "Neoplasm of nose",
      "synonyms": [],
      "keywords": ["Nasal cancer", "sinus cancer"],
      "image": "https://assets.your.md/conditions/cancer-of-the-nose-and-sinus/card/cancer-of-the-nose-and-sinus-female-card.jpg"
    },
    {
      "snippet": "Find everything you need to know about Panic Disorder including causes, symptoms, diagnosis and treatment, with links to other useful resources.",
      "label": "Panic disorder",
      "synonyms": ["Episodic paroxysmal anxiety disorder"],
      "keywords": [
        "panic disorder",
        "panic attack",
        "panic",
        "panic attacks",
        "anxiety"
      ],
      "image": "https://assets.your.md/conditions/panic-disorder/card/panic-disorder-female-card.jpg"
    },
    {
      "snippet": "Find everything you need to know about stomach ulcer including causes, symptoms, diagnosis and treatment, with links to other useful resources.",
      "label": "Peptic ulcer",
      "synonyms": [
        "Peptic ulcer disease",
        "Peptic ulceration",
        "PUD",
        "PU",
        "Gastroduodenal ulcer"
      ],
      "keywords": [
        "peptic ulcer",
        "stomach ulcer",
        "tummy pain",
        "stomach pain"
      ],
      "image": "https://assets.your.md/conditions/peptic-ulcer/card/peptic-ulcer-male-card.jpg"
    },
    {
      "snippet": "A pulmonary embolism is a blockage in the artery that transports blood to the lungs (pulmonary artery). It is usually caused by a blood clot.",
      "label": "Pulmonary embolism",
      "synonyms": ["PE"],
      "keywords": ["pulmonary embolism", "PE"],
      "image": "https://assets.your.md/conditions/pulmonary-embolism/card/pulmonary-embolism-female-card.jpg"
    },
    {
      "snippet": "Q fever is an infection caused by Coxiella burnetii (C. burnetii) bacteria.",
      "label": "Q fever",
      "synonyms": [
        "Infection due to Coxiella burnetii",
        "Abattoir fever",
        "Balkan influenza",
        "Balkan grippe",
        "Query fever"
      ],
      "keywords": ["q fever", "coxiella burnetti"],
      "image": "https://assets.your.md/conditions/q-fever/card/q-fever-female-card.jpg"
    },
    {
      "snippet": "Read about repetitive strain injury (RSI), which is a general term used to describe the pain caused by repetitive movement and overuse of muscles, nerves and tendons.",
      "label": "Repetitive strain injury",
      "synonyms": ["RSIS", "Repetitive strain injury syndrome", "RSI"],
      "keywords": ["repetitive strain injury", "RSI"],
      "image": "https://s3-us-west-2.amazonaws.com/staging.gutenberg-output/article_images/repetitive-strain-injury-female.jpg"
    },
    {
      "snippet": "Reye's syndrome is a very rare condition that causes serious liver and brain damage. If it is not treated promptly it may result in permanent brain injury or death.",
      "label": "Reye's syndrome",
      "synonyms": ["Reye syndrome", "Reye's encephalopathy"],
      "keywords": ["reyes syndrome"],
      "image": "https://assets.your.md/conditions/reyes-syndrome/card/reyes-syndrome-male-card.jpg"
    },
    {
      "snippet": "Rickets is a condition that affects bone development in children. The most common cause of rickets is a lack of vitamin D and calcium.",
      "label": "Rickets",
      "synonyms": [],
      "keywords": [
        "rickets",
        "vitamin D deficiency",
        "osteomalacia",
        "soft bones",
        "bone deformity"
      ]
    },
    {
      "snippet": "Sciatica is the name given to any sort of pain that is caused by irritation or compression of the sciatic nerve. There are two types, acute and persistent (chronic).",
      "label": "Sciatica",
      "synonyms": [
        "Sciatica neuralgia",
        "Neuralgia-neuritis of sciatic nerve",
        "Sciatic neuralgia",
        "Syatica",
        "Ciatica",
        "Siatica"
      ],
      "keywords": ["sciatica", "shooting pain", "sciatic nerve"],
      "image": "https://assets.your.md/conditions/sciatica/card/sciatica-female-card.jpg"
    },
    {
      "snippet": "NHS Choices information on scleroderma, including types of scleroderma, symptoms and causes of scleroderma, with links to other useful resources",
      "label": "Localized scleroderma",
      "synonyms": [
        "Morphoea scleroderma",
        "Localised dermatosclerosis",
        "Localised morphoea",
        "Morpheas",
        "Morphea",
        "Morphea scleroderma",
        "Circumscribed scleroderma",
        "Addison's keloid",
        "Localized morphea",
        "Localized dermatosclerosis"
      ],
      "keywords": ["localised scleroderma", "system scleroderma"],
      "image": "https://assets.your.md/conditions/scleroderma/card/scleroderma-male-card.jpg"
    },
    {
      "snippet": "Septic shock is a life-threatening condition that happens when your blood pressure drops to a dangerously low level due to an infection.",
      "label": "Septic shock",
      "synonyms": [
        "Septicaemic shock",
        "Septicemic shock",
        "Sepsis-associated hypotension",
        "Septicemia",
        "Toxemia"
      ],
      "keywords": ["septic shock", "sepsis", "septicaemia", "blood poisoning"],
      "image": "https://assets.your.md/conditions/septic-shock/card/septic-shock-female-card.jpg"
    },
    {
      "snippet": "Sick building syndrome (SBS) is a poorly understood phenomenon where people have a range of symptoms related to a certain building, most often a workplace, and there is no specific identifiable cause.",
      "label": "Sick building syndrome",
      "synonyms": [],
      "keywords": ["sick building syndrome", "SBS"],
      "image": "https://assets.your.md/conditions/sick-building-syndrome/card/sick-building-syndrome-female-card.jpg"
    },
    {
      "snippet": "Sinusitis is inflammation of the lining of the sinuses, caused by a viral or bacterial infection.",
      "label": "Sinusitis",
      "synonyms": ["Sinus infection", "inflammation of sinuses"],
      "keywords": ["sinusitis", "inflammation sinus", "sinuses"],
      "image": "https://assets.your.md/conditions/sinusitis/card/sinusitis-female-card.jpg"
    },
    {
      "snippet": "Find everything you need to know about Subarachnoid Haemorrhage including causes, symptoms, diagnosis and treatment, with links to other useful resources.",
      "label": "Subarachnoid haemorrhage",
      "synonyms": [
        "SAH",
        "Subarachnoid hemorrhage",
        "Subarachnoid intracranial haemorrhage",
        "Subarachnoid intracranial hemorrhage"
      ],
      "keywords": [
        "Subarachnoid haemorrhage",
        "brain bleed",
        "brain anuerysm bleed",
        "thunderclap headache"
      ],
      "image": "https://assets.your.md/conditions/subarachnoid-haemorrhage/card/subarachnoid-haemorrhage-male-card.jpg"
    },
    {
      "snippet": "Giant cell arteritis (GCA) is a condition in which medium and large arteries, usually in the head and neck, become inflamed.",
      "label": "Temporal arteritis",
      "synonyms": [
        "Cranial arteritis",
        "Horton's disease",
        "TA",
        "Temporal giant cell arteritis",
        "Giant cell arteritis"
      ],
      "keywords": [
        "giant cell arteritis",
        "temporal arteritis",
        "scalp tenderness"
      ],
      "image": "https://assets.your.md/conditions/giant-cell-arteritis/card/giant-cell-arteritis-male-card.jpg"
    },
    {
      "snippet": "Androgen insensitivity syndrome (AIS) affects the development of a child's genitals and reproductive organs.",
      "label": "Androgen resistance syndrome",
      "synonyms": ["Androgen insensitivity syndrome"],
      "keywords": ["Androgen insensitivity syndrome", "AIS"]
    },
    {
      "snippet": "Find everything you need to know about Tietze's Syndrome including causes, symptoms, diagnosis and treatment, with links to other useful resources.",
      "label": "Tietze's disease",
      "synonyms": [
        "Tietze disease",
        "Cyriax's syndrome",
        "Slipping rib syndrome",
        "Costochondral junction syndrome",
        "Peristernal perichondritis",
        "Tietze's syndrome",
        "Costal chondritis",
        "Costochondritis"
      ],
      "keywords": [
        "tietzes syndrome",
        "costochondritis",
        "costal chondritis",
        "costal rib inflammation"
      ],
      "image": "https://assets.your.md/conditions/tietzes-syndrome/card/tietzes-syndrome-female-card.jpg"
    },
    {
      "snippet": "Athlete’s foot is a common condition that is caused by a fungal infection. An itchy red rash develops in the spaces between your toes.",
      "label": "Tinea pedis",
      "synonyms": [
        "Epidermophytosis pedis",
        "Athlete's foot",
        "Dermatophytosis of foot",
        "TP",
        "Ringworm of foot"
      ],
      "keywords": ["athlete's foot", "tinea pedis"],
      "image": "https://assets.your.md/conditions/athletes-foot/card/athletes-foot-female-card.jpg"
    },
    {
      "snippet": "Trichotillomania is a condition where a person feels compelled to pull their hair out.",
      "label": "Trichotillomania",
      "synonyms": ["Hair plucking", "Trichologia"],
      "keywords": ["trichotillomania", "hair pulling compulsion"],
      "image": "https://assets.your.md/conditions/trichotillomania/card/trichotillomania-male-card.jpg"
    },
    {
      "snippet": "Uveitis is inflammation of the middle layer of the eye, called the uvea or uveal tract.",
      "label": "Uveitis",
      "synonyms": ["Intraocular inflammation"],
      "keywords": ["uveitis", "eye infection", "eye inflammation"],
      "image": "https://assets.your.md/conditions/uveitis/card/uveitis-female-card.jpg"
    },
    {
      "snippet": "Acute cholecystitis is inflammation (swelling) of the gallbladder, usually caused by a gallstone. The main symptom is severe pain in the upper right abdomen.",
      "label": "Acute cholecystitis",
      "synonyms": [],
      "keywords": ["acute cholecystitis", "gallstones"],
      "image": "https://assets.your.md/conditions/cholecystitis-acute/card/cholecystitis-acute-male-card.jpg"
    },
    {
      "snippet": "Migraines are tender headaches on one side of the head that have specific triggers and causes nausea and vomiting",
      "label": "Migraine",
      "synonyms": ["Migrane", "migraines"],
      "keywords": [
        "migraine",
        "migraine with aura",
        "migraine without aura",
        "headache"
      ],
      "image": "https://assets.your.md/conditions/migraine/card/migraine-female-card.jpg"
    },
    {
      "snippet": "'Mallet finger' is an injury to the end of the finger that causes it to bend towards the palm.",
      "label": "Mallet finger",
      "synonyms": ["Baseball finger"],
      "keywords": ["mallet finger"],
      "image": "https://assets.your.md/conditions/mallet-finger/card/mallet-finger-male-card.jpg"
    },
    {
      "snippet": "A perforated eardrum is a hole or tear in the eardrum. It may be uncomfortable, but usually heals on its own without treatment within two months.",
      "label": "Tear of tympanic membrane",
      "synonyms": [
        "Perforation of tympanic membrane",
        "Perforation of ear drum",
        "Perforation of eardrum",
        "Perforated eardrum",
        "Perforation tympanic membrane",
        "tear in eardrum"
      ],
      "keywords": [
        "perforated eardrum",
        "hole in the eardrum",
        "hearing loss",
        "earcache"
      ],
      "image": "https://assets.your.md/conditions/perforated-eardrum/card/perforated-eardrum-male-card.jpg"
    },
    {
      "snippet": "Heart failure is a serious condition caused by the heart failing to pump enough blood around the body at the right pressure.",
      "label": "Right heart failure",
      "synonyms": [],
      "keywords": [
        "heart failure",
        "cardiac failure",
        "congestive cardiac failure"
      ],
      "image": "https://assets.your.md/conditions/heart-failure/card/heart-failure-female-card.jpg"
    },
    {
      "snippet": "Vitamin B12 deficiency anaemia or folate deficiency anaemia occur when a lack of vitamin B12 or folate causes the body to produce abnormally large red blood cells.",
      "label": "Vitamin B12 deficiency",
      "synonyms": [
        "Folate decficiency",
        "Cobalamin deficiency",
        "Vitamin B9 deficiency",
        "folic acid deficiency"
      ],
      "keywords": [
        "Vitamin B12 deficiency anaemia ",
        "folate deficiency anaemia",
        "Anaemia "
      ],
      "image": "https://assets.your.md/conditions/anaemia-vitamin-b12-and-folate-deficiency/card/anaemia-vitamin-b12-and-folate-deficiency-male-card.jpg"
    },
    {
      "snippet": "A set of lung conditions which make breathing difficult, commonly caused by smoking and can be controlled by lifestyle changes",
      "label": "Acute exacerbation of chronic obstructive airways disease",
      "synonyms": [
        "Acute exacerbation of COPD",
        "Acute exacerbation of chronic obstructive pulmonary disease"
      ],
      "keywords": ["chronic obstructive pulmonary disease ", "COPD"],
      "image": "https://assets.your.md/conditions/chronic-obstructive-pulmonary-disease/card/chronic-obstructive-pulmonary-disease-male-card.jpg"
    },
    {
      "snippet": "Corticobasal degeneration (CBD) is a rare condition where brain cells become damaged over time and certain sections of the brain start to shrink.",
      "label": "Corticobasal degeneration",
      "synonyms": [
        "Cortical basal ganglionic degeneration",
        "Corticodentatonigral degeneration with neuronal achromasia"
      ],
      "keywords": ["corticobasal degeneration", "corticobasal syndrome"],
      "image": "https://assets.your.md/conditions/corticobasal-degeneration/card/corticobasal-degeneration-male-card.jpg"
    },
    {
      "snippet": "Everything you need to know about complex regional pain syndrome including symptoms, causes, diagnosis and treatment, with links to other useful resources.",
      "label": "Complex regional pain syndrome",
      "synonyms": [
        "Complex regional pain syndrome (CRPS)",
        "Complex regional pain syndromes"
      ],
      "keywords": ["Complex", "Regional ", "Pain", "Syndrome"],
      "image": "https://assets.your.md/conditions/complex-regional-pain-syndrome/card/complex-regional-pain-syndrome-female-card.jpg"
    },
    {
      "snippet": "Read NHS information about minor head injuries, including how many people have head injuries each year, how they are treated, possible complications and how to avoid serious head injury.",
      "label": "Minor head injury",
      "synonyms": [],
      "keywords": ["head injury minor"]
    },
    {
      "label": "Threadworms",
      "synonyms": ["Enterobius vermicularis"]
    },
    {
      "snippet": "Find everything you need to know about Toxic Shock Syndrome including causes, symptoms, diagnosis and treatment, with links to other useful resources.",
      "label": "Toxic shock syndrome",
      "synonyms": ["TSS"],
      "keywords": ["toxic shock syndrome", "TSS"],
      "image": "https://assets.your.md/conditions/toxic-shock-syndrome/card/toxic-shock-syndrome-female-card.jpg"
    },
    {
      "snippet": "NHS Choices information on thyroiditis, with links to other useful resources",
      "label": "Hashimoto thyroiditis",
      "synonyms": [
        "Struma lymphomatosis",
        "Struma lymphomatosa",
        "Hashimoto's disease",
        "Lymphocytic thyroiditis",
        "Chronic lymphocytic thyroiditis",
        "Hashimoto's thyroiditis",
        "Autoimmune lymphocytic chronic thyroiditis"
      ],
      "keywords": [
        "thyroiditis",
        "inflammation thyroid",
        "hashimotos thyroiditis",
        "de quervains thyroiditis",
        "subacute thyroiditis"
      ],
      "image": "https://assets.your.md/conditions/thyroiditis/card/thyroiditis-male-card.jpg"
    },
    {
      "snippet": "Norovirus, sometimes known as the winter vomiting bug, is the most common stomach bug in the UK, affecting people of all ages.",
      "label": "Norovirus",
      "synonyms": [
        "Genus Norovirus",
        "Small round structured viruses",
        "Norwalk-like viruses",
        "Farmington Hills Virus",
        "Stomach virus",
        "Cruiseship virus"
      ],
      "keywords": ["norovirus", "winter vomiting bug"],
      "image": "https://assets.your.md/conditions/norovirus/card/norovirus-female-card.jpg"
    },
    {
      "snippet": "Attention deficit hyperactivity disorder (ADHD) is a group of behavioural symptoms that include inattentiveness, hyperactivity and impulsiveness.",
      "label": "Attention deficit hyperactivity disorder",
      "synonyms": [
        "ADHD",
        "Attention deficit disorder with hyperactivity",
        "Hyperkinetic disorder",
        "Hyperkinetic syndrome",
        "Minimal brain dysfunction",
        "Overactive child syndrome",
        "Attention deficit hyperkinetic disorder",
        "MBD",
        "Attention deficit hyperactivity disorder, predominantly hyperactive impulsive type",
        "Attention deficit hyperactivity disorder, hyperactive impulsive type",
        "adhd"
      ],
      "keywords": [
        "attention deficit hyperactivity disorder",
        "ADHD",
        "hyperactivity "
      ],
      "image": "https://assets.your.md/conditions/attention-deficit-hyperactivity-disorder/card/attention-deficit-hyperactivity-disorder-male-card.jpg"
    },
    {
      "snippet": "Postural tachycardia syndrome (PoTS) is an abnormal increase in heart rate after sitting or standing up. It typically causes dizziness, fainting, sweating and other symptoms.",
      "label": "Postural orthostatic tachycardia syndrome",
      "synonyms": [],
      "keywords": ["postural tachycardia syndrome", "POTS"],
      "image": "https://assets.your.md/conditions/postural-tachycardia-syndrome/card/postural-tachycardia-syndrome-female-card.jpg"
    },
    {
      "snippet": "Achalasia means that your gullet has lost its ability to move food along and the valve at the end of your gullet fails to open to allow food to pass into your stomach",
      "label": "Achalasia",
      "synonyms": [],
      "keywords": ["achalasia", "cardiospasm", "dysphagia"],
      "image": "https://assets.your.md/conditions/achalasia/card/achalasia-male-card.jpg"
    },
    {
      "snippet": "Cancer of the womb (uterus) is a common cancer of the female reproductive system that often causes abnormal vaginal bleeding.",
      "label": "Primary malignant neoplasm of endometrium",
      "synonyms": ["Cancer of endometrium", "cancer of womb lining"],
      "keywords": [
        "endometrial cancer",
        "uterine cancer",
        "cancer of the uterus",
        "womb cancer"
      ],
      "image": "https://assets.your.md/conditions/cancer-of-the-uterus/card/cancer-of-the-uterus-global-card.jpg"
    },
    {
      "snippet": "A snake will sometimes bite in self-defence if it is disturbed or provoked. Some snakes are venomous and can inject venom (toxin) as they bite.",
      "label": "Snake bite",
      "synonyms": [],
      "keywords": ["snake bite", "snake venom"]
    },
    {
      "snippet": "Gonorrhoea is a sexually transmitted infection (STI) caused by bacteria called Neisseria gonorrhoeae or gonococcus. It used to be known as \"the clap\".",
      "label": "Gonorrhoea",
      "synonyms": [
        "GC",
        "Gonococcus infection",
        "Clap",
        "GCI",
        "Gonococcal infection",
        "Infection due to Neisseria gonorrhoeae",
        "Gonorhoea",
        "clapping",
        "gonorrhea",
        "gonococcal",
        "gonorrhoeal"
      ],
      "keywords": [
        "gonorrhoea",
        "STI",
        "the clap",
        "sexually trransmitted infection"
      ],
      "image": "https://assets.your.md/conditions/gonorrhoea/card/gonorrhoea-female-card.jpg"
    },
    {
      "snippet": "Read NHS information about syphilis, including the causes, symptoms and treatment of syphilis, with information about how to prevent infection and links to useful resources.",
      "label": "Syphilis",
      "synonyms": [
        "Great Pox",
        "Lues",
        "Infection by Treponema pallidum",
        "Treponemal infection",
        "Treponemal disease",
        "Luetic disease",
        "Syphillis"
      ],
      "keywords": ["syphilis", "treponema pallidum", "lues"],
      "image": "https://assets.your.md/conditions/syphilis/card/syphilis-male-card.jpg"
    },
    {
      "snippet": "Trichomoniasis is a common sexually transmitted infection (STI) caused by a tiny parasite. It can affect women and men and is treated using antibiotics.",
      "label": "Trichomonal vaginitis",
      "synonyms": [
        "Vaginal trichomoniasis",
        "Trichomonal leukorrhoea vaginalis",
        "Trichomonal leukorrhea vaginalis",
        "Trichomonal fluor vaginalis"
      ],
      "keywords": ["trichomonas vaginalis", "TV"],
      "image": "https://assets.your.md/conditions/trichomonas_vaginalis/card/trichomonas_vaginalis-global-card.jpg"
    }
  ]
},
      null,
      2
    ),
  };
};
