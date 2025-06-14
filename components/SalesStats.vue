<template>
  <div class="salesStats">
    <div class="stat-row">
      <div class="stat">
        <div class="statImage">
          <img src="/assets/Analytics Dashboard/Stats/box-tick.png" alt="box-tick">
          <img src="/assets/Analytics Dashboard/Stats/Vector 2.png" alt="trending up">
        </div>
        <p class="description">Total Order</p>
        <p class="amount"><b>350</b></p>
        <div class="scale">
          <span class="positive"><img src="/assets/Analytics Dashboard/Stats/trending-up.png" alt="Trending up"> 23,5%</span>
          <p>vs. previous months</p>
        </div>
      </div>
      <div class="stat">
        <div class="statImage">
          <img src="/assets/Analytics Dashboard/Stats/3d-rotate.png" alt="box-tick">
          <img src="/assets/Analytics Dashboard/Stats/Vector 1.png" alt="trending down">
        </div>
        <p class="description">Total Refund</p>
        <p class="amount"><b>270</b></p>
        <div class="scale">
          <span class="negative"><img src="/assets/Analytics Dashboard/Stats/trending-up (1).png" alt="Trending down"> 23,5%</span>
          <p>vs. previous months</p>
        </div>
      </div>
    </div>
    <div class="stat-row">
      <div class="stat">
        <div class="statImage">
          <img src="/assets/Analytics Dashboard/Stats/shopping-cart.png" alt="box-tick">
          <img src="/assets/Analytics Dashboard/Stats/Vector 1.png" alt="trending down">
        </div>
        <p class="description">Average Sales</p>
        <p class="amount"><b>1567</b></p>
        <div class="scale">
          <span class="negative"><img src="/assets/Analytics Dashboard/Stats/trending-up (1).png" alt="Trending down"> 23,5%</span>
          <p>vs. previous months</p>
        </div>
      </div>
      <div class="stat">
        <div class="statImage">
          <img src="/assets/Analytics Dashboard/Stats/coin.png" alt="box-tick">
          <img src="/assets/Analytics Dashboard/Stats/Vector 2.png" alt="trending up">
        </div>
        <p class="description">Total Income</p>
        <p class="amount"><b>$350.000</b></p>
        <div class="scale">
          <span class="positive"><img src="/assets/Analytics Dashboard/Stats/trending-up.png" alt="Trending up"> 23,5%</span>
          <p>vs. previous months</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SalesStats'
}
</script>

<style scoped>
.salesStats {
  width: 100%;
  padding: 1rem;
  background-color: var(--card-bg);
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
}

.stat-row {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.stat {
  width: 100%;
  background-color: var(--card-bg);
  border-radius: 14px;
  padding: 1rem;
  border: 1px solid rgba(228, 228, 228, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.statImage {
  width: 100%;
  position: relative;
  margin-bottom: 0.5rem;
  display: flex;
  gap: 1rem;
}

.statImage img:nth-child(2) {
  width: 100%;
  height: 100%;
  max-height: 32px;
}

.description {
  color: var(--text-color-secondary);
  font-size: 14px;
}

.amount {
  font-size: 20px;
  font-weight: bold;
  margin: 0.5rem 0;
}

.scale {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 12px;
  flex-wrap: wrap;
}

.scale p {
  color: var(--text-color-secondary);
}

.scale span {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-weight: 500;
}

.positive {
  color: #34CAA5;
}

.negative {
  color: #ED544E;
}

@media screen and (max-width: 1024px) {
  .stat-row {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 768px) {
  .salesStats {
    padding: 0.85rem;
  }
  
  .stat {
    padding: 0.75rem;
  }
  
  .description {
    font-size: 12px;
  }
  
  .amount {
    font-size: 16px;
    margin: 0.35rem 0;
  }
  
  .scale {
    font-size: 10px;
  }
}

@media screen and (max-width: 480px) {
  .salesStats {
    padding: 0.75rem;
  }
  
  .stat {
    padding: 0.65rem;
  }
  
  .statImage {
    margin-bottom: 0.35rem;
    gap: 0.5rem;
  }
  
  .statImage img:first-child {
    width: 20px;
    height: 20px;
  }
  
  .statImage img:nth-child(2) {
    max-height: 24px;
  }
}
</style> 