<template>
  <div class="min-h-screen">
    <Navbar />
    
    <section class="hero-stories pt-20 pb-16 text-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">قصص النجاح</h1>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
          شهادات حقيقية من شباب استفادوا من برامج تعزيز رقمي
        </p>
      </div>
    </section>

    <!-- قصص النجاح -->
    <section class="py-16 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-slate-800 dark:text-white mb-4">
            تجارب ملهمة من مجتمعنا
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- قصص ستضاف لاحقاً -->
          <div class="text-center p-8">
            <i class="fas fa-heart text-4xl text-red-500 mb-4"></i>
            <h3 class="text-xl font-bold mb-2">قريباً</h3>
            <p class="text-slate-600">يتم جمع القصص والتجارب</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Layout/Navbar.vue'
import Footer from '@/components/Layout/Footer.vue'
</script>

<style scoped>
.hero-stories {
  background: linear-gradient(135deg, #3b82f6 0%, #f59e0b 100%);
}
</style>