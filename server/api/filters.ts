import type { Filters } from '~/dataBase/db'
import { filtersData } from '~/dataBase/db'

export interface FiltersResponse {
  filters: Filters
}

export default defineEventHandler(async () => {
  await new Promise(resolve => setTimeout(resolve, 300))

  return {
    filters: filtersData,
  }
})
