<template>
  <div class="mainContainer">
    <AppSidebar />
    <section class="body">
      <AppHeader />
      <main>
        <div class="t-row">
          <SalesTrendChart />
          <SalesStats />
        </div>
        <div class="l-row">
          <LastOrders />
          <TopPlatforms />
        </div>
      </main>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
.mainContainer {
  display: flex;
  width: 100%;
}

.body {
  width: 100%;
  height: 100vh;
  background-color: var(--page-bg);
  overflow-x: hidden;
  overflow-y: auto;
}

main {
  padding: 1rem;
  overflow-x: hidden;
}

.t-row, .l-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
  width: 100%;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  main {
    padding: 1rem 1.5rem;
  }
  
  .t-row, .l-row {
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
}

@media screen and (min-width: 1024px) {
  .t-row {
    grid-template-columns: 2fr 1fr;
  }
  
  .l-row {
    grid-template-columns: 2fr 1fr;
  }
  
  main {
    padding: 1rem 2rem;
  }
}

@media screen and (max-width: 480px) {
  main {
    padding: 0.75rem;
  }
  
  .t-row, .l-row {
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }
}

/* Apply these styles at the global level */
:global(html), :global(body) {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  max-width: 100%;
}

/* Fix for mobile safari bottom bar */
@supports (-webkit-touch-callout: none) {
  .body {
    height: -webkit-fill-available;
  }
}
</style> 