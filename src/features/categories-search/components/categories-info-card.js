import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet, Text, Platform} from 'react-native';
import { Card } from 'react-native-paper';
import {Pressable, View, Image} from 'react-native'
import { images } from '../../../../images';



function CategoriesInfoCard({title, img, onPress, id}){


  return (
 

  
  <View style={styles.gridItem}>
    
    <Pressable android_ripple={{color: '#ccc'}} 
    style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null,
    ]}
    onPress={onPress}
    >
    
      <Card.Cover style={styles.photo} key={title}  source={images[id - 1]}/>
      
      <View style={styles.innerContainer}>
 
        <Text style={styles.title}>{title}</Text>
      
      </View>
    
    </Pressable> 

  </View>

  )
}

export default CategoriesInfoCard

const styles = StyleSheet.create({
  gridItem:{
    flex: 1,
    padding:10,
    margin: 16,
    height: 200,
    elevation: 4,
    backgroundColor: '#3BB03D',
    overflow: Platform.OS === 'android' ?'hidden' : 'visible',
    borderRadius: 8,
    borderWidth: 2,
 
  },
  button:{
    flex: 1
  },
  buttonPressed:{
    opacity:0.5
  },
  innerContainer:{
 
flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  photo:{
    flex: 1,
  marginBottom: 8,


  },
  title:{
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: "center" 

  },
})