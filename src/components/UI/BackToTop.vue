<template>
  <button id="backToTop" class="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 md:w-14 md:h-14 gradient-main text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 opacity-0 pointer-events-none z-40">
    <i class="fas fa-arrow-up text-sm md:text-base"></i>
  </button>
</template>

<script>
export default {
  name: 'BackToTop',
  mounted() {
    this.initBackToTop()
  },
  methods: {
    initBackToTop() {
      const backToTopBtn = document.getElementById('backToTop')
      
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          backToTopBtn.classList.remove('opacity-0', 'pointer-events-none')
          backToTopBtn.classList.add('opacity-100')
        } else {
          backToTopBtn.classList.add('opacity-0', 'pointer-events-none')
          backToTopBtn.classList.remove('opacity-100')
        }
      })
      
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    }
  }
}
</script>