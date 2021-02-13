import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Fonts, Colors} from '../../../utils';
import {Next} from '../../../assets';
import {EditProfile, Language, Rate, Help} from '../../../assets'

const List = ({name, profile, desc, type, onPress, icon}) => {
  const Icon = () => {
    if(icon === 'editProfile'){
      return <EditProfile />
    }
    if(icon === 'language'){
      return <Language />
    }
    if(icon === 'rate'){
      return <Rate />
    }
    if(icon === 'help'){
      return <Help />
    }
    return <EditProfile />
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={profile} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'next' && <Next />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content:{
    flex: 1,
    marginLeft:16,
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontSize: 16,
    color: Colors.text.primary,
    fontFamily: Fonts.primary.normal,
  },
  desc: {
    fontSize: 12,
    color: Colors.text.secondary,
    fontFamily: Fonts.primary[300],
    textTransform: 'capitalize',
  },
});
