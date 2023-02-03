import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Pagina1 from '../screen/Pagina1';
import Pagina2 from '../screen/Pagina2';
import Pagina3 from '../screen/Pagina3';
import Personascreen from '../screen/Personascreen';

export type RootStackParams = {
  Pagina1: undefined,
  Pagina2: undefined,
  Pagina3: undefined,
  Personascreen: { id: number, nombre: string },
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator=()=> {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent'
      },
      cardStyle: {
        backgroundColor: 'white'
      }
    }}
    >
       <Stack.Screen name="Pagina1" options={{ title:"Página 1" }} component={ Pagina1 } />
      <Stack.Screen name="Pagina2" options={{ title:"Página 2" }} component={ Pagina2 } />
      <Stack.Screen name="Pagina3" options={{ title:"Página 3" }} component={ Pagina3 } />
      <Stack.Screen name="Personascreen" component={ Personascreen } />
    </Stack.Navigator>
     
      
  
  );
}