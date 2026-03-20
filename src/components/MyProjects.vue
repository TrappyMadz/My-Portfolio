<script setup lang="ts">
import MyButton from './MyButton.vue'
import ProjectCard from './ProjectCard.vue'
import { ref } from 'vue'
</script>

<template>
  <h2>Mes projets principaux</h2>
  <div id="cards">
    <ProjectCard :project-id="0"></ProjectCard>
    <ProjectCard :project-id="1"></ProjectCard>
    <ProjectCard :project-id="2"></ProjectCard>
  </div>
  <MyButton
    id="knowMore"
    :text="'Voir mes expériences ↓'"
    :where-to-go="'xp'"
    :color="'#FFFFFF'"
  ></MyButton>
</template>

<style scoped>
h2 {
  margin-top: 0;
  padding-bottom: 30px;
}

#knowMore {
  margin-top: auto;
  margin-bottom: 50px;
}

#cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 50px;
  margin-bottom: 50px;
}

#router {
  width: 20dvw;
  margin-top: auto;
  margin-bottom: 50px;
}
</style>
