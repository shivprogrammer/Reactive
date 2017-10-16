import React, { PropTypes } from 'react'
import { View, StyleSheet, Text } from 'react-native'

DrawerTab.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired
}

export default function DrawerTab (props) {
  return (
    <View>
      <Text>
        DrawerTab
      </Text>
    </View>
  )
}
