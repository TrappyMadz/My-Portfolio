import { Skills, type Skill, Type } from './Skills'

interface Project {
  name: String
  imgPaths: String[]
  summary: String
  description: String
  skills: Skill[]
  appLink?: String
  gitLink: String
  type: String[]
}

const path = 'projectsPreviews/'

/** Image de secours pour les aperçus non encore fournis dans public/ */
const mockImg = (seed: string): String[] => [
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/400/300`,
]

export const Projects: Project[] = [
  {
    name: 'Doodlemon',
    imgPaths: [
      path + 'Vue-Card-Collection-Game/0.png',
      path + 'Vue-Card-Collection-Game/1.png',
      path + 'Vue-Card-Collection-Game/2.png',
      path + 'Vue-Card-Collection-Game/3.png',
      path + 'Vue-Card-Collection-Game/4.png',
    ],
    summary:
      'Jeu de collection de cartes interactif conçu avec Vue 3 et Pinia, intégrant des mécaniques de tirage aléatoire et des animations CSS avancées pour simuler la rareté.',

    description:
      "Développement d'un jeu de collection de cartes interactif (Doodlemon) en solo. Conçu pour recréer l'expérience de l'ouverture de boosters physiques, cette application Vue 3 s'appuie sur Pinia pour gérer la logique de tirage aléatoire et un inventaire dynamique. J'ai conçu l'ensemble de l'interface et de la logique métier, en intégrant des effets visuels avancés en 'pure CSS' (modes de fusion, animations) pour valoriser la rareté des créatures dessinées à la main.",
    skills: [Skills.vue as Skill, Skills.css as Skill, Skills.ts as Skill],
    appLink: 'https://trappymadz.github.io/Vue-Card-Collection-Game/#/',
    gitLink: 'https://github.com/TrappyMadz/Vue-Card-Collection-Game',
    type: [Type.FRONTEND],
  },
  {
    name: 'RAG Multimodal',
    imgPaths: [path + 'rag_question_llm/0.png', path + 'rag_question_llm/1.png'],
    summary:
      'Participation à IA4Industries 2026. Assistant IA industriel. Combine VLM et RAG pour automatiser le diagnostic de pannes depuis des schémas techniques.',

    description:
      "Développement d'un assistant de diagnostic industriel (Support Bot). Face à des manuels de maintenance complexes, cette solution RAG multimodale utilise un modèle de vision (VLM) pour interpréter les arbres décisionnels et guider les opérateurs via une interface conversationnelle fluide. Je me suis occupé de la partie IA tandis que mes collègues ont produit la documentation et l'interface graphique.",
    skills: [
      Skills.langchain as Skill,
      Skills.python as Skill,
      Skills.rag as Skill,
      Skills.iagen as Skill,
      Skills.vec as Skill,
    ],
    gitLink: 'https://github.com/Groupe-2-LLM/rag_question_llm?tab=readme-ov-file',
    type: [Type.BACKEND],
  },
  {
    name: "Freddy's Organizer",
    imgPaths: [
      path + 'RestaurantManagementWebApp/0.png',
      path + 'RestaurantManagementWebApp/1.png',
      path + 'RestaurantManagementWebApp/2.png',
      path + 'RestaurantManagementWebApp/3.png',
      path + 'RestaurantManagementWebApp/4.png',
      path + 'RestaurantManagementWebApp/5.png',
    ],
    summary:
      "Gestionnaire JEE complet pour pizzerias thématiques avec système CRUD, inventaire d'animatroniques et suivi des tâches journalières.",

    description:
      "Une application web JEE complète pour gérer une chaîne de pizzerias inspirée de Five Nights at Freddy's. Implémente un CRUD complet pour les inventaires (pizzas, animatroniques) et les adhérents, avec une gestion dynamique des tâches journalières et des relations complexes entre restaurants et mascottes. Une application web JEE complète pour gérer une chaîne de pizzerias inspirée de Five Nights at Freddy's. Implémente un CRUD complet pour les inventaires (pizzas, animatroniques) et les adhérents, avec une gestion dynamique des tâches journalières et des relations complexes entre restaurants et mascottes. Je me suis personnelement occupé de l'architecture, du code backend et du maquettage.",
    skills: [
      Skills.jee as Skill,
      Skills.designPatterns as Skill,
      Skills.java as Skill,
      Skills.mysql as Skill,
      Skills.html as Skill,
      Skills.css as Skill,
      Skills.js as Skill,
    ],
    gitLink: 'https://github.com/TrappyMadz/RestaurantManagementWebApp',
    type: [Type.FRONTEND, Type.BACKEND],
  },
  {
    name: 'AngularChuckNorris',
    imgPaths: mockImg('angular-chuck'),
    summary:
      "Client Angular consommant une API de citations Chuck Norris, routing et services HTTP.",
    description:
      "Petit site Angular pour explorer les APIs REST : composants, modules et affichage dynamique des réponses JSON. Données mockées pour la démo portfolio.",
    skills: [Skills.js as Skill, Skills.html as Skill],
    gitLink: 'https://github.com/example/AngularChuckNorris',
    type: [Type.FRONTEND],
  },
  {
    name: 'Ansible_Terraform_Deployment_Test',
    imgPaths: mockImg('ansible-terraform'),
    summary:
      'Playbooks Ansible et modules Terraform pour provisionner une stack de test reproductible.',
    description:
      "Infrastructure as code : inventaire Ansible, state Terraform distant et pipeline de déploiement automatisé. Données mockées.",
    skills: [Skills.linux as Skill, Skills.python as Skill],
    gitLink: 'https://github.com/example/Ansible_Terraform_Deployment_Test',
    type: [Type.INFRA],
  },
  {
    name: 'Be-careful-man-',
    imgPaths: mockImg('be-careful'),
    summary:
      'Projet créatif / jeu d’ambiance avec direction artistique soignée.',
    description:
      "Travail de conception visuelle et d’itération sur l’expérience utilisateur. Captures et assets mockés pour le portfolio.",
    skills: [Skills.blender as Skill, Skills.css as Skill],
    gitLink: 'https://github.com/example/Be-careful-man-',
    type: [Type.ART],
  },
  {
    name: 'C-blackJackGame',
    imgPaths: mockImg('blackjack-c'),
    summary:
      'Jeu de blackjack en console ou GUI minimaliste, logique de jeu et gestion du paquet en C.',
    description:
      "Implémentation des règles du vingt-et-un, tirages, scores et boucle de partie. Données mockées.",
    skills: [Skills.designPatterns as Skill, Skills.linux as Skill],
    gitLink: 'https://github.com/example/C-blackJackGame',
    type: [Type.BACKEND],
  },
  {
    name: 'CloudInfrastructure_FernandesLucas_OrsolleEthan_CharrierSimon',
    imgPaths: mockImg('cloud-infra-group'),
    summary:
      'Projet de groupe : architecture cloud, réseaux et services managés.',
    description:
      "Mise en place d’une infrastructure sur fournisseur cloud (VPC, groupes de sécurité, instances). Schémas et noms de ressources mockés.",
    skills: [Skills.linux as Skill, Skills.python as Skill],
    gitLink: 'https://github.com/example/CloudInfrastructure_FernandesLucas_OrsolleEthan_CharrierSimon',
    type: [Type.INFRA],
  },
  {
    name: 'Cubemap-Based Interior Window Material – UE5',
    imgPaths: mockImg('ue5-cubemap-window'),
    summary:
      'Matériau fenêtre intérieure basé sur cubemap pour Unreal Engine 5.',
    description:
      "Shader et setup de matériau pour réflexions d’intérieur cohérentes avec la scène. Rendu et paramètres documentés (mock).",
    skills: [Skills.blender as Skill, Skills.css as Skill],
    gitLink: 'https://github.com/example/ue5-cubemap-interior-window',
    type: [Type.ART],
  },
  {
    name: 'DatingWebSite',
    imgPaths: mockImg('dating-web'),
    summary:
      "Application de rencontres : profils, messagerie et suggestions d'affinités.",
    description:
      "Full stack avec API dédiée et interface riche côté client. Parcours utilisateur et persistance des données (contenu mocké).",
    skills: [Skills.vue as Skill, Skills.jee as Skill],
    gitLink: 'https://github.com/example/DatingWebSite',
    type: [Type.FRONTEND, Type.BACKEND],
  },
  {
    name: 'Highly Customizable Sign Material | Unreal Engine 5.3',
    imgPaths: mockImg('ue5-sign-material'),
    summary:
      'Matériau de panneaux / enseignes hautement paramétrable dans UE 5.3.',
    description:
      "Contrôles d’usure, couleurs et éclairage intégré pour des panneaux réutilisables dans plusieurs niveaux.",
    skills: [Skills.blender as Skill, Skills.css as Skill],
    gitLink: 'https://github.com/example/ue5-customizable-sign',
    type: [Type.ART],
  },
  {
    name: 'Java-test-dev-environment-with-docker-compose-',
    imgPaths: mockImg('java-docker-compose'),
    summary:
      'Environnement de dev Java reproductible avec Docker Compose.',
    description:
      "Services conteneurisés (base de données, broker, app) pour lancer la stack en une commande. Configuration mockée pour la démo.",
    skills: [Skills.linux as Skill, Skills.java as Skill],
    gitLink: 'https://github.com/example/Java-test-dev-environment-with-docker-compose-',
    type: [Type.INFRA],
  },
  {
    name: 'MadzAngularWebsiteDeploymentTest',
    imgPaths: mockImg('madz-angular-deploy'),
    summary:
      "Pipeline de build et déploiement d'une app Angular (pages GitHub, CI ou hébergeur).",
    description:
      "Tests d’intégration continue et publication des artefacts statiques. URL et secrets fictifs dans cette entrée mockée.",
    skills: [Skills.linux as Skill, Skills.js as Skill],
    gitLink: 'https://github.com/example/MadzAngularWebsiteDeploymentTest',
    type: [Type.INFRA],
  },
  {
    name: 'PokemonTamagotchi',
    imgPaths: mockImg('pokemon-tamagotchi'),
    summary:
      'Hybride jeu de soin et collection inspiré Pokémon et Tamagotchi.',
    description:
      "Boucle de gameplay : nourrir, entraîner et faire évoluer des créatures. Assets et équilibrage présentés à titre d’exemple.",
    skills: [Skills.blender as Skill, Skills.js as Skill],
    gitLink: 'https://github.com/example/PokemonTamagotchi',
    type: [Type.ART],
  },
  {
    name: 'Procedural Snow Shader with Vertex Painting and World Position Offset - UE5',
    imgPaths: mockImg('ue5-snow-shader'),
    summary:
      'Neige procédurale avec vertex painting et offset monde dans UE5.',
    description:
      "Combinaison de masques peints au sommet et de déformations pour accumuler la neige sur les meshes de façon plausible.",
    skills: [Skills.blender as Skill, Skills.css as Skill],
    gitLink: 'https://github.com/example/ue5-procedural-snow',
    type: [Type.ART],
  },
  {
    name: 'ProjetKosmioBack',
    imgPaths: mockImg('kosmio-back'),
    summary:
      'API backend pour le projet Kosmio : authentification, domain métier et persistance.',
    description:
      "Couche serveur structurée en services et accès données. Contrats d’API et schémas mockés pour le portfolio.",
    skills: [Skills.java as Skill, Skills.mysql as Skill],
    gitLink: 'https://github.com/example/ProjetKosmioBack',
    type: [Type.BACKEND],
  },
  {
    name: 'Realistic Ceiling Shader | Unreal Engine 5.3',
    imgPaths: mockImg('ue5-ceiling'),
    summary:
      'Shader de plafond réaliste (fissures, salissures, variation de normales) pour UE 5.3.',
    description:
      "Layering de détails et réponse à l’éclairage indirect pour des intérieurs crédibles. Paramètres exposés aux level artists.",
    skills: [Skills.blender as Skill, Skills.css as Skill],
    gitLink: 'https://github.com/example/ue5-realistic-ceiling',
    type: [Type.ART],
  },
  {
    name: 'rust_chess_game',
    imgPaths: mockImg('rust-chess'),
    summary:
      'Moteur d’échecs en Rust : règles, coups légaux et état de la partie.',
    description:
      "Modélisation du plateau, des pièces et de la détection d’échec et mat. Binaire et tests unitaires (références mockées).",
    skills: [Skills.linux as Skill, Skills.designPatterns as Skill],
    gitLink: 'https://github.com/example/rust_chess_game',
    type: [Type.BACKEND],
  },
  {
    name: 'ShoppingWebsite',
    imgPaths: mockImg('shopping-web'),
    summary:
      'E-commerce vitrine : catalogue, panier et tunnel de commande simplifié.',
    description:
      "Front structuré en composants, état client et intégration avec une API de produits fictive.",
    skills: [Skills.vue as Skill, Skills.css as Skill],
    gitLink: 'https://github.com/example/ShoppingWebsite',
    type: [Type.FRONTEND],
  },
  {
    name: 'Stylized Shrine Gate Diorama',
    imgPaths: mockImg('shrine-diorama'),
    summary:
      'Diorama de portail de sanctuaire stylisé (modélisation, textures, mise en lumière).',
    description:
      "Scène complète prête pour rendu ou moteur temps réel, avec accent sur la composition et la lisibilité des silhouettes.",
    skills: [Skills.blender as Skill, Skills.css as Skill],
    gitLink: 'https://github.com/example/stylized-shrine-gate-diorama',
    type: [Type.ART],
  },
  {
    name: 'Stylized Water Shader – UE5',
    imgPaths: mockImg('ue5-water-shader'),
    summary:
      'Eau stylisée pour UE5 : reflets, profondeur et animation de surface.',
    description:
      "Approche artistique non photoréaliste avec contrôle des couleurs et du mouvement pour niveaux outdoor ou stylés.",
    skills: [Skills.blender as Skill, Skills.css as Skill],
    gitLink: 'https://github.com/example/ue5-stylized-water',
    type: [Type.ART],
  },
  {
    name: 'test-Angular-Fullsite',
    imgPaths: mockImg('angular-fullsite'),
    summary:
      'Site complet Angular : plusieurs pages, navigation et formulaires.',
    description:
      "Projet d’apprentissage couvrant modules, lazy loading et styles globaux. Contenu et API mockés.",
    skills: [Skills.ts as Skill, Skills.html as Skill],
    gitLink: 'https://github.com/example/test-Angular-Fullsite',
    type: [Type.FRONTEND],
  },
]
