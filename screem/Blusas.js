import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Header from '../components/Header';

export default function Blusas() {
    
  const Blusa = [
    {
      id:1,
      titulo:"Blusa lilás sem manga",
      src:require('../assets/images/Blusas/blusa1.jpg'),
      valor:"R$70,00",
      aspectRatio:0.9,
  },
  {
      id:2,
      titulo:"Blusa rosa com manga curta",
      src:require('../assets/images/Blusas/blusa2.jpeg'),
      valor:"R$90,00",
      aspectRatio:0.9,
  },
  {
      id:3,
      titulo:"Blusa azulmarinho com manga ",
      src:require('../assets/images/Blusas/blusa3.jpeg'),
      valor:"R$90,00",
      aspectRatio:0.9,
  },
  {
    id:4,
    titulo:"Blusa verde com manga curta",
    src:require('../assets/images/Blusas/blusa4.jpeg'),
    valor:"R$90,00",
    aspectRatio:0.9,
},
{
  id:5,
  titulo:"Blusa azul com manga ",
  src:require('../assets/images/Blusas/blusa5.jpeg'),
  valor:"R$90,00",
  aspectRatio:0.9,
}
  ];
  
  function renderItem({item}){
    return(
      <View style={styles.BlusasHome}>
          <View style={styles.estiloblusa}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Image style={styles.imgblusa} aspectRatio={item.aspectRatio} source={item.src}/>
            <Text style={styles.valor}>{item.valor}</Text>
          </View>
      </View>
    )
  }
  
    return (
    <View style={styles.Blusa}>
      <Header/>
      <FlatList
        data={Blusa}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
        horizontal
        showsVerticalScrollIndicator={false}
      />
     </View>
    
)};

    const styles = StyleSheet.create({
      Blusa:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff'
      },
      BlusasHome:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#D2ABF0',
      },
      estiloblusa: {
       
        alignContent:'center',
        justifyContent:'center',
        alignItems: 'center',
        padding:20, 
      },
      imgblusa:{
        height:'80%',
        width:undefined,
        justifyContent:'center',  
        alignItems:'center',
        borderRadius: 35,
      }
    });