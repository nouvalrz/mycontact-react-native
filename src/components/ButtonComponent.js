import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

export const ButtonComponent = (props) => {
  const {title, color} = props;
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: color ?? '#B7F1D4'}]} {...props}>
      <Text style={[styles.title]}>{title}</Text>
    </TouchableOpacity>
  );
};

export const CircularButton = (props) =>{
  return (
    <TouchableOpacity style={styles.buttonAdd} {...props}>
      <Icon name={'plus'} type={'antdesign'} size={24}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
    borderRadius: 10,
    padding: 16
  },
  title:{
    fontWeight: 'bold',
    color: 'grey'
  },
  buttonAdd:{
    backgroundColor: '#B7F1D4',
    padding: 16,
    borderRadius: 100
  },
})


