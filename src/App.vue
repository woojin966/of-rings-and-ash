<template>
  <router-view /> 
</template>

<script setup>
  import { onMounted, nextTick } from 'vue';
import { initCommonScroll } from './utils/initCommonScroll';

onMounted(async () => {
  await nextTick();

  requestAnimationFrame(() => {
    // initCommonScroll();
  });
});
</script>

<style scoped>
</style>
