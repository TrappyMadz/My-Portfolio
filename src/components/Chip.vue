<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps<{
  text: String
}>()
</script>

<template>
  <span id="chip">{{ props.text }}</span>
</template>

<style scoped>
#chip {
  padding: 5px;
  border-radius: 100px;

  font-family: 'Google Sans Code', monospace;
  font-weight: 400;
  font-style: normal;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
