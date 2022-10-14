import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';

import Header from '../components/Header';
import { FlatList } from 'react-native-gesture-handler';

export default function FeedBlusas(){
  const Blusas =[
    {
      id:1,
      titulo:"blusa",
      src:'../assets/images/Blusas/blusa1.jpg',
      valor:"R$70,00",
      //aspectRation:0.723,
  },
  {
      id:2,
      titulo:"",
      src:'',
      valor:"R$90,00",
      aspectRation:1.159,
  },
  {
      id:3,
      titulo:"",
      src:'',
      valor:"R$90,00",
      aspectRation:0.981,
  },
  ]
    
    
  function renderItem({item}){
    return <View style={styles.blusas}>
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Image style={styles.imgblusa} aspectRation={item.aspectRation} source={item.src}/>
      <Text style={styles.valor} >{item.valor}</Text>
    </View>
  }
  
  
   return (
      
      <View style={styles.estiloblusas}>
        <StatusBar style="auto" />
        <Header/>
        <FlatList
        data={Blusas}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
          />
        </View>
            
    )
  
    } ;

    const styles = StyleSheet.create({
      estiloblusas: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      imgblusa:{
        width:'100%',
        height:undefined,
      }
    });