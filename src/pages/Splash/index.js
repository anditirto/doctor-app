import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {GetStarted} from '../GetStarted';
import {ILLogo} from '../../assets';
import {Colors} from '../../utils';
import {Fire} from '../../config';

export default function Splash({navigation}) {
  useEffect(() => {
    const unsubscribe = Fire.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      }, 3000);
    });
    return () => unsubscribe();
  }, [navigation]);
  
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '600',
    color: Colors.text.primary,
    marginTop: 20,
  },
});
