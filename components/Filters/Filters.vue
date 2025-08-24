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

const { filters } = defineProps<Props>()
const {
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
      :range="[filters.minPrice, filters.maxPrice]"
      :step="100"
      @update:model="setPriceDebounced"
    />
    <TitledRange
      ref="squareRange"
      title="Площадь, м²"
      :range="[filters.minSquare, filters.maxSquare]"
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
