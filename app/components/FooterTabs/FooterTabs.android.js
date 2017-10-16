import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, DrawerLayoutAndroid } from 'react-native'
import { HomeContainer, LeaderboardContainer } from '~/containers'
import Drawer from './Drawer'

FooterTabs.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  navigator: PropTypes.object.isRequired,
  onTabSelect: PropTypes.func.isRequired
}

export default function FooterTabs (props) {
  return (
    <DrawerLayoutAndroid
      drawerWidth={290}
      renderNavigationView={() => (
        <Drawer />
      )}>
        {props.activeFooterTab === 'home'
          ? <HomeContainer navigator={props.navigator}/>
          : <LeaderboardContainer navigator={props.navigator}/>}
    </DrawerLayoutAndroid>
  )
}

const styles = StyleSheet.create({

})
