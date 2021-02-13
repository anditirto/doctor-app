import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {doctor1} from '../../../assets';
import {Colors, Fonts} from '../../../utils';
import {ICBtnRemovePhoto} from '../../../assets';

const Profile = ({name, desc, btnIcon, isRemove, photo, onPress}) => {
  return (
    <View style={styles.container}>
    {!isRemove && (
      <View style={styles.borderProfile}>
        <Image source={photo} style={styles.avatar} />
        <Text>a</Text>
      </View>
      )}
      {isRemove && (
        <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
          <Image source={photo} style={styles.avatar} />
          {isRemove && <ICBtnRemovePhoto style={styles.removefoto} />}
        </TouchableOpacity>
      )}
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  borderProfile: {
    width: 130,
    height: 130,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontFamily: Fonts.primary[600],
    color: Colors.text.primary,
    marginTop: 16,
    textAlign: 'center',
  },
  profession: {
    fontSize: 14,
    fontFamily: Fonts.primary[300],
    color: Colors.text.secondary,
    marginTop: 10,
  },
  removefoto: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    textAlign: 'center',
  },
});
