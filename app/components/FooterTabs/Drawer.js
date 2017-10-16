import React, { PropTypes } from 'react'
import { View, StyleSheet, Text } from 'react-native'

Drawer.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  onTabSelect: PropTypes.func.isRequired
}

export default function Drawer (props) {
  return (
    <View>
      <Text>
        Drawer
      </Text>
    </View>
  )
}
