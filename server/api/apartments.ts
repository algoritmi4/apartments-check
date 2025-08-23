import type { Apartment } from '~/dataBase/db'
import { apartments } from '~/dataBase/db'

export interface ApartmentsResponse {
  page: number
  limit: number
  total: number
  items: Apartment[]
}

export interface ApartmentsQuery {
  page?: number
  limit?: number
  priceMin?: number
  priceMax?: number
  rooms?: number
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

  if (query.priceMin) {
    results = results.filter((item: Apartment) => item.price >= Number(query.priceMin))
  }
  if (query.priceMax) {
    results = results.filter((item: Apartment) => item.price <= Number(query.priceMax))
  }

  if (query.rooms) {
    results = results.filter((item: Apartment) => item.rooms === Number(query.rooms))
  }

  if (query.squareMin) {
    results = results.filter((item: Apartment) => item.square >= Number(query.squareMin))
  }
  if (query.squareMax) {
    results = results.filter((item: Apartment) => item.square <= Number(query.squareMax))
  }

  const paginated = results.slice(offset, offset + limit)

  return {
    page,
    limit,
    total: results.length,
    items: paginated,
  }
})
