<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style scoped>
.layout {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1440px;
}
</style>
