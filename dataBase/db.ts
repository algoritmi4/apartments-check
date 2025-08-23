export interface Apartment {
  id: number
  rooms: number
  price: number
  square: number
  floors: {
    current: number
    total: number
  }
}

export const apartments = [
  { id: 0, rooms: 1, price: 10000, square: 63.1, floors: { current: 1, total: 3 } },
  { id: 1, rooms: 1, price: 10000, square: 63.1, floors: { current: 1, total: 3 } },
  { id: 2, rooms: 1, price: 10000, square: 63.1, floors: { current: 1, total: 3 } },
  { id: 3, rooms: 1, price: 10000, square: 63.1, floors: { current: 1, total: 3 } },
  { id: 4, rooms: 1, price: 10000, square: 63.1, floors: { current: 1, total: 3 } },
  { id: 5, rooms: 1, price: 10000, square: 63.1, floors: { current: 1, total: 3 } },
  { id: 6, rooms: 1, price: 10000, square: 63.1, floors: { current: 1, total: 3 } },
  { id: 7, rooms: 1, price: 10000, square: 63.1, floors: { current: 1, total: 3 } },
  { id: 8, rooms: 1, price: 10000, square: 63.1, floors: { current: 1, total: 3 } },
  { id: 9, rooms: 1, price: 10000, square: 63.1, floors: { current: 1, total: 3 } },
  { id: 10, rooms: 1, price: 10000, square: 63.1, floors: { current: 1, total: 3 } },
  { id: 11, rooms: 1, price: 10000, square: 63.1, floors: { current: 1, total: 3 } },
]
