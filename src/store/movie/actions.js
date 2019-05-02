import axios from 'axios'


function addMovie() {
  return {
    types: "MOVIE",
    url: "https://swapi.co/api/people/1",
    method: "GET",
    headers: {

    }
  }
  // return dispatch => {
  //   dispatch({type: "MOVIE_LOADING"})
  //   axios.get('https://swapi.co/api/people/1')
  //     .then(({ data }) => {
  //       dispatch({
  //         type: "MOVIE_SUCCESS",
  //         payload: data
  //       })
  //     })
  // }
}

export {
  addMovie
}
