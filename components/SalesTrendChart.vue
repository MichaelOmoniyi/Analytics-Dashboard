<template>
  <div class="salesTrend">
    <div class="salesTrend_header">
      <h3>Sales Trend</h3>
      <div class="range">
        <p>Short by:</p>
        <span class="dropdown-toggle" @click="toggleDropdown">
          <p>{{ selectedTimeframe }}</p>
          <span class="drop-arrow">
            <img src="/assets/Analytics Dashboard/Header Icons/Stroke-1.png" alt="">
          </span>
        </span>
        <div class="timeframe-dropdown" v-show="isDropdownOpen">
          <p @click="selectTimeframe('Weekly')">Weekly</p>
          <p @click="selectTimeframe('Monthly')">Monthly</p>
          <p @click="selectTimeframe('Yearly')">Yearly</p>
        </div>
      </div>
    </div>
    <div class="chart-container">
      <Bar 
        :data="chartData" 
        :options="chartOptions"
        :height="chartHeight" 
      />
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default {
  name: 'SalesTrendChart',
  components: {
    Bar
  },
  data() {
    return {
      selectedTimeframe: 'Weekly',
      isDropdownOpen: false,
      chartHeight: 250,
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Sales',
          data: [15000, 25000, 18000, 30000, 28000, 35000, 22000, 37000, 33000, 42000, 38000, 45000],
          backgroundColor: '#34CAA5',
          borderRadius: 20,
          barThickness: 30,
          maxBarThickness: 40
        }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'rgba(52, 202, 165, 0.8)',
            titleColor: '#fff',
            bodyColor: '#fff',
            padding: 10,
            cornerRadius: 6,
            displayColors: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(156, 156, 156, 0.1)'
            },
            ticks: {
              font: {
                size: 12
              },
              color: '#9CA4AB',
              callback: function(value) {
                if (value >= 1000) {
                  return value / 1000 + 'k';
                }
                return value;
              }
            }
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              font: {
                size: 12
              },
              color: '#9CA4AB'
            }
          }
        }
      }
    };
  },
  mounted() {
    window.addEventListener('resize', this.updateChartHeight);
    this.updateChartHeight();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateChartHeight);
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectTimeframe(timeframe) {
      this.selectedTimeframe = timeframe;
      this.isDropdownOpen = false;
      
      // Update chart data based on selected timeframe
      if (timeframe === 'Weekly') {
        this.chartData.datasets[0].data = [15000, 25000, 18000, 30000, 28000, 35000, 22000, 37000, 33000, 42000, 38000, 45000];
      } else if (timeframe === 'Monthly') {
        this.chartData.datasets[0].data = [20000, 30000, 25000, 35000, 32000, 40000, 28000, 42000, 38000, 48000, 44000, 50000];
      } else {
        this.chartData.datasets[0].data = [180000, 220000, 250000, 300000, 280000, 350000, 320000, 380000, 360000, 400000, 420000, 450000];
      }
    },
    updateChartHeight() {
      const width = window.innerWidth;
      if (width < 480) {
        this.chartHeight = 180;
        // Adjust scale font size for small screens
        this.chartOptions.scales.y.ticks.font.size = 10;
        this.chartOptions.scales.x.ticks.font.size = 10;
      } else if (width < 768) {
        this.chartHeight = 220;
        this.chartOptions.scales.y.ticks.font.size = 11;
        this.chartOptions.scales.x.ticks.font.size = 11;
      } else {
        this.chartHeight = 250;
        this.chartOptions.scales.y.ticks.font.size = 12;
        this.chartOptions.scales.x.ticks.font.size = 12;
      }
    }
  }
};
</script>

<style scoped>
.salesTrend {
  padding: 1rem;
  background-color: var(--card-bg);
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  width: 100%;
}

.salesTrend_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.range {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--dropdown-bg);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  white-space: nowrap;
}

.timeframe-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 10;
  padding: 0.5rem;
  min-width: 120px;
}

.timeframe-dropdown p {
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 4px;
}

.timeframe-dropdown p:hover {
  background-color: var(--dropdown-bg);
}

.chart-container {
  width: 100%;
  position: relative;
  overflow: hidden;
}

@media screen and (max-width: 480px) {
  .salesTrend {
    padding: 0.75rem;
  }
  
  .salesTrend_header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .range {
    width: 100%;
  }
  
  .dropdown-toggle {
    padding: 0.4rem 0.75rem;
    font-size: 0.9rem;
  }
  
  h3 {
    font-size: 1rem;
  }
  
  .range p {
    font-size: 0.9rem;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .salesTrend {
    padding: 0.85rem;
  }
  
  h3 {
    font-size: 1.1rem;
  }
  
  .range {
    font-size: 0.95rem;
  }
}
</style> 