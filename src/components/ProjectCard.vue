<script setup lang="ts">
import type { Skill } from '@/data/Skills'
import MyButton from './MyButton.vue'
import { Projects } from '@/data/Projects'
import Chip from './Chip.vue'

const props = defineProps<{
  projectId: number
}>()
</script>

<template>
  <div id="card">
    <h2
      id="title"
      class="text"
      :style="{ fontSize: (Projects[projectId]?.name?.length ?? 0) > 25 ? '1rem' : '1.5rem' }"
    >
      {{ Projects[projectId]?.name }}
    </h2>
    <img
      class="text"
      :src="Projects[projectId]?.imgPaths[0]?.toString()"
      :alt="Projects[projectId]?.name + ' hero image'"
    />
    <div class="text" id="desc">
      <p>{{ Projects[projectId]?.summary }}</p>
    </div>

    <div id="skills">
      <p>Compétences principales :</p>
      <div id="chips">
        <Chip
          class="chip"
          :text="Projects[projectId]?.skills[0]?.name?.toString() ?? 'Compétence inconnue'"
          color="#C197DB"
        ></Chip>
        |
        <Chip
          class="chip"
          :text="Projects[projectId]?.skills[1]?.name?.toString() ?? 'Compétence inconnue'"
        ></Chip>
      </div>
    </div>
  </div>
</template>

<style scoped>
#card {
  background-color: #795f8a;
  width: 400px;
  height: 500px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  border: 20px outset #c7c7c7;
  border-radius: 10px;
  transition: 0.1s ease-in-out;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  container-type: inline-size;
}

#card:hover {
  transform: rotate(1deg) scale(1.03);
  box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.75);
  cursor: pointer;
}

#title {
  min-height: 40px;
  margin-top: 20px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px;
  max-width: 100%;
}

.text {
  background-color: #c197db;
  border-radius: 3px;
  width: 95%;
  color: black;
}

img {
  background-color: #c197db;
  border-radius: 3px;
  color: black;
  border: 5px #c7c7c7 solid;
  width: 400px;
  width: auto;
  max-height: 35%;
}

#skills {
  margin-top: auto;
  margin-bottom: 10px;
}

#desc {
  height: 100%;
  padding: 5px;
}

#skills {
  text-align: center;
}

#chips {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
