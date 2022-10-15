import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function Header() {
    return (
      
               
        <View style={styles.Header}>
          <Image style={styles.imglogo} source={require('../assets/images/logo.jpeg')}></Image>
          <View style={styles.separar}>
          <Text style={styles.nomeloja}>Cantinho da Aninha</Text>
          <Text style={styles.texto}>Sua Feshion week com elegancia!</Text>
          </View>
        </View>

    )};
    const styles = StyleSheet.create({
        
        Header: {
          flexDirection:'row',
          marginTop:23,
          alignItems:'center',
          justifyContent:'space-between',
          
        },
        nomeloja:{
          fontSize:18,
          color:'#D2ABF0',
          textAlign:'center',
          
        },
        texto:{
          textAlign:'center',
          fontSize:12,
          color:'#D2ABF0',
        },
        
        imglogo:{
          height: 50,
          width: 50,
          marginRight:20,         
        },
    });