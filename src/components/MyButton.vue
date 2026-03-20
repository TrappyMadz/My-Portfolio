<script setup lang="ts">
const props = defineProps<{
  text: String
  whereToGo: String
  color: String
}>()

function scroll(toGo: String) {
  return document.getElementById(toGo.toString())?.scrollIntoView({ behavior: 'smooth' })
}

</script>

<template>
  <button v-if="props.whereToGo" @click="scroll(props.whereToGo)">{{ props.text }}</button>
</template>

<style scoped>
button {
  background-color: v-bind("props.color");
  padding: 10px;
  border-radius: 10px;
  font-family: 'Google Sans Code', monospace;
  font-weight: 400;
  font-style: normal;
  cursor: pointer;
  font-size: large;
}

button:hover {
  animation: stretch 0.5s ease-in-out;
}

@keyframes stretch {
  0% {
    transform: scale(1, 1);
  }
  40% {
    transform: scale(1.15, 0.85);
  }
  70% {
    transform: scale(0.95, 1.05); 
  }
  100% {
    transform: scale(1, 1); 
  }
}
</style>
