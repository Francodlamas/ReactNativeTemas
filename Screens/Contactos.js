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
      const renderItem = ({ item }) => {
        console.log(item.contactType)
        return <TouchableOpacity style={styles.item} 
          >
           {item.firstName  && <View>
          <Text style={styles.title}>{item.firstName}</Text>
          <Text style={styles.title}>{item.lastName}</Text>
          <Text style={styles.title}>{item.phoneNumbers}</Text>
           </View>}
        </TouchableOpacity>
       
      };

    if (contactos.length === 0) return <View><Text>Cargando...</Text></View>

    return (
    <View >

        <FlatList
        data={contactos}
        renderItem={renderItem}
        keyExtractor={(data) => data.id}
      />
    </View>
        
    );}
   
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {

        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 15,
      }
    });
    
    export default Contactos