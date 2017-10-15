import React, { PropTypes, Component } from 'react'
import { View } from 'react-native'
import { ReactiveNavigator } from '~/containers'
import { PreSplash } from '~/components'

export default class AppContainer extends Component {
  static propTypes = {
    // isAuthenticating: PropTypes.bool.isRequired,
  }
  render () {
    return (
      <View styles={{flex: 1}}>
        {this.props.isAuthenticating === true
          ? <PreSplash />
          : <ReactiveNavigator />}
      </View>
    )
  }
}
