<template>
  <div class="topPlatforms">
    <div class="topPlatform_header">
      <h3>Top Platform</h3>
      <p>See All</p>
    </div>
    <div class="platforms">
      <div class="platform" v-for="(platform, index) in platforms" :key="index">
        <h3>{{ platform.name }}</h3>
        <div class="progress-container">
          <div 
            class="progress-bar" 
            :style="{ 
              width: `${platform.percentage}%`, 
              backgroundColor: platform.color 
            }"
          ></div>
        </div>
        <div class="price">
          <p>{{ platform.amount }}</p>
          <p :style="{ color: platform.color }">{{ platform.growth }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopPlatforms',
  data() {
    return {
      platforms: [
        {
          name: 'Book Bazaar',
          percentage: 80,
          amount: '$2,500,000',
          growth: '+15%',
          color: '#6160DC'
        },
        {
          name: 'Artisan Aisle',
          percentage: 65,
          amount: '$1,800,000',
          growth: '+10%',
          color: '#54C5EB'
        },
        {
          name: 'Toy Troop',
          percentage: 50,
          amount: '$1,200,000',
          growth: '+8%',
          color: '#FFB74A'
        },
        {
          name: 'XStore',
          percentage: 30,
          amount: '$600,000',
          growth: '+4%',
          color: '#FF4A55'
        }
      ]
    };
  }
};
</script>

<style scoped>
.topPlatforms {
  padding: 1rem;
  background-color: var(--card-bg);
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  width: 100%;
  overflow: hidden;
}

.topPlatform_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.topPlatform_header p {
  color: var(--accent-color);
  cursor: pointer;
  font-weight: 500;
}

.platforms {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.platform {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.platform h3 {
  font-size: 16px;
  font-weight: 600;
}

.progress-container {
  width: 100%;
  height: 12px;
  background-color: var(--progress-bg);
  border-radius: 40px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  border-radius: 40px;
  transition: width 0.5s ease;
}

.price {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

.price p:last-child {
  font-weight: 500;
}

@media screen and (max-width: 768px) {
  .topPlatforms {
    padding: 0.85rem;
  }
  
  .topPlatform_header {
    margin-bottom: 1.25rem;
  }
  
  .platforms {
    gap: 1.25rem;
  }
  
  .platform {
    gap: 0.5rem;
  }
  
  .platform h3 {
    font-size: 15px;
  }
  
  .progress-container {
    height: 10px;
  }
  
  .price {
    font-size: 13px;
  }
}

@media screen and (max-width: 480px) {
  .topPlatforms {
    padding: 0.75rem;
  }
  
  .topPlatform_header {
    margin-bottom: 1rem;
  }
  
  .topPlatform_header h3 {
    font-size: 1rem;
  }
  
  .topPlatform_header p {
    font-size: 0.9rem;
  }
  
  .platforms {
    gap: 1rem;
  }
  
  .platform {
    gap: 0.4rem;
  }
  
  .platform h3 {
    font-size: 14px;
  }
  
  .progress-container {
    height: 8px;
  }
  
  .price {
    font-size: 12px;
  }
}
</style> 