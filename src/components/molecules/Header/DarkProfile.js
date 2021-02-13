import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Gap} from '../../atoms/gap';
import {Button} from '../../atoms'
import {Colors, Fonts} from '../../../utils';
import {doctor1} from '../../../assets'

const DarkProfile = ({type, onPress,title,profession,photo}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light"  onPress={onPress} title="asd"  />
        <View style={styles.content}>
        <Text style={styles.text}> {title} </Text>
        <Text style={styles.profession}> {profession} </Text>
        </View>
    <Image source={photo}  style={styles.image}/>
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  content:{
      flex:1,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: Fonts.primary[600],
    color: Colors.white,
  },
  profession:{
      marginTop:6,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: Fonts.primary[300],
    color: Colors.text.secondary,
  },
  image:{
      width:46,
      height:46,
      borderRadius:46/2,
  }
});
