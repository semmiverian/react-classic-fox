const initMovie = {
  data: [
    'beranak dalam kubur'
  ],
  err: "",
  isLoading: false
}
const reducers = (state = initMovie, action) => {
  switch (action.type) {
    case "MOVIE_LOADING":{
      return {
        ...state,
        isLoading: true
      }
    }
    case "MOVIE_SUCCESS":{
      return {
        ...state,
        isLoading: false,
        data: state.data.concat(action.payload)
      }
    }
    case "MOVIE_FAILED": {
      return {
        ...state,
        isLoading: false,
        err: action.payload
      }
    }
    default:
      return state
  }
}

export default reducers
