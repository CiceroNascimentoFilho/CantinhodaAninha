import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function Feed() {
    return (
    <View style={styles.Feed}>
      <View style={styles.FeedHome}>
        <Image source={require('../assets/images/feedshome/camisa01.jpg')}/>
        <Image source={require('../assets/images/feedshome/camisa02.jpg')}/>

      </View>
    </View>
)};


const styles = StyleSheet.create({
Feed:{
    flex:1,
    backgroundColor:'#D2ABF0',
  },
  FeedHome:{
    
    marginTop:10,
  },

});