<template>
  <div class="min-h-screen">
    <Navbar />
    
    <!-- Hero Section -->
    <section class="hero-programs pt-20 pb-12 text-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-3xl md:text-4xl font-bold mb-4">برامجنا</h1>
        <p class="text-lg text-blue-100 max-w-2xl mx-auto">
          برامج توعوية وتدريبية مصممة لتمكين الشباب والمجتمع في تعز
        </p>
      </div>
    </section>

    <!-- برامج المبادرة -->
    <section class="py-12 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          <!-- برنامج الأمن الرقمي -->
          <div class="program-card">
            <div class="program-icon bg-blue-500">
              <i class="fas fa-shield-alt text-white"></i>
            </div>
            <div class="program-content">
              <h3 class="program-title">الأمن الرقمي</h3>
              <p class="program-description">
                ورش توعوية حول حماية المعلومات الشخصية والتعامل الآمن مع الإنترنت
              </p>
              <div class="program-meta">
                <span>4 جلسات</span>
                <span>للمبتدئين</span>
              </div>
            </div>
          </div>

          <!-- برنامج التعلم الرقمي -->
          <div class="program-card">
            <div class="program-icon bg-green-500">
              <i class="fas fa-graduation-cap text-white"></i>
            </div>
            <div class="program-content">
              <h3 class="program-title">التعلم الرقمي</h3>
              <p class="program-description">
                استخدام التطبيقات التعليمية والمنصات الإلكترونية للتعلم
              </p>
              <div class="program-meta">
                <span>6 جلسات</span>
                <span>متوسط</span>
              </div>
            </div>
          </div>

          <!-- برنامج التمكين الاقتصادي -->
          <div class="program-card">
            <div class="program-icon bg-purple-500">
              <i class="fas fa-briefcase text-white"></i>
            </div>
            <div class="program-content">
              <h3 class="program-title">التمكين الاقتصادي</h3>
              <p class="program-description">
                مهارات رقمية للعمل وإدارة المشاريع الصغيرة عبر الإنترنت
              </p>
              <div class="program-meta">
                <span>8 جلسات</span>
                <span>متقدم</span>
              </div>
            </div>
          </div>

          <!-- برنامج الذكاء الاصطناعي -->
          <div class="program-card">
            <div class="program-icon bg-orange-500">
              <i class="fas fa-robot text-white"></i>
            </div>
            <div class="program-content">
              <h3 class="program-title">الذكاء الاصطناعي</h3>
              <p class="program-description">
                تطبيقات الذكاء الاصطناعي في الحياة اليومية والعمل
              </p>
              <div class="program-meta">
                <span>5 جلسات</span>
                <span>متوسط</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- دعوة للانضمام -->
    <section class="py-12 bg-slate-50 dark:bg-slate-800">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl font-bold text-slate-800 dark:text-white mb-4">
          انضم إلى برامجنا
        </h2>
        <p class="text-slate-600 dark:text-slate-300 mb-6 max-w-md mx-auto">
          اختر البرنامج المناسب لك وابدأ رحلتك في التعلم الرقمي
        </p>
        <router-link to="/volunteer" class="btn-primary px-6 py-3 rounded-lg text-white font-semibold inline-block">
          سجل الآن
        </router-link>
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
.hero-programs {
  background: linear-gradient(135deg, #3b82f6 0%, #f59e0b 100%);
}

.program-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.dark .program-card {
  background: #1e293b;
}

.program-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.program-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.program-content {
  flex: 1;
}

.program-title {
  font-size: 1.125rem;
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.dark .program-title {
  color: white;
}

.program-description {
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.dark .program-description {
  color: #cbd5e1;
}

.program-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #64748b;
}

.dark .program-meta {
  color: #94a3b8;
}

/* تحسينات التجاوب */
@media (max-width: 768px) {
  .program-card {
    padding: 1rem;
  }
  
  .program-icon {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.125rem;
  }
}
</style>