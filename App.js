import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import Constants from 'expo-constants';
import {FontAwesome5} from '@expo/vector-icons';

import Header from './components/Header';
import Menu from './components/Menu';
import Feed from './components/Feed';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Header/>
      <Menu/>
      <Feed/>
      

      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },


});
