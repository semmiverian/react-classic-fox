import React from 'react'
import { connect } from 'react-redux'

const TodoList = ({todos, total}) => {
  return (
    <div>
        Ini Todo list
        <ul>
          {
            todos.map((todo, index) =>  (<li key={index}>
              <span>{todo}</span>
            </li>))
          }
          <p>{total}</p>
        </ul>
    </div>
  )
}

const petaStatekeProps = (state) => {
  return {
    todos: state.todo.todos,
    total: state.todo.total
  }
}

// const mapDispatchToProps = { increment, decrement, reset }

export default connect(petaStatekeProps, null)(TodoList)
