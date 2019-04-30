import React, { Component } from 'react'

export default class AddNewTodo extends Component {
  state = {
    newTodo: '',
  }

  changeTodo = e => {
    const {value, name} = e.target

    this.setState({
      [name]: value
    })
  }

  submitTodo = e => {
    e.preventDefault()
    this.props.onSubmitTodo(this.state.newTodo)
  }

  render() {
    const {newTodo} = this.state

    return (
      <div>
        <form action="" onSubmit={this.submitTodo}>
          <input type="text" value={newTodo} name="newTodo" onChange={this.changeTodo}/>
          <button type="submit">Add New Todo</button>
        </form>
      </div>
    )
  }
}
