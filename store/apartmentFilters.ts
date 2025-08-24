import type { ApartmentsQuery } from '~/server/api/apartments'
import type { SortParam } from '~/types/api'
import { defineStore } from 'pinia'

export type SortableFields = 'price' | 'floor' | 'square'
export type RangedFields = 'price' | 'square'
export type SpecificFields = 'rooms'

export const useApartmentFiltersStore = defineStore('apartmentFilters', () => {
  const filters = reactive<ApartmentsQuery>({})

  const sortableFields = ['price', 'floor', 'square'] as const

  const setSortFilter = (field: SortableFields, value?: SortParam) => {
    sortableFields.forEach((f) => {
      filters[`${f}Sort`] = f === field ? value : undefined
    })
  }

  const setRangeFilter = (field: RangedFields, value?: number[]) => {
    filters[`${field}Min`] = value?.[0]
    filters[`${field}Max`] = value?.[1]
  }

  const setSpecificFilter = (field: SpecificFields, value?: number) => {
    filters[field] = value
  }

  const resetFilters = () => {
    Object.keys(filters).forEach((key) => {
      filters[key as keyof ApartmentsQuery] = undefined
    })
  }

  return { filters, setSortFilter, setRangeFilter, setSpecificFilter, resetFilters }
})
