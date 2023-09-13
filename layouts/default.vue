<style scoped>
  @keyframes fadeIn {
    from {
      opacity: 0;
      filter: blur(1rem);
    }
    to {
      opacity: 1;
    }
  }

  .background-light {
    background-color: #FAFAFA;
  }
  .main {
    margin: 0 auto;
    width: 100%;
    max-width: 412px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: fadeIn 451ms ease;
  }
</style>

<template>
  <div class="background-light">
    <div class="main">
      <slot />
    </div>
  </div>
</template>
