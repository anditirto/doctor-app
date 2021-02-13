import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {doctor1} from '../../../assets';
import {Fonts, Colors} from '../../../utils';

const Other = ({text,date,photo}) => {
  return (
    <View style={styles.container}>
        <Image source={photo} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  chatContent: {
    backgroundColor: Colors.primary,
    padding: 12,
    paddingRight: 18,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    maxWidth: '80%',
  },
  text: {
    fontSize: 14,
    fontFamily: Fonts.primary.normal,
    color: Colors.white,
  },
  date: {
    fontSize: 11,
    fontFamily: Fonts.primary.normal,
    color: Colors.text.secondary,
    marginTop: 8,
  },
});
