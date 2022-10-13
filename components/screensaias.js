import React from 'react';
import { StyleSheet, Text, Image, View, FlatList } from 'react-native';

export default function feedsaias() {
    const feedsaias =[
        saia01={
            id:1,
            src:require('../assets/images/feedshome/blaser_e_calca.jpeg'),
            aspectRatio:0.711,
        },
    ];function renderItem({item}){
        return(
          <View style={styles.feedsaias}>
            
            <View style={styles.visual}>
              <Image style={styles.imgfeedsaia} aspectRatio={item.aspectRatio} source={item.src}/>
            </View>
          </View>
        )
      }
      
        return (
        <View style={styles.Feedsaias2}>
          <Text style={styles.titulo}>Aproveite Nossas Novidades e descontos especiais!</Text>
          <FlatList
            data={feeds}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
            
            showsVerticalScrollIndicator={false}
          />
         </View>    
}