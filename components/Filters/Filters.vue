<script lang="ts" setup>
import type { Filters } from '~/dataBase/db'
import CloseCross from '~/assets/icons/CloseCross.vue'
import { useApartmentFiltersStore } from '~/store/apartmentFilters'
import { debounce } from '../../utils/debounce'
import { ROOMS_FILTER_DATA } from './constants'
import TitledRange from './TitledRange.vue'

interface Props {
  filters: Filters
}

const { filters: baseFilters } = defineProps<Props>()
const {
  filters,
  setSpecificFilter,
  setMaxFilter,
  setMinFilter,
  resetFilters,
} = useApartmentFiltersStore()

const priceRange = ref()
const squareRange = ref()

const setPriceDebounced = debounce((value) => {
  const [from, to] = value

  setMinFilter('price', from)
  setMaxFilter('price', to)
}, 700)

const setSquareDebounced = debounce((value) => {
  const [from, to] = value

  setMinFilter('square', from)
  setMaxFilter('square', to)
}, 700)

function onResetClick() {
  resetFilters()
  priceRange.value.reset()
  squareRange.value.reset()
}
</script>

<template>
  <div class="filters">
    <div class="filters__rooms">
      <button
        v-for="room in ROOMS_FILTER_DATA"
        :key="room.id"
        type="button"
        class="filters__rooms-button"
        :class="{ 'filters__rooms-button_active': filters.rooms === room.value }"
        @click="setSpecificFilter('rooms', room.value)"
      >
        <p class="filters__rooms-button-text">
          {{ room.text }}
        </p>
      </button>
    </div>
    <TitledRange
      ref="priceRange"
      title="Стоимость квартиры, ₽"
      :range="[baseFilters.minPrice, baseFilters.maxPrice]"
      :step="100"
      @update:model="setPriceDebounced"
    />
    <TitledRange
      ref="squareRange"
      title="Площадь, м²"
      :range="[baseFilters.minSquare, baseFilters.maxSquare]"
      :step="1"
      @update:model="setSquareDebounced"
    />
    <button type="button" class="filters__reset" @click="onResetClick">
      <p class="filters__reset-text">
        Сбросить фильтры
      </p>
      <CloseCross class="filters__reset-icon" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.filters {
  width: 100%;
  max-width: 318px;
  max-height: 318px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: var(--gradient-green);
  gap: 24px;
  border-radius: 10px;

  &__rooms {
    display: flex;
    gap: 16px;

    &-button {
      outline: none;
      width: 44px;
      border-radius: 50%;
      padding: 10px 12px;
      background-color: var(--primary);

      &-text {
        font-size: 16px;
        line-height: 1.5;
      }

      &:hover {
        background-color: var(--dark-green);
        color: var(--primary);
        box-shadow: var(--shadow-primary);
      }

      &_active {
        background-color: var(--dark-green);
        color: var(--primary);
        box-shadow: var(--shadow-primary);
      }
    }
  }

  &__reset {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: 16px;
    transition: opacity 0.3s linear;

    &:hover {
      opacity: 0.7;
    }
  }
}

@media screen and (min-width: 1280px) {
  .filters {
    padding: 40px;
    max-width: 400px;
    max-height: 372px;
  }
}
</style>
