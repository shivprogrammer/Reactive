import React from 'react'
import { AppContainer } from '~/containers'
import { createStore, applyMiddleware, combindReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

export default function Reactive (props) {
  return (
    <AppContainer />
  )
}
