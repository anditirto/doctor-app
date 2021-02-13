import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fonts, Colors} from '../../../utils';

const IsMe = ({text,date}) => {
  return (
    <View style={styles.container}>
        <View style={styles.chatContent}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems:'flex-end',
    paddingRight: 16,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  chatContent: {
    backgroundColor: Colors.cardLight,
    padding: 12,
    paddingRight: 18,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    maxWidth: '80%',
  },
  text: {
    fontSize: 14,
    fontFamily: Fonts.primary.normal,
    color: Colors.text.primary,
  },
  date: {
    fontSize: 11,
    fontFamily: Fonts.primary.normal,
    color: Colors.text.secondary,
    marginTop: 8,
  },
});
