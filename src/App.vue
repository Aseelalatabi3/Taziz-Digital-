<script setup>
import { ref, onMounted } from 'vue'
import LoadingScreen from './components/Layout/LoadingScreen.vue'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})
</script>

<template>
  <div id="app">
    <!-- Floating Background Shapes -->
    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="floating-shape w-64 h-64 rounded-full gradient-main top-10 right-10"></div>
      <div class="floating-shape w-32 h-32 rounded-full gradient-main-reverse bottom-20 left-20"></div>
      <div class="floating-shape w-48 h-48 rounded-full gradient-main top-1/2 left-10"></div>
    </div>

    <LoadingScreen v-if="loading" />
    <router-view />
  </div>
</template>
  