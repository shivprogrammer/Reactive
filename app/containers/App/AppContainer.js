import React, { PropTypes, Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { ReactiveNavigator } from '~/containers'
import { PreSplash } from '~/components'
import { firebaseAuth } from '~/config/constants'
import { onAuthChange } from '~/redux/modules/authentication'

class AppContainer extends Component {
  static propTypes = {
    isAuthenticating: PropTypes.bool.isRequired,
  }
  componentDidMount () {
    firebaseAuth.onAuthStateChanged((user) => this.props.dispatch(onAuthChange(user)))
  }
  render () {
    return (
      <View styles={{flex: 1}}>
        {this.props.isAuthenticating === true
          ? <PreSplash />
          : <ReactiveNavigator isAuthed={this.props.isAuthed} />}
      </View>
    )
  }
}

function mapStateToProps ({authentication}) {
  return {
    isAuthenticating: authentication.isAuthenticating,
    isAuthed: authentication.isAuthed
  }
}

export default connect(
  mapStateToProps
)(AppContainer)
