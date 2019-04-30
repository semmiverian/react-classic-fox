import React, { Component } from 'react'
import AddNewTodo from '../components/AddNewTodo'
import TodoList from '../components/TodoList'

export default class Todo extends Component {
  state = {
    message: 'Hallo classic fox',
    todos: [
      'Belajar Javascript',
      'Ngecengin Rubhi',
      'Nonton GOT'
    ]
  }
  
  changeMessage = () => {
    this.setState({
      message: 'Diubah dari change message'
    })
  }

  submitTodo = newTodo => {
    // console.log('Bapaknya ke trigger', newTodo)

    this.setState({
      todos: [...this.state.todos, newTodo]
    }, () => {
      console.log(this.state.todos)
    })
  }

  render() {
    const {todos} = this.state
    
    return (
      <div>
        <TodoList todos={todos} />
        <AddNewTodo onSubmitTodo={this.submitTodo} />
      </div>
    )
  }
}
