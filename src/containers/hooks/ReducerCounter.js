import React, {useReducer} from 'react'
import useStore from './store'

const initialState = {count: 0}

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

export default function ReducerCounter() {
  // const [state, dispatch] = useReducer(reducer, initialState)

  const [state, dispatch] = useStore()

  return (
    <div>
      Counter: { state.count}

      Increment: <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
      Decrement: <button onClick={() => dispatch({ type: 'DECREMENT'})}>Decrement</button>
    </div>
  )
}
