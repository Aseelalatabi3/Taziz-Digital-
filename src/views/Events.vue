<template>
  <div class="min-h-screen">
    <Navbar />
    
    <!-- Hero Section -->
    <section class="hero-events pt-20 pb-16 text-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">الفعاليات والورش</h1>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
          انضم إلى فعالياتنا التفاعلية وورش العمل التوعوية في تعز والمناطق الريفية
        </p>
      </div>
    </section>

    <!-- الفعاليات القادمة -->
    <section class="py-16 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            الفعاليات القادمة
          </h2>
          <p class="text-slate-600 dark:text-slate-300 text-lg">
            فرص للتعلم والتفاعل مع مجتمع تعزيز رقمي
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- فعالية 1 -->
          <div class="event-card bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="event-header bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
              <div class="flex justify-between items-center mb-2">
                <span class="px-3 py-1 bg-white/20 rounded-full text-sm">ورشة عمل</span>
                <span class="text-blue-100">15 ديسمبر 2025</span>
              </div>
              <h3 class="text-xl font-bold">الأمن الرقمي للمبتدئين</h3>
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4 text-slate-600 dark:text-slate-300">
                <i class="fas fa-map-marker-alt ml-2"></i>
                <span> تعز</span>
              </div>
              <p class="text-slate-600 dark:text-slate-300 mb-4 text-right leading-relaxed">
                ورشة تفاعلية حول أساسيات الأمن الرقمي وحماية المعلومات الشخصية على الإنترنت
              </p>
              <div class="flex justify-between items-center mb-4">
                <span class="text-sm text-slate-500">⏰ 10:00 صباحاً</span>
                <span class="text-sm text-slate-500">👥 30 مقعد</span>
              </div>
              <button class="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                 سيتم فتح التسجيل قريبا
              </button>
            </div>
          </div>

          <!-- فعالية 2 -->
          <div class="event-card bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="event-header bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
              <div class="flex justify-between items-center mb-2">
                <span class="px-3 py-1 bg-white/20 rounded-full text-sm">جلسة حوارية</span>
                <span class="text-green-100">20 ديسمبر 2025</span>
              </div>
              <h3 class="text-xl font-bold">الذكاء الاصطناعي في حياتنا</h3>
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4 text-slate-600 dark:text-slate-300">
                <i class="fas fa-map-marker-alt ml-2"></i>
                <span> تعز</span>
              </div>
              <p class="text-slate-600 dark:text-slate-300 mb-4 text-right leading-relaxed">
                حوار مفتوح حول تطبيقات الذكاء الاصطناعي وكيفية الاستفادة منها في العمل والتعلم
              </p>
              <div class="flex justify-between items-center mb-4">
                <span class="text-sm text-slate-500">⏰ 4:00 مساءً</span>
                <span class="text-sm text-slate-500">👥 50 مقعد</span>
              </div>
              <button class="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                 سيتم فتح التسجيل قريبا
              </button>
            </div>
          </div>

          <!-- فعالية 3 -->
          <div class="event-card bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="event-header bg-gradient-to-r from-purple-500 to-purple-600 p-4 text-white">
              <div class="flex justify-between items-center mb-2">
                <span class="px-3 py-1 bg-white/20 rounded-full text-sm">ورشة ميدانية</span>
                <span class="text-purple-100">25 ديسمبر 2025</span>
              </div>
              <h3 class="text-xl font-bold">التسويق الرقمي للشباب</h3>
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4 text-slate-600 dark:text-slate-300">
                <i class="fas fa-map-marker-alt ml-2"></i>
                <span>المنطقة الريفية - تعز</span>
              </div>
              <p class="text-slate-600 dark:text-slate-300 mb-4 text-right leading-relaxed">
                ورشة عملية لتعلم أساسيات التسويق الرقمي وإدارة المشاريع الصغيرة عبر الإنترنت
              </p>
              <div class="flex justify-between items-center mb-4">
                <span class="text-sm text-slate-500">⏰ 9:00 صباحاً</span>
                <span class="text-sm text-slate-500">👥 25 مقعد</span>
              </div>
              <button class="w-full bg-purple-500 text-white py-2 rounded-lg font-semibold hover:bg-purple-600 transition-colors">
                 سيتم فتح التسجيل قريبا
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- الفعاليات السابقة -->
    <section class="py-16 bg-slate-50 dark:bg-slate-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            فعاليات سابقة
          </h2>
          <p class="text-slate-600 dark:text-slate-300 text-lg">
            إنجازاتنا السابقة في تمكين المجتمع رقمياً
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- فعالية سابقة 1 -->
          <div class="past-event bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg">
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">مكتمل</span>
              <span class="text-slate-500 text-sm">نوفمبر 2024</span>
            </div>
            <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-3">أسبوع التوعية الرقمية</h3>
            <p class="text-slate-600 dark:text-slate-300 mb-4 text-right">
              سلسلة ورش توعوية استفاد منها أكثر من 100 شاب وشابة في تعز
            </p>
            <div class="flex items-center text-slate-500 text-sm">
              <i class="fas fa-users ml-2"></i>
              <span>70+ مستفيد</span>
            </div>
          </div>

          <!-- فعالية سابقة 2 -->
          <div class="past-event bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg">
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">مكتمل</span>
              <span class="text-slate-500 text-sm">أكتوبر 2024</span>
            </div>
            <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-3">برنامج تمكين المرأة</h3>
            <p class="text-slate-600 dark:text-slate-300 mb-4 text-right">
              تدريب خاص للفتيات على المهارات الرقمية بمشاركة 80 فتاة
            </p>
            <div class="flex items-center text-slate-500 text-sm">
              <i class="fas fa-female ml-2"></i>
              <span>80 فتاة</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- جدول الفعاليات -->
    <section class="py-16 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            جدول الفعاليات الشهري
          </h2>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
            <thead>
              <tr class="border-b border-slate-200 dark:border-slate-700">
                <th class="p-4 text-right font-semibold text-slate-800 dark:text-white">الفعالية</th>
                <th class="p-4 text-right font-semibold text-slate-800 dark:text-white">التاريخ</th>
                <th class="p-4 text-right font-semibold text-slate-800 dark:text-white">الوقت</th>
                <th class="p-4 text-right font-semibold text-slate-800 dark:text-white">المكان</th>
                <th class="p-4 text-right font-semibold text-slate-800 dark:text-white">الإجراء</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-slate-100 dark:border-slate-700">
                <td class="p-4 text-slate-600 dark:text-slate-300">الأمن الرقمي للمبتدئين</td>
                <td class="p-4 text-slate-600 dark:text-slate-300">15 ديسمبر</td>
                <td class="p-4 text-slate-600 dark:text-slate-300">10:00 صباحاً</td>
                <td class="p-4 text-slate-600 dark:text-slate-300"> تعز </td>
                <td class="p-4">
                  <button class="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
                    سجل
                  </button>
                </td>
              </tr>
              <tr class="border-b border-slate-100 dark:border-slate-700">
                <td class="p-4 text-slate-600 dark:text-slate-300">الذكاء الاصطناعي في حياتنا</td>
                <td class="p-4 text-slate-600 dark:text-slate-300">20 ديسمبر</td>
                <td class="p-4 text-slate-600 dark:text-slate-300">4:00 مساءً</td>
                <td class="p-4 text-slate-600 dark:text-slate-300"> نعز</td>
                <td class="p-4">
                  <button class="px-4 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition-colors">
                    سجل
                  </button>
                </td>
              </tr>
              <tr>
                <td class="p-4 text-slate-600 dark:text-slate-300">التسويق الرقمي للشباب</td>
                <td class="p-4 text-slate-600 dark:text-slate-300">25 ديسمبر</td>
                <td class="p-4 text-slate-600 dark:text-slate-300">9:00 صباحاً</td>
                <td class="p-4 text-slate-600 dark:text-slate-300"> تعز</td>
                <td class="p-4">
                  <button class="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm hover:bg-purple-600 transition-colors">
                    سجل
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- دعوة للمشاركة -->
    <section class="py-16 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">هل ترغب في استضافة فعالية؟</h2>
        <p class="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          إذا كنت تمثل مدرسة، جامعة، أو مؤسسة مجتمعية وترغب في استضافة إحدى فعالياتنا
        </p>
        <button class="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
          تواصل معنا
        </button>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Layout/Navbar.vue'
import Footer from '@/components/Layout/Footer.vue'

// دالة للتسجيل في الفعاليات (يمكن تطويرها لاحقاً)
const registerForEvent = (eventName) => {
  alert(`سيتم توجيهك إلى نموذج التسجيل في فعالية: ${eventName}`)
  // هنا يمكن إضافة redirect إلى صفحة التسجيل
}
</script>

<style scoped>
.hero-events {
  background: linear-gradient(135deg, #3b82f6 0%, #f59e0b 100%);
}

.event-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.event-card:hover {
  transform: translateY(-5px);
}

.past-event {
  transition: transform 0.3s ease;
}

.past-event:hover {
  transform: translateY(-2px);
}

/* تحسينات الجدول */
table {
  border-collapse: collapse;
}

th, td {
  text-align: right;
}

/* تحسينات التجاوب */
@media (max-width: 768px) {
  .event-card {
    margin: 0 0.5rem;
  }
  
  table {
    font-size: 0.9rem;
  }
  
  th, td {
    padding: 0.75rem 0.5rem;
  }
}
</style>