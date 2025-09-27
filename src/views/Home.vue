<template>
  <div class="min-h-screen">
    <Navbar />
    
    <!-- Hero Section - مخصص للمبادرة المجتمعية -->
    <section class="hero-community pt-24 md:pt-32 pb-16 md:pb-28 text-white overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="flex flex-col lg:flex-row items-center">
          <!-- النصوص -->
          <div class="lg:w-1/2 mb-12 lg:mb-0 lg:pr-8">
            <div class="fade-in">
              <!-- <span class="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-4">
         مبادرة مجتمعية - تعز
              </span> -->
              <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold mb-6 leading-tight text-right">
                تعزيز رقمي<br>
                <span class="text-orange-300">مساحة حقيقية للشباب والمجتمع</span>
              </h1>
            </div>
            <p class="text-lg sm:text-xl mb-8 text-gray-200 fade-in text-right" style="transition-delay: 0.2s;">
              نكتشف معاً قوة التكنولوجيا وكيفية الاستفادة منها بشكل إيجابي وآمن. 
              تمكين الشباب في تعز والمناطق الريفية من خلال الأدوات الرقمية الحديثة 
              لتحقيق التعلم، العمل، والإبداع.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 fade-in text-center sm:text-right" style="transition-delay: 0.4s;">
              <router-link to="/events" class="btn-primary px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-white font-semibold text-base sm:text-lg animate-pulse-glow">
                انضم إلى ورشتنا القادمة
              </router-link>
              <a href="#programs" class="px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-white/10 backdrop-blur-md text-white font-semibold text-base sm:text-lg border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                استكشف برامجنا
              </a>
            </div>
          </div>

          <!-- الصورة التوضيحية -->
          <div class="lg:w-1/2 flex justify-center fade-in mt-8 lg:mt-0" style="transition-delay: 0.6s;">
            <div class="relative w-full max-w-xs sm:max-w-sm md:max-w-lg">
              <!-- تأثيرات الخلفية -->
              <div class="hidden md:block absolute -top-10 -right-5 w-48 h-48 md:w-72 md:h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-floating" style="background-color: #3b82f6;"></div>
              <div class="hidden md:block absolute -bottom-10 -left-5 w-48 h-48 md:w-72 md:h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-floating animation-delay-2000" style="background-color: #f59e0b;"></div>
              
              <div class="relative glass-effect rounded-2xl p-4 sm:p-6 shadow-2xl">
                <div class="bg-gradient-to-br from-blue-500 to-orange-400 rounded-xl shadow-lg w-full h-64 flex items-center justify-center">
                  <div class="text-center text-white">
                    <i class="fas fa-users text-6xl mb-4"></i>
                    <p class="text-lg font-semibold">مجتمع رقمي واعي</p>
                  </div>
                </div>
                
                <!-- إحصائيات سريعة -->
                <div class="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 sm:p-4 w-32 sm:w-40 dark:bg-slate-900" style="border-top: 4px solid #3b82f6;">
                  <div class="text-center">
                    <span class="block text-2xl sm:text-3xl font-bold text-blue-600">500+</span>
                    <span class="text-xs sm:text-sm text-slate-600 dark:text-slate-400">شاب مستفيد</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- إحصائيات المبادرة -->
    <section class="py-12 md:py-16 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          <div class="p-4 fade-in">
            <div class="stat-number text-3xl md:text-5xl font-bold mb-2">15+</div>
            <div class="text-slate-600 dark:text-slate-400 text-sm md:text-base">ورشة عمل</div>
          </div>
          <div class="p-4 fade-in">
            <div class="stat-number text-3xl md:text-5xl font-bold mb-2">500+</div>
            <div class="text-slate-600 dark:text-slate-400 text-sm md:text-base">شاب مستفيد</div>
          </div>
          <div class="p-4 fade-in">
            <div class="stat-number text-3xl md:text-5xl font-bold mb-2">10+</div>
            <div class="text-slate-600 dark:text-slate-400 text-sm md:text-base">قرى مستفيدة</div>
          </div>
          <div class="p-4 fade-in">
            <div class="stat-number text-3xl md:text-5xl font-bold mb-2">40%</div>
            <div class="text-slate-600 dark:text-slate-400 text-sm md:text-base">مشاركة نسائية</div>
          </div>
        </div>
      </div>
    </section>

    <!-- برامج المبادرة -->
    <section id="programs" class="py-12 md:py-16 bg-slate-50 dark:bg-slate-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12 md:mb-16">
          <div class="icon-section-divider">
            <h2 class="section-title-with-icon">برامجنا التوعوية</h2>
          </div>
          <p class="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-base md:text-lg">
            نقدم مجموعة متنوعة من البرامج المصممة خصيصاً لتمكين الشباب والمجتمع في تعز
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- برنامج 1 -->
          <div class="program-card bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4 mx-auto">
              <i class="fas fa-shield-alt text-2xl text-blue-600"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-3 text-center">الأمن الرقمي</h3>
            <p class="text-slate-600 dark:text-slate-300 text-right leading-relaxed">
              ورش توعوية حول حماية المعلومات الشخصية، التعامل الآمن مع الإنترنت، 
              وكيفية تجنب المخاطر الإلكترونية.
            </p>
          </div>

          <!-- برنامج 2 -->
          <div class="program-card bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4 mx-auto">
              <i class="fas fa-graduation-cap text-2xl text-green-600"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-3 text-center">التعلم الرقمي</h3>
            <p class="text-slate-600 dark:text-slate-300 text-right leading-relaxed">
              جلسات تعليمية حول استخدام التطبيقات التعليمية، المنصات الإلكترونية، 
              والوصول إلى الفرص التعليمية عبر الإنترنت.
            </p>
          </div>

          <!-- برنامج 3 -->
          <div class="program-card bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4 mx-auto">
              <i class="fas fa-briefcase text-2xl text-purple-600"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-3 text-center">التمكين الاقتصادي</h3>
            <p class="text-slate-600 dark:text-slate-300 text-right leading-relaxed">
              تدريبات على المهارات الرقمية المطلوبة في سوق العمل، واستراتيجيات 
              العمل عبر الإنترنت وإدارة المشاريع الصغيرة.
            </p>
          </div>

          <!-- برنامج 4 -->
          <div class="program-card bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mb-4 mx-auto">
              <i class="fas fa-robot text-2xl text-orange-600"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-3 text-center">الذكاء الاصطناعي</h3>
            <p class="text-slate-600 dark:text-slate-300 text-right leading-relaxed">
              تعريف بالذكاء الاصطناعي وتطبيقاته العملية في الحياة اليومية والعمل، 
              وكيفية الاستفادة منه بشكل آمن.
            </p>
          </div>

          <!-- برنامج 5 -->
          <div class="program-card bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mb-4 mx-auto">
              <i class="fas fa-female text-2xl text-red-600"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-3 text-center">تمكين المرأة</h3>
            <p class="text-slate-600 dark:text-slate-300 text-right leading-relaxed">
              برامج خاصة لتمكين الفتيات والنساء رقمياً، مع التركيز على الفرص 
              المتاحة عبر الإنترنت والتدريب على المهارات الرقمية.
            </p>
          </div>

          <!-- برنامج 6 -->
          <div class="program-card bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mb-4 mx-auto">
              <i class="fas fa-hands-helping text-2xl text-teal-600"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-3 text-center">المجتمع الريفي</h3>
            <p class="text-slate-600 dark:text-slate-300 text-right leading-relaxed">
              ورش ميدانية في القرى والمناطق الريفية لتعميم الفائدة الرقمية 
              وتمكين المجتمع بأكمله من أدوات العصر.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- قصص النجاح -->
    <section class="py-12 md:py-16 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12 md:mb-16">
          <div class="icon-section-divider">
            <h2 class="section-title-with-icon">قصص النجاح</h2>
          </div>
          <p class="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-base md:text-lg">
            شهادات حقيقية من شباب استفادوا من برامج تعزيز رقمي وحققوا نجاحات ملهمة
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- قصة 1 -->
          <div class="success-story bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                س
              </div>
              <div class="mr-3">
                <h4 class="font-semibold text-slate-800 dark:text-white">سارة محمد</h4>
                <p class="text-sm text-slate-600 dark:text-slate-300">طالبة - ريف تعز</p>
              </div>
            </div>
            <p class="text-slate-600 dark:text-slate-300 text-right leading-relaxed">
              "من خلال ورشة الأمن الرقمي، تعلمت كيف أحمي حسابي الشخصي وأتجنب المخاطر. 
              الآن أستطيع استخدام الإنترنت بثقة وأساعد عائلتي في ذلك."
            </p>
          </div>

          <!-- قصة 2 -->
          <div class="success-story bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-lg">
                ع
              </div>
              <div class="mr-3">
                <h4 class="font-semibold text-slate-800 dark:text-white">علي أحمد</h4>
                <p class="text-sm text-slate-600 dark:text-slate-300">شاب ريادي</p>
              </div>
            </div>
            <p class="text-slate-600 dark:text-slate-300 text-right leading-relaxed">
              "برنامج التمكين الاقتصادي علمني كيفية إنشاء متجر إلكتروني. 
              الآن لدي مشروعي الصغير وأبيع منتجاتي محلياً وعبر الإنترنت."
            </p>
          </div>

          <!-- قصة 3 -->
          <div class="success-story bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-lg">
                ف
              </div>
              <div class="mr-3">
                <h4 class="font-semibold text-slate-800 dark:text-white">فاطمة عبدالله</h4>
                <p class="text-sm text-slate-600 dark:text-slate-300">معلمة</p>
              </div>
            </div>
            <p class="text-slate-600 dark:text-slate-300 text-right leading-relaxed">
              "استفدت من جلسات التعلم الرقمي في تطوير طريقة تدريسي. 
              الآن أستخدم التطبيقات التعليمية مما جعل الدروس أكثر تفاعلية."
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- الفعاليات القادمة -->
    <section class="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">الفعاليات القادمة</h2>
          <p class="text-blue-100 text-lg">انضم إلى ورشنا القادمة وكن جزءاً من التغيير</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- فعالية 1 -->
          <div class="event-card bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 bg-white/20 rounded-full text-sm">ورشة عمل</span>
              <span class="text-blue-100">15 ديسمبر 2025</span>
            </div>
            <h3 class="text-xl font-bold mb-3">الأمن الرقمي للمبتدئين</h3>
            <p class="text-blue-100 mb-4">تعلم أساسيات حماية معلوماتك الشخصية على الإنترنت</p>
            <div class="flex items-center justify-between">
              <span class="text-sm"> مركز تعزيز رقمي - تعز</span>
              <button class="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors">
                 سيتم فتح التسجيل قريبا
              </button>
            </div>
          </div>

          <!-- فعالية 2 -->
          <div class="event-card bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 bg-white/20 rounded-full text-sm">جلسة حوارية</span>
              <span class="text-blue-100">22 ديسمبر 2025</span>
            </div>
            <h3 class="text-xl font-bold mb-3">الذكاء الاصطناعي في الحياة اليومية</h3>
            <p class="text-blue-100 mb-4">كيف نستفيد من الذكاء الاصطناعي بشكل آمن ومفيد</p>
            <div class="flex items-center justify-between">
              <span class="text-sm"> تعز</span>
              <button class="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors">
                 سيتم فتح التسجيل قريبا
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- دعوة للانضمام -->
    <section class="py-12 md:py-16 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
          كن جزءاً من مجتمع تعزيز رقمي
        </h2>
        <p class="text-slate-600 dark:text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          سواء كنت شاباً يبحث عن التعلم، متطوعاً ترغب في المساعدة، أو شريكاً تؤمن برسالتنا
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/booking" class="btn-primary px-8 py-3 rounded-lg text-white font-semibold text-lg">
            انضم كمستفيد
          </router-link>
          <a href="#contact" class="px-8 py-3 rounded-lg border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold text-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
            تقدم كمتطوع
          </a>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<script setup>  
import { onMounted } from 'vue'
import Navbar from '@/components/Layout/Navbar.vue'
import Footer from '@/components/Layout/Footer.vue'

onMounted(() => {
  // Fade-in animations
  const fadeElements = document.querySelectorAll('.fade-in');
  function checkFade() {
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', checkFade);
  checkFade();
});
</script>

<style scoped>
.hero-community {
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.9) 0%,
    rgba(245, 158, 11, 0.8) 100%
  ),
  url('@/assets/images/community-bg.jpg') no-repeat center center/cover;
}

.program-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.program-card:hover {
  transform: translateY(-5px);
}

.success-story {
  transition: transform 0.3s ease;
}

.success-story:hover {
  transform: translateY(-2px);
}

.event-card {
  transition: transform 0.3s ease;
}

.event-card:hover {
  transform: translateY(-2px);
}

/* تأثيرات الحركة */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-floating {
  animation: float 6s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.glass-effect {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
}

/* تحسينات التجاوب */
@media (max-width: 768px) {
  .hero-community {
    text-align: center;
  }
  
  .text-right {
    text-align: center;
  }
}
</style>