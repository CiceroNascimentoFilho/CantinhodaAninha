import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Header from '../components/Header';

export default function Saias() {
   const [Saias,setSaia]=useState([]);
  useEffect(function (){
    async function getData(){
      const response = await fetch('https://raw.githubusercontent.com/CiceroNascimentoFilho/jons/main/Saias2.json');
      const Saias = await response.json();
      setSaia(Saias);
    }
    getData();
  },[])  
  
  
  function renderItem({item}){
    return(
      <View style={styles.SaiasHome}>
          <View style={styles.estilosaia}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Image style={styles.imgsaia} aspectRatio={item.aspectRatio} source={{uri: item.src}}/>
            <Text style={styles.valor}>{item.valor}</Text>
          </View>
      </View>
    )
  }
  
    return (
    <View style={styles.Saia}>
      
      <Header style={styles.header}/>
      <FlatList
        data={Saias}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
        horizontal
        showsVerticalScrollIndicator={false}
      />
     </View>
    
)};

    const styles = StyleSheet.create({
      Saia:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff',
      },
 
      SaiasHome:{
        backgroundColor:"#D2ABF0",
      },

      estilosaia: {
        alignContent:'center',
        justifyContent:'center',
        alignItems: 'center',
        padding:20, 
      },
 
      imgsaia:{
        height:'50%',
        width:undefined,
        justifyContent:'center',  
        alignItems:'center',
        borderRadius: 35,
        
       }
    });