import React from 'react'
import {Route} from 'react-router-dom'
import Secret from './Secret'

export default function About() {
  return (
    <div>
      <h1>Ini About page</h1>

      {/* Nested Routing */}
      <Route path="/about/secret" component={Secret} />
    </div>
  )
}
