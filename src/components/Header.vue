<script setup lang="ts">
// Plus besoin d'importer RouterLink

// Fonction pour faire défiler la page de manière fluide vers l'ID cible
const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    })
  }
}
</script>

<template>
  <header class="main-header">
    <nav class="nav-container">
      <ul class="nav-links">
        <li><a href="#projects" @click.prevent="scrollTo('projects')" class="link">Projets</a></li>
        <li><a href="#xp" @click.prevent="scrollTo('xp')" class="link">Expériences</a></li>
        <li><a href="#classes" @click.prevent="scrollTo('classes')" class="link">Formations</a></li>
        <li><a href="#hobbies" @click.prevent="scrollTo('hobbies')" class="link">Loisirs</a></li>
      </ul>

      <div class="nav-action">
        <a href="#contact" @click.prevent="scrollTo('contact')" class="btn-contact"> Contact </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.main-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  padding: 1rem 2rem;
  /* Effet de transparence et de flou (Glassmorphism) */
  background: rgba(45, 27, 66, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
}

.link {
  color: #e0e0e0;
  text-decoration: none;
  font-family: 'Google Sans Code', monospace;
  font-size: 1rem;
  transition: color 0.3s ease;
  position: relative;
  cursor: pointer;
}

/* Petit effet de soulignement moderne au survol */
.link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: #a855f7;
  transition: width 0.3s ease;
}

.link:hover::after {
  width: 100%;
}

.link:hover {
  color: white;
}

/* Style du bouton Contact "Call to Action" */
.btn-contact {
  padding: 0.6rem 1.5rem;
  background-color: white;
  color: #2d1b42;
  text-decoration: none;
  border-radius: 8px;
  font-family: 'Google Sans Code', monospace;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid white;
  cursor: pointer;
}

.btn-contact:hover {
  background-color: transparent;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(168, 85, 247, 0.4);
}

/* Gestion du responsive basique */
@media (max-width: 768px) {
  .nav-links {
    gap: 1rem;
  }
  .link {
    font-size: 0.9rem;
  }
}
</style>