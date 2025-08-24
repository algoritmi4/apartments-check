export interface PaginatedResponse<T> {
  page: number
  limit: number
  total: number
  items: T[]
}

export type SortParam = 'abs' | 'desc'
