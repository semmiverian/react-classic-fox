import React, {useReducer} from 'react'

export default function ReducerStateCounter() {
  const initialCount = {
    counter: 0
  }
  
  const [state, setState] = useReducer((state, newState) => ({
    ...state,
    ...newState
  }), initialCount)

  return (
    <div>
      Counter: { state.counter}    

      Increment: <button onClick={() => setState({counter: state.counter + 1})}>Increment</button>
      Decrement: <button onClick={() => setState({counter: state.counter - 1})}>Decrement</button>
    </div>
  )
}
