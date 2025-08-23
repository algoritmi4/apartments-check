import type { ApartmentsQuery, ApartmentsResponse } from '~/server/api/apartments'

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
  }

  return {
    provide: {
      api,
    },
  }
})
