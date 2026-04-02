export const Type = {
  FRONTEND: 'Frontend',
  BACKEND: 'Backend',
  INFRA: 'Infrastructure',
  ART: 'Art',
}

export interface Skill {
  name: String
  type: String
}

export const Skills: Record<string, Skill> = {
  html: {
    name: 'HTML',
    type: Type.FRONTEND,
  },
  css: {
    name: 'CSS',
    type: Type.FRONTEND,
  },
  js: {
    name: 'JavaScript',
    type: Type.FRONTEND,
  },
  designPatterns: {
    name: 'Design Patterns',
    type: Type.BACKEND,
  },
  java: {
    name: 'Java (SE)',
    type: Type.BACKEND,
  },
  jee: {
    name: 'Jakarta EE (ex-JEE)',
    type: Type.BACKEND,
  },
  mysql: {
    name: 'MySQL',
    type: Type.BACKEND,
  },
  python: {
    name: 'Python',
    type: Type.BACKEND,
  },
  langchain: {
    name: 'Langchain',
    type: Type.BACKEND,
  },
  rag: {
    name: 'RAG',
    type: Type.BACKEND,
  },
  iagen: {
    name: "Intégration d'IA générative",
    type: Type.BACKEND,
  },
  vec: {
    name: 'Vectorisation de données',
    type: Type.BACKEND,
  },
  vue: {
    name: 'Vue',
    type: Type.FRONTEND,
  },
  ts: {
    name: 'TypeScript',
    type: Type.FRONTEND,
  },
  linux: {
    name: 'Linux',
    type: Type.INFRA,
  },
  blender: {
    name: 'Modélisation 3D (Blender)',
    type: Type.ART,
  },
  angular: {
    name: 'Angular',
    type: Type.FRONTEND,
  },
  ansible: {
    name: 'Ansible',
    type: Type.INFRA,
  },
  terraform: {
    name: 'Terraform',
    type: Type.INFRA,
  },
  unity: {
    name: 'Unity',
    type: Type.ART,
  },
  csharp: {
    name: 'C#',
    type: Type.BACKEND,
  },
}
