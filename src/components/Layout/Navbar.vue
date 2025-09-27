<template>
  <nav id="navbar" class="fixed w-full z-50 py-3 transition-all duration-300 gradient-bg">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center">
        <router-link to="/" class="text-2xl font-bold text-white flex items-center">
          <div class="flex items-center">
            <!-- <div class="mini-logo mr-3"></div> -->
            <img src="@/assets/images/logo .jpg" class="mini-logo mr-3t">
            <div class="flex flex-col text-right">
              <span class="text-lg font-bold leading-tight">تعزيز رقمي</span>
              <span class="text-sm font-medium opacity-90">Taziz Digital</span>
            </div>
          </div>
        </router-link>

        <div id="nav-links" class="hidden lg:flex items-center space-x-2 space-x-reverse">
          <router-link to="/" class="nav-link px-3 py-2 text-white text-sm font-medium hover:text-gray-300 transition-colors">الرئيسية</router-link>
          <router-link to="/programs" class="nav-link px-3 py-2 text-gray-300 text-sm font-medium hover:text-white transition-colors">برامجنا</router-link>
          <router-link to="/events" class="nav-link px-3 py-2 text-gray-300 text-sm font-medium hover:text-white transition-colors">الفعاليات</router-link>
          <router-link to="/stories" class="nav-link px-3 py-2 text-gray-300 text-sm font-medium hover:text-white transition-colors">قصص النجاح</router-link>
          <router-link to="/resources" class="nav-link px-3 py-2 text-gray-300 text-sm font-medium hover:text-white transition-colors">المكتبة</router-link>
          <router-link to="/volunteer" class="btn-primary px-4 py-2 text-white text-sm rounded-md transition-colors font-semibold">انضم إلينا</router-link>
          <div class="flex items-center mr-4">
            <span class="text-white mr-2"><i class="fas fa-sun"></i></span>
            <label class="mode-switch">
              <input type="checkbox" id="mode-toggle" />
              <span class="mode-slider"></span>
            </label>
            <span class="text-white ml-2"><i class="fas fa-moon"></i></span>
          </div>
        </div>

        <button id="mobile-menu-btn" class="lg:hidden text-white" aria-label="Toggle menu">
          <i class="fas fa-bars text-xl"></i>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div id="mobile-menu" class="lg:hidden fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-95 backdrop-blur-sm z-40 transform transition-transform duration-300 ease-in-out -translate-x-full">
    <div class="flex justify-end p-4">
      <button id="close-mobile-menu-btn" class="text-white text-3xl">&times;</button>
    </div>
    <div class="flex flex-col items-center justify-center h-full space-y-6">
      <router-link to="/" class="text-white text-xl font-semibold hover:text-gray-400 transition-colors">الرئيسية</router-link>
      <router-link to="/programs" class="text-white text-xl font-semibold hover:text-gray-400 transition-colors">برامجنا</router-link>
      <router-link to="/events" class="text-white text-xl font-semibold hover:text-gray-400 transition-colors">الفعاليات</router-link>
      <router-link to="/stories" class="text-white text-xl font-semibold hover:text-gray-400 transition-colors">قصص النجاح</router-link>
      <router-link to="/resources" class="text-white text-xl font-semibold hover:text-gray-400 transition-colors">المكتبة</router-link>
      <router-link to="/volunteer" class="btn-primary px-6 py-3 rounded-md text-white font-semibold text-base">انضم إلينا</router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Dark Mode Toggle
  const modeToggle = document.getElementById('mode-toggle');
  const htmlElement = document.documentElement;

  if (localStorage.getItem('darkMode') === 'enabled') {
    htmlElement.classList.add('dark');
    modeToggle.checked = true;
  }

  modeToggle.addEventListener('change', () => {
    if (modeToggle.checked) {
      htmlElement.classList.add('dark');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'disabled');
    }
  });

  // Mobile Menu
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMobileMenuBtn = document.getElementById('close-mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
  });

  closeMobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
  });
  
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('-translate-x-full');
    });
  });

  // Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('nav-scroll', 'py-2');
      navbar.classList.remove('py-3');
      navbar.style.background = 'var(--secondary-blue)';
    } else {
      navbar.classList.remove('nav-scroll', 'py-2');
      navbar.classList.add('py-3');
      navbar.style.background = '';
    }
  });
});
</script>

<style scoped>
.mode-switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.mode-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.mode-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 24px;
}

.mode-slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .mode-slider {
  background-color: var(--accent-orange);
}

input:checked + .mode-slider:before {
  transform: translateX(26px);
}

.nav-scroll {
  backdrop-filter: blur(10px);
  background-color: rgba(26, 58, 110, 0.95);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.gradient-bg {
  background: var(--gradient);
}
</style>