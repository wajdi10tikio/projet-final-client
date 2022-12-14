import { createStore, applyMiddleware } from "redux"

import { composeWithDevTools } from "redux-devtools-extension"

import MiddLeware from "redux-thunk"
import Reducers from './reducers'

const initialState = {}

const store = createStore(
  Reducers,
  initialState,
  composeWithDevTools(applyMiddleware(MiddLeware))
)



export default store