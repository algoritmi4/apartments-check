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
  transition: var(--transition-default);

  &:hover {
    opacity: var(--hover-opacity-default);
  }

  &__icon {
    width: 8px;
    height: 12px;
  }
}
</style>
