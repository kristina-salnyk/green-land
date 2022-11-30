import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet, Text, Platform} from 'react-native';
import { Card } from 'react-native-paper';
import {Pressable, View} from 'react-native'



const CategoryCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;



const Title = styled(Text)`

color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
padding: ${(props) => props.theme.space[3]};
`;

function CategoriesInfoCard({title, img}){
  console.log(img)
  return (
    
  <View style={styles.gridItem}>
    
    <Pressable android_ripple={{color: '#ccc'}} 
    style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
    >
      <Card.Cover  style={styles.photo} key={id} source={{ uri: img }}/>
      <View style={styles.innerContainer}>
     
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>  
  </View>
  );
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
  marginBottom: 8

  },
  title:{
    fontWeight: 'bold',
    fontSize: 16,

  },
})