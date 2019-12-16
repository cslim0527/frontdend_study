import * as types from './ActionTypes'

// action creators(액션 메서드)
export const increment = (id) => ({ type: types.INCREMENT, id })
export const decrement = (id) => ({ type: types.DECREMENT, id })
