import React, { PropTypes, Component } from 'react'
import { View } from 'react-native'
import { ReactiveNavigator } from '~/container'

export default class AppContainer extends Component {
  render () {
    return (
      <View styles={{flex: 1}}>
        <ReactiveNavigator />
      </View>
    )
  }
}
