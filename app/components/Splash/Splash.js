import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import { LoginButton } from 'react-native-fbsdk'
import { colors } from '~/styles'

Splash.propTypes = {

}

export default function Splash (props) {
  return (
    <View style={styles.container}>
      <View>
        <Image styles={styles.image} source={require('../../images/react-logo.png')} />
        <Text styles={styles.slogan}>Reactive</Text>
      </View>

      <View styles={styles.loginContainer}>
        <LoginButton
          styles={{
            height: 30,
            width: 180,
            marginBottom: 15
          }}
          onLoginFinished={() => ({})}/>
      </View>
      <Text>
        Don't worry, we don't post anything to Facebook.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 40
  },
  slogan: {
    color: colors.blue,
    fontSize: 40,
    margin: 20,
    textAlign: 'center'
  },
  image: {
    resizeMode: 'contain',
    height: height * .4 > 300 ? 300 : height * .4
  }
})
