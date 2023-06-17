import { View, Text } from 'react-native'
import React from 'react'
import BottomNavigation from './src/bottomNavigation/BottomNavigation'
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/stackNavigation/StackNavigation';

const App = () => {
  return (
    <View style={{flex:1}}>
      <NavigationContainer>
      <StackNavigator />
      </NavigationContainer>
    </View>
  )
}

export default App