import * as types from '../actions/ActionTypes'

const initialState = [
  {
    "id": 1,
    "name": "상품명1",
    "src": "https://raw.githubusercontent.com/it-crafts/mockapi/master/img/01.jpg",
    "price": 5000,
    "quantity": 2,
    "total": 10000
  },
  {
    "id": 2,
    "name": "상품명2",
    "src": "https://raw.githubusercontent.com/it-crafts/mockapi/master/img/02.jpg",
    "price": 7000,
    "quantity": 2,
    "total": 14000
  },
  {
    "id": 3,
    "name": "상품명3",
    "src": "https://raw.githubusercontent.com/it-crafts/mockapi/master/img/03.jpg",
    "price": 6000,
    "quantity": 3,
    "total": 18000
  },
  {
    "id": 4,
    "name": "상품명4",
    "src": "https://raw.githubusercontent.com/it-crafts/mockapi/master/img/04.jpg",
    "price": 10000,
    "quantity": 1,
    "total": 10000
  },
  {
    "id": 5,
    "name": "상품명5",
    "src": "https://raw.githubusercontent.com/it-crafts/mockapi/master/img/05.jpg",
    "price": 3000,
    "quantity": 5,
    "total": 15000
  },
]

export default function Counter(state = initialState, action) {

  let countedList

  switch (action.type) {

    case types.INCREMENT:
      countedList = state.map((item) => {
        if(item.id === action.id) item.quantity = item.quantity + 1
        item.total = item.quantity * item.price
        
        return item
      })

      return [
        ...countedList,
      ]

    case types.DECREMENT:
      countedList = state.map((item) => {
        if(item.id === action.id) item.quantity = item.quantity - 1
        if(item.quantity <= 1) item.quantity = 1
        item.total = item.quantity * item.price

        return item
      })

      return [
        ...countedList
      ]
    
    default:
      return state
  }
}