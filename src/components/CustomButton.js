import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = ({title, onTouch}) => {
  return (
    <TouchableOpacity onPress={onTouch}>
      <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    margin: 10,
    fontSize: 25,
    color: 'blue',
  },
});
export default CustomButton;
