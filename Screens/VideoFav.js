import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, Image , View, TextInput, FlatList, StatusBar, SafeAreaView, TouchableOpacity, Button, Linking } from 'react-native';
import { Video } from 'expo-av';




const videoFav =({navigation})=>{
    const [video,setVideo]=useState("");
    const video1 = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const ponerVideo = async(video1) => {
        setVideo(video1)
        
    }

return (
    <View  style={styles.container}>
    <Text></Text>
    
    <TextInput onChangeText={ponerVideo}  placeholder="URL del video"></TextInput>
    <Video
        ref={video1}
        style={styles.video}
        source={{
          uri: 'https://youtu.be/lyapKJBcAlo',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View >
        <Button style={styles.buttons}
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
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