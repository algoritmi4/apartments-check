<script lang="ts" setup>
import Filters from '~/components/Filters/Filters.vue'
import ApartmentsBlock from '../components/Apartments/Block.vue'
import UpScrollArrow from '../components/UpScrollArrow.vue'

const { $api } = useNuxtApp()

const filtersPromise = useAsyncData('filters', () => $api.getFilters())
const apartmentsPromise = useAsyncData('apartments', () => $api.getApartments({
  offset: 0,
  limit: 5,
}))

const [
  { data: filters, status: filtersStatus },
  { data: apartments, status: apartmentsStatus },
] = await Promise.all([filtersPromise, apartmentsPromise])

if (filtersStatus.value === 'error' || apartmentsStatus.value === 'error') {
  throw createError({ statusCode: 500, statusMessage: 'Server error' })
}
</script>

<template>
  <main class="main-page">
    <ApartmentsBlock v-if="apartments" :apartments="apartments.items" />
    <Filters v-if="filters" :filters="filters.filters" />
    <UpScrollArrow />
  </main>
</template>

<style scoped>
.main-page {
  width: 100%;
  display: flex;
  padding: 48px 54px;
  min-height: 100vh;
  position: relative;
}
</style>
