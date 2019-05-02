import axios from 'axios'
const fetchApi = () => next => action => {
  // console.log(store.getState())
  const {types} = action
  if(types){
    next({type: `${action.types}_LOADING`})
    axios(action.url)
      .then(({data}) => {
        next({ type: `${action.types}_SUCCESS`, payload:data})
        // console.log(store.getState())
      })
      .catch(err => {
        next({ type: `${action.types}_FAILED`, payload: err })
      })
  } else {
    next(action)
  }
}

export default fetchApi
