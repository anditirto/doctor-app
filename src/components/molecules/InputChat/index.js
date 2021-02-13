import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Fonts, Colors} from '../../../utils';
import {Button} from '../../../components';

const InputChat = ({value,onButtonPress,onChangeText}) => {
  return (
    <View style={styles.page}>
      <TextInput
        style={styles.input}
        placeholder="Tulis Pesan..."
        value={value}
        onChangeText={onChangeText}
      />
      <Button disable={value.length < 1} title="Send" type="btnIcon" onPress={onButtonPress} />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  page: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  input: {
    backgroundColor: Colors.disable,
    padding: 14,
    flex: 1,
    borderRadius: 10,
    marginRight: 10,
    fontSize: 14,
    fontFamily: Fonts.primary.normal,
    maxHeight: 45,
  },
});
