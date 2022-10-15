import React from 'react';
import { StyleSheet, Text, Image, View, FlatList } from 'react-native';

export default function Feed() {
    
  const feeds = [
    {
      id:1,
      src:require('../assets/images/feedshome/blaser_e_calca.jpeg'),
      aspectRatio:0.711,
    },
    {
      id:2,
      src:require('../assets/images/feedshome/blusa_e_short.jpeg'),
      aspectRatio:0.831,
    },
    {
      id:3,
      src:require('../assets/images/feedshome/camisa_e_macacao.jpeg'),
      aspectRatio:0.751,
    },
    {
      id:4,
      src:require('../assets/images/feedshome/camisa_e_saia.jpeg'),
      aspectRatio:0.666,
    },
    {
      id:5,
      src:require('../assets/images/feedshome/vestido.jpeg'),
      aspectRatio:0.802,
    },
  ];
  
  function renderItem({item}){
    return(
      <View style={styles.FeedHome}>
        
        <View style={styles.visual}>
          <Image style={styles.imgfeed} aspectRatio={item.aspectRatio} source={item.src}/>
        </View>
      </View>
    )
  }
  
    return (
    <View style={styles.Feed}>
      <Text style={styles.titulo}>Aproveite Nossas Novidades e descontos especiais!</Text>
      <FlatList
        data={feeds}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
        
        showsVerticalScrollIndicator={false}
      />
     </View>
    
)};


const styles = StyleSheet.create({
Feed:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#D2ABF0',

  },
  titulo:{
    fontWeight:'700',
    fontSize:20,
    textAlign:'center',
  },

  FeedHome:{
    width:'100%',
    height: undefined,
    alignContent:'center',
    justifyContent:'center',
    alignItems: 'center',
    padding:20, 
    
  },
  imgfeed:{
    width: '100%',
    height:undefined,
    justifyContent:'center',  
    alignItems:'center',
    borderRadius: 35,
  },
    

});