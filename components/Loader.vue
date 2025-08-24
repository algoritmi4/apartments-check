<template>
  <span class="spinner" />
</template>

<style scoped>
.spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 3px solid var(--dark-green);
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin .75s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
