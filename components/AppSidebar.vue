<template>
  <section class="sidebar" :class="{ 'mobile-hidden': isMobile }">
    <div class="navlinks">
      <!-- Sidebar Icons and logos -->
      <img class="logo_two" src="/assets/Analytics Dashboard/Navbar icons/Vector.png" alt="Logo" @click="closeSidebar">
      <img class="logo_ls" src="/assets/Analytics Dashboard/Navbar icons/Vector.png" alt="Logo">
      <img class="category" src="/assets/Analytics Dashboard/Navbar icons/category.svg" alt="Category icon">
      <img src="/assets/Analytics Dashboard/Navbar icons/trend-up.png" alt="Trend icon">
      <img src="/assets/Analytics Dashboard/Navbar icons/profile-2user.png" alt="Profile icon">
      <img src="/assets/Analytics Dashboard/Navbar icons/box.png" alt="Box icon">
      <img src="/assets/Analytics Dashboard/Navbar icons/discount-shape.png" alt="Discount icon">
      <img src="/assets/Analytics Dashboard/Navbar icons/info-circle.png" alt="Info icon">
      <!-- Theme switch icons -->
      <div class="theme">
        <div class="theme-container">
          <div class="theme-option" :class="{ 'active': !isDarkTheme }" @click="toggleTheme(false)">
            <img src="/assets/Analytics Dashboard/Navbar icons/Frame 427319677.png" alt="Light icon">
          </div>
          <div class="theme-option" :class="{ 'active': isDarkTheme }" @click="toggleTheme(true)">
            <img src="/assets/Analytics Dashboard/Navbar icons/moon 1.png" alt="Moon icon">
          </div>
        </div>
      </div>
      <!-- Explore icons -->
      <div class="explore">
        <img src="/assets/Analytics Dashboard/Navbar icons/arrow-right.png" alt="Arrow right icon">
        <img src="/assets/Analytics Dashboard/Navbar icons/setting-2.png" alt="Setting icon">
        <img src="/assets/Analytics Dashboard/Navbar icons/logout.png" alt="Arrow left icon">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppSidebar',
  data() {
    return {
      isMobile: window.innerWidth < 1024,
      isDarkTheme: false
    }
  },
  mounted() {
    window.addEventListener('resize', this.checkScreenSize);
    this.checkScreenSize();
    // Check for existing theme preference
    this.isDarkTheme = document.documentElement.classList.contains('dark-theme');
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    closeSidebar() {
      document.querySelector('.sidebar').classList.toggle('sidebar-close');
      document.querySelector('.body').classList.toggle('body-full');
    },
    toggleTheme(isDark) {
      this.isDarkTheme = isDark;
      if (isDark) {
        document.documentElement.classList.add('dark-theme');
      } else {
        document.documentElement.classList.remove('dark-theme');
      }
    },
    checkScreenSize() {
      this.isMobile = window.innerWidth < 1024;
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 5rem;
  height: 100vh;
  background-color: var(--sidebar-bg);
  position: fixed;
  z-index: 100;
  transition: all 0.5s ease;
}

.sidebar-close {
  transform: translateX(-100%);
}

.mobile-hidden {
  transform: translateX(-100%);
}

.navlinks {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  gap: 1.5rem;
  height: 90%;
}

.theme {
  margin-top: auto;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 1rem;
}

.theme-container {
  display: flex;
  flex-direction: column;
  background-color: var(--dropdown-bg);
  border-radius: 30px;
  padding: 0.5rem;
  gap: 0.5rem;
}

.theme-option {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.theme-option img {
  width: 1.2rem;
  height: 1.2rem;
}

.theme-option.active {
  background-color: #34CAA5;
}

.explore {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.logo_two {
  display: block;
}

.logo_ls {
  display: none;
}

img {
  cursor: pointer;
}

@media screen and (min-width: 1024px) {
  .sidebar {
    position: relative;
    min-width: 5rem;
    transform: translateX(0) !important;
  }
  
  .mobile-hidden {
    transform: translateX(0);
  }
  
  .logo_two {
    display: none;
  }
  
  .logo_ls {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style> 