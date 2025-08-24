import type { SortableFields } from '~/store/apartmentFilters'

export interface SorterData {
  id: number
  text: string
  sortName: SortableFields
}

export const SORTERS_DATA: SorterData[] = [
  {
    id: 0,
    text: 'S, м²',
    sortName: 'square',
  },
  {
    id: 1,
    text: 'Этаж',
    sortName: 'floor',
  },
  {
    id: 2,
    text: 'Цена, ₽',
    sortName: 'price',
  },
]
