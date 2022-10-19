import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, Image , View, TextInput, FlatList, StatusBar, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { traerClima } from '../Axios/axios';
import * as Contacts from 'expo-contacts';

const Contactos =({navigation})=>{
    const [contactos, setContactos] = useState([]);


    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.Emails],
            });
            setContactos(data)

          }
        })();
      }, []);


    return (
    <View >
      <Text>Contacts Module Example {contactos[0].firstName}</Text>
    </View>
        
    );}
   
    
    
    
    export default Contactos