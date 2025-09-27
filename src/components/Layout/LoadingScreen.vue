<template>
  <div id="loading-screen" class="fixed inset-0 z-50 bg-white flex items-center justify-center">
    <div class="text-center center">
      <!-- <div class="logo-shape mx-auto mb-6"></div>
        -->
      <img src="@/assets/images/logo .jpg" class="w-32 h-32 mb-6" alt="">
      <div class="flex flex-col items-center">
        <h1 class="text-3xl font-bold text-primary mb-2">تعزيز رقمي</h1>
        <p class="text-lg text-gray-600 mb-4">Taziz Digital</p>
        <div class="loading-bar w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div class="loading-progress h-full bg-gradient-to-r from-primary-blue to-accent-orange rounded-full animate-loading"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen'
}
</script>

<style scoped>
.loading-bar {
  position: relative;
}

.loading-progress {
  width: 30%;
  animation: loading 1.5s ease-in-out infinite;
}

@keyframes loading {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(400%);
  }
}

.text-primary {
  color: var(--primary-blue);
}

.bg-primary-blue {
  background-color: var(--primary-blue);
}

.bg-accent-orange {
  background-color: var(--accent-orange);
}

.from-primary-blue {
  --tw-gradient-from: var(--primary-blue);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(44 90 160 / 0));
}

.to-accent-orange {
  --tw-gradient-to: var(--accent-orange);
}
</style>