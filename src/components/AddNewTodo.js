import React, { Component } from 'react'
import { connect } from 'react-redux'
// import store from '../store'
import { addTodo, addTotal } from '../store/todo/actions'

class AddNewTodo extends Component {
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
    this.props.addTodo(this.state.newTodo)
    // this.props.addTotal()
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

const mapDispatchToProps = (dispatch) => (
  {
    addTodo: (text) => dispatch(addTodo(text))
  }
)

export default connect(null, mapDispatchToProps)(AddNewTodo)
