import React from 'react'
import {Route} from 'react-router-dom'
import Secret from './Secret'
import useStore from './hooks/store'

export default function About() {
  const [state, dispatch] = useStore()

  return (
    <div>
      <h1>Ini About page {state.count }</h1>

      {/* Nested Routing */}
      <Route path="/about/secret" component={Secret} />
    </div>
  )
}
