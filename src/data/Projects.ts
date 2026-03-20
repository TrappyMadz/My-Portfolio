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

const path = '@/assets/projectsPreviews/'

export const Projects: Project[] = [
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
]
