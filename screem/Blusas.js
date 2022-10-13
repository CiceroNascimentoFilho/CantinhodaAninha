import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, Image, View } from 'react-native';

import Header from '../components/Header';
import Menu from '../components/Menu';

export default function Blusas() {
    return (
      
      <View style={styles.estiloblusa}>
        <Header/>
        <Menu/>
        
      </View>

        

    )};

    const styles = StyleSheet.create({
      estilobusa: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
      }
    });