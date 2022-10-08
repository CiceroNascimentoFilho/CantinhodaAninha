import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function Menu() {
    return (
        <View style={styles.Menu}>
        
          <Text >Saias</Text>
          <Text >Blusas</Text>
          <Text >Vestidos</Text>
          <Text >Calças</Text>
      
      </View>

)};

const styles = StyleSheet.create({
    Menu:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#D2ABF0',
        alignItems: 'center',
      },

    });