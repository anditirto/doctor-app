import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors, Fonts} from '../../../utils';

export default function inputs({label, value, onChangeText, secureTextEntry, disable}) {
  const [border, setBorder] = useState(Colors.border);
  const onFocusForm = () => {
    setBorder(Colors.tertiary);
  };
  const onBlurForm = () => {
    setBorder(Colors.border);
  };
  return (
    <View>
      <Text style={styles.label}>{label} </Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.inputs(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputs: (border) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
  }),
  label: {
    fontFamily: Fonts.primary[600],
    fontSize: 16,
    color: Colors.text.secondary,
  },
});
