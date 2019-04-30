import React from 'react'

export default function TodoList({todos}) {
  return (
    <div>
        Ini Todo list
        <ul>
          {
            todos.map((todo, index) =>  (<li key={index}>
              <span>{todo}</span>
            </li>))
          }
        </ul> 
    </div>
  )
}
