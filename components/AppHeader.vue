<template>
  <header>
    <!-- Header Section (small screen) -->
    <div class="header-sm">
      <img class="logo" src="/assets/Analytics Dashboard/Navbar icons/Vector.png" alt="Logo" @click="toggleSidebar">
      <h3>Dashboard</h3>
      <img class="profilePic" src="/assets/Analytics Dashboard/Header Icons/Rectangle 1061.png" alt="Profile img" @click="toggleProfile">
    </div>
    <!-- Header Section (large screen) -->
    <div class="header-ls">
      <h3>Dashboard</h3>
      <!-- Search, reminder and profile section -->
      <div class="search_profile">
        <div class="search_ls">
          <label for="search"><img src="/assets/Analytics Dashboard/Header Icons/Seacrh.png" alt="Search icon"></label>
          <input id="search" type="text" name="search" placeholder="Search...">
        </div>
        <div class="reminder_notification">
          <img src="/assets/Analytics Dashboard/Header Icons/Group.png" alt="">
          <p><b>{{ currentDate }}</b></p>
          <span class="notification">
            <img src="/assets/Analytics Dashboard/Header Icons/Vector (1).png" alt="Notification icon">
          </span>
        </div>
        <div class="profileInfo_pic">
          <img src="/assets/Analytics Dashboard/Header Icons/Rectangle 1061.png" alt="Profile Pic">
          <div class="profileInfo">
            <p><b>Justin Bergson</b></p>
            <p>Justin@gmail.com</p>
          </div>
          <img src="/assets/Analytics Dashboard/Header Icons/Stroke-1.png" alt="">
        </div>
        <img class="profilePic" src="/assets/Analytics Dashboard/Header Icons/Rectangle 1061.png" alt="Profile img" @click="toggleProfile">
      </div>
    </div>
    <!-- Profile dropdown for small screen -->
    <div class="dropdown" :class="{ 'dropdown-open': isProfileOpen }">
      <div class="profile">
        <img src="/assets/Analytics Dashboard/Header Icons/Rectangle 1061.png" alt="">
        <div class="name_email">
          <p>Justin Bergson</p>
          <p>Justin@gmail.com</p>
        </div>
        <img src="/assets/Analytics Dashboard/Header Icons/Stroke-1.png" alt="Dropdown icon">
      </div>
      <div class="info">
        <img src="/assets/Analytics Dashboard/Header Icons/Group.png" alt="">
        <p><b>{{ currentDate }}</b></p>
        <img src="/assets/Analytics Dashboard/Header Icons/Vector (1).png" alt="Notification icon">
      </div>
      <div class="search">
        <label for="search-mobile"><img src="/assets/Analytics Dashboard/Header Icons/Seacrh.png" alt="Search icon"></label>
        <input id="search-mobile" type="text" name="search" placeholder="Search...">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isProfileOpen: false,
      currentDate: this.formatDate(new Date())
    }
  },
  methods: {
    toggleSidebar() {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.toggle('mobile-hidden');
    },
    toggleProfile() {
      this.isProfileOpen = !this.isProfileOpen;
    },
    formatDate(date) {
      // Format date as Month DD, YYYY
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    }
  }
}
</script>

<style scoped>
header {
  padding: 1rem;
  background-color: var(--card-bg);
  position: relative;
}

.header-sm {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-ls {
  display: none;
}

.dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  background-color: var(--card-bg);
  padding: 1rem;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 3;
  display: none;
  flex-direction: column;
  gap: 1rem;
}

.dropdown-open {
  display: flex;
}

.profile {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.name_email {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.search {
  display: flex;
  align-items: center;
  background-color: var(--search-bg);
  padding: 0.5rem;
  border-radius: 24px;
  gap: 0.5rem;
}

.search input {
  background: transparent;
  border: none;
  outline: none;
  color: var(--text-color);
  width: 100%;
}

.profilePic {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
}

.logo {
  cursor: pointer;
}

@media screen and (min-width: 1024px) {
  .header-sm {
    display: none;
  }
  
  .header-ls {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .search_profile {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  
  .search_ls {
    display: flex;
    align-items: center;
    background-color: var(--search-bg);
    padding: 0.5rem 1rem;
    border-radius: 24px;
    gap: 0.5rem;
  }
  
  .search_ls input {
    background: transparent;
    border: none;
    outline: none;
    color: var(--text-color);
    width: 100%;
  }
  
  .reminder_notification {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .notification {
    position: relative;
  }
  
  .profileInfo_pic {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .profileInfo {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style> 