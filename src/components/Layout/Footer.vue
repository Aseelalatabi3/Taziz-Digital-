<template>
  <footer class="relative bg-slate-900 text-slate-300 py-4 overflow-hidden gradient-bg">
    <div class="absolute top-0 left-0 w-full h-1 animate-slide" style="background: linear-gradient(to right, var(--primary-blue), var(--accent-orange), var(--primary-blue));"></div>

    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      
      <div class="text-center md:text-right">
        <h3 class="text-base font-semibold text-white">تعزيز رقمي - Taziz Digital</h3>
        <!-- <p class="text-xs text-slate-300">حلول رقمية مبتكرة لمستقبل أفضل</p> -->
      </div>

      <div class="flex space-x-2">
        <a href="#" class="social-icon" title="تويتر"><i class="fab fa-x"></i></a>
        <a href="https://www.linkedin.com/company/tazizdigital/" class="social-icon" title="لينكد إن"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://www.facebook.com/TazizDigital" class="social-icon" title="فيسبوك"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social-icon" title="واتساب"><i class="fab fa-whatsapp"></i></a>
        <a href="https://www.instagram.com/tazizdigital1?igsh=MWo3YXFtb3pmcGNseA==" class="social-icon" title="إنستغرام"><i class="fab fa-instagram"></i></a>
      </div>

      <div class="text-xs text-center md:text-left text-slate-300">
        جميع الحقوق محفوظة لـ تعزيز رقمي
         © 2025
      </div>
    </div>
    

    <!-- إضافة اسم المصمم -->
    <div class="container mx-auto px-4 mt-2 pt-2 border-t border-slate-700/30 ">
      <div class="text-center">
        <!-- يمكن إضافة المصمم لاحقاً -->
      </div>
    </div>
  </footer>
</template>

<script setup>
// يمكن إضافة أي دالة خاصة بالفوتر هنا
</script>

<style scoped>
.animate-slide {
  background-size: 200% 100%;
  animation: slide 3s linear infinite;
}

@keyframes slide {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.gradient-bg {
  background: var(--gradient);
}

/* تحسينات التجاوب */
@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .flex.flex-col.md\:flex-row {
    gap: 1rem;
  }
  
  .text-center.md\:text-right {
    text-align: center;
  }
  
  .text-xs {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .grid.grid-cols-1.md\:grid-cols-3 {
    gap: 0.5rem;
  }
  
  .text-base {
    font-size: 0.9rem;
  }
}

/* أيقونات التواصل الاجتماعي - بنفس تأثير btn-primary */
.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-icon:hover {
  background: var(--accent-orange);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(255, 107, 53, 0.4);
}

/* تأثير اللمعان المشابه لـ animate-pulse-glow */
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(255, 107, 53, 0.4);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 107, 53, 0.8);
  }
}

.social-icon:hover {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* تحسينات إضافية للتجاوب */
@media (max-width: 640px) {
  .social-icon {
    width: 32px;
    height: 32px;
    font-size: 0.9rem;
  }
  
  .flex.space-x-2 {
    gap: 0.5rem;
  }
}

/* ضبط المسافات للشاشات الصغيرة */
@media (max-width: 380px) {
  .container.mx-auto.px-4 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  
  .text-base.font-semibold.text-white {
    font-size: 0.8rem;
  }
}
</style>