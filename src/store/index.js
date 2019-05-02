import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import fetchApi from './middleware/fetchApi'
import logger from './middleware/masukMana'

import todo from './todo'
import movie from './movie'

const rootReducer = combineReducers({
  todo,
  movie
})

export default createStore(
  rootReducer,
  applyMiddleware(logger, fetchApi)
)
