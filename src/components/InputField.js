import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const InputField = ({value, onChange, password = false, style}) => {
  return (
    <TextInput
      style={[styles.input, style]}
      value={value}
      onChangeText={onChange}
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={password}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'black',
    fontSize: 19,
    width: 250,
    borderRadius: 10,
    paddingHorizontal: 2,
  },
});
export default InputField;
