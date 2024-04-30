import React, { useEffect, useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import { InputComponent } from "../components/InputComponent";
import { ButtonComponent } from "../components/ButtonComponent";
import realm from "../../store/realm";

const AddContactScreen = (props) => {

  const {navigation} = props;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');


  const saveContact = () => {
    if(name !== '' && phone !== ''){
      realm.write(()=>{
        const data = realm.objects('Contact');
        const lastId = data.length === 0 ? 0 : data[data.length - 1].id;
        realm.create('Contact', {
          id : lastId + 1,
          name: name,
          phoneNumber: phone
        });
      });
      navigation.navigate('ContactList');
    }else{
      alert('Data is empty');
    }
  }


  return <View>
    <InputComponent label={'Name'} placeholder={'Write name here'} onChangeText={(text)=>setName(text)}/>
    <InputComponent keyboardType={'phone-pad'} label={'Phone'} placeholder={'Write phone number here'} onChangeText={(text)=>setPhone(text)}/>
    <View style={styles.buttonContainer}>
      <ButtonComponent title={"SAVE CONTACT"} onPress={()=>saveContact()}/>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    margin: 16
  }
})

export default AddContactScreen;
