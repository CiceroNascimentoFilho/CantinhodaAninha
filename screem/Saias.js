import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';

import Header from '../components/Header';
import { FlatList } from 'react-native-gesture-handler';

export default function FeedSaias(){
  const Saias =[
    {
      id:1,
      titulo:"saia longa verde",
      src:'https://github.com/CiceroNascimentoFilho/fotos/Saias/images.jpeg',
      valor:"R$70,00",
      //aspectRation:0.750,
  },
  {
      id:2,
      titulo:"saia longa branca com estampa",
      src:'https://github.com/CiceroNascimentoFilho/fotos/Saias/images1.jpeg',
      valor:"R$90,00",
      aspectRation:1.159,
  },
  {
      id:3,
      titulo:"Saia longa florida",
      src:'https://github.com/CiceroNascimentoFilho/fotos/Saias/images2.jpeg',
      valor:"R$90,00",
      aspectRation:0.981,
  },
  ]
    
    
  function renderItem({item}){
    return <View style={styles.saias}>
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Image style={styles.imgsaia} aspectRation={item.aspectRation} source={item.src}/>
      <Text style={styles.valor} >{item.valor}</Text>
    </View>
  }
  
  
   return (
      
      <View style={styles.estilosaia}>
        <StatusBar style="auto" />
        <Header/>
        <FlatList
        data={Saias}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
          />
        </View>
            
    )
  
    } ;

    const styles = StyleSheet.create({
      estilosaia: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      imgsaia:{
        width:'100%',
        height:undefined,
      }
    });