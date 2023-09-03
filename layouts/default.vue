<style scoped>
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
  }
</style>

<template>
  <div class="background-light">
    <div class="main background-light">
      <slot />
    </div>
  </div>
</template>
