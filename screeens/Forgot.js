import React, { useRef, useState } from 'react'
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { auth } from '../firebase'
import { Ionicons } from '@expo/vector-icons';

const Forgot = () => {

    const [email, setEmail] = useState('')
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          setMessage("")
          setError("")
          setLoading(true)
          await auth.sendPasswordResetEmail(email)
          setMessage("We just sent you your password reset link")
        } catch {
          setError("Failed to reset password")
        }
    
        setLoading(false)
      }
    return (
        <SafeAreaView >
        <SafeAreaView style={styles.logo}>
   <Ionicons name="camera" size={52} color="black" /><Text style={styles.logote}>Ipapz</Text>
 </SafeAreaView>
 <Text style={{color: "blue"}}>{message}</Text>
       <ScrollView style={{marginTop:50}}>
       <View
     style={styles.container}
     behavior="padding">
     <Text style={styles.logotext}>
     Forgotten Password your password?
     </Text>
     <Text>Please enter your account email address. We
will send you an email with instructions to
reset your password.</Text>
             <View style={styles.inputContainer}>
     <TextInput
       placeholder="Email"
       value={email}
       onChangeText={text => setEmail(text)}
       style={styles.input}
     />
   </View>

   <View style={styles.buttonContainer}>
     <TouchableOpacity
       onPress={handleSubmit}
       style={styles.button}
     >
       <Text style={styles.buttonText}>Reset Password</Text>
     </TouchableOpacity>
   
   <Text style={{color: "red"}}>{error}</Text>

   <Text style={{color: 'blue'}}
      onPress={() => {navigation.reset({
              index: 0,
              routes: [{name: 'login'}],
            });}}>
  Back 
</Text>
   </View>
     </View>
       </ScrollView>
     </SafeAreaView>
 )
}

export default Forgot

const styles = StyleSheet.create({
 container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   inputContainer: {
     width: '80%'
   },
   logo: {
     backgroundColor: '#fff',
     paddingTop: Platform.OS === 'android' ? 39 : 0,
     flexDirection:'row', 
   },
   logote:{
     fontSize: 30,
     fontWeight: "bold",
     color:"#a100ff"
   },
   logotext:{
     fontSize: 20,
     fontWeight: "bold",
     color:"black",
    
   },
   input: {
     backgroundColor: 'white',
     paddingHorizontal: 15,
     paddingVertical: 10,
     borderRadius: 10,
     marginTop: 5,
   },
   buttonContainer: {
     width: '60%',
     justifyContent: 'center',
     alignItems: 'center',
     marginTop: 40,
   },
   button: {
     backgroundColor: '#a100ff',
     width: '100%',
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
 checkboxContainer: {
     flexDirection: "row",
     marginBottom: 20,
   },
   checkbox: {
     alignSelf: "center",
   },
   label: {
     margin: 8,
   },
})
