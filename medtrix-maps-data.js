// Medtrix Maps Data - External file for easy integration
// Usage: Include this file in your HTML and access medtrixMapsData

// Category mapping function
function getMapCategory(title) {
  const titleLower = title.toLowerCase();

  // Marine Ecology & Monitoring
  if (titleLower.includes("impact") || titleLower.includes("pression"))
    return "marine-ecology";
  if (titleLower.includes("recor") || titleLower.includes("coralligène"))
    return "marine-ecology";
  if (titleLower.includes("tempo") || titleLower.includes("herbier"))
    return "marine-ecology";
  if (titleLower.includes("piscis") || titleLower.includes("ichtyologique"))
    return "marine-ecology";
  if (titleLower.includes("calme") || titleLower.includes("acoustique"))
    return "marine-ecology";
  if (titleLower.includes("calor") || titleLower.includes("température"))
    return "marine-ecology";
  if (titleLower.includes("donia")) return "marine-ecology";
  if (titleLower.includes("chamil") || titleLower.includes("lagunaire"))
    return "marine-ecology";
  if (titleLower.includes("foram") || titleLower.includes("benthique"))
    return "marine-ecology";
  if (titleLower.includes("filam") || titleLower.includes("algue"))
    return "marine-ecology";

  // Fisheries & Regulation
  if (titleLower.includes("halieutique") || titleLower.includes("pêche"))
    return "fisheries";
  if (titleLower.includes("portail")) return "fisheries";

  // Conservation & Management
  if (titleLower.includes("pim") || titleLower.includes("île"))
    return "conservation";
  if (titleLower.includes("restau") || titleLower.includes("restauration"))
    return "conservation";
  if (titleLower.includes("mouillage")) return "conservation";

  // Research & Expeditions
  if (titleLower.includes("expédition") || titleLower.includes("gombessa"))
    return "research";
  if (titleLower.includes("atlas") || titleLower.includes("synthèse"))
    return "research";
  if (titleLower.includes("model") || titleLower.includes("photogrammétrie"))
    return "research";

  // Pollution & Monitoring
  if (titleLower.includes("chimie") || titleLower.includes("pollution"))
    return "pollution";
  if (titleLower.includes("cetamed") || titleLower.includes("cétacé"))
    return "pollution";
  if (titleLower.includes("surfstat") || titleLower.includes("état"))
    return "pollution";

  // Default category
  return "marine-ecology";
}

// Category definitions
const mapCategories = {
  "marine-ecology": {
    name: "Marine Ecology",
    icon: "🌊",
    description: "Monitoring of marine ecosystems, habitats, and biodiversity",
  },
  fisheries: {
    name: "Fisheries & Regulation",
    icon: "🎣",
    description:
      "Fishing regulations, commercial species, and marine resources",
  },
  conservation: {
    name: "Conservation & Management",
    icon: "🔄",
    description:
      "Marine protected areas, restoration projects, and conservation efforts",
  },
  research: {
    name: "Research & Expeditions",
    icon: "🔬",
    description:
      "Scientific expeditions, data synthesis, and research projects",
  },
  pollution: {
    name: "Pollution & Monitoring",
    icon: "🚨",
    description:
      "Water quality, chemical pollution, and environmental monitoring",
  },
};

const medtrixMapsData = [
  {
    "data-lizmap-title":
      "RESTAU-MED : Restauration écologique en zone côtière Méditerranéenne",
    abstract:
      "La mise en œuvre des politiques de gestion de l'espace littoral et marin s'appuie sur trois axes : la lutte contre la pollution, la non-dégradation des habitats côtiers (comme la destruction des herbiers de posidonie par les mouillages ou les aménagements littoraux) et la restauration écologique. La restauration écologique de la zone côtière Méditerranéenne est une politique récente qui vise à accélérer le retour d'une espèce ou d'une fonction écologique dans un site dégradé où les sources de dégradation sont maitrisées ou ont disparu. Le projet RESTAU-MED présente à l'échelle de la façade méditerranéenne, l'ensemble des projets de restauration écologique : les opérations de restauration de la fonction de nurserie (équipement des ports en habitats artificiels) ; les opérations pilotes qui visent à mettre au point des outils opérationnels (PARARESTOR, CREANURS, REPIC, RESCOR, REXCOR, REPONSE, REMORA, TRANSCOR, MENTON, DIAG-SETE, RECOLAG, GIREL, LA CIOTAT, RECIF-LAB, Restauration du coralligène, Colle ta gorgone, Cystoseires et Optimisation du balisage des 300 mètres), ainsi que les opérations d'envergures dont l'élaboration doit permettre une planification des actions correctives à une échelle spatiale importante (Récifs PRADO, SAR-LAB). Outils disponibles : Au-delà de la localisation géographique des différentes actions de restauration (par projet), vous avez accès à des illustrations, cartes de localisation des actions, modèles 3D, plaquettes descriptives et rapports scientifiques. Pour cela vous devez cliquer sur le projet qui vous intéresse dans la barre de légende, puis sur 'Zoomer sur la couche' et cocher les couches souhaitées (localisation des actions principalement, mais parfois vous y trouverez d'autres couches complémentaires). Ainsi, vous serez directement positionné sur la zone de l'étude sans chercher le projet sur la carte. En cliquant sur le ou les différents points, une fenêtre pop-up s'affichera à gauche de votre écran, et vous permettra d'accéder aux informations présentées précédemment. A côté de chaque couche projet, vous pourrez accéder à la plaquette descriptive en cliquant sur le petit (i).",
    "source-de-donnees":
      "Andromède Océanologie, Agence de l'eau Rhône Méditerranée Corse, Ecocéan, Ville d'Agde, Seaboost, Septentrion, Ville de Marseille, Pôle Mer Méditerranée, CEFREM, Institut océanographique Paul Ricard, Stareso, Ifremer, Università di Corsisa",
    frequency: "Variable",
    partners: "VOIR FICHE PROJET SITE WEB MEDTRIX",
  },
  {
    "data-lizmap-title":
      "Atlas de synthèse - Surveillance biologique et Qualité des eaux de Méditerranée",
    abstract:
      "Pour mieux appréhender l'ensemble des informations acquises dans les dispositifs de surveillance (RECOR, TEMPO, PISCIS, CALME, SURFSTAT et IMPACT), un premier travail de compilation et de synthèse de ces données a été publié dans un atlas cartographique de surveillance biologique. Edité par Andromède Océanologie et l'Agence de l'eau RMC en 2020, cet atlas cartographique de la qualité des eaux côtières de Méditerranée présente les résultats de la surveillance biologique, incluant l'état écologique des herbiers de posidonie et des récifs coralligènes, de leurs fonctions écologiques et du niveau de pressions exercé. Il s'appuie sur le référentiel européen de définition des objectifs de qualité que sont les masses d'eau côtières de la Directive Cadre sur l'Eau. Pour chaque masse d'eau, l'information acquise par les dispositifs de surveillance biologique est présentée dans sa forme synthétique et individuelle mais également au travers d'un triplet de qualification « état écologique, état du fonctionnement écologique, niveau de pressions ». Ce triplet permet de qualifier chaque masse d'eau. Il permet de donner une qualification générale de l'état de santé des herbiers et du coralligène. Ce premier atlas édité en 2020 s'appuie sur 430 données biologiques acquises sur la période 2014-2019 et sur 11 pressions anthropiques. En 2024, une mise à jour de cet atlas est réalisée à partir des données de surveillance les plus récentes (2020-2023). De nouveaux indicateurs bioacoustiques et de diversité fonctionnelle des poissons, issus de la bibliographie et de propositions d'experts à la vue des connaissances actuelles, intègrent le triplet de qualification (état du fonctionnement écologique). Certaines grilles de qualité sont également mises à jour grâce aux nouvelles données et à l'amélioration des connaissances. Enfin le niveau de pressions est enrichi avec l'ajout de deux nouvelles pressions : ce sont ainsi 13 pressions anthropiques qui sont considérées. Au total, 426 données biologiques sont synthétisées pour la Méditerranée française dans cet atlas afin d'évaluer l'état écologique et l'état du fonctionnement écologique de ces écosystèmes. Elles sont issues de 173 stations d'étude pour l'herbier de posidonie et de 253 stations d'étude pour les récifs coralligènes. Outils disponibles : Une carte des stations/sites de surveillance des herbiers à Posidonie (limite inférieure et profondeur intermédiaire) et du coralligène est disponible dans le projet. En cliquant sur les différentes masses d'eau, l'utilisateur a accès à une carte détaillée de l'état général des herbiers à Posidonie ou du coralligène, grâce à l'affichage d'une fenêtre POP UP.",
    "source-de-donnees":
      "Andromède Océanologique - Agence de l'eau Rhône Méditerranée et Corse",
    frequency:
      "Un suivi par an par région (chaque région, Occitanie/PACA Ouest, PACA Est et Corse, est suivie tous les trois ans)",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title":
      "Expéditions scientifiques - Présentation des résultats des différentes expéditions",
    abstract:
      "GOMBESSA 5: En juillet 2019, quatre plongeurs ont vécu confinés dans une station pressurisée pour étudier la zone crépusculaire méditerranéenne entre Marseille et Monaco. Ces plongeurs ont été les premiers à allier plongée autonome en recycleur et plongée à saturation. En s'affranchissant des paliers de décompression quotidiens, ce nouveau moyen de plongée a permis d'appliquer des protocoles scientifiques complexes sur les écosystèmes profonds, principalement sur les récifs coralligènes. La mission itinérante « Gombessa 5 : Planète Méditerranée » regroupe ainsi les trois valeurs propres aux expéditions Gombessa : un défi de plongée à relever, un mystère scientifique à résoudre et une promesse d'images à ramener. À travers 31 plongées, les quatre plongeurs ont passé 75 heures chacun à étudier les écosystèmes entre -65 et -142 m de profondeur en réalisant des protocoles scientifiques transdisciplinaires établis avec 17 partenaires de divers organismes de recherche français et étrangers. GOMBESSA 6: Durant l'été 2021, l'expédition scientifique Gombessa 6 a été menée sur des structures coralligènes régulières appelées « anneaux coralligènes ». Découvertes il y a plus de dix ans au large du Cap Corse, ces structures n'avaient jamais été décrites auparavant et constituent de véritables monuments naturels au regard de la vitesse de croissance de ces bioconcrétionnements et de leur position bathymétrique. L'expédition scientifique Gombessa 6 dresse un état des lieux de 22 sites sous-marins et de leurs écosystèmes méconnus. Les plongeurs ont réalisé 24 plongées et passé 245 heures à étudier ces écosystèmes entre -62 et -120 mètres autour du Cap Corse en réalisant des protocoles scientifiques transdisciplinaires établis avec 35 scientifiques français et étrangers. Outils disponibles : En cliquant sur les différents sites explorés, l'utilisateur peut accéder aux caractéristiques du site, visualiser les différents protocoles réalisés et télécharger les fiches résultats, à travers l'affichage d'une fenêtre POP UP. Il a également accès aux couches cartographiques présentant les différents protocoles réalisés.",
    "source-de-donnees":
      "Andromède Océanologie (+ partenaires scientifiques de l'expédition Gombessa 5)",
    frequency: "Tous les trois ans",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title":
      "CALME : Caractérisation Acoustique du Littoral Méditerranéen et de ses Ecosystèmes",
    abstract:
      "En appliquant les méthodes de l'écologie acoustique, CALME est le réseau de surveillance environnementale par acoustique passive de la sous-région marine 'Méditerranée Occidentale', créé en 2015 par CHORUS en partenariat avec l'Agence de l'Eau RMC. Il contribue au recueil de mesures in situ pour les directives cadres européennes sur la stratégie pour le milieu marin (DCSMM, descripteur 11). Grâce à un programme d'échantillonnage unique en Europe, CALME mesure les paysages acoustiques sous-marins à l'échelle de la sous-région marine. Les données « screening de façade » mutualisées avec les réseaux TEMPO et RECOR s'intéresse aux herbiers de Posidonia oceanica et aux assemblages coralligènes. Depuis 2024, les données de biophonie (les sons émis par les animaux marins) et d'anthropophonie (les sons émis par les activités humaines) sont intégrées directement dans les projets associés TEMPO et RECOR. Le projet MAGMA a trouvé sa continuité en 2017 en étant intégré au sein du réseau CALME. Ainsi, des transects de mesures mobiles réalisées par des gliders acoustiques complètent le dispositif CALME pour l'hauturier. Il s'agît de planeurs sous-marins autonomes SEAEXPLORER déployés par Alseamar. Les tests technologiques ont été validés en 2016 et une première exploration de 778 kilomètres et 30 jours a eu lieu entre Toulon et Calvi en septembre 2017. Outils disponibles : En cliquant sur les différents sites CALME (points bleus), l'utilisateur accède à une fenêtre POP UP avec les caractéristiques du site, les indicateurs acoustiques calculés et les graphiques temporels des niveaux sonores, ainsi que les informations sur la biodiversité acoustique détectée.",
    "source-de-donnees": "CHORUS Fondation Grenoble INP et Alseamar",
    frequency:
      "L'actualisation est spécifique à chaque réseau présenté dans ce projet ; elle varie entre un, trois ou six ans",
    partners:
      "Andromède Océanologie, Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title":
      "CALOR : Suivi de la température en Méditerranée française",
    abstract:
      "Depuis 2013, Andromède Océanologie, avec le soutien de l'Agence de l'eau Rhône Méditerranée et Corse, équipe les sites de surveillance du coralligène (réseau RECOR) et des herbiers à Posidonie (réseau TEMPO) avec des capteurs de température HOBO Water Temp Pro v2. 266 capteurs (132 capteurs RECOR et 107 capteurs TEMPO) sont en cours d'acquisition de données entre 4 et 115 mètres de fond en Méditerranée française. Ces capteurs permettent de réaliser une mesure toutes les 30 minutes pendant 3 ans. Leur répartition ainsi que la fréquence élevée des mesures permettent de produire des cartographies de température de fond et de corréler les observations biologiques réalisées sur les sites TEMPO et RECOR aux variations de ce paramètre abiotique. Cette étude à plusieurs objectifs : (1) Réaliser une modélisation de la température de fond sur le littoral Méditerranéen français, principalement à partir des capteurs récupérés au cours des campagnes RECOR et TEMPO. (2) Pérenniser la mise en place de capteurs de température, pour un suivi à long terme de la température de fond ; (3) Permettre la calibration de modèles physiques de température en fournissant des données fiables in-situ haute fréquence sur tout le littoral méditerranéen français ; (4) Corréler les données de diversité et vitalité observées (herbier et coralligène) avec les données de température. Nous pourrons ainsi mieux comprendre les données biologiques, faire la part de l'anthropique et de l'environnement et prédire l'impact du changement climatique sur la biodiversité marine. Outils disponibles : En cliquant sur les différents sites CALOR (points rouges), l'utilisateur accède à une fenêtre POP UP avec les caractéristiques du site, les graphiques temporels des températures et les statistiques climatiques calculées.",
    "source-de-donnees": "Andromède Océanologie",
    frequency: "Annuelle",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title":
      "CETAMED : Surveillance chimique de la chaîne trophique basée sur les échouages de mammifères marins",
    abstract:
      "Depuis de nombreuses années, les cétacés s'échouent régulièrement sur nos côtes. De nombreux polluants prioritaires, tels que les polychlorobiphényles (PCB), pesticides, hydrocarbures aromatiques polycycliques (HAP), métaux…, de par leurs teneurs, sont largement suspectés de contribuer à ces échouages. En effet, les tissus et organes contiennent très souvent de fortes concentrations de ces polluants. Des études sur les teneurs en polluants dans les organismes des mammifères marins sont réalisées depuis 2001 par le Laboratoire de Chimie Analytique de la Faculté de Pharmacie de Marseille. L'objectif actuel vise à récupérer les prélèvements, juste après un échouage, et à procéder aux analyses des contaminants. De cette manière, une évaluation de la tendance réelle des teneurs, organisme par organisme, est rendue possible à la fin de chaque année. Les échouages de mammifères marins sur le littoral français font l'objet d'un suivi continu depuis 1972 par le Réseau National d'Echouages (RNE), coordonné par l'Observatoire Pelagis (Unité Mixte de Service 3462, Université de La Rochelle-CNRS, anciennement 'Centre de Recherches sur les Mammifères Marins'). Au sein de ce réseau, le suivi méditerranéen est coordonné par le Groupe d'Etude des Cétacés de Méditerranée (GECEM, dirigé par le Dr Frank Dhermain), qui en a reçu la délégation officielle en 2000. Tous les signalements d'échouages de cétacés sur les côtes méditerranéennes françaises sont en général pris en compte : animal retrouvé échoué à terre ou sur le liseré côtier, vivant ou mort, captures accidentelles, etc. L'intervention sur un dauphin échoué comprend premièrement l'identification et les mensurations de l'animal. Le sexe, l'état de fraîcheur de la carcasse et la présence des lésions évidentes (indices de capture, collision, morsures…) sont systématiquement renseignés, ainsi que le lieu précis d'échouage et la date de la découverte. Le second rôle du RNE est de réaliser des prélèvements de tissus et organes à des fins d'études scientifiques. L'échantillonnage est réalisé selon le protocole standard recommandé par le CRMM (Protocole de dissection et niveaux d'échantillonnage, crmm@univ-lr.fr). Les prélèvements portent généralement sur la peau, lard, muscle, poumon, foie, rein. Ils sont conservés en double à -18°C pour d'autres recherches ultérieures. Les analyses de contaminants (PCB, Pesticides, HAP, Métaux) sont ensuite réalisées par le Laboratoire de Chimie Analytique de la Faculté de Pharmacie de Marseille, ainsi que d'autres laboratoires partenaires, dans le cadre de projets de recherche scientifique. Outils disponibles : En cliquant sur les différents sites d'échouage (points violets), l'utilisateur accède à une fenêtre POP UP avec les caractéristiques de l'animal échoué, les résultats d'analyses des contaminants et les informations sur les causes d'échouage.",
    "source-de-donnees":
      "Dr Frank Dhermain, coordonnateur du Groupe d'Etude des Cétacés de Méditerranée (GECEM)",
    frequency: "Tous les trois ans",
    partners: "Agence de l'eau Rhône Méditerranée et Corse, GECEM",
  },
  {
    "data-lizmap-title":
      "CHIMIE-Med : Caractérisation de la pollution des eaux côtières en Méditerranée française",
    abstract:
      "L'Agence a développé depuis 1996 une politique ambitieuse de caractérisation et de surveillance des eaux côtières. Les nombreux partenariats, dont ceux engagés avec Ifremer, ont permis de mettre en place des réseaux de surveillance de la contamination chimique, couvrant la totalité de la façade méditerranéenne. Les réseaux sont les suivants: - Le réseau RINBIO qui utilise le caging de moules pour évaluer la contamination chimique biodisponible d'une masse d'eau. Il est opéré par Ifremer ; - Le volet RADIOELEMENTS de RINBIO qui permet de suivre la radioactivité et notamment le Césium 137 dans la chair des mollusques. Il est opéré par l'IRSN ; - Le réseau CONTAMED apprécie le niveau de contaminants dans les poissons de haut niveau trophique (Ifremer). Il est complété par le réseau CETAMED qui suit les contaminants dans les cétacés (WWF) ; - Le réseau REMTOX évalue la toxicité des sédiments marins. Il est basé sur des bio-essais tests larves d'huîtres et est opéré par Ifremer ; - Le réseau ROCCh Sédiments qui évalue les niveaux de contamination chimique dans la matrice sédimentaire ; il est opéré par l'Ifremer ; - Le réseau MICROPLASTIQUES porte sur la quantification des microplastiques de sub-surface dans la zone côtière. Il est opéré par Ifremer ; - Le réseau OSCREEN concerne la recherche du phytoplancton Ostreopsis spp. dont phytoplancton Ostreopsis ovata. Il n'a été opéré à ce jour par Ifremer qu'en 2011. Ces différents réseaux permettent d'apprécier les niveaux de contamination des eaux côtières et leur adéquation avec les normes de qualité environnementale, leur bioaccumulation dans la chaîne trophique et les effets. Chaque réseau suit une liste de contaminants qui lui est propre, adaptée en fonction de la matrice suivie et des enjeux. D'une façon générale, ces dispositifs sont en perpétuelle optimisation tant sur le plan de l'approche spatiale que sur le plan de l'approche temporelle. Ils contribuent à répondre aux obligations nationales et européennes en matière de surveillance mais aussi et principalement à piloter et évaluer les politiques de lutte contre la pollution des eaux marines.",
    "source-de-donnees":
      "Ifremer, Institut de Radioprotection et de Sûreté Nucléaire, WWF, Faculté de pharmacie de Marseille",
    frequency:
      "L'actualisation est spécifique à chaque réseau présenté dans ce projet ; elle varie entre un, trois ou six ans",
    partners:
      "Institut de Radioprotection et de Sûreté Nucléaire, Ifremer, WWF, Agence de l'eau Rhône Méditerranée et Corse, Faculté de Pharmacie de Marseille, MOI",
  },
  {
    "data-lizmap-title":
      "FILAM'ED : Suivi des algues filamenteuses en Méditerranée française",
    abstract:
      "Le réseau « Filam'ed » met à disposition des usagers de la plateforme Medtrix l'ensemble des observations d'algues filamenteuses réalisées par Andromède océanologie et ses partenaires. Il contient ainsi les observations des réseaux de surveillance TEMPO et RECOR, les vérités terrains réalisées dans le cadre de la mission SURFSTAT et les données collectées lors d'autres expéditions scientifiques, mais également les observations issues de la plateforme de sciences participatives BioObs (https://bioobs.fr/). Ce projet a pour objectif de présenter une carte de distribution des algues filamenteuses en Méditerranée française, et de permettre ainsi l'identification des secteurs de plus forte présence. Outils disponibles : L'utilisateur a la possibilité de visualiser les observations d'algues filamenteuses réalisées lors des campagnes réseaux de surveillance (RECOR et TEMPO), des campagnes de plongées tractées (vérités terrain) et expéditions scientifiques. En cliquant sur les différents sites de la carte (ronds, triangle, étoiles), l'utilisateur pourra accéder aux caractéristiques du site et de l'observation (nom du site, illustration, % de recouvrement par les algues filamenteuses, etc.) à travers l'affichage d'une fenêtre POP UP. Les observations issues de la plateforme participative BioObs ont été intégrées au projet et sont également consultables.",
    "source-de-donnees": "Andromède Océanologie, BioObs",
    frequency: "Annuelle",
    partners: "Agence de l'eau Rhône Méditerranée et Corse, BioObs",
  },
  {
    "data-lizmap-title":
      "FORAMED : Étude des foraminifères benthiques en Méditerranée française",
    abstract:
      "Pour compléter l'information fournie par le benthos de substrat meuble dont la corrélation avec les pressions concerne essentiellement la matière organique, un autre outil utilisant la faune benthique a été développé pour mieux apprécier l'impact de la pollution chimique sur le benthos. Le LPG-BIAF (UMR CNRS 6112) a développé un nouvel indice biologique performant d'évaluation de la qualité écologique de l'environnement marin basé sur les faunes de foraminifères benthiques, en collaboration avec l'Agence de l'eau. Ces micro-organismes, ubiquistes et abondants, répondent rapidement et de manière spécifique aux variations des paramètres environnementaux. De plus, leur capacité à fossiliser en fait des organismes très utilisés dans les études paléo-océanographiques. Ainsi, ils nous permettent de reconstituer l'évolution historique des conditions écologiques d'un site, reconstitution rarement possible avec les autres indices traditionnellement utilisés. Grâce à plusieurs campagnes océanographiques en Méditerranée dans le cadre de la Directive Cadre sur l'Eau, un indice a été construit à partir du pourcentage d'espèces tolérantes, donc indicatrices de stress, pondéré par la granulométrie du sédiment à la station étudiée (pourcentage de particules fines). Outils disponibles : En cliquant sur les différents sites FORAMED (points jaunes), l'utilisateur accède à une fenêtre POP UP avec les caractéristiques du site, les résultats d'analyses des foraminifères et les indices de qualité écologique calculés.",
    "source-de-donnees": "LPG-BIAF (UMR CNRS 6112)",
    frequency:
      "Un suivi annuel par région (chaque région, Occitanie/PACA Ouest, PACA Est et Corse, est suivie tous les trois ans)",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title":
      "MEDHAB : Evaluation et gestion des habitats essentiels des poissons méditerranéens",
    abstract:
      "Les habitats essentiels des poissons (Téléostéens) des petits fonds côtiers : cartographie, disponibilité et prise en compte dans le zonage des mesures de gestion. Les habitats marins assurent diverses fonctions primordiales pour les poissons: zones d'alimentation, frayères ou encore nurseries pour les stades juvéniles. Dans la mosaïque paysagère sous-marine, ces fonctions sont assurées par divers habitats, ainsi complémentaires, différents selon les espèces. Outre une gestion des prélèvements des adultes, il est donc nécessaire de préserver ces habitats indispensables au cycle de vie des espèces. Dans une optique de hiérarchisation judicieuse des objectifs de conservation, il est ainsi requis de mieux comprendre le rôle et la répartition de ces habitats clefs, frayères et nurseries. C'est dans ce contexte que s'inscrit le projet MedHab (2019-2022): il vise à localiser et quantifier la disponibilité de certains habitats marins remplissant une fonction essentielle de nurserie. Ce projet, financé dans le cadre de l'appel à projet recherche 2018 piloté par la DIRM (Direction Interrégionale de la Mer), constitue l'une des concrétisations du PAMM (plan d'action pour le milieu marin) Méditerranée. Le PAMM représente lui-même une déclinaison de la DCSMM (Directive-Cadre Stratégie pour le Milieu Marin) visant l'atteinte ou le maintien du bon état écologique des milieux marins. L'emprise de l'étude s'étend à l'ensemble de la côte méditerranéenne française, Corse incluse, soit 2 705 km de linéaire côtier. Sur l'ensemble de l'aire traitée, 4989 nurseries PFH ont été identifiées et cartographiées. Ces nurseries, avec une longueur individuelle moyenne de 51 (± 42) m, totalisent un linéaire total de près de 254 km. Leur disponibilité globale à l'échelle de la façade a ainsi été estimée à 9,39 % du linéaire côtier. Outils disponibles : En cliquant sur les différents points, l'utilisateur accède à une fenêtre POP UP avec des informations sur le site, la manipulation scientifique ou le lieu.",
    "source-de-donnees": "Septentrion",
    frequency: "Annuelle",
    partners:
      "Parc Naturel Marin du Golfe du Lyon, Parc Marin de la Côte Bleue, Parc National des Calanques, Parc Naturel Régional de Corse, Réserve Naturelle de Cerbère-Banyuls, Réserve Naturelle de Scandola, La Stareso, Agence de l'eau Rhône Méditerranée et Corse, La DIRM, La PAMM, La Région Occitanie, La Région Sud",
  },
  {
    "data-lizmap-title":
      "MODEL : Application de la photogrammétrie à la surveillance biologique des habitats sous-marins",
    abstract:
      "La photogrammétrie permet, à partir de l'assemblage de nombreuses photographies (2D) prises sous différents angles, de reconstituer un objet en trois dimensions (3D). Cette méthode, utilisée depuis 2016 dans le cadre des réseaux RECOR (réseau de surveillance des assemblages coralligènes) et TEMPO (réseau de surveillance des herbiers à Posidonie) permet la reproduction fine en 3D des paysages sous-marins. Le développement de la photogrammétrie appliquée au suivi d'écosystèmes marins permet d'améliorer la qualité et la quantité de données collectées in situ, et d'ouvrir la voie au développement de nouveaux indicateurs écologiques. En les comparant dans le temps, les modèles 3D témoigneront de l'état de conservation ou de dégradation des écosystèmes marins. Le projet MODEL, opéré depuis 2016 par Andromède océanologie avec le soutien de l'Agence de l'eau Rhône Méditerranée et Corse, permet la visualisation des différents modèles 3D réalisés dans le cadre des réseaux de surveillance TEMPO (159 modèles) et RECOR (177 modèles), et des projets de restauration REXCOR à Cortiou (32 modèles) et RESCOR à Cap Ferrat (13 modèles). Les modèles 3D de plusieurs récifs coralligènes réalisés lors des missions Gombessa V et VI en 2019 et 2021 (Laurent Ballesta & co.) sont également disponibles, ainsi que trois épaves remarquables : le B17, le P38 et l'épave antique dite « Le Titanic. » Outils disponibles : En cliquant sur les différents icônes 'herbier', 'coralligène', 'épave' ou 'récifs artificiels', vous pouvez afficher le modèle 3D du site dans la fenêtre qui s'ouvre à gauche de la carte. Vous avez également la possibilité d'afficher en taille réelle le modèle 3D dans votre navigateur en cliquant sur 'ouvrir' juste en dessous du modèle.",
    "source-de-donnees": "Andromède Océanologie",
    frequency: "Annuelle",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title": "PISCIS : Suivi des assemblages ichtyologiques",
    abstract:
      "PISCIS est le réseau de suivi des assemblages ichtyologiques opéré depuis 2015 par Andromède Océanologie avec le soutien de l'Agence de l'eau Rhône Méditerranée et Corse. La caractérisation des assemblages ichtyologiques est réalisée par campagne régionale annuelle sur la période mi-mai/fin juin, sur l'ensemble de la façade méditerranéenne française bordée par les trois régions : Corse, Provence-Alpes-Côte d'Azur (PACA) et Occitanie. Le réseau PISCIS a permis entre 2015 et 2019 l'échantillonnage de 184 stations, en parallèle des réseaux RECOR sur l'habitat coralligène et TEMPO sur l'herbier à Posidonies (1 station en limite inférieure de l'herbier et 1 station à la profondeur intermédiaire de 15 mètres. La méthode choisie pour la caractérisation des assemblages ichtyologiques entre 2015 et 2019 est une acquisition vidéo réalisée à partir de quatre GoPro offrant un champ de vision à 360°. Pour chaque site et chaque habitat (chaque station), trois blocs vidéo espacés de quelques dizaines de mètres sont immergés pour une durée d'acquisition de 10 minutes. Les poissons sont comptés par visionnage des vidéos. Depuis 2019, la méthode utilisée a changé pour laisser place à l'ADN environnemental. Plus de 500 stations ont ainsi pu être échantillonnées par Andromède et ses partenaires. La collecte des échantillons d'ADN environnemental est réalisée à l'aide d'une technique développée par la société SPYGEN (http://www.spygen.com/fr/), permettant la filtration de 30 litres d'eau à travers une capsule de filtration à 0,2 µm. Toutes régions confondues (Corse, Provence-Alpes Côte d'Azur et Occitanie) ce réseau a permis l'échantillonnage de 73 sites-habitats en 2020, 32 sites-habitats en 2021, 39 sites-habitats en 2022, 16 sites-habitats en 2023 et 13 sites-habitats en 2024 (sites coralligènes-RECOR, sites herbiers à-15 m-TEMPO, et sites herbiers en limite inférieure-TEMPO). Outils disponibles : Un outil de comparaison des stations existe dans ce projet (icône de comparaison). En cliquant sur les différents sites PISCIS (points verts), l'utilisateur accède à une fenêtre POP UP avec les caractéristiques du site, les résultats d'analyses des assemblages ichtyologiques et les graphiques de diversité.",
    "source-de-donnees": "Andromède Océanologie",
    frequency: "Annuelle",
    partners: "Agence de l'eau Rhône Méditerranée et Corse, BioObs",
  },
  {
    "data-lizmap-title":
      "RECOR : Suivi des assemblages coralligènes en Méditerranée française",
    abstract:
      "Le réseau de surveillance RECOR, initié en 2010, concerne le suivi des assemblages coralligènes. Il est opéré par Andromède Océanologie avec le soutien de l'Agence de l'eau Rhône Méditerranée et Corse. Il s'étend sur l'ensemble de la façade méditerranéenne française bordée par les trois régions : Corse, région Sud, et Occitanie. Les objectifs de ce réseau sont de recueillir des données descriptives de l'état et du fonctionnement des assemblages coralligènes selon une méthodologie adaptée et standardisée et de suivre leur évolution dans le temps et dans l'espace. Ce réseau s'inscrit dans le cadre de l'article 8 de la directive européenne 2000/60/CE du 23 octobre 2000 puisqu'il complète l'état des eaux marines (également demandé par la directive cadre stratégie pour le milieu marin (DCSMM, 2008/56/CE)) et répond aussi aux obligations du programme de surveillance du Plan d'Action Pour le Milieu Marin de la sous-région Méditerranée occidentale. Sur toute la façade méditerranéenne française et monégasque (soit entre Banyuls et Menton) , RECOR comprend actuellement 130 sites qui correspondent à 207 stations (une station = une profondeur) réparties entre 17 et 120 mètres de profondeur (chiffre d'octobre 2024). Ce réseau s'étend également dans les eaux périphériques comme en Sardaigne (Italie). Au total, 677 suivis de récifs coralligènes ont été réalisés entre 2010 et 2024. Chaque année, une région française est suivie à la fin du printemps (Mai-Juin) afin de couvrir l'ensemble de la façade tous les trois ans. Tous les sites RECOR font également l'objet d'un suivi de la température de fond (réseau CALOR), d'une modélisation en 3D par la méthode de photogrammétrie (réseau MODEL), et certains d'un suivi poissons (réseau PISCIS) et d'écoute acoustique (réseau CALME opéré par la société Chorus). Outils disponibles : En cliquant sur les points de chaque site RECOR (étoiles), ou encore sur les stations de surveillance acoustique, l'utilisateur accède à une fenêtre POP UP avec les fiches complètes de suivi 'Coralligène' (analyse des quadrats photographiques) et 'Gorgones' (démographie des espèces érigées), ainsi que les informations générales sur les stations : nom de la station, illustration, profondeur, Coralligenous Assemblage Index (CAI), % de sédimentation, % de bioconstructeurs principaux, Indicateur de Perturbation, et modèle 3D. Un outil de comparaison des données est disponible dans ce projet. Il permet de comparer une trentaine de paramètres issus des analyses des quadrats photographiques à partir du logiciel CPCe pour chaque station RECOR et ce à différentes échelles spatiales de comparaison (Méditerranée, Région, Masse d'eau côtière).",
    "source-de-donnees": "Andromède Océanologie",
    frequency:
      "Un suivi annuel par région (chaque région, Occitanie/PACA Ouest, PACA Est et Corse, est suivie tous les trois ans)",
    partners: "Agence de l'eau Rhône Méditerranée et Corse et OSU-OREME",
  },
  {
    "data-lizmap-title":
      "RESCOR: Restauration du Coralligène à Cap Ferrat près de Nice",
    abstract:
      "Le projet RESCOR, Restauration des récifs coralligènes, s'est déroulé entre 2018 et 2022 à St Jean Cap Ferrat (région Sud, France). Ses objectifs sont de retirer du sédiment et nettoyer un récif coralligène enseveli par la formation d'un talus sédimentaire provenant d'opérations de forage. Il s'est déroulé en trois étapes : Caractérisation de la zone du projet (-32 à -42 m) : cartographie des biocénoses de la zone de dépôt des sédiments & analyse granulométrique et physico-chimique des sédiments côtiers de la zone du projet et de dépôt. Retrait de sédiments et nettoyage du récif coralligène à partir d'une méthode innovante par jet d'eau (soufflage). Cette étape a nécessité 320 heures d'intervention et 20 jours de mission. Suivi temporel des communautés du récif coralligène avant et après les opérations de désensevelissement (8 suivis : deux fois par an pendant trois ans puis une fois par an durant deux ans). En parallèle du suivi de ces communautés des récifs coralligènes, le projet « OP CORAL » mené par ECOCEAN en partenariat avec l'Agence de l'eau et ANDROMEDE OCEANOLOGIE, a consisté à prélever sur le même site différentes espèces en 2021. ECOCEAN a ensuite assuré leur élevage et bouturage dans leur ferme expérimentale à Marseille pendant plus de deux ans. A l'automne 2023, le projet RESCOR se poursuit par la conception et l'expérimentation d'un protocole de repeuplement de quatre espèces associées aux récifs coralligènes (corail rouge Corallium rubrum, la gorgone rouge Paramuricea clavata, la gorgone jaune Eunicella cavolinii et l'anémone Parazoanthus axinellae) afin que le site RESCOR soit un site atelier complet de restauration écologique de récifs coralligènes. Ce projet, soutenu par l'Agence de l'eau et la Métropole Nice Côte d'Azur, sera suivi durant cinq ans. Outils disponibles : En cliquant sur les différents sites RESCOR (points rouge et vert), l'utilisateur accède à une fenêtre POP UP avec les caractéristiques principales du site, le modèle 3D ainsi que les fiches d'identifications comprenant la description du site, sa profondeur, etc.",
    "source-de-donnees": "Andromède Océanologie",
    frequency:
      "Un suivi par an par région (chaque région, Occitanie/PACA Ouest, PACA Est et Corse, est suivie tous les trois ans)",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title":
      "RESPIRE : Surveillance du recrutement larvaire en Méditerranée française",
    abstract:
      "S'appuyant sur la Directive Cadre européenne « Stratégie pour le milieu marin » (DCSMM), et sa volonté d'atteindre le « bon état écologique » de l'ensemble des eaux marines, l'Agence de l'Eau Rhône Méditerranée Corse (AERMC) a initié, en collaboration avec ECOCEAN, le réseau de surveillance RESPIRE. Déployé dans le but de décrire la dynamique spatio-temporelle de l'arrivée des post-larves de poissons sur les côtes de la Méditerranée, ce réseau a été mis en place en 2014, et les premiers suivis ont débuté en mars 2015. 25 sites de suivis sont aujourd'hui répartis sur toute la côte méditerranéenne française, en Corse et au Maroc. Les comptages s'effectuent sur des Unités d'Observation Standardisées installés dans des ports de plaisance (reconnus dans la littérature comme des zones de nurseries), puis sur des zones à l'interface entre le milieu ouvert et les zones de nurserie (les digues et les enrochements en sortie de port) et sur des zones naturelles à proximité. Le réseau RESPIRE ne vise pas l'évaluation exhaustive des assemblages de jeunes poissons mais, à l'image d'autres dispositifs de surveillance, permet d'avoir une représentation la plus pertinente possible d'éléments biologiques, les post-larves et juvéniles de l'année, maillon essentiel dans le renouvellement des populations naturelles dont l'écologie reste peu connue et fait actuellement l'objet de nouvelles recherches plus approfondies. Le premier cycle de surveillance, de 2015 à 2018, a permis d'ajuster les suivis, à la fois en termes de période d'observation que de répartition spatiale. Entre 2018 et 2020, les données ont été analysées pour proposer des premiers seuils de qualité de la colonisation. Depuis ces cinq dernières années, les objectifs du réseau ont évolué (mise en place des protocoles de suivis, de la temporalité des comptages, du choix des sites). Les principaux restent aujourd'hui de : Etablir l'état écologique des populations de post-larves qui arrivent à la côte et contribuer à définir l'état écologique des populations de poissons côtiers ; Acquérir des données permettant de caractériser l'intensité d'arrivée des jeunes stades de poissons pour, in fine, se projeter sur la dynamique de population des espèces adultes en zone côtière ; Disposer de supports de connaissance et de recherche, ainsi que des documents de référence sur l'état du recrutement larvaire sur la côte méditerranéenne. Néanmoins, les objectifs du réseau RESPIRE s'attachent aujourd'hui principalement à établir l'état des populations de post-larves/juvéniles qui colonisent la côte, en proposant des seuils de qualité. C'est pourquoi, afin de prendre en compte les différents critères environnementaux pouvant expliquer le recrutement larvaire de certaines espèces, à certains endroits, une typologie de suivi a été proposé en 2020. Les typologies permettent en effet de définir et de classer des zones géographiques différentes selon des critères physiques, chimiques, géologiques et/ou biologiques, dans lesquels plusieurs sites pourront être considérés comme similaires. La Directive Cadre sur l'Eau avait déjà appliqué des critères reconnus comme étant des éléments de forçage de la vie marine pour le découpage des masses d'eau côtières. La typologie DCE a donc été une base de travail pour élaborer celle du réseau RESPIRE, sous réserve d'appliquer en complément des critères spécifiques à la colonisation des post-larves, comme : Les critères géomorphologiques, avec : Le renouvellement des eaux (Source DCE 2010) ; La profondeur (Source DCE 2010) ; La pente c'est à dire la distance à la côte de l'isobathe 50m (Source : SHOM 2015) ; Les critères écologiques les plus spécifiques, avec : La température maximum l'été dans les masses d'eau (Source : Copernicus 2018) ; Les habitats côtiers majoritaires de la masse d'eau jusqu'à l'isobathe 20m (Source : DONIA, 2019) ; Et en lien, la fragmentation des habitats jusqu'à l'isobathe 20m (Source : DONIA, 2019). Les pressions pouvant principalement impacter l'installation des larves de poissons avec : Les impacts des aménagements (Source : IMPACT, Andromède 2016) ; Les impacts des cours d'eau (Source : IMPACT, Andromède 2016). Une fois les typologies définies, il a été nécessaire d'identifier, pour chacune d'entre elles, des sites de suivis les renseignant, avec : Un site de Référence par typologie : c'est un site considéré comme « sans pression ». Le degré de pression sera défini selon la typologie, car certaines typologies seront logiquement plus sous pression que d'autres. Ce site de référence sera une zone naturelle, suivie en transect. Un ou plusieurs sites de Surveillance, soumis à plus ou moins de pressions ou à différentes pressions, ainsi qu'à différents taux de fragmentation des habitats (représentant différents habitats dans une typologie). Ils sont représentatifs de l'hétérogénéité de la typologie. Ces sites de surveillance étant potentiellement situés dans des zones aménagées, ils sont suivis grâce à des UOS installées dans les ports, et à des transects réalisés sur les digues ou les enrochements. On comptabilise aujourd'hui, en 2021, 12 sites de Référence et 22sites de Surveillance. Ces sites permettent de renseigner les typologies, notamment avec : Des grilles de qualité de la colonisation par espèce (élevée, moyenne, faible) ; Un fonctionnement de la typologie selon les guildes trophiques représentées ; Ou encore, l'état de la colonisation des sites de Surveillance par rapport à un état naturel. Les données compilées sont présentées sur la plateforme Medtrix, et des documents de synthèse, téléchargeables, comme ces Fiches typologies évoluant tous les ans en fonction des analyses annuelles. Stratégie temporelle : fréquence annuelle d'acquisition des données lors de trois campagnes (mars, juin, octobre). Stratégie spatiale : Trois échelles de suivis expertisées : L'Intérieur de zones artificielles, sur des UOS (Unités Standardisées d'Observation) : points fixes de 3 minutes ; L'Interface entre le milieu artificiel et le milieu naturel (enrochement, digue) : 3 transects de 10 mètres. Les zones naturelles (petits fonds côtiers), références d'un milieu non anthropisé et non/peu impacté par les activités humaines : 3 transects de 20 mètres. Outils disponibles : En cliquant sur les différents sites RESPIRE (points bleus), l'utilisateur accède à une fenêtre POP UP avec les caractéristiques du site, les résultats des comptages de post-larves et les informations sur la typologie du site.",
    "source-de-donnees": "ECOCEAN",
    frequency: "Tous les trois ans",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title":
      "ROMPOM : Réseau d'Observation Méditerranéen des Polluants par les Oiseaux Marins",
    abstract:
      "A travers le réseau des gestionnaires des Petites Iles de Méditerranée (Initiative PIM), le réseau ROMPOM a été mis en place sur différents sites pilotes de la Méditerranée occidentale afin d'évaluer les niveaux de pollution marine par l'analyse de bios échantillons d'oiseau marins pélagiques et côtiers se reproduisant sur différents sites insulaires méditerranéens. L'objectif à plus long terme est la création d'un observatoire à l'échelle méditerranéenne permettant l'analyse de ces derniers entre sous-bassins. Différents protocoles sont mis en place : le premier cible les métaux lourds tel que le mercure, à travers la collecte et l'analyse des plumes de poussins d'espèces pélagiques et côtières nicheuses des petites îles méditerranéennes (Puffin cendré et le Balbuzard pêcheur) ; Le second protocole vise à évaluer les niveaux de contaminant dans les œufs non fécondés de Puffin et Balbuzard. Les espèces cibles sont le Puffin cendré, Calonectris borealis (espèce largement représentée sur presque l'ensemble des sites pilotes proposés) et le Balbuzard pêcheur, Pandion haliaetus (cette espèce présente l'avantage de se nourrir aux environs directs de son nid en période de reproduction. La localisation des pollutions est donc plus précise qu'avec l'espèce pélagique précédente). Une phase de test a été menée en 2015, et les premiers échantillonnages sur le terrain ont débuté en 2017 (Parc National de Zembra – Tunisie, Archipel des Habibas – Algérie, Parc National des Calanques – France). Concernant le Balbuzard ce sont les zones des Baléares, de Corse et du Parc Naturel Régional de la Maremma qui sont concernées. Les échantillons collectés sont à présent en cours d'analyse au sein du Laboratoire de Chimie de l'Environnement d'Aix-Marseille. Un état de l'art de l'ensemble des techniques de suivi des contaminants, pour l'étude des oiseaux comme bioindicateur, a été réalisé : le rapport Borghesi. Ce dernier, commandité par le Conservatoire du littoral et réalisé par l'association méditerranéenne ornithologique Medmaravis, a permis à l'Initiative PIM d'identifier les protocoles à utiliser sur ses sites pilotes méditerranéens. La carte disponible sur MEDTRIX montre les aires de répartition des espèces cibles durant la période de reproduction (élevage du poussin) ainsi que les sites potentiels (dont les gestionnaires sont mobilisés /ou aire de répartition de l'espèce cible peu connue). Outils disponibles : En cliquant sur les différents sites ROMPOM (points orange), l'utilisateur accède à une fenêtre POP UP avec les caractéristiques du site, les résultats d'analyses des contaminants et les informations sur les espèces d'oiseaux étudiées.",
    "source-de-donnees": "Initiative pour les Petites Iles de Méditerranée",
    frequency: "Tous les deux ans",
    partners:
      "Laboratoire de chimie analytique et de sciences de l'environnement de l'Arbois, Conservatoire du littoral, Initiative PIM",
  },
  {
    "data-lizmap-title":
      "Sédiments : Caractérisation sédimentologique du littoral de la Corse",
    abstract:
      "Le projet sédiments est rattaché au projet SURFSTAT. Le réseau d'analyse surfacique des habitats marins SURFSTAT a été créé en 2013 par Andromède Océanologie avec le soutien de l'Agence de l'eau Rhône Méditerranée et Corse. Il a pour principal objectif d'apprécier par une approche statistique l'hétérogénéité écologique des fonds sous-marins dans l'espace et le temps entre 0 et 80 m de profondeur sur le littoral méditerranéen français. La description de l'hétérogénéité est essentielle pour évaluer la fragmentation et la connectivité des habitats marins. Mené en 2022, ce projet a pour but de mieux connaitre les biocénoses de substrats meubles en région Corse. Une campagne terrain d'acquisition de 956 prélèvements a ainsi été réalisée. L'analyse sédimentologique a été faite sur la base d'une méthode physico-chimique simple et reproductible dans le but de répondre aux objectifs suivants : caractériser la granulométrie des sédiments, analyser la composition chimique des sédiments, et évaluer la qualité écologique des fonds meubles. Outils disponibles : En cliquant sur les différents sites Sédiments (points marron), l'utilisateur accède à une fenêtre POP UP avec les caractéristiques du site, les résultats d'analyses sédimentologiques et les informations sur la qualité écologique des fonds.",
    "source-de-donnees": "Andromède Océanologie",
    frequency: "Tous les trois ans au titre de la DCE",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title":
      "SIRENHA : SuivI des REssources Naturelles Halieutiques par Acoustique",
    abstract:
      "Mis en place dans le cadre de la surveillance des populations de poissons côtiers dans le suivi des masses d'eaux côtières, le dispositif de surveillance SIRENHA s'appuie sur un nouveau protocole de suivi halieutique. Basé sur une approche surfacique résultant de la collecte d'informations linéaires le long de lignes de navigation et de la détermination d'un indicateur surfacique, il vient compléter les approches ponctuelles (comptages ou vidéos sous-marines, ADNe ou encore acoustique passive). Ce dispositif s'insère dans une coopération plus vaste de surveillance des populations de poissons côtiers associant notamment l'Agence de l'Eau Rhône Méditerranée et Corse. Le principe du protocole utilisant un sondeur mono-faisceau est le suivant : un navire se déplace le long de trajectoires prédéfinies qui échantillonnent spatialement le domaine à surveiller (surface de référence : 250 ha). Le sondeur mono-faisceau installé sous le navire acquiert des données acoustiques dans la colonne d'eau, qui sont post-traitées de façon automatisée et aboutissent à une cartographie de l'indicateur surfacique ''Poissons'' appelé ISPRE-MED (Indicateur Surfacique de PRésence de poissons de pleine Eau de MEDiterranée) de maille carrée de 50 m de côté. L'indicateur est défini par unité de surface standard de la façon suivante : Nombre de détections / Nombre total de pings émis (par unité de surface) = ISPRE-MED. Un ping étant un ''tir'' acoustique. Outils disponibles : Une carte des sites de suivi de la biomasse halieutique est disponible dans le projet. En cliquant sur les différentes masses d'eau, l'utilisateur a accès aux valeurs de l'indicateur ISPRE-MED qualifiant l'abondance de biomasse présente par unité de surface, pour chaque campagne de mesure réalisée. La représentation cartographique de la valeur de l'ISPRE-MED est disponible sous la forme de mailles carrées ces derniers permettant de visualiser simultanément d'autres informations, par exemple les habitats (Couche Donia).",
    "source-de-donnees": "SEMANTIC (https://www.semantic-ts.fr/)",
    frequency: "Annuelle",
    partners:
      "Agence de l'Eau Rhône Méditerranée et Corse, Ifremer pour la campagne DCE",
  },
  {
    "data-lizmap-title": "SURFSTAT : Analyse surfacique des habitats marins",
    abstract:
      "Créé en 2013, le réseau SURFSTAT s'intègre dans le volet biologie du réseau DCE. Il a pour principal objectif d'apprécier par une approche statistique l'hétérogénéité écologique des fonds sous-marins dans l'espace et le temps entre 0 et 80 m de profondeur sur le littoral méditerranéen français. La description de l'hétérogénéité est essentielle pour évaluer la fragmentation et la connectivité des habitats. La première mission de ce réseau est de compléter la cartographie sous-marine des habitats en 2D existante (réalisation et étude de cartes géographiques) et d'établir la correspondance en 3D des habitats marins. La seconde est de proposer et mesurer différentes variables de composition et de configuration pouvant servir d'indicateurs surfaciques (= spatiaux) de la qualité des eaux côtières à partir de ces cartographies des habitats marins. SURFSTAT est donc un premier pas vers un moyen de surveillance à large échelle (avec grille d'interprétation) des habitats marins. Le projet SURFSTAT présente les principaux résultats de l'analyse surfacique appliquée à l'habitat Herbier à posidonie : Une carte de l'évolution globale de l'herbier à posidonie. Elle combine les évolutions en limite inférieure et en limite supérieure (comparaisons réalisées avec des photographies aériennes anciennes datant des années 1920 entre 0 et 15 mètres). Toutes les zones où l'état de l'herbier a été qualifié de régressif d'après la comparaison avec les photographies aériennes anciennes entre 0 et 15 mètres ont été cartographiées en matte morte sur cette carte d'évolution. En région PACA, la base de données MEDBENTH (Agence de l'Eau RMC / IFREMER) et le programme CARTHAM (AAMP/MEEDTL) ont permis de cartographier 70% du littoral jusqu'à environ 60 mètres de profondeur. Afin d'avoir des données cartographiques fiables, des campagnes de terrain ont été effectuées afin de compléter et d'actualiser ces données. Une représentation cartographique (selon une grille de pixels de 50 x 50 mètres) de l'indice de régression de l'herbier de Posidonie. Il correspond à la surface actuelle de la matte morte (ancienne et actuelle) sur la somme entre la surface de la matte morte (ancienne et actuelle) et la surface actuelle de l'herbier de posidonie. Une représentation cartographique (selon une grille de pixels de 50 x 50 mètres) de l'indice de diversité de Simpson. Cet indice est calculé de la manière suivante : D = ∑ Ni(Ni-1)/N(N-1) où D : Indice de Simpson, Ni : surface d'un habitat donné sur un pixel de 50 m de côté, N : surface totale des habitats. L'indice varie entre 0 et 1. Plus il se rapproche de 0, plus les chances d'obtenir des habitats différents sont élevées. Une représentation cartographique de la distribution de l'herbier de Posidonie selon les variables environnementales et l'indice de cohésion. Outils disponibles : L'outil de comparaison des données est disponible. Il permet à l'utilisateur de comparer une dizaine d'indices (non représentés sur medtrix) issus de l'analyse des biocénoses réalisée sous le logiciel R et ce à différentes échelles spatiales de comparaison (Méditerranée, Région, Masse d'eau côtière). Les indices 'herbier' concernent uniquement les herbiers de Posidonie (0-40m) et les indices 'paysages' prennent en compte tous les habitats (habitats prioritaires : herbier et coralligène & tous les autres détaillés dans le projet DONIA EXPERT ; 0-60m).",
    "source-de-donnees":
      "Andromède Océanologie (+ autres structures pour les données biocénoses, voir le projet Donia)",
    frequency: "Tous les deux ans",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title":
      "TEMPO : Suivi des herbiers à Posidonie en Méditerranée française",
    abstract:
      "TEMPO est le réseau de suivi des herbiers de Posidonie sur deux secteurs caractéristiques de cet écosystème clé de Méditerranée : la limite inférieure (limite d'extension la plus profonde) et la profondeur intermédiaire (-15 mètres ; profondeur représentative de l'herbier en Méditerranée ; Gobert et al., 2009). Ce réseau est opéré depuis 2011 par Andromède Océanologie avec le soutien de l'Agence de l'eau Rhône Méditerranée et Corse. Il s'étend sur l'ensemble de la façade méditerranéenne française bordée par les trois régions : Corse, région Sud, et Occitanie. Les objectifs sont de recueillir des données descriptives de l'état écologique et du fonctionnement des herbiers à Posidonie et de suivre leurs évolutions dans le temps et dans l'espace. TEMPO comprend actuellement 73 sites localisés en limite inférieure d'herbiers entre 5 et 40 m et 52 sites localisés à la profondeur intermédiaire (autour de -15 m). Chaque année, une région est suivie à la fin du printemps (mai-juin) afin de couvrir l'ensemble de la façade tous les trois ans. Tous les sites TEMPO font également l'objet d'un suivi de la température de fond (réseau CALOR), et certains d'un suivi poissons (réseau PISCIS) et d'écoute acoustique (réseau CALME opéré par la société Chorus). Les indicateurs de l'état bioacoustique des sites d'herbier (invertébrés, poissons, espèces cibles (=corbs) et index d'anthroposation) sur la période 2021-2023 issus de ce réseau CALME sont ajoutés au projet. En LI, des mesures de vitalité (densité et déchaussement des faisceaux, taux de rhizomes plagiotropes, type et profondeur de la limite) sont réalisées, des relevés des pressions observées, ainsi qu'une cartographie de l'herbier. Entre 2011 et 2016, seule la méthode de la télémétrie acoustique a été utilisée pour cartographier les limites inférieures d'herbiers. Entre 2016 et 2023, la photogrammétrie est utilisée pour l'étude et le suivi d'habitats marins, et notamment la modélisation des limites inférieures. Depuis 2023, seule cette méthode est appliquée pour réaliser la microcartographie. Elle permet de figer l'état de cet habitat dans le temps et joue ainsi un rôle dans la bancarisation du patrimoine écologique des sites suivis. Toutes ces données permettent de calculer un indice d'évolution surfacique de l'herbier, un EQR (Ecological Quality Ratio) et un indicateur de dynamique évolutive de l'herbier afin de déterminer le statut écologique de chaque site en limite inférieure. À la PI, trois indicateurs sont utilisés pour caractériser l'état de santé des herbiers et ainsi évaluer la qualité écologique des masses d'eau côtières : le PREI (Posidonia oceanica Rapid Easy Index; Gobert et al., 2009), établi selon les exigence de la DCE et intégré au réseau TEMPO en 2014 ; le BiPo (Biotic index based on P. oceanica ; Lopez y Royo et al., 2010) et l'EBQI (Ecosystem-Based Quality Index; Personnic et al., 2014) (testé uniquement entre 2015 et 2022). Ces sites se situent dans l'alignement des sites TEMPO existants en limite inférieure de l'herbier. Selon le protocole PREI, deux secteurs caractéristiques de l'herbier sont suivis (cinq paramètres y sont mesurés) : la limite inférieure (site TEMPO existant) et la profondeur intermédiaire. Le PREI nécessite des prélèvements de faisceaux de posidonie in situ qui sont ensuite analysées au laboratoire. Très similaire au PREI, l'indice BiPo2 permet de déterminer le statut écologique de chaque site en prenant en compte quatre paramètres basés sur la santé de la plante P. oceanica elle-même. L'indice EBQI quant à lui, se base sur un modèle de fonctionnement de l'écosystème qui prend en compte ses différents compartiments (= « box ») : posidonie, algues, herbivores, matière organique, petite faune, petits et grands prédateurs, oiseaux marins, et les interactions entre ces compartiments. Cet indice nécessite le prélèvement in situ de feuilles de posidonie qui sont ensuite analysées au laboratoire. Outils disponibles : En cliquant sur les différents sites TEMPO localisés en limite inférieure ou à la profondeur intermédiaire, ou encore sur les stations de surveillance acoustique (triangles vert foncé, triangle vert clair et étoile rouge), l'utilisateur accède à une fenêtre POP UP avec les caractéristiques principales du site, le modèle 3D (en limite inférieure) ainsi que les fiches de suivi complètes comprenant la description du site, des photos, l'analyse de la vitalité de l'herbier, les cartes de l'herbier réalisée par télémétrie acoustique et/ou photogrammétrie et celles de l'évolution temporelle, et les descripteurs acoustiques. L'outil de comparaison des données est disponible dans ce projet. Il permet à l'utilisateur de comparer les différents paramètres mesurés en limite inférieure (Valeur EQR, type et profondeur de la limite, densité de faisceaux et déchaussement de l'herbier) ainsi qu'à la profondeur intermédiaire (Valeur BiPo2, Valeur PREI, Valeur EBQI ; et variables associées : profondeur et type de limite inférieure, densité de faisceaux, longueur des feuilles, surface foliaire, charge épiphytaire et les différents compartiments de l'EBQI), pour un même site et/ou entre les différents sites. Un troisième tableau de comparaison de l'évolution de l'herbier dans le temps avec : (1) la surface comparée (m²) ; et (2) les pourcentages de discordance positive, discordance négative, et concordances calculés à partir des cartographies.",
    "source-de-donnees": "Andromède Océanologie",
    frequency:
      "Un suivi annuel par région (chaque région, Occitanie/PACA Ouest, PACA Est et Corse, est suivie tous les trois ans)",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title":
      "CARLIT : Évaluation de l'état écologique du littoral rocheux méditerranéen français",
    abstract:
      "Le réseau CARLIT est opéré par l'Institut Méditerranéen d'Océanologie avec le soutien de l'Agence de l'eau Rhône Méditerranée et Corse. Dans le cadre du contrôle de surveillance DCE-Bassin Rhône côtier Méditerranée, la mise en œuvre du descripteur 'Macroalgues' a été faite depuis le printemps 2007 en utilisant la méthode CARLIT. Les communautés rocheuses des étages médio- et infralittoraux (frange supérieure de l'étage infralittoral souvent émergée), la géomorphologie et la nature de la roche ont été cartographiées à l'échelle 1/2 500ème. Un niveau de sensibilité écologique face aux perturbations sur une échelle de 1 (peu sensible) à 20 (très sensible) est attribué à chaque communauté. Les communautés ayant les niveaux de sensibilité les plus forts représentent les communautés climax de la zone littorale. Par une analyse géo-référencée, un indice de qualité environnementale est calculé, et permet ainsi de déterminer, pour chaque masse d'eau, un statut écologique établi suivant les critères de la Directive Cadre Européenne sur l'Eau. Les littoraux sédimentaires sont ignorés à l'exception des baies naturelles très fermées où les phanérogames peuvent être abondantes, ainsi que l'intérieur des ports et des marinas. Ces deux dernières zones étant trop perturbées, elles nécessitent l'utilisation d'autres indices comme par exemple l'analyse de l'eau. L'intégralité des côtes rocheuses françaises méditerranéennes a été cartographiée depuis 2007. Une deuxième vague d'évaluation a commencé depuis 2012. La méthode CARLIT (CARtographie LITtorale) développée par Ballesteros et al., 2007, consiste à mesurer l'abondance et la distribution des communautés ou espèces de macroalgues dominantes présentes sur les substrats rocheux de l'étage médiolittoral et de l'horizon supérieur de l'étage infralittoral (0-50 cm de profondeur) en fonction de la géomorphologie de la côte (présence de falaise supérieure à 15 m de hauteur) et de la nature du substrat (naturel, artificiel, etc.). L'abondance des communautés est cartographiée à partir d'une petite embarcation longeant la côte au plus près du littoral et à 4-5 km/h. La méthode ne s'applique donc pas à des masses d'eau dont la côte est sableuse, où le descripteur macroalgues n'est pas pertinent. Par une analyse géoréférencée, un indice de qualité environnementale (EQR) est calculé, et permet ainsi de déterminer, pour chaque masse d'eau, un statut écologique (ES) établi suivant les critères de la Directive Cadre Européenne sur l'eau. Outils disponibles : Une fois que vous avez coché la couche 'Etat écologique' souhaitée, en cliquant sur chaque masse d'eau côtière, une fenêtre POP UP s'affiche à gauche de la carte. Vous pouvez ainsi accéder aux caractéristiques de la masse d'eau, au rapport scientifique et à l'atlas cartographique.",
    "source-de-donnees": "Institut Méditerranéen d'Océanologie (MIO)",
    frequency: "Tous les trois ans",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title":
      "LAGMED : Suivi de la qualité des eaux lagunaires en Méditerranée française",
    abstract:
      "Les lagunes sont des milieux riches mais fragiles, au fonctionnement complexe et particulièrement exposés aux pressions physiques et aux pollutions compte tenu de la forte anthropisation de leurs bassins versants. Les enjeux de restauration sont forts et clairement identifiés dans le SDAGE (Schéma Directeur d'Aménagement et de Gestion des Eaux) pour parvenir à progresser vers le bon état exigé par la DCE (Directive Cadre Eau). Les suivis opérés sur les lagunes dans le cadre de la Directive Cadre Eau (DCE) concernent l'ensemble des lagunes, des plus marinisées (suivis opérés par Ifremer depuis 2006) au plus dessalées (suivis opérés par la Tour du Valat depuis 2013 - après un projet préliminaire en 2010). Le programme de surveillance demandé par la DCE permet de suivre l'évolution de l'état des masses d'eau et les effets de la mise en œuvre des actions de reconquête du bon état. Compte tenu des enjeux spécifiques aux lagunes - plus de 85 % n'étant pas en bon état - un effort de surveillance important est engagé sur ces milieux. Les suivis ont permis d'acquérir de nombreuses données sur la biologie et la chimie. Les données concernant la biologie portent sur le phytoplancton, les macrophytes et le benthos de substrat meuble ainsi que la physico-chimie de l'eau qui constitue un paramètre de soutien à la biologie. Ils constituent les descripteurs de l'état écologique. L'état de la masse d'eau est donné par l'état du descripteur le plus dégradé. Les données concernant la chimie (contaminants métalliques et organiques prioritaires) proviennent de suivis réalisés dans le biote (cagging de moules sur la base de la méthodologie RINBIO) et dans l'eau (échantillonneurs passifs intégratifs). Les valeurs de chaque substance prioritaire sont comparées aux Normes de Qualité Environnementales (NQE) pour établir l'état chimique. Une masse d'eau est considérée en bon état chimique lorsqu'aucune concentration d'un polluant prioritaire ne dépasse sa NQE. Outils disponibles : Des cartes de l'état chimique, de l'état écologique et de l'état général, ainsi que des descripteurs chimiques (matière vivante et eau) et écologiques (hydrologie, phytoplancton, macrophytes, benthos) des masses d'eau sont visibles pour les années 2006 à 2018. L'utilisateur peut également accéder à la localisation des différents points de surveillance et stations le long du littoral. L'outil de comparaison des données est disponible dans ce projet. Il permet à l'utilisateur de comparer l'état des masses d'eau de transition entre 2006 et 2018. Un curseur imagé est associé à chaque paramètre comparé : sont alors affichées les valeurs minimale, maximale et moyenne observées. Chaque couleur correspond à un cinquième de l'étendue des valeurs observées à l'échelle de comparaison voulue, c'est à dire celle de la masse d'eau ou de la Méditerranée pour le paramètre concerné. Significations des données : écologie = 0 (pas de données), 1 (très bon), 2 (bon), 3 (moyen), 4 (médiocre) et 5 (mauvais) & chimie = 0 (pas de données), 1 (bon) et 5 (mauvais).",
    "source-de-donnees":
      "Ifremer, Tour du Valat, l'AERMC (Réseaux du contrôle de surveillance DCE, réseaux du contrôle opérationnel DCE, dire d'experts)",
    frequency: "Tous les trois ans au titre de la DCE",
    partners:
      "Agence de l'eau Rhône Méditerranée et Corse, IFREMER, Tour du Valat",
  },
  {
    "data-lizmap-title":
      "LITTOMED : Suivi de la qualité des eaux côtières en Méditerranée française",
    abstract:
      "La mise en œuvre des réseaux de surveillance de la Directive Cadre Eau a permis d'acquérir de nombreuses données sur la biologie et la chimie. Plus d'informations sur les réseaux DCE sur http://www.rhone-mediterranee.eaufrance.fr/surveillance/reseaux/r-c-surveillance.php. Les données concernant la biologie portent sur le phytoplancton, les macro-algues, le benthos de substrat meuble, l'herbier de posidonie ainsi que la physico-chimie de l'eau qui constitue un paramètre de soutien à la biologie. Ils constituent les descripteurs de l'état écologique. L'état de la masse d'eau est donné par l'état du descripteur le plus dégradé. Les données concernant la chimie (contaminants métalliques, organiques et pesticides) proviennent des réseaux RINBIO (caging de moules) et PEPS (échantillonneurs passifs). Ils sont comparés aux Normes de Qualité Environnementales (NQE) pour établir l'état chimique. Il suffit qu'une seule molécule soit au-dessus de la NQE pour que l'état chimique de la masse d'eau soit dégradé. Selon les obligations européennes, l'état écologique est établi à l'aide des descripteurs macroalgues, phytoplancton, benthos de substrat meuble et posidonie. Son évaluation comporte 5 classes : Très bon (bleu), Bon (vert), Moyen (jaune), Médiocre (orange) et Mauvais (rouge). La couleur attribuée à la masse d'eau est celle de la valeur la plus déclassante de tous les descripteurs écologiques. L'état chimique est établi pour 41 substances (33 substances prioritaires et 8 substances dangereuses). Contrairement à l'état écologique, il ne comporte que deux classes, respect ou non-respect des NQE. On associe alors un code couleur : le bleu indique un bon état chimique, le rouge quant à lui révèle un dépassement des normes de qualité environnementales pour un ou plusieurs éléments chimiques. Outils disponibles : Des cartes de l'état chimique, de l'état écologique et de l'état général, ainsi que des descripteurs écologiques (hydrologie, phytoplancton, posidonies, macroalgues, benthos) des masses d'eau sont visibles pour les années 2006 à 2018. L'utilisateur peut également accéder à la localisation des différents points de surveillance le long du littoral. L'outil de comparaison des données est disponible dans ce projet. Il permet à l'utilisateur de comparer l'état des masses d'eau côtières entre 2006 et 2018. Significations des données : écologie = 0 (pas de données), 1 (très bon), 2 (bon), 3 (moyen), 4 (médiocre) et 5 (mauvais) & chimie = 0 (pas de données), 1 (bon) et 5 (mauvais). L'état des eaux côtières est mis à jour tous les 3 ans au titre de la DCE. Ces réseaux sont opérés par l'Ifremer, Andromède Océanologie, le MIO et la STARESO.",
    "source-de-donnees":
      "Agence de l'eau Rhône Méditerranée et Corse, IFREMER, Andromède Océanologie, STARESO. Réseaux du contrôle de surveillance DCE, réseaux du contrôle opérationnel DCE, réseaux complémentaires « macro-algues », « posidonie TEMPO », RINBIO et PEPS, dire d'experts",
    frequency: "Tous les trois ans au titre de la DCE",
    partners:
      "Agence de l'eau Rhône Méditerranée et Corse, IFREMER, Andromède Océanologie, STARESO",
  },
  {
    "data-lizmap-title":
      "STARE-CAPMED : STAtion of Reference and rEsearch on Change of local and global Anthropogenic Pressures on Mediterranean Ecosytems Drifs",
    abstract:
      "Le projet STARECAPMED (STAtion of Reference and rEsearch on Change of local and global Anthropogenic Pressures on Mediterranean Ecosystems Drifts) a pour objectif principal de faire de la baie de Calvi un site atelier de référence en Méditerranée et de permettre l'étude des liens entre l'état des écosystèmes marins et l'influence des pressions humaines (lien état-pression). La baie de Calvi est aussi un site privilégié pour étudier les effets du changement climatique sur l'état et le fonctionnement des écosystèmes marins. Ainsi, ce site atelier analyse aussi bien les pressions locales typiques méditerranéennes (fréquentation plaisancière, pêche artisanale et récréative, aquaculture, plongée sous-marine, émissaire de station d'épuration, zone portuaire, pollution…) et leurs incidences potentielles sur le milieu marin que les processus océanographiques à plus grande échelle qui affectent la Méditerranée. Par ailleurs, le projet permet la connaissance du contexte environnemental de la Baie de Calvi et offre ainsi un cadre propice au déploiement de dynamiques scientifiques externes à STARESO (chercheurs, instituts, associations), qu'elles soient locales ou internationales, et dont les résultats enrichissent in fine STARECAPMED. Enfin, STARECAPMED vise également à tester de nouvelles approches et développer de nouveaux outils afin d'accompagner les politiques locales en faveur d'une protection de l'environnement marin et orienter les politiques d'adaptation face au changement climatique. L'ensemble des travaux menés dans le cadre du projet sont compartimentés en plusieurs axes de recherche s'interconnectant à savoir : Météorologie, cadre hydrographique et physico-chimique ; Écosystème planctonique ; Suivi et quantification des pressions ; Benthos de substrats meubles ; Phanérogames marines ; Mouillages et processus d'altération des herbiers à posidonies ; Benthos de substrat dur et faune vagile ; Peuplements ichyologiques ; Associations algales ; Écotoxicologie ; Pollutions plastiques et microplastiques ; Zones protégées, espèces nouvelles, recrutement ; Bilan CO2 des écosystèmes. Un des axes de recherche du projet assure le suivi des paramètres physico-chimiques et planctoniques de la colonne d'eau. Ceux-ci sont effectués au niveau de quatre stations de référence à savoir Tête de Canyon, Point 60m, Site DCE 40m et Port de STARESO et cinq stations soumises à des pressions anthropiques: l'embouchure du Fiume Seccu, l'émissaire de la station d'épuration de Calvi, les cages d'aquaculture, la zone de mouillage organisée de Calvi et la zone de forte fréquentation plaisancière en baie de l'Alga. A titre d'exemple non exhaustif d'acquisition de la donnée, pour la station « Tête de Canyon » sont disponibles les variations de température, d'oxygène dissous, de salinité de 2012 à 2022, les variations de concentrations en chlorophylle a et de nutriments (éléments azotés, phosphates, silicates) de 2012 à 2021 ou encore la tendance de la température en surface depuis 1981 au niveau du Port de STARESO. Parmi les différents suivis visant à définir l'état, l'évolution et le fonctionnement des écosystèmes (coralligène, herbiers, substrat meuble, compartiment planctonique, etc.), un recensement du recrutement des langoustes rouges (Palinurus elephas) est par exemple effectué annuellement sur trois stations identifiés comme propices pour l'installation de juvéniles de langouste rouge : Punta Revellata, St François et le cantonnement de pêche de Calvi (Réserve). Un exemple de travaux concernant la quantification de l'influence des activités anthropiques est celui de l'étude de la plaisance dans une zone fortement fréquentée. Ces dynamiques sont quantifiées via différentes méthodologies de suivi incluant comptages semi-automatisés, détermination de la qualité de la macrofaune benthique ou encore réalisations de cartes de biocénose benthique de résolution centimétrique. En parallèle de la quantification de l'impact des pressions anthropiques, il est également réalisé des démarches pour faciliter la restauration des milieux avec par exemple la mise en place d'un protocole expérimental de restauration d'herbier de Posidonie endommagé exclusivement par l'ancrage. Enfin, à travers le site atelier STARECAPMED, STARESO a développé une série d'indices et indicateurs de la qualité des masses d'eau et des écosystèmes marins qui sont mesurés à haute fréquence dans la baie de Calvi : AMBI, CARLIT, FAST, LIMA, ICAr, PREI. Outils disponibles : L'utilisateur peut visualiser les données concernant le recrutement des langoustes rouges, Palinurus elephas (2012 à 2022), les paramètres physico-chimiques et biologiques de la colonne d'eau et les différents indices de qualification écologique mesurés (AMBI, CARLIT, FAST, LIMA, ICAr, PREI). Une cartographie des herbiers à Posidonie (2002, 2012 et 2018) et des biocénoses marines (2018) est visible au niveau de la Baie de Calvi, ainsi que la délimitation des espaces protégés (ZPS, cantonnement de pêche de la Revellata). L'outil de comparaison des données est disponible dans ce projet. Il permet à l'utilisateur de comparer des différents indices de qualification écologique (AMBI, CARLIT, FAST, LIMA, ICAr, PREI), le recrutement des langoustes et le flux métabolique entre les différents sites suivis. Les travaux du site atelier sont financés par l'Agence de l'Eau Rhone Méditerranée Corse, la Collectivité Territoriale de Corse et la Stareso. Le projet est réalisé en collaboration scientifique avec l'Université de Liège.",
    "source-de-donnees": "STARESO",
    frequency: "Annuelle",
    partners:
      "Stareso, Université de Liège, Collectivité de Corse, Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title":
      "IMPACT : Modélisation des pressions anthropiques côtières et des seuils de vulnérabilité",
    abstract:
      "IMPACT est le réseau de suivi des pressions anthropiques côtières en Méditerranée française, opéré par Andromède océanologie avec le soutien de l'Agence de l'eau Rhône Méditerranée et Corse. Les activités humaines induisent des pressions importantes sur le milieu marin, et en particulier sur les écosystèmes côtiers. Les modèles spatiaux disponibles ici ont pour objectif d'améliorer la connaissance des liens entre pressions humaines et statut des écosystèmes côtiers. En corrélant spatialement ces données, il devient envisageable de réaliser une modélisation à grande échelle (Méditerranée française) de l'étendue et de l'interaction des pressions anthropiques sur le milieu marin. Ce modèle pourra être repris dans différents domaines : (1) Aide à la décision en ciblant les zones à forts enjeux environnementaux ; (2) Base à l'élaboration d'indicateurs écologique ; (3) Outil prédictif pour la gestion de la zone côtière. En 2015, dix pressions anthropiques étaient considérées pour leur origine et leur intensité : l'urbanisation, les aménagements côtiers, le mouillage des bateaux, la population, l'érosion/l'aggradation côtière, l'agriculture, les effluents industriels, l'aquaculture, la pêche et les rejets urbains. En 2018, puis 2021, une mise à jour des cartes de pressions a été réalisée. Treize pressions anthropiques sont maintenant considérées pour leur origine et leur intensité : l'urbanisation/la population, les aménagements côtiers, le mouillage petite plaisance, le mouillage grandes unités, l'érosion/l'aggradation côtière, l'agriculture, les effluents industriels, l'aquaculture, la pêche professionnelle hors chalut, le tourisme balnéaire, le trafic maritime, la pollution par les cours d'eau, et les rejets urbains. Elles sont représentées selon un gradient allant de 0 (pas de pression) à 1 (pression maximale). Les données spatiales des pressions et des onze différents habitats marins (projet DONIA expert) sont ensuite assemblées et les scores d'impacts cumulés (somme des pressions et de leurs impacts selon l'habitat dominant du pixel) sont calculés par pixel selon la méthodologie de Micheli et al (2013) et Halpern et al (2008). Afin de mieux comprendre l'impact relatif des différentes pressions sur le déclin des herbiers de posidonie, les données sont transformées selon une grille de 50 x 50 m (la grille initiale et une grille de cellules de 100 x 100 m donnant de moins bons résultats). Le taux de déclin (=% de matte morte, valeurs nulles exclues de l'analyse) est ensuite modélisé en fonction des pressions et de la profondeur en utilisant la méthode des « Random Forests » (Breiman, 2001 ; Richard Cutler et al., 2007). Un effet seuil (relation non linéaire) est recherché pour chaque pression et la distance au seuil est calculée dans chaque pixel puis mise à l'échelle -1 à 1 (seuil = 0). Une combinaison des calques des différentes distances aux seuils selon les pressions est construite et visualisée selon quatre catégories égales (-1 à 0,5 ; 0,5 à 0 ; 0 à 0,5 et 0,5 à 1). La pression mouillage a été mise à jour : deux cartes de pression de mouillages ont été produites : une carte pour la petite plaisance (navires jusqu'à 24 m de long), et une carte pour le mouillage des grosses unités. Les pressions issues de la population côtière et de l'urbanisation ont été regroupées en une seule pression « urbanisation et population ». Trois nouvelles pressions ont été ajoutées au projet, il s'agît du tourisme balnéaire, du trafic maritime et de la pollution par les cours d'eau. Une méthodologie détaillée de ce projet est disponible dans Holon et al. (2015). Vous trouverez également une description des seuils de vulnérabilité dans la publication Holon et al. (2018). La version de 2021 des cartes de pressions anthropiques est disponible sur la plateforme SEANOE. Les publications scientifiques sont téléchargeables dans l'encart en dessous de la légende en cliquant sur la fenêtre POP UP.",
    "source-de-donnees": "Andromède Océanologie",
    frequency: "Annuelle",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title": "Projet 'Sciences participatives'",
    abstract:
      "La meilleure compréhension des mécanismes complexes de fonctionnement des écosystèmes marins nécessite la collecte et l'analyse d'une quantité importante de données. Les sciences participatives sont des programmes mixtes scientifiques/public qui proposent aux citoyens, spécialistes ou amateurs, de s'investir dans la préservation de la biodiversité et de contribuer à l'amélioration des connaissances par la collecte de données. Malgré la multitude de programmes existants en mer (BioLit - https://www.biolit.fr/ ; Fish Watch - https://www.fish-watch.org/ ; MedMIS - http://www.iucn-medmis.org/ ; BioObs - https://bioobs.fr/ ; ou encore le réseau régional des Sentinelles de la mer – Occitanie (https://www.sentinellesdelamer-occitanie.fr/), la mise en place d'outils participatifs est beaucoup plus délicate sous l'eau que sur terre, l'accessibilité étant restreinte aux plongeurs. Malgré l'importance des sciences participatives, un tel projet n'est pas dénué de défauts. En effet, les participants ne sont pas tous des professionnels, ce qui soulève naturellement des questions quant à leur compétence pour identifier sans erreur une espèce donnée. Chaque participant n'a pas la même perception, en termes de surface de recouvrement par exemple (faible, moyen, fort), de taille (petite, moyenne, grande) ou d'abondance. Il est donc indispensable d'instaurer un cadre et d'avoir des éléments de référence : (1) définir un protocole précis fixant les conditions de réalisation des observations (nombre d'observateurs, date, heure, indication du lieu, coordonnées GPS précises, etc.) ; (2) mettre à disposition des plaquettes de reconnaissance d'espèces afin de limiter les erreurs d'identification ; (3) inciter les participants à prendre des photos à des fins de validation ultérieure par un expert ; (4) établir des valeurs/classes de référence et décrire les différents cas de figures possibles en termes de surface de recouvrement, de taille ou d'abondance par exemple ; (5) animer et faire vivre le projet ; (6) donner l'accès aux données aux participants (une fois validées) et en assurer l'appropriation pour éviter les utilisations postérieures erronées. Ouvert au grand public (aucune inscription à la plateforme requise), le projet « Sciences participatives » a pour vocation de servir de plateforme de recensement des différentes pressions observées par les usagers du milieu marin : • Perturbations biologiques (algues filamenteuses et espèces invasives : Caulerpa cylindracea, Caulerpa taxifolia, Womersleyella setacea, Siganus rivulatus, Pterois miles, ...) ; • Perturbations physiques (engins de pêche, traces de mouillage, structures artificielles, blocs de mattes arrachés) ; • Pollutions (hydrocarbures, macrodéchets, ...). Un outil de signalisation permet aux différents participants de renseigner la nature de l'observation (présentées ci-dessus), les informations associées (abondance, taille, surface de recouvrement), le type d'observation réalisée (diffuse ou ponctuelle), la date, le lieu-dit, ainsi que leur nom, prénom et e-mail. Il sera également possible d'ajouter une photo. Ce projet participatif permettra d'actualiser les projets FILAM'ED, Donia et Impact. Les données ajoutées par les citoyens seront en attente jusqu'à validation par un des gestionnaires de la plateforme MEDTRIX, puis accessibles directement sur le projet.",
    "source-de-donnees": "Andromède Océanologie, Communauté Donia",
    frequency: "Tous les trois ans",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title": "Suivi du mouillage",
    abstract:
      "Le mouillage des bateaux est responsable de dommages physiques sur les habitats marins sensibles comme les herbiers. Pour éviter les conflits d'usage et faciliter la gestion de ces impacts, il est essentiel de localiser et quantifier les zones subissant une pression de mouillage. Les données AIS (système d'identification automatique) permettent d'estimer cette pression subie par les habitats marins côtiers de Méditerranée française. Les AIS sont des outils de sécurisation de la navigation obligatoires depuis fin 2004 à bord des navires de plus de 300 tonneaux engagés dans des eaux internationales et des navires de plus de 500 tonneaux non engagés dans des eaux internationales et pour tous les navires commerciaux transportant des passagers, peu importe leur taille, pour des raisons de sécurité (International Marine Organization (OMI), 2016). Pour suivre la pression du mouillage le long des côtes françaises méditerranéennes, les chercheurs d'Andromède Océanologie ont analysé les données AIS des années 2010 à aujourd'hui. Entre 2010 et 2024 cela représente quinze années de données qui intègrent 38328 navires pour 352986 mouillages dont 168494 mouillages pour des bateaux de taille supérieure à 24 mètres et 184492 pour des navires de taille inférieure à 24 mètres. Les données présentées dans ce projet concernent : - La localisation des mouillages AIS entre 2010 et aujourd'hui classés par année et classe de taille des bateaux en distinguant les mouillages de petite plaisance (navires de taille inférieure à 24m) et de la grande plaisance (navires de taille supérieure à 24m) ; - les données de réglementation ; - la cartographie des écosystèmes sensibles (récifs coralligènes, herbier de posidonie et matte morte) et des traces de mouillages ; - une carte de pression du mouillage dû à la grande plaisance (bateaux > 24 mètres de long) entre 2017 et 2018, entre 2019 et 2020 et entre 2021 et 2022 ; - Une carte de pression du mouillage de la petite plaisance (bateaux < 24 mètres de long) entre 2019 et 2020, et entre 2021 et 2022. Ces pressions sont calculées en fonction de la durée de présence des bateaux dans chaque pixel de 50 x 50 mètres.",
    "source-de-donnees":
      "AIS : Marine traffic, Vesselfinder, Aishub (+ autres structures pour les données biocénoses, voir le projet Donia)",
    frequency: "Annuelle",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title":
      "Typologie des outils de gestion de l'espace littoral et marin",
    abstract:
      "Les politiques de gestion de l'espace littoral et marin se sont fortement développées ces dernières années sous l'impulsion d'initiatives locales, de bassins ou européennes. Elles prennent de nos jours des formes différentes au travers de contrat de milieu, SAGE côtiers ou aires marines protégées. Ces outils de gestion permettent de coordonner les actions de protection et de restauration des écosystèmes marins et côtiers à différentes échelles territoriales. Ils s'appuient sur des diagnostics environnementaux, des objectifs de qualité et des plans d'actions spécifiques adaptés aux enjeux locaux. La typologie présentée dans ce projet recense et caractérise les différents outils de gestion existants sur la façade méditerranéenne française, permettant ainsi une meilleure compréhension des dispositifs de protection et de gestion des espaces littoraux et marins.",
    "source-de-donnees": "Agence de l'eau, Office française de la Biodiversité",
    frequency: "ILS N'OPERENT PLUS",
    partners:
      "Agence de l'eau Rhône Méditerranée et Corse, Office française de la Biodiversité",
  },
  {
    "data-lizmap-title": "Initiative PIM : Petites Iles de Méditerranée",
    abstract:
      "Protégées par leur relative inaccessibilité, les îles sont les derniers refuges d'une nature malmenée sur le littoral. En Méditerranée, on dénombre près de 15 000 îles et îlots dont plus de 1000 dans le bassin occidental. L'Initiative PIM (Petites Iles de Méditerranée) est un réseau d'acteurs engagés dans la préservation de ces espaces insulaires fragiles. Cette initiative vise à améliorer la connaissance et la gestion des petites îles méditerranéennes en développant des outils de suivi et de conservation adaptés. Le projet s'appuie sur des partenariats scientifiques et techniques pour caractériser la biodiversité insulaire, évaluer les pressions anthropiques et proposer des mesures de protection appropriées. Les données collectées permettent de mieux comprendre l'écologie insulaire et de contribuer à la préservation de ces écosystèmes uniques et menacés.",
    "source-de-donnees":
      "Andromède Océanologie, IFREMER, MEDOBS, MEDAM, Agence de l'eau RMC, SHOM, INSEE",
    frequency: "Annuelle",
    partners:
      "Agence de l'eau Rhône Méditerranée et Corse, Conservatoire du littoral, Andromède Océanologie, Initiative PIM",
  },
  {
    "data-lizmap-title":
      "CHAMILA : Cartographie des habitats en milieux lagunaires",
    abstract:
      "Ce projet vise à définir une typologie adaptée au contexte des lagunes méditerranéennes et à établir une première cartographie des habitats au sein des lagunes méditerranéennes françaises qui tiendra compte de leurs variabilités temporelle et spatiale. Les lagunes méditerranéennes constituent des écosystèmes complexes et fragiles, caractérisés par une forte variabilité environnementale et une biodiversité spécifique. Le projet CHAMILA s'appuie sur des méthodes de cartographie standardisées pour caractériser les différents habitats lagunaires et leur distribution spatiale. Cette cartographie permet de mieux comprendre la structure et le fonctionnement de ces écosystèmes, d'identifier les zones de forte valeur écologique et de contribuer à leur protection et gestion durable.",
    "source-de-donnees": "IFREMER, Agence de l'eau Rhône Méditerranée et Corse",
    frequency: "Tous les 3 à 6 ans",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title": "DONIA : Naviguer, Ancrer et Protéger",
    abstract:
      "Ce projet est en lien avec l'application mobile DONIA® qui permet aux plaisanciers, plongeurs, pêcheurs et à tous les amoureux de la mer, d'échanger des informations tout en contribuant à protéger les écosystèmes marins sensibles, dans le respect de la loi. L'application DONIA® propose une cartographie interactive des habitats marins sensibles et des zones de mouillage autorisées, permettant aux usagers de la mer de naviguer de manière responsable. Elle intègre également un système de signalement participatif pour recenser les observations d'espèces marines et les pressions anthropiques. Cette approche collaborative contribue à améliorer la connaissance des écosystèmes marins tout en sensibilisant les usagers aux enjeux de protection du milieu marin.",
    "source-de-donnees": "Andromède Océanologie",
    frequency:
      "Annuelle pour le projet ; un à 6 ans selon les secteurs pour la cartographie",
    partners: "Agence de l'eau Rhône Méditerranée et Corse, NAOS",
  },
  {
    "data-lizmap-title":
      "DONIA EXPERT : Cartographie détaillée des habitats marins",
    abstract:
      "La cartographie des fonds marins représente un enjeu pour la connaissance et la gestion des écosystèmes marins quel que soit l'échelle spatiale considérée. Le projet DONIA EXPERT propose une cartographie détaillée et précise des habitats marins côtiers de Méditerranée française. Cette cartographie s'appuie sur des méthodes d'acquisition et de traitement de données standardisées, permettant de caractériser la distribution spatiale des différents habitats marins (herbiers de posidonie, récifs coralligènes, biocénoses benthiques, etc.). Les données cartographiques produites constituent un outil essentiel pour la gestion et la protection des écosystèmes marins, en permettant d'identifier les zones de forte valeur écologique et de planifier les actions de conservation appropriées.",
    "source-de-donnees": "Andromède Océanologie",
    frequency: "Tous les 5 à 10 ans",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title":
      "Portail Halieutique Méditerranéen - Réglementation de la pêche",
    abstract:
      "Les informations et données sur l'activité de pêche sont nombreuses, éparses et parfois difficiles d'accès pour l'usager. La Direction des Pêches Maritimes et de l'Aquaculture (DPMA) a réalisé un premier outil de connaissance, de gestion et d'aide à la décision sur l'activité halieutique française. Ce portail halieutique méditerranéen centralise les informations réglementaires relatives à la pêche en Méditerranée française, facilitant ainsi l'accès aux textes législatifs, aux arrêtés préfectoraux et aux mesures de gestion des ressources halieutiques. Il constitue un outil de référence pour les professionnels de la pêche, les gestionnaires et les usagers souhaitant s'informer sur les réglementations en vigueur et les mesures de protection des écosystèmes marins.",
    "source-de-donnees":
      "Journal officiel de la République Française (JORF) : www.legifrance.gouv.fr / Centre National de Surveillance des Pêches sur le site de la réglementation en matière de contrôle des pêches : www.legipeche.gouv.fr",
    frequency: "Annuelle",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title": "MAGMA : Observatoire par planeur sous-marin",
    abstract:
      "Le projet « MAGMA » vise à déployer les planeurs sous-marins SeaExplorer pour apporter une réponse éco-efficiente pour l'acquisition de données en milieu marin. Mené par Alseamar en collaboration avec l'Agence de l'eau le projet porte sur quatre missions glider s'étalant sur la période 2015/2018.",
    "source-de-donnees": "Alseamar, Chorus",
    frequency: "Tous les trois ans",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title":
      "MEDOBS : Observatoire aérien des usages en Méditerranée française",
    abstract:
      "L'observatoire MEDOBS est un observatoire arien des usages en mer conduit à travers un partenariat entre Air Attack Technologies et l'Agence de l'eau Rhône Méditerranée Corse.",
    "source-de-donnees": "Air Attack Technologies",
    frequency: "Annuelle",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title":
      "MEDOBS-SUB/OLPAC-MED : Observatoires citoyens des usages et pressions en mer",
    abstract:
      "Le Centre Permanent d'Initiatives pour l'Environnement (CPIE) Côte Provençale a développé en 2011, en partenariat avec l'Agence de l'eau Rhône Méditerranée Corse, un observatoire citoyen appelé MedObs-sub coordonné sur la façade méditerranéenne française.",
    "source-de-donnees": "CPIE Côte Provençale, Association Aqua Passion",
    frequency: "ILS N'OPERENT PLUS",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title":
      "MER-VEILLE : Observatoire des espèces et des paysages marins",
    abstract:
      "L'observatoire MER-VEILLE est un nouvel outil de suivi visuel des paysages sous-marins et des espèces. Il offre la possibilité à l'utilisateur de visualiser des photographies en grand format et de les comparer (pour un même site).",
    "source-de-donnees": "Andromède Océanologie",
    frequency: "?",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title":
      "NADOR : Observatoire de la Lagune de Marchica (MAROC)",
    abstract:
      "La lagune de Marchica (ou encore lagune de Nador) est l'unique lagune sur la façade méditerranéenne du Maroc. Elle constitue un exemple de zone côtière vulnérable en pleine mutation socio-économique.",
    "source-de-donnees": "INRH et Université Mohammed V de Rabat",
    frequency: "Tous les ans",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title":
      "OBLADES : Observatoire sur la Baie de la Ciotat des espèces sous-marines",
    abstract:
      "Le GPES (Groupement de Pêche et d'Etudes Sous-marines) est une association loi 1901 basée à La Ciotat. Le GPES est le plus ancien club de plongée subaquatique encore en activité à ce jour à l'échelle internationale.",
    "source-de-donnees": "GPES",
    frequency: "Mensuelle",
    partners:
      "Agence de l'eau Rhône Méditerranée et Corse, Université de Perpignan, Ecocéan, Andromède Océanologie",
  },
  {
    "data-lizmap-title": "OBSLAG : OBServatoire des LAGunes méditerranéennes",
    abstract:
      "Les lagunes sont des écosystèmes particulièrement vulnérables aux altérations physiques et aux pollutions. Les enjeux de restauration de ces écosystèmes sont forts, notamment dans un contexte de changement climatique.",
    "source-de-donnees": "Ifremer, Tour du Valat",
    frequency: "Tous les 3 à 6 ans",
    partners:
      "Agence de l'eau Rhône Méditerranée et Corse, IFREMER, Tour du Valat",
  },
  {
    "data-lizmap-title":
      "OSE-MED : Observatoire socio-économique des usages du littoral et de la mer",
    abstract:
      "L'observatoire OSEMED a été initié en 2009 à travers un partenariat établi entre l'IRSN et l'Agence de l'eau RMC. Il vise à acquérir à l'échelle de la façade méditerranéenne de l'information récurrente sur la socio-économie des usages du littoral et de la mer à l'échelle de la façade Méditerranée.",
    "source-de-donnees": "Université de Versailles (CEARC) et IRSN",
    frequency: "Tous les 5 à 10 ans",
    partners:
      "Agence de l'eau Rhône Méditerranée et Corse, IRSN, Université de Versailles (l'UVSQ-CEARC)",
  },
  {
    "data-lizmap-title":
      "Portail Halieutique Méditerranéen - Réglementation de la pêche 2",
    abstract:
      "Les informations et données sur l'activité de pêche sont nombreuses, éparses et parfois difficiles d'accès pour l'usager. La Direction des Pêches Maritimes et de l'Aquaculture (DPMA) a réalisé un premier outil de connaissance, de gestion et d'aide à la décision sur l'activité halieutique française.",
    "source-de-donnees":
      "Journal officiel de la République Française (JORF) : www.legifrance.gouv.fr / Centre National de Surveillance des Pêches sur le site de la réglementation en matière de contrôle des pêches : www.legipeche.gouv.fr",
    frequency:
      "L'actualisation est spécifique à chaque réseau présenté dans ce projet ; elle varie entre un, trois ou six ans",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title": "STERE 2024",
    abstract: "Projet STERE 2024",
    "source-de-donnees": "Andromède Océanologie",
    frequency: "Annuelle",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title": "SULUBAAI",
    abstract: "Projet SULUBAAI",
    "source-de-donnees": "Andromède Océanologie",
    frequency: "Tous les trois ans",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
  {
    "data-lizmap-title":
      "eREF : Etat de référence de la biodiversité en vertébrés dans les masses d'eau côtières méditerranéennes",
    abstract:
      "Ce projet fourni à l'utilisateur la possibilité de déposer sa propre liste d'espèces. Pour cela veuillez cliquer sur l'onglet \"Signaler\" en haut à gauche.",
    "source-de-donnees": "Andromède Océanologie",
    frequency: "Annuelle",
    partners: "Agence de l'eau Rhône Méditerranée et Corse",
  },
];

// Helper functions for easy integration
const medtrixMapsUtils = {
  // Get map by title
  getMapByTitle: (title) => {
    return medtrixMapsData.find((map) => map["data-lizmap-title"] === title);
  },

  // Get all maps
  getAllMaps: () => {
    return medtrixMapsData;
  },

  // Search maps by keyword
  searchMaps: (keyword) => {
    return medtrixMapsData.filter(
      (map) =>
        map["data-lizmap-title"]
          .toLowerCase()
          .includes(keyword.toLowerCase()) ||
        map.abstract.toLowerCase().includes(keyword.toLowerCase())
    );
  },

  // Get maps by frequency
  getMapsByFrequency: (frequency) => {
    return medtrixMapsData.filter((map) => map.frequency === frequency);
  },

  // Get maps by partner
  getMapsByPartner: (partner) => {
    return medtrixMapsData.filter((map) =>
      map.partners.toLowerCase().includes(partner.toLowerCase())
    );
  },

  // Get maps by source
  getMapsBySource: (source) => {
    return medtrixMapsData.filter((map) =>
      map["source-de-donnees"].toLowerCase().includes(source.toLowerCase())
    );
  },
};

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = { medtrixMapsData, medtrixMapsUtils };
}
