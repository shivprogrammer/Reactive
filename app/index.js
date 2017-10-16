import React from 'react'
import { AppContainer } from '~/containers'
import { createStore, applyMiddleware, combinedReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from './redux'

const store = createStore(
  combinedReducers(reducers),
  applyMiddleware(thunk)
)

export default function Reactive (props) {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}
