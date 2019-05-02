const initTodo = {
  todos: [
    'mau makan',
    'mau tidur'
  ],
  total: 2
}
const reducers = (state = initTodo, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: state.todos.concat(action.payload)
      }
    case 'ADD_TOTAL':
      return {
        ...state,
        total: state.total + 1
      }
    default:
      return state
  }
}

export default reducers
