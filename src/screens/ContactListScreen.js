import React, { useEffect, useState } from "react";

import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { CircularButton } from "../components/ButtonComponent";
import realm from "../../store/realm";

const ContactListScreen = (props) => {
  const {navigation} = props;
  const [data, setData] = useState([{id: 1}]);

  const getData = () =>{
    const allData = realm.objects('Contact');
    setData(allData);
  }

  const deleteData = (id) =>{
    const data = realm.objects('Contact').filtered(`id = ${id}`);
    realm.write(()=>{
      realm.delete(data);
    });
    getData();
  }

  useEffect(() => {
    const contactListScreen = navigation.addListener('focus', ()=>{
      getData();
    });
    return contactListScreen;
  }, []);

  return <View style={styles.mainContainer}>
    <FlatList contentContainerStyle={styles.flatListContainer} data={data} keyExtractor={(item)=> item.id} renderItem={({item})=>{
      return(
        <View style={styles.cardContainer}>
          <View>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.phoneText}>{item.phoneNumber}</Text>
          </View>
          <TouchableOpacity onPress={()=>deleteData(item.id)}>
            <Icon name={'cross'} type={'entypo'}/>
          </TouchableOpacity>
        </View>
      )
    }}/>
    <View style={styles.buttonContainer}>
      <CircularButton onPress={()=>navigation.navigate('AddContact')}/>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  flatListContainer:{
    padding: 8
  },
  cardContainer:{
    margin: 8,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  nameText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  phoneText:{
    fontSize: 18,
    color: 'black'
  },
  buttonContainer:{
    position: 'absolute',
    bottom: 16,
    right: 16
  },



});

export default ContactListScreen;
