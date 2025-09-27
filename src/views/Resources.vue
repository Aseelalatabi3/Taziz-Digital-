<template>
  <div class="min-h-screen">
    <Navbar />
    
    <section class="hero-resources pt-20 pb-16 text-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">المكتبة الرقمية</h1>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
          مصادر تعليمية ومراجع رقمية لدعم رحلتك في التعلم الرقمي
        </p>
      </div>
    </section>

    <!-- محتوى المكتبة -->
    <section class="py-16 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-slate-800 dark:text-white mb-4">
            موارد تعليمية مجانية
          </h2>
          <p class="text-slate-600 dark:text-slate-300">
            مجموعة مختارة من أفضل المصادر التعليمية الرقمية
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- موارد ستضاف لاحقاً -->
          <div class="text-center p-8">
            <i class="fas fa-book-open text-4xl text-blue-500 mb-4"></i>
            <h3 class="text-xl font-bold mb-2">قريباً</h3>
            <p class="text-slate-600">يتم إعداد المحتوى</p>
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
.hero-resources {
  background: linear-gradient(135deg, #3b82f6 0%, #f59e0b 100%);
}
</style>