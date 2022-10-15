import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Header from '../components/Header';

export default function Saias() {
    
  const Saia = [
    {
      id:1,
      titulo:"Saia verde longa",
      src:require('../assets/images/Saias/images.jpeg'),
      valor:"R$70,00",
      aspectRatio:0.8,
  },
  {
      id:2,
      titulo:"Saia branca com listras azuis",
      src:require('../assets/images/Saias/images1.jpeg'),
      valor:"R$90,00",
      aspectRatio:0.8,
  },
  {
      id:3,
      titulo:"Saia preta mid",
      src:require('../assets/images/Saias/images2.jpeg'),
      valor:"R$90,00",
      aspectRatio:0.667,
  },
  {
    id:4,
    titulo:"Saia cinza com bordado em baixo",
    src:require('../assets/images/Saias/images3.jpeg'),
    valor:"R$90,00",
    aspectRatio:0.80,
},
{
  id:5,
  titulo:"Saia preta florida mid",
  src:require('../assets/images/Saias/images4.jpeg'),
  valor:"R$90,00",
  aspectRatio:0.723,
}
  ];
  
  function renderItem({item}){
    return(
      <View style={styles.SaiasHome}>
          <View style={styles.estilosaia}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Image style={styles.imgsaia} aspectRatio={item.aspectRatio} source={item.src}/>
            <Text style={styles.valor}>{item.valor}</Text>
          </View>
      </View>
    )
  }
  
    return (
    <View style={styles.Saia}>
      
      <Header style={styles.header}/>
      <FlatList
        data={Saia}
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
        height:'80%',
        width:undefined,
        justifyContent:'center',  
        alignItems:'center',
        borderRadius: 35,
      }
    });