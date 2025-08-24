<script lang="ts" setup>
import type { Apartment } from '~/dataBase/db'
import { storeToRefs } from 'pinia'
import Loader from '~/components/Loader.vue'
import { useApartmentFiltersStore } from '~/store/apartmentFilters'
import { usePagination } from '../../composables/usePagination'
import ApartmentsCard from './Card.vue'
import ColumnFilter from './ColumnFilter.vue'
import { SORTERS_DATA } from './constants'

const { apartments } = defineProps<{ apartments: Apartment[] }>()
const { $api } = useNuxtApp()
const apartmentFiltersStore = useApartmentFiltersStore()
const { filters } = storeToRefs(apartmentFiltersStore)

async function getApartments(offset: number, limit: number) {
  return $api.getApartments({
    offset,
    limit,
    ...filters.value,
  })
}

function onError() {
  createError({
    status: 500,
    message: 'Server error',
  })
}

const {
  items,
  isLoading,
  isFetching,
  hasMore,
  loadMore,
  reset,
  isReseted,
} = usePagination({
  onUpdate: getApartments,
  onError,
  pageSize: 10,
  offset: 5,
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
      <div class="apartments-list__title apartments-list__title_number_first">
        <p class="apartments-list__title-text">
          Планировка
        </p>
      </div>
      <div class="apartments-list__title apartments-list__title_number_second">
        <p class="apartments-list__title-text">
          Квартира
        </p>
      </div>
      <ColumnFilter v-for="sorter in SORTERS_DATA" :key="sorter.id" :sorter="sorter" />
    </div>
    <div v-if="isLoading" class="apartments-list__load">
      <Loader />
    </div>
    <div v-else-if="allItems.length" class="apartments-list__cards">
      <ApartmentsCard v-for="apartment in allItems" :key="apartment.id" :apartment="apartment" />
    </div>
    <div v-else class="apartments-list__empty">
      Не найдено
    </div>
    <button
      v-if="hasMore"
      type="button"
      class="apartments-list__button"
      :class="{ 'apartments-list__button_disabled': isLoading || isFetching }"
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
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  max-width: 506px;

  &__titles {
    width: 100%;
    display: flex;
    padding: 8px 0;
  }

  &__title {
    display: none;
    margin-left: 0;

    &-text {
      font-size: 14px;
      line-height: 1.5;
    }
  }

  &__cards {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__load {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
  }

  &__empty {
    font-size: 16px;
    line-height: 1.5;
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
    transition: var(--transition-default);
    margin-top: 24px;

    &:hover {
      opacity: var(--hover-opacity-default);
    }

    &_disabled {
      opacity: var(--hover-opacity-default);
      cursor: default;
    }
  }
}

@media screen and (min-width: 1280px) {
  .apartments-list {
    margin-top: 48px;
    max-width: 801px;

    &__titles {
      width: 100%;
      display: flex;
      padding: 0 0 16px;
      box-shadow: var(--shadow-secondary);
    }

    &__title {
      display: flex;
      margin-left: 20px;
      width: 100%;

      &:first-child {
        margin-left: 0;
      }

      &_number {
        &_first {
          max-width: 80px;
        }
        &_second {
          max-width: 280px;
        }
      }
    }

    &__button {
      margin-top: 48px;
    }
  }
}
</style>
