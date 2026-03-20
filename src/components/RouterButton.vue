<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  text: String
  whereToGo: String
  color: String
  strength?: number
}>()

const animationStrength = computed(() => props.strength ?? 1)
</script>

<template>
  <RouterLink class="router" :to="whereToGo.toString()">{{ props.text }}</RouterLink>
</template>

<style scoped>
.router {
  display: flex;
  background-color: v-bind('props.color');
  padding: 10px;
  border-radius: 10px;
  font-family: 'Google Sans Code', monospace;
  font-weight: 400;
  font-style: normal;
  cursor: pointer;
  font-size: large;
  color: black;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  --strength: v-bind(animationStrength);
}

.router:hover {
  animation: stretch 0.5s ease-in-out;
}

@keyframes stretch {
  0% {
    transform: scale(1, 1);
  }
  40% {
    transform: scale(calc(1 + (0.15 * var(--strength, 1))), calc(1 - (0.15 * var(--strength, 1))));
  }
  70% {
    transform: scale(calc(1 - (0.05 * var(--strength, 1))), calc(1 + (0.05 * var(--strength, 1))));
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
