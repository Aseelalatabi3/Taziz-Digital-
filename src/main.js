import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

// استخدام Vue Router
app.use(router)

// تهيئة AOS
app.config.globalProperties.AOS = AOS.init({
  duration: 800,
  once: true,
  offset: 50,
  easing: 'ease-out-cubic'
})

// إضافة دالة smooth scrolling للنقر على الروابط
app.directive('smooth-scroll', {
  mounted(el) {
    el.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = el.getAttribute('href')
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80 // تعويض للشريط العلوي
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          })
        }
      }
    })
  }
})

app.mount('#app')
