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

export interface Filters {
  maxPrice: number
  minPrice: number
  maxSquare: number
  minSquare: number
}

export const apartments = [
  { id: 0, rooms: 1, price: 12773344, square: 256.6, floors: { current: 9, total: 21 } },
  { id: 1, rooms: 2, price: 26060184, square: 24.4, floors: { current: 14, total: 30 } },
  { id: 2, rooms: 3, price: 15320027, square: 222.3, floors: { current: 6, total: 12 } },
  { id: 3, rooms: 3, price: 44140552, square: 129.4, floors: { current: 1, total: 11 } },
  { id: 4, rooms: 2, price: 45861671, square: 176.0, floors: { current: 3, total: 9 } },
  { id: 5, rooms: 2, price: 19230237, square: 296.1, floors: { current: 21, total: 23 } },
  { id: 6, rooms: 3, price: 4714746, square: 214.2, floors: { current: 3, total: 22 } },
  { id: 7, rooms: 3, price: 14519082, square: 166.0, floors: { current: 4, total: 14 } },
  { id: 8, rooms: 2, price: 25214222, square: 91.4, floors: { current: 19, total: 19 } },
  { id: 9, rooms: 1, price: 21021914, square: 129.5, floors: { current: 18, total: 22 } },
  { id: 10, rooms: 2, price: 45853522, square: 286.3, floors: { current: 3, total: 25 } },
  { id: 11, rooms: 1, price: 35518163, square: 172.4, floors: { current: 10, total: 11 } },
  { id: 12, rooms: 2, price: 19025070, square: 201.1, floors: { current: 6, total: 19 } },
  { id: 13, rooms: 4, price: 29779466, square: 46.6, floors: { current: 13, total: 13 } },
  { id: 14, rooms: 2, price: 24235386, square: 115.0, floors: { current: 2, total: 5 } },
  { id: 15, rooms: 4, price: 15680006, square: 57.8, floors: { current: 16, total: 22 } },
  { id: 16, rooms: 3, price: 17869254, square: 116.4, floors: { current: 4, total: 7 } },
  { id: 17, rooms: 2, price: 12209022, square: 60.7, floors: { current: 4, total: 27 } },
  { id: 18, rooms: 3, price: 1832222, square: 224.2, floors: { current: 8, total: 16 } },
  { id: 19, rooms: 1, price: 10887828, square: 270.4, floors: { current: 8, total: 19 } },
  { id: 20, rooms: 2, price: 35311413, square: 200.0, floors: { current: 4, total: 9 } },
  { id: 21, rooms: 1, price: 2175781, square: 51.8, floors: { current: 4, total: 6 } },
  { id: 22, rooms: 1, price: 4712632, square: 222.8, floors: { current: 7, total: 30 } },
  { id: 23, rooms: 2, price: 20592159, square: 54.9, floors: { current: 1, total: 4 } },
  { id: 24, rooms: 3, price: 40518637, square: 142.0, floors: { current: 4, total: 6 } },
  { id: 25, rooms: 4, price: 34773337, square: 201.5, floors: { current: 11, total: 25 } },
  { id: 26, rooms: 2, price: 16704852, square: 182.0, floors: { current: 16, total: 20 } },
  { id: 27, rooms: 1, price: 19218862, square: 203.9, floors: { current: 2, total: 19 } },
  { id: 28, rooms: 2, price: 32819659, square: 86.9, floors: { current: 6, total: 14 } },
  { id: 29, rooms: 2, price: 13069886, square: 168.1, floors: { current: 2, total: 13 } },
  { id: 30, rooms: 2, price: 33720017, square: 202.2, floors: { current: 17, total: 23 } },
  { id: 31, rooms: 1, price: 11368817, square: 292.8, floors: { current: 8, total: 10 } },
  { id: 32, rooms: 3, price: 10800841, square: 280.6, floors: { current: 15, total: 18 } },
  { id: 33, rooms: 3, price: 43134568, square: 176.6, floors: { current: 8, total: 21 } },
  { id: 34, rooms: 3, price: 24642014, square: 243.3, floors: { current: 1, total: 22 } },
  { id: 35, rooms: 1, price: 2330187, square: 86.5, floors: { current: 4, total: 14 } },
  { id: 36, rooms: 2, price: 15423562, square: 196.4, floors: { current: 1, total: 10 } },
  { id: 37, rooms: 1, price: 2310171, square: 69.7, floors: { current: 3, total: 21 } },
  { id: 38, rooms: 2, price: 38393053, square: 86.6, floors: { current: 3, total: 7 } },
  { id: 39, rooms: 2, price: 40500245, square: 158.6, floors: { current: 21, total: 21 } },
  { id: 40, rooms: 3, price: 44055991, square: 215.2, floors: { current: 8, total: 13 } },
  { id: 41, rooms: 2, price: 11978513, square: 100.2, floors: { current: 3, total: 4 } },
  { id: 42, rooms: 2, price: 29875963, square: 242.0, floors: { current: 16, total: 25 } },
  { id: 43, rooms: 2, price: 27731740, square: 120.2, floors: { current: 22, total: 29 } },
  { id: 44, rooms: 4, price: 12010869, square: 98.7, floors: { current: 16, total: 25 } },
  { id: 45, rooms: 2, price: 14789269, square: 216.6, floors: { current: 4, total: 18 } },
  { id: 46, rooms: 1, price: 24916322, square: 276.0, floors: { current: 14, total: 16 } },
  { id: 47, rooms: 4, price: 37484123, square: 40.8, floors: { current: 11, total: 26 } },
  { id: 48, rooms: 4, price: 4782692, square: 193.3, floors: { current: 3, total: 14 } },
  { id: 49, rooms: 4, price: 28571134, square: 210.0, floors: { current: 16, total: 19 } },
]

// Strange emulation of relative bd)
let maxPrice = 0
let minPrice = apartments[0].price
let maxSquare = 0
let minSquare = apartments[0].square

apartments.forEach((apartment) => {
  if (apartment.price > maxPrice) {
    maxPrice = apartment.price
  }

  if (apartment.price < minPrice) {
    minPrice = apartment.price
  }

  if (apartment.square > maxSquare) {
    maxSquare = apartment.square
  }

  if (apartment.square < minSquare) {
    minSquare = apartment.square
  }
})

export const filtersData = {
  maxPrice,
  minPrice,
  maxSquare,
  minSquare,
}
