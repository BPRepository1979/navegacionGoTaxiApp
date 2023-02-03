import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import 'react-native-gesture-handler';
import {MenuLateralBasico} from './src/navigator/MenuLateralBasico';


 

const App = () => {
  return (
    <NavigationContainer>

 <MenuLateralBasico/>

    </NavigationContainer>
    
  );
}

export default App
