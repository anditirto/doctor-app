import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {doctor1, Star} from '../../../assets';
import { Fonts,Colors} from '../../../utils'

const DoctorRating = ({avatar, name, desc, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{desc}</Text>
      </View>
      <View style={styles.rate}>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </View>
    </TouchableOpacity>
  );
};

export default DoctorRating;

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight:12
  },
  container: {
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingBottom:16,
    alignItems: 'center',
  },
  rate:{
      flexDirection: 'row',
  },
  name:{
      fontSize:16,
      fontFamily: Fonts.primary[600],
      color:Colors.text.primary,
  },
  category:{
      fontSize:12,
      fontFamily:Fonts.primary.normal,
      color:Colors.text.secondary,
      marginTop:2,
  },
  profile:{
      flex:1,
  },
})
