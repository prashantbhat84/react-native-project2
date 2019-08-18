import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
const Input = props => {
  return (
    <TextInput {...props} style={{ ...styles.inputText, ...props.style }} />
  );
};

const styles = StyleSheet.create({
  inputText: {
    height: 30,
    width: 30,
    borderBottomColor: 'red',

    borderBottomWidth: 1,
    marginVertical: 15
  }
});

export default Input;
