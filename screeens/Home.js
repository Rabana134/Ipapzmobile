import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { Video } from 'expo-av'
import vid1 from './Images/vid1.mp4'


const Home = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
 const login = () => {
  navigation.reset({
    index: 0,
    routes: [{name: 'signup'}],
  });
}
    return (
        <SafeAreaView style={{flex:1}}>
      <SafeAreaView style={styles.container}>
      <Ionicons name="camera" size={52} color="black" /><Text style={styles.logotext}>Ipapz</Text>
    </SafeAreaView>
    <View style={{flex:1}}>
    <Video
        ref={video}
        style={styles.backgroundVideo}
        source={vid1}
        useNativeControls={false}
        resizeMode="cover"
        isLooping
        shouldPlay
       volume={1}
       isMuted
      />
      <View style={{alignItems:"center",justifyContent:"center",flex:1}}>
        <TouchableOpacity
         onPress={login}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Sign up to book photoshoot</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems:"center"}}>
      <Button title="Become an Ipapz photographer" color="#a100ff" onPress={()=>{ navigation.reset({
              index: 0,
              routes: [{name: 'signup-p'}],
            });}}/>
      </View>
    </View>
     
      
    </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      paddingTop: Platform.OS === 'android' ? 39 : 0,
      flexDirection:'row', 
    },
    logotext:{
      fontSize: 30,
      fontWeight: "bold",
      color:"#a100ff"
    },
    button: {
      backgroundColor: '#a100ff',
     
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#a100ff',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#a100ff',
      fontWeight: '700',
      fontSize: 16,
    },
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    
  });
  
