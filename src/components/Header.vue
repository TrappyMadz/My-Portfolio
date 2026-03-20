<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="main-header">
    <nav class="nav-container">
      <ul class="nav-links">
        <li><RouterLink to="/projects" class="link">Projets</RouterLink></li>
        <li><RouterLink to="/experiences" class="link">Expériences</RouterLink></li>
        <li><RouterLink to="/formations" class="link">Formations</RouterLink></li>
        <li><RouterLink to="/hobbies" class="link">Loisirs</RouterLink></li>
      </ul>

      <div class="nav-action">
        <RouterLink to="/contact" class="btn-contact"> Contact </RouterLink>
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
}

/* Petit effet de soulignement moderne au survol */
.link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: #a855f7; /* Une couleur violette électrique */
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
}

.btn-contact:hover {
  background-color: transparent;
  color: white;
  /* On réutilise l'esprit de tes animations */
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
