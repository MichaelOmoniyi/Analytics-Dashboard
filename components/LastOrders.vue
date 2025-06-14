<template>
  <div class="lastOrder">
    <div class="lastOrder_header">
      <h3>Last Orders</h3>
      <p>See All</p>
    </div>
    <div class="orderTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Invoice</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in orders" :key="index">
            <td class="name">
              <img :src="order.image" :alt="`${order.name} Pic`">
              <p>{{ order.name }}</p>
            </td>
            <td>{{ order.date }}</td>
            <td class="amount">{{ order.amount }}</td>
            <td :class="order.status.toLowerCase()">{{ order.status }}</td>
            <td>
              <img src="/assets/Analytics Dashboard/Table icons/document-download.png" alt="document download icon">
              <span>View</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- Mobile view for orders - shows on small screens -->
    <div class="order-cards">
      <div class="order-card" v-for="(order, index) in orders" :key="`card-${index}`">
        <div class="card-header">
          <div class="card-name">
            <img :src="order.image" :alt="`${order.name} Pic`">
            <p>{{ order.name }}</p>
          </div>
          <span :class="order.status.toLowerCase()">{{ order.status }}</span>
        </div>
        <div class="card-details">
          <div class="detail-item">
            <span class="label">Date:</span>
            <span class="value">{{ order.date }}</span>
          </div>
          <div class="detail-item">
            <span class="label">Amount:</span>
            <span class="value amount">{{ order.amount }}</span>
          </div>
          <div class="detail-item invoice">
            <img src="/assets/Analytics Dashboard/Table icons/document-download.png" alt="document download icon">
            <span>View Invoice</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LastOrders',
  data() {
    return {
      orders: [
        {
          name: 'Marcus Bergson',
          date: 'Nov 15, 2023',
          amount: '$80,000',
          status: 'Paid',
          image: '/assets/Analytics Dashboard/Table icons/Marcus.png'
        },
        {
          name: 'Jaydon Vaccaro',
          date: 'Nov 15, 2023',
          amount: '$150,000',
          status: 'Refund',
          image: '/assets/Analytics Dashboard/Table icons/Jaydon.png'
        },
        {
          name: 'Corey Schleifer',
          date: 'Nov 14, 2023',
          amount: '$100,000',
          status: 'Paid',
          image: '/assets/Analytics Dashboard/Table icons/Corey.png'
        },
        {
          name: 'Cooper Press',
          date: 'Nov 14, 2023',
          amount: '$80,000',
          status: 'Refund',
          image: '/assets/Analytics Dashboard/Table icons/Cooper.png'
        },
        {
          name: 'Phillip Lubin',
          date: 'Nov 13, 2023',
          amount: '$78,000',
          status: 'Paid',
          image: '/assets/Analytics Dashboard/Table icons/Philip.png'
        }
      ]
    };
  }
};
</script>

<style scoped>
.lastOrder {
  padding: 1rem;
  background-color: var(--card-bg);
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  width: 100%;
  overflow: hidden;
}

.lastOrder_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.lastOrder_header p {
  color: var(--accent-color);
  cursor: pointer;
  font-weight: 500;
}

.orderTable {
  overflow-x: auto;
  width: 100%;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  min-width: 600px;
}

th {
  text-align: left;
  padding: 0.75rem 0.5rem;
  color: var(--text-color-secondary);
  font-weight: 500;
}

td {
  padding: 0.75rem 0.5rem;
  border-top: 1px solid rgba(228, 228, 228, 0.1);
}

.name {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.name img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
}

.amount {
  font-weight: 500;
}

.paid {
  color: #34CAA5;
}

.refund {
  color: #ED544E;
}

td:last-child {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-color);
  cursor: pointer;
}

/* Mobile cards styling */
.order-cards {
  display: none;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.order-card {
  border: 1px solid rgba(228, 228, 228, 0.1);
  border-radius: 10px;
  padding: 1rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.card-name {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.card-name img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
}

.card-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.label {
  color: var(--text-color-secondary);
  font-size: 12px;
}

.value {
  font-size: 14px;
}

.invoice {
  margin-top: 0.5rem;
  justify-content: flex-end;
  cursor: pointer;
  color: var(--text-color);
  gap: 0.5rem;
}

@media screen and (max-width: 768px) {
  .lastOrder {
    padding: 0.85rem;
  }
  
  table {
    font-size: 12px;
  }
  
  .name img {
    width: 2rem;
    height: 2rem;
  }
  
  th, td {
    padding: 0.6rem 0.4rem;
  }
}

@media screen and (max-width: 600px) {
  .orderTable {
    display: none;
  }
  
  .order-cards {
    display: flex;
  }
  
  .lastOrder {
    padding: 0.75rem;
  }
  
  .card-name img {
    width: 2rem;
    height: 2rem;
  }
  
  .card-name p {
    font-size: 14px;
  }
  
  .label {
    font-size: 11px;
  }
  
  .value {
    font-size: 13px;
  }
}
</style> 