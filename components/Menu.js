import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function Menu() {
    return (
        <View style={styles.Menu}>
        
          <Text style={styles.M1}>  Saias  </Text>{''}{''}
          <Text style={styles.M2}>  Blusas  </Text>{''}{''}
          <Text style={styles.M3}>  Vestidos  </Text>{''}{''}
          <Text style={styles.M4}>  Calças  </Text>
      
      </View>

)};

const styles = StyleSheet.create({
    Menu:{
        height:30,
        flexDirection:'row',
        backgroundColor:'#D2ABF0',
        alignItems: 'center',
      },
      M1:{
        backgroundColor:'#f6e1ff',
        color:'#8F00C8',
        borderRadius:25,
      },
      M2:{
        backgroundColor:'#f6e1ff',
        color:'#8F00C8',
        borderRadius:25,
      },
      M3:{
        backgroundColor:'#f6e1ff',
        color:'#8F00C8',
        borderRadius:25,
      },
      M4:{
        backgroundColor:'#f6e1ff',
        color:'#8F00C8',
        borderRadius:25,
      },

    });