const ADD = 'ADD_TODO'

function addTodo(text) {
  return {
    type: ADD,
    payload: text
  }
}

function addTotal() {
  return {
    type: 'ADD_TOTAL'
  }
}
export {
  addTodo,
  addTotal
}
