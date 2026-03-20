<script setup lang="ts">
import { Projects } from '@/data/Projects'
import { Skills, Type } from '@/data/Skills'
import { computed, ref } from 'vue'

const selectedType = ref(Type.FRONTEND)

const filteredSkills = computed(() => {
  return Object.fromEntries(
    Object.entries(Projects).filter(([_, project]) => {
      return project.type.includes(selectedType.value)
    }),
  )
})

const setFilter = (type: string) => {
  selectedType.value = type
}
</script>

<template>
  <div id="skills">
    <nav class="tabs">
      <button
        v-for="(label, key) in Type"
        :key="key"
        :class="{ active: selectedType === label }"
        @click="setFilter(label)"
      >
        {{ label }}
      </button>
    </nav>
    <div id="content">
      <span id="router" v-for="skill in filteredSkills">{{ skill.name }}</span>
    </div>
  </div>
</template>

<style scoped>
#skills {
  display: flex;
  flex-direction: column;
  width: 60dvw;
  align-items: center;
}

.tabs {
  display: flex;
  justify-content: center;
  width: 100%;
}

button {
  background-color: #e0afff;
  padding: 10px;
  border-radius: 10px 10px 0 0;
  border: solid 2px #795f8a;
  font-family: 'Google Sans Code', monospace;
  font-weight: 400;
  font-style: normal;
  cursor: pointer;
  font-size: large;
  flex-grow: 1;
}

#content {
  border: 1px #e0afff solid;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
  padding: 20px;
}

#router {
  margin: 20px;
  display: flex;
  background-color: white;
  padding: 10px;
  border-radius: 500px;
  font-family: 'Google Sans Code', monospace;
  font-weight: 400;
  font-style: normal;
  font-size: large;
  color: black;
  text-decoration: none;
  align-items: center;
  justify-content: center;
}
</style>
