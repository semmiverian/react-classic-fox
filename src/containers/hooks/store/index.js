import {useReducer} from 'react'

const initialState = { count: 0 }

let storeInstance = null

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state;
  }
}

export default function useStore() {
  
  return useReducer(reducer, initialState)
}