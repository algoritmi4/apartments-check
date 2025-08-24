import type { ApartmentsQuery } from '~/server/api/apartments'
import type { SortParam } from '~/types/api'
import { defineStore } from 'pinia'

type SortableFields = 'price' | 'floor' | 'square'
type RangedFields = 'price' | 'square'
type SpecificFields = 'rooms'

export const useCounterStore = defineStore('counter', () => {
  const filters: ApartmentsQuery = {}

  const setSortFilter = (field: SortableFields, value: SortParam) => {
    filters[`${field}Sort`] = value
  }

  const setMinFilter = (field: RangedFields, value: number) => {
    filters[`${field}Min`] = value
  }

  const setMaxFilter = (field: RangedFields, value: number) => {
    filters[`${field}Max`] = value
  }

  const setSpecificFilter = (field: SpecificFields, value: number) => {
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
