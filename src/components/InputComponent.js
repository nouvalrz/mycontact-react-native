import React from "react";

import { Text, View, StyleSheet, TextInput } from "react-native";

export const InputComponent = (props) => {
  const { label, placeholder, keyboardType } = props;
  return (
    <View style={styles.inputComponentContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput keyboardType={keyboardType ?? 'default'} style={styles.textInput} placeholder={placeholder} {...props} placeholderTextColor={'grey'}/>
    </View>
  );
};

const styles = StyleSheet.create({
  inputComponentContainer:{
    margin: 16,
    marginBottom: 0
  },
  label:{
    marginBottom: 8,
    fontWeight: 'bold',
    color: 'grey'

  },
  textInput:{
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 10,
    color: 'grey'
  }
});

