import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILBGHospital, Hospital1, Hospital2, Hospital3} from '../../assets';
import {Fonts, Colors} from '../../utils';
import {ListHospital} from '../../components';

export default function Hospital() {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILBGHospital} style={styles.background}>
        <Text style={styles.title}>Nearby Hospital</Text>
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital />
        <ListHospital />
        <ListHospital />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.secondary,
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.primary[600],
    color: Colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: Fonts.primary[300],
    color: Colors.white,
    textAlign: 'center',
    marginTop: 6,
  },
  content: {
    backgroundColor: Colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop:14,
  },
});
