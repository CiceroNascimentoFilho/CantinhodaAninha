import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function Header() {
    return (
      
               
        <View style={styles.Header}>
          <Image style={styles.imglogo} source={require('../assets/images/logo.jpeg')}></Image>
          <Text style={styles.texto}>Sua Feshion week </Text>
          <Text>com elegancia!</Text>
        </View>

    )};
    const styles = StyleSheet.create({
        
        Header: {
        
          marginTop:30,
          flexDirection: 'row',
          alignItems:'center',
          justifyContent:'space-between',
          fontSize:'36',
        },
        imglogo:{
          height: 50,
          width: 50,
          marginRight:30,
        },
    });