<script lang="ts" setup>
import type { SorterData } from './constants'
import { storeToRefs } from 'pinia'
import CommonArrow from '~/assets/icons/CommonArrow.vue'
import { useApartmentFiltersStore } from '~/store/apartmentFilters'

interface Props {
  sorter: SorterData
}

const { sorter } = defineProps<Props>()
const filtersStore = useApartmentFiltersStore()
const { filters } = storeToRefs(filtersStore)

const sortVariants = ['abs', 'desc', undefined] as const
const currentSort = ref(filters.value[`${sorter.sortName}Sort`])

function onSorterClick() {
  const sortIndex = sortVariants.indexOf(currentSort.value)
  const isLast = sortIndex === sortVariants.length - 1

  const newSortIndex = isLast ? 0 : sortIndex + 1

  currentSort.value = sortVariants[newSortIndex]
  filtersStore.setSortFilter(sorter.sortName, sortVariants[newSortIndex])
}

watch(filters.value, () => {
  currentSort.value = filters.value[`${sorter.sortName}Sort`]
})
</script>

<template>
  <div class="sorter" @click="onSorterClick">
    <p class="sorter__text" :class="{ sorter__text_colored: currentSort }">
      {{ sorter.text }}
    </p>
    <div class="sorter__arrows">
      <CommonArrow
        class="sorter__arrow"
        :color="currentSort === 'abs' ? 'var(--dark-green)' : null"
      />
      <CommonArrow
        class="sorter__arrow sorter__arrow_reverse"
        :color="currentSort === 'desc' ? 'var(--dark-green)' : null"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sorter {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
  transition: var(--transition-default);

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    opacity: var(--hover-opacity-default);
  }

  &__text {
    font-size: 14px;
    line-height: 1.5;

    &_colored {
      color: var(--dark-green);
    }
  }

  &__arrows {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__arrow {
    width: 7px;
    height: 4px;

    &_reverse {
      transform: rotate(180deg);
    }
  }
}

@media screen and (min-width: 1280px) {
  .sorter {
    width: 100%;
    max-width: 120px;

    &__text {
      font-size: 14px;
      line-height: 1.5;

      &_colored {
        color: var(--dark-green);
      }
    }

    &__arrows {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    &__arrow {
      width: 7px;
      height: 4px;

      &_reverse {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
