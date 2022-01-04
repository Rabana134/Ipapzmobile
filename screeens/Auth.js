import React, { useEffect, useState } from 'react'
import { Platform, SafeAreaView, StyleSheet, Text, TextInput, View,TouchableOpacity, BackHandler } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core'
import app, { auth } from '../firebase';
const Auth = () => {
    const navigation = useNavigation()
    const [code, setCode] = useState('')
     const [type, setType] = useState('')
     const [user, setUser] = useState('')
    useEffect(() => {
      auth.onAuthStateChanged(user => {
       if(user)
       {
        setUser(user)
       }
        
      })
    }, [])
    const handleCode = () => {
      
      app.database().ref().child('users/'+user.uid+"/type").on('value', snapshot => {
        if(snapshot.exists())
        {
        setType(snapshot.val())
        if(snapshot.val()=="photo")
        {
          navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
        }
        else
        {
          navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
        }  
        }
        else{
          navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
        }

      })
       
    }
    return (
        <SafeAreaView style={{flex:1}}>
         <SafeAreaView style={styles.container}>
      <Ionicons name="camera" size={52} color="black" /><Text style={styles.logotext}>Ipapz</Text>
    </SafeAreaView>
        <View style={{alignItems:"center",justifyContent:"center",flex:1, marginLeft:10,
        marginRight:10}}>
             
<Text style={{ fontSize: 20, fontWeight: "bold", color:"black"}}>Two Factor Authentication Code</Text>
<Text style={{}}>Digital Code</Text>
<View style={styles.inputContainer}>
        <TextInput
          placeholder="_ _ _ _ _ _"
          value={code}
          onChangeText={text => setCode(text)}
          style={styles.input}
        />
        </View>
        <View style={styles.buttonContainer}>
     <TouchableOpacity
       onPress={handleCode}
       style={styles.button}
     >
       <Text style={styles.buttonText}>Verify</Text>
     </TouchableOpacity>
   
   <Text style={{color: "red"}}></Text>

   </View>
        </View>
           
        </SafeAreaView>
    )
}

export default Auth

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
      input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
      },
      inputContainer: {
        width: '80%'
      },
      button: {
        backgroundColor: '#a100ff',
       
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10
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