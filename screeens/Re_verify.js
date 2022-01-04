import React, { useEffect, useState } from 'react'
import { Platform, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core'
import { auth } from '../firebase';

const Re_verify =({route, navigation}) => {
    const { email } = route.params;
 
    const [currentUser, setCurrentUser] = useState()
   
    useEffect(() => {

      const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        if(currentUser.emailVerified){
          navigation.reset({
            index: 0,
            routes: [{name: 'auth'}],
          });
        }
      })
  
      return unsubscribe
    }, [])
    const handleResend = () => {
      currentUser.sendEmailVerification();
    }
    const handleCont = () => {
      if(currentUser.emailVerified){
        navigation.reset({
          index: 0,
          routes: [{name: 'auth'}],
        });
      }
      else{
        alert("you have not verified this account")
      }
    }
    return (
        <SafeAreaView style={{flex:1}}>
         <SafeAreaView style={styles.container}>
      <Ionicons name="camera" size={52} color="black" /><Text style={styles.logotext}>Ipapz</Text>
    </SafeAreaView>
        <View style={{alignItems:"center",justifyContent:"center",flex:1,marginLeft:20,marginRight:20}}>
             
<Text style={{ fontSize: 20, fontWeight: "bold", color:"black"}}>Please verify your email address</Text>
<Text style={{ fontSize: 15, fontWeight: "bold", color:"black"}}>An email has been sent to {email}</Text>
<Text style={{}}>You will need to verify your email to continue.
Please check your "spam" or bulk email folder if you
have not received the verifcation email.</Text>

<TouchableOpacity
          onPress={handleResend}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Resend verifcation email</Text>
        </TouchableOpacity>
    
        <TouchableOpacity
          onPress={handleCont}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Verify and continue</Text>
        </TouchableOpacity>
        </View>
           
        </SafeAreaView>
    )
}

export default Re_verify

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
        marginTop:20
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
})
