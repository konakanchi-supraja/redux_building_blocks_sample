import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import RootReducer from './rootReducer'

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store