import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';

import Header from '../components/Header';
import Menu from '../components/Menu';

export default function Saias({navigation}) {
    return (
      
      <View style={styles.estilosaia}>
        <StatusBar style="auto" />
        <Header/>
        <Menu/>
        <View style={styles.Saias}>

        </View>
        
      </View>

        

    )};

    const styles = StyleSheet.create({
      estilosaia: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
      }
    });