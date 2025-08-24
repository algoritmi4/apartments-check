<script lang="ts" setup>
import type { Apartment } from '~/dataBase/db'
import ApartmentsList from './List.vue'

const { apartments } = defineProps<{ apartments: Apartment[] }>()
</script>

<template>
  <div class="apartments-block">
    <h1 class="apartments-block__title">
      Квартиры
    </h1>
    <ApartmentsList :apartments="apartments" />
  </div>
</template>

<style lang="scss" scoped>
.apartments-block {
  width: 100%;

  &__title {
    font-weight: 700;
    font-size: 54px;
  }
}
</style>
