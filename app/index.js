import React from 'react'
import { AppContainer } from '~/containers'
import { createStore, applyMiddleware, combinedReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from './redux'
import devTools from 'remote-redux-devtools'

const store = createStore(
  combinedReducers(reducers),
  compose(
    applyMiddleware(thunk),
    devTools()
  )
)

export default function Reactive (props) {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}
