import React, { PropTypes } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { LoginButton } from 'react-native-fbsdk'

Splash.propTypes = {

}

export default function Splash (props) {
  return (
    <View>
      <View>
        <Image source={require('../../images/react-logo.png')} />
        <Text>Reactive</Text>
      </View>

      <View>
        <LoginButton
          onLoginFinished={() => ({})}/>
      </View>
      <Text>
        Don't worry, we don't post anything to Facebook.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({

})
