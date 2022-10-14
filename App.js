
import React from 'react';

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screem/Home';
import Saias from './screem/Saias';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Saias" component={Saias} options={ {title:'Saias'}}/>
      </Stack.Navigator>

    </NavigationContainer>

  );
}