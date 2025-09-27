<template>
  <div class="min-h-screen ">
    <Navbar />
    
    <section class="hero-volunteer pt-20 pb-16 text-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">انضم إلينا</h1>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
        كن جزءاً من التغيير وساهم في تمكين المجتمع رقمياً
        </p>
      </div>
    </section>

    <!-- نموذج الانضمام -->
    <section class="py-16 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4 max-w-2xl">
        <div class="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
          <h2 class="text-2xl font-bold text-center mb-6">سجل كمتطوع</h2>
          
          <form class="space-y-6">
            <div>
              <label class="block text-sm font-medium mb-2 text-right">الاسم الكامل</label>
              <input type="text" class="w-full p-3 border rounded-lg text-right" placeholder="أدخل اسمك الكامل">
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-2 text-right">البريد الإلكتروني</label>
              <input type="email" class="w-full p-3 border rounded-lg text-right" placeholder="example@email.com">
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-2 text-right">رقم الهاتف</label>
              <input type="tel" class="w-full p-3 border rounded-lg text-right" placeholder="+967 XXX XXX XXX">
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-2 text-right">المجال الذي ترغب بالتطوع فيه</label>
              <select class="w-full p-3 border rounded-lg text-right">
                <option>التدريب والتعليم</option>
                <option>التنظيم والفعاليات</option>
                <option>التصميم والمحتوى</option>
                <option>التقنية والدعم الفني</option>
                <option>أخرى</option>
              </select>
            </div>
            
            <button type="submit" class="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              تقديم طلب التطوع
            </button>
          </form>
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
.hero-volunteer {
  background: linear-gradient(135deg, #3b82f6 0%, #f59e0b 100%);
}
</style>