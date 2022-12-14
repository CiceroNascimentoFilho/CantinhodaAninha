
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screem/Home';
import Saias from './screem/Saias';
import Blusas from './screem/Blusas';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Saias" component={Saias} options={ {title:'Saias'}}/>
        <Stack.Screen name="Blusas" component={Blusas} options={ {title:'Blusas'}}/>
      </Stack.Navigator>

    </NavigationContainer>

  );
}

