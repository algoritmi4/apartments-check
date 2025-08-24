<script lang="ts" setup>
import LongArrow from '~/assets/icons/LongArrow.vue'
import { useScrollable } from '~/composables/useScrollable'

const { isScrollable } = useScrollable()

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <button
    v-if="isScrollable"
    type="button"
    class="up-scroll-arrow"
    @click="scrollToTop"
  >
    <LongArrow class="up-scroll-arrow__icon" />
  </button>
</template>

<style lang="scss" scoped>
.up-scroll-arrow {
  width: 40px;
  height: 40px;
  position: fixed;
  right: 32px;
  bottom: 32px;
  z-index: 1;
  border-radius: 50%;
  background: var(--dark-green);
  transition: opacity 0.15s linear;

  &:hover {
    opacity: 0.7;
  }

  &__icon {
    width: 8px;
    height: 12px;
  }
}
</style>
