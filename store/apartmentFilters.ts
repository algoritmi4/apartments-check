import type { ApartmentsQuery } from '~/server/api/apartments'
import type { SortParam } from '~/types/api'
import { defineStore } from 'pinia'

export type SortableFields = 'price' | 'floor' | 'square'
export type RangedFields = 'price' | 'square'
export type SpecificFields = 'rooms'

export const useApartmentFiltersStore = defineStore('apartmentFilters', () => {
  const filters = reactive<ApartmentsQuery>({})

  const sortableFields = ['price', 'floor', 'square'] as const

  const setSortFilter = (field: SortableFields, value: SortParam | undefined) => {
    filters[`${field}Sort`] = value

    if (value) {
      sortableFields.forEach((f) => {
        if (f !== field)
          filters[`${f}Sort`] = undefined
      })
    }
  }

  const setMinFilter = (field: RangedFields, value: number | undefined) => {
    filters[`${field}Min`] = value
  }

  const setMaxFilter = (field: RangedFields, value: number | undefined) => {
    filters[`${field}Max`] = value
  }

  const setSpecificFilter = (field: SpecificFields, value: number | undefined) => {
    filters[field] = value
  }

  const resetFilters = () => {
    filters.priceMin = undefined
    filters.priceMax = undefined
    filters.squareMin = undefined
    filters.squareMax = undefined
    filters.rooms = undefined
  }

  return { filters, setSortFilter, setMinFilter, setMaxFilter, setSpecificFilter, resetFilters }
})
