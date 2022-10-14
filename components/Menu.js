
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function Menu({navigation}) {
    return (

        <View style={styles.Menu}>
        <TouchableOpacity onPress={()=> navigation.navigate('Saias')}>
          <Text style={styles.M1}>  Saias  </Text>{''}{''}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Blusas')}>
          <Text style={styles.M2}>  Blusas  </Text>{''}{''}
        </TouchableOpacity>
      </View>

)};

const styles = StyleSheet.create({
    Menu:{
        
        height:35,
        width:'100%',
        flexDirection:'row',
        backgroundColor:'#D2ABF0',
        alignItems:'center',
        justifyContent:'center',
        
      },
      M1:{
        backgroundColor:'#f6e1ff',
        color:'#8F00C8',
        borderRadius:25,
        marginRight:15,
      },
      M2:{
        backgroundColor:'#f6e1ff',
        color:'#8F00C8',
        borderRadius:25,
        marginRight:15,
      },
      M3:{
        backgroundColor:'#f6e1ff',
        color:'#8F00C8',
        borderRadius:25,
        marginRight:15,
      },
      M4:{
        backgroundColor:'#f6e1ff',
        color:'#8F00C8',
        borderRadius:25,
        
      },

    });