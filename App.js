import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler'


import HomeScreen from './src/components/homescreen';
import ClockScreen from './src/components/clockscreen';

const Stack = createStackNavigator();

const App = () => {
  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName = "Home" >

        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false, }} 
          />
        <Stack.Screen
          name="Clock"
          component={ClockScreen}
          options={{ headerShown: false, }} 
        />
      </Stack.Navigator>

    </NavigationContainer>



  )
}

const styles = StyleSheet.create({

  squireToRectanfgleConvert: {
    height: 52,
    backgroundColor: '#FF146A'
  },
  txt:{
    fontSize: 50,
    fontFamily: Platform.OS === 'android' ? 'AbrilFatface-Regular' : 'Avenir',
  },
  txthead:{
    fontSize: 30,
    // transform: [{ rotate: '180deg' }],
    textDecorationLine: 'underline',
  }
})

export default App;