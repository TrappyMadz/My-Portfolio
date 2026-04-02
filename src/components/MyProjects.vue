<script setup lang="ts">
import MyButton from './MyButton.vue'
import ProjectCard from './ProjectCard.vue'
import { Projects } from '@/data/Projects'
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'

const emit = defineEmits<{
  (e: 'drawerHeight', height: number): void
}>()

const isExpanded = ref(false)

/** Bloc fixe : titre + 3 cartes + bouton tiroir (ne doit pas être translate avec le reste de la page). */
const topBlockRef = ref<HTMLElement | null>(null)
const knowMoreWrapRef = ref<HTMLElement | null>(null)
const drawerInnerRef = ref<HTMLElement | null>(null)
const drawerTop = ref(0)
const drawerHeight = ref(0)

const drawerProjectIds = computed(() => {
  const ids: number[] = []
  for (let i = 3; i < Projects.length; i++) ids.push(i)
  return ids
})

const measureDrawerTop = () => {
  const topH = topBlockRef.value?.offsetHeight ?? 0
  const knowH = knowMoreWrapRef.value?.offsetHeight ?? 0
  drawerTop.value = topH + knowH
}

const knowMoreSlideStyle = computed(() => ({
  transform: isExpanded.value ? `translateY(${drawerHeight.value}px)` : 'translateY(0)',
  transition: 'transform 0.35s ease',
  willChange: 'transform',
}))

const measureDrawerHeight = () => {
  drawerHeight.value = drawerInnerRef.value?.scrollHeight ?? 0
  return drawerHeight.value
}

let resizeObserver: ResizeObserver | undefined

const toggleDrawer = async () => {
  isExpanded.value = !isExpanded.value

  if (!isExpanded.value) {
    emit('drawerHeight', 0)
    return
  }

  await nextTick()
  measureDrawerTop()
  measureDrawerHeight()

  emit('drawerHeight', drawerHeight.value)
}

onMounted(() => {
  measureDrawerTop()
  measureDrawerHeight()

  resizeObserver = new ResizeObserver(() => {
    if (!isExpanded.value) return
    measureDrawerHeight()
    emit('drawerHeight', drawerHeight.value)
  })

  if (drawerInnerRef.value) {
    resizeObserver.observe(drawerInnerRef.value)
  }
})

onUnmounted(() => {
  resizeObserver?.disconnect()
})
</script>

<template>
  <div id="projectsDrawerRoot">
    <div ref="topBlockRef">
      <h2>Mes projets principaux</h2>
      <div id="cards">
        <ProjectCard :project-id="0"></ProjectCard>
        <ProjectCard :project-id="1"></ProjectCard>
        <ProjectCard :project-id="2"></ProjectCard>
      </div>

      <button
        id="showAllProjects"
        type="button"
        :aria-expanded="isExpanded"
        @click="toggleDrawer"
      >
        {{ isExpanded ? 'Fermer les projets' : 'Afficher tous les projets' }}
      </button>
    </div>

    <div ref="knowMoreWrapRef" class="knowMoreWrap" :style="knowMoreSlideStyle">
      <MyButton
        id="knowMoreProjects"
        :text="'Voir mes expériences ↓'"
        :where-to-go="'xp'"
        :color="'#FFFFFF'"
      ></MyButton>
    </div>

    <div
      id="drawerOverlay"
      :style="{
        top: `${drawerTop}px`,
        height: isExpanded ? `${drawerHeight}px` : '0px',
        pointerEvents: isExpanded ? 'auto' : 'none',
      }"
    >
      <div ref="drawerInnerRef" id="drawerInner">
        <div id="drawerCards">
          <ProjectCard
            v-for="pid in drawerProjectIds"
            :key="pid"
            :project-id="pid"
          ></ProjectCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin-top: 0;
  padding-bottom: 30px;
}

#projectsDrawerRoot {
  width: 100%;
  position: relative;
}

#knowMoreProjects {
  /* Le bouton réel est rendu dans `MyButton.vue`. On évite d'appliquer ici des
   * styles de centrage (scoped + composant enfant). Le centrage se fait via le
   * wrapper `.knowMoreWrap`. */
  margin-bottom: 0;
}

#cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 50px;
  margin-bottom: 50px;
}

#showAllProjects {
  width: min(500px, 80dvw);
  display: block;
  margin: 0 auto;
  margin-bottom: 50px;
  background-color: #e0afff;
  padding: 10px;
  border-radius: 10px;
  border: solid 2px #795f8a;
  font-family: 'Google Sans Code', monospace;
  font-weight: 400;
  font-style: normal;
  cursor: pointer;
  font-size: large;
  color: black;
}

.knowMoreWrap {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

#drawerOverlay {
  position: absolute;
  left: 0;
  right: 0;
  overflow: hidden;
  transition: height 0.35s ease;
  will-change: height;
  z-index: 5;
}

#drawerInner {
  width: 100%;
}

#drawerCards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 50px;
  padding-bottom: 50px;
}

#router {
  width: 20dvw;
  margin-top: auto;
  margin-bottom: 50px;
}
</style>
