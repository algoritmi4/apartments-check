import type { ApartmentsQuery, ApartmentsResponse } from '~/server/api/apartments'
import type { FiltersResponse } from '~/server/api/filters'

export default defineNuxtPlugin(() => {
  const api = {
    async getApartments(query: ApartmentsQuery = {}): Promise<ApartmentsResponse> {
      const params = new URLSearchParams()

      Object.entries(query).forEach(([key, value]) => {
        if (value !== undefined)
          params.append(key, String(value))
      })

      return await $fetch<ApartmentsResponse>(`/api/apartments?${params.toString()}`)
    },
    async getFilters() {
      return await $fetch<FiltersResponse>('/api/filters')
    },
  }

  return {
    provide: {
      api,
    },
  }
})
