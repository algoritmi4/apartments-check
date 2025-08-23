import type { Apartment } from '~/dataBase/db'
import type { PaginatedResponse } from '~/types/api'
import { apartments } from '~/dataBase/db'

export type ApartmentsResponse = PaginatedResponse<Apartment>

export interface ApartmentsQuery {
  page?: number
  limit?: number
  priceSort?: 'abs' | 'desc'
  priceMin?: number
  priceMax?: number
  rooms?: number
  floor?: number
  floorSort?: 'abs' | 'desc'
  squareSort?: 'abs' | 'desc'
  squareMin?: number
  squareMax?: number
}

export default defineEventHandler(async (event) => {
  await new Promise(resolve => setTimeout(resolve, 300))

  const query = getQuery<ApartmentsQuery>(event)

  const page = Number(query.page) || 1
  const limit = Number(query.limit) || 10
  const offset = (page - 1) * limit

  let results = apartments
  const total = results.length

  if (query.priceMin) {
    results = results.filter((item: Apartment) => item.price >= Number(query.priceMin))
  }
  if (query.priceMax) {
    results = results.filter((item: Apartment) => item.price <= Number(query.priceMax))
  }

  if (query.rooms) {
    results = results.filter((item: Apartment) => item.rooms === Number(query.rooms))
  }
  if (query.floor) {
    results = results.filter((item: Apartment) => item.floors.current === Number(query.floor))
  }

  if (query.squareMin) {
    results = results.filter((item: Apartment) => item.square >= Number(query.squareMin))
  }
  if (query.squareMax) {
    results = results.filter((item: Apartment) => item.square <= Number(query.squareMax))
  }
  if (query.floorSort) {
    results = results.sort((a: Apartment, b: Apartment) => {
      if (query.floorSort === 'abs') {
        return b.floors.current - a.floors.current
      }
      else {
        return a.floors.current - b.floors.current
      }
    })
  }
  if (query.priceSort) {
    results = results.sort((a: Apartment, b: Apartment) => {
      if (query.priceSort === 'abs') {
        return b.price - a.price
      }
      else {
        return a.price - b.price
      }
    })
  }
  if (query.squareSort) {
    results = results.sort((a: Apartment, b: Apartment) => {
      if (query.floorSort === 'abs') {
        return b.square - a.square
      }
      else {
        return a.square - b.square
      }
    })
  }

  const paginated = results.slice(offset, offset + limit)

  return {
    page,
    limit,
    total,
    items: paginated,
  }
})
