import { createBrowserHistory } from 'history'
import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import { appReducer, peopleReducer } from './reducers'

const history = createBrowserHistory()

const reducer = combineReducers({
  router: connectRouter(history),
  people: peopleReducer,
  app: appReducer,
})

export { history }

export default reducer
