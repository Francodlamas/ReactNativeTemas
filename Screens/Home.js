import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, Image , View, TextInput, FlatList, StatusBar, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Home =({navigation})=>{

    const Navegar =async()=>{

        navigation.push('Hora')
    }

    const Navegar2 =async()=>{

        navigation.push('Contactos')
    }

    


return (
    <View >
    <Text >Elegir Boton</Text>

    <Button title="Press Me"style={styles.button} onPress={Navegar}>  </Button>
    <Button title="Press Me"style={styles.button} onPress={Navegar2}>  </Button>
    <Button title="Press Me"style={styles.button}>  </Button>
    <Button title="Press Me"style={styles.button}>  </Button>
    </View>
);}
const styles = StyleSheet.create({

    iniciarSesion:{
        fontSize: 75,
        marginTop:30
        
    },
    container:{
        flex: 1,
        width: 100,
        height:100,
        alignItems: 'center',
    
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },

});

export default Home