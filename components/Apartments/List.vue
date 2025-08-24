<script lang="ts" setup>
import type { Apartment } from '~/dataBase/db'
import { storeToRefs } from 'pinia'
import { useApartmentFiltersStore } from '~/store/apartmentFilters'
import { usePagination } from '../../composables/usePagination'
import ApartmentsCard from './Card.vue'
import ColumnFilter from './ColumnFilter.vue'
import { SORTERS_DATA } from './constants'

const { apartments } = defineProps<{ apartments: Apartment[] }>()
const { $api } = useNuxtApp()
const apartmentFiltersStore = useApartmentFiltersStore()
const { filters } = storeToRefs(apartmentFiltersStore)

async function getApartments(page: number, limit: number) {
  return $api.getApartments({
    page,
    limit,
    ...filters.value,
  })
}

const {
  items,
  isLoading,
  hasMore,
  loadMore,
  reset,
  isReseted,
} = usePagination({
  onUpdate: getApartments,
  pageSize: 10,
})

const allItems = computed(() => [
  ...(!isReseted.value && apartments ? apartments : []),
  ...items.value,
])

watch(filters, reset, { deep: true })
</script>

<template>
  <div class="apartments-list">
    <div class="apartments-list__titles">
      <div class="apartments-list__title">
        <p class="apartments-list__title-text">
          Планировка
        </p>
      </div>
      <div class="apartments-list__title">
        <p class="apartments-list__title-text">
          Квартира
        </p>
      </div>
      <ColumnFilter v-for="sorter in SORTERS_DATA" :key="sorter.id" :sorter="sorter" />
    </div>
    <ApartmentsCard v-for="apartment in allItems" :key="apartment.id" :apartment="apartment" />
    <button
      v-if="hasMore"
      type="button"
      class="apartments-list__button"
      :class="{ 'apartments-list__button_disabled': isLoading }"
      :disabled="isLoading"
      @click="loadMore"
    >
      Загрузить еще
    </button>
  </div>
</template>

<style scoped lang="scss">
.apartments-list {
  width: 100%;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  max-width: 506px;

  &__titles {
    width: 100%;
    display: flex;
  }

  &__title {
    display: flex;
    margin-right: 20px;

    &-text {
      font-size: 14px;
      line-height: 1.5;
    }
  }

  &__button {
    font-size: 15px;
    line-height: 1.5;
    width: fit-content;
    background-color: #FFF;
    border: 1px solid var(--border-secondary);
    border-radius: 25px;
    padding: 8px 24px;
    cursor: pointer;
    transition: opacity 0.3s linear;

    &:hover {
      opacity: 0.7;
    }
  }
}

@media screen and (max-width: 1024px) {
  .apartments-list {
    margin-top: 24px;

    &__title {
      display: none;
      margin-right: 0;
    }
  }
}
</style>
