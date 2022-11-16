import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, Image , View, TextInput, FlatList, StatusBar, SafeAreaView, TouchableOpacity, Button, Linking } from 'react-native';
import { Video } from "expo-av";
import { AsyncStorage } from 'react-native';


const videoFav =({navigation})=>{
    const [video,setVideo]=useState("");
   
   
    const ponerVideo = async(video1) => {
      setVideo(video1)
        try {
          await AsyncStorage.setItem(
            'URLVIDEO',video1
            );
        } catch (error) {
          console.log(error)
        }
        console.log(video)
    }


    useEffect (async () => {
      (async () => {
      const aux = await AsyncStorage.getItem('URLVIDEO')
      console.log(aux)
      setVideo(aux)
      })()
  },[]);
  
return (
    <View  style={styles.container}>
    <Text></Text>
    
    <TextInput onChangeText={ponerVideo} value={video} placeholder="URL del video"></TextInput>
          <Video
        style={styles.video}
        resizeMode="contain"
        source={{
          uri: video,
        }} 
        useNativeControls={true}
        isLooping={true}
      />
    </View>
    
);}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    video: {
      alignSelf: 'center',
      width: 320,
      height: 200,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
export default videoFav