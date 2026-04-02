import { Skills, type Skill } from './Skills'

interface Project {
  name: String
  imgPath: String
  summary: String
  skills: Skill[]
  gitLink: String
}

const path = 'projectsPreviews/'

export const Projects: Project[] = [
  {
    name: 'Doodlemon',
    imgPath: path + 'Vue-Card-Collection-Game/0.png',
    summary:
      'Jeu de collection de cartes interactif conçu avec Vue 3 et Pinia, intégrant des mécaniques de tirage aléatoire et des animations CSS avancées pour simuler la rareté.',
    skills: [Skills.vue as Skill, Skills.css as Skill],
    gitLink: 'https://github.com/TrappyMadz/Vue-Card-Collection-Game',
  },
  {
    name: 'RAG Multimodal',
    imgPath: path + 'rag_question_llm/0.png',
    summary:
      'Participation à IA4Industries 2026. Assistant IA industriel. Combine VLM et RAG pour automatiser le diagnostic de pannes depuis des schémas techniques.',
    skills: [Skills.langchain as Skill, Skills.python as Skill],
    gitLink: 'https://github.com/Groupe-2-LLM/rag_question_llm?tab=readme-ov-file',
  },
  {
    name: "Freddy's Organizer",
    imgPath: path + 'RestaurantManagementWebApp/0.png',
    summary:
      "Gestionnaire JEE complet pour pizzerias thématiques avec système CRUD, inventaire d'animatroniques et suivi des tâches journalières.",
    skills: [Skills.jee as Skill, Skills.designPatterns as Skill],
    gitLink: 'https://github.com/TrappyMadz/RestaurantManagementWebApp',
  },
  {
    name: 'Angular website with Chuck Norris quotes',
    imgPath: path + 'AngularChuckNorris/0.png',
    summary:
      "Application Angular pour maîtriser les API REST prouvant que « Chuck Norris n'interroge pas le serveur, le serveur lui avoue tout »",
    skills: [Skills.angular as Skill, Skills.css as Skill],
    gitLink: 'https://github.com/TrappyMadz/AngularChuckNorris',
  },
  {
    name: 'Test de déploiement avec Ansible et Terraform',
    imgPath: path + 'Ansible_Terraform_Deployment_Test/0.png',
    summary:
      "Automatisation complète d'une infrastructure cloud (IaC) : provisionnement des serveurs via Terraform et configuration applicative avec Ansible.",
    skills: [Skills.ansible as Skill, Skills.terraform as Skill],
    gitLink: 'https://github.com/TrappyMadz/Ansible_Terraform_Deployment_Test',
  },
  {
    name: 'Be careful man !',
    imgPath: path + 'Be-careful-man-/0.png',
    summary:
      "Prototype nerveux conçu lors d'une Game Jam : un défi de réflexes exigeant d'enchaîner 5 mini-jeux aléatoires à la souris en moins de 30 secondes.",
    skills: [Skills.unity as Skill, Skills.csharp as Skill],
    gitLink: 'https://github.com/example/Be-careful-man-',
  },
]