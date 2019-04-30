import React from 'react'
import AddNewTodo from './components/AddNewTodo'
import TodoList from './components/TodoList'

class App extends React.Component {
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
    const { message, todos } = this.state

    return ( <div>
      <h1>My Awesome Todo List</h1>
      
      <TodoList todos={todos} />
      <AddNewTodo onSubmitTodo={this.submitTodo} />
      </div>
    )
  }
}

export default App
