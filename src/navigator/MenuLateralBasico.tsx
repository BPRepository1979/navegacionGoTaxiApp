import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import SettingsSceen from '../screen/SettingsSceen';
import React from 'react';
const Drawer = createDrawerNavigator();

 export const MenuLateralBasico =()=> {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsSceen" component={SettingsSceen} />
    </Drawer.Navigator>
  );
}
