import React, { useState} from 'react'

function Counter() {
  const [counter, setState] = useState(0)

  return (
    <div>
      Counter { counter }
      <button onClick={() => setState(counter + 1)}>Add Counter</button>
    </div>
  )
}

export default Counter 