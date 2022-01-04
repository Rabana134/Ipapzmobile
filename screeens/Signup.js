import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import app, { auth } from '../firebase'
import Checkbox from 'expo-checkbox';
import { BarPasswordStrengthDisplay } from 'react-native-password-strength-meter';
import { Ionicons } from '@expo/vector-icons';

const Signup = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [Rpassword, setRPassword] = useState('')
    const [isSelected, setSelection] = useState(false);
    const [error, setError] = useState("")

 

    const handleSignUp = () => {
      if (!password) {
        return setError("Passwords is required")
      } else if (password.length < 8) {
        return setError('Password needs to be 8 characters or more');
      }
      else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password))
      {
        return setError("Password Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
      }
    
      if (!Rpassword) {
        return setError("Passwords is required")
      } else if (Rpassword !== password) {
        return setError("Passwords do not match")
      }
  
      if (!email) {
        return setError('Email required');
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        return setError('Email address is invalid');
      }
      if (!name) {
        return setError('Name required');
      }
      if (!isSelected) {
        return setError('Please accept the terms');
      }
      auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        user.sendEmailVerification();
        app.database().ref('users/'+user.uid).set({
          username:name,
          email:email,
          type:"customer"
        })
        navigation.navigate("verif_c", {
          email: email
        });
        auth.signOut();
       
      })
      .catch(error => alert(error.message))
      }
    return (
        <SafeAreaView style={{flex:1}}>
           <SafeAreaView style={styles.logo}>
           <Ionicons name="chevron-back" size={50} color="black" onPress={()=>{navigation.navigate("Home_p")}}/>
      <Ionicons name="camera" size={52} color="black" /><Text style={styles.logote}>Ipapz</Text>
    </SafeAreaView>
          <ScrollView style={{marginTop:50}}>
          <View
        style={styles.container}
        behavior="padding">
        <Text style={styles.logotext}>
            Customer Sign Up
        </Text>
                <View style={styles.inputContainer}>
        <TextInput
          placeholder="*Name"
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="*Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
      <View style={{flexDirection:'row'}}> 
        <TextInput
          placeholder="*Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
 <Ionicons name="help-circle" size={30} color="black"
   onPress={()=>{alert('The password should contain 8 characters or more characters. The password must contain the following characters:- At least one UPPERCASE character (A-Z) - At least one lowercase character (a-z) At least one number (0-9) At least one special character ')}}
 />
 </View> 
        <TextInput
          placeholder="*Re-type Password"
          value={Rpassword}
          onChangeText={text => setRPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <BarPasswordStrengthDisplay
          password={password}
        />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignUp}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.checkboxContainer}>
        <Checkbox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>I agree to the Terms of Use and Privacy Policy</Text>
      </View>
      <Text style={{color: "red"}}>{error}</Text>
      <Text style={{color: 'blue'}}
      onPress={() => {navigation.reset({
            index: 0,
            routes: [{name: 'login'}],
          });}}>
 Already have an account?
</Text>
      </View>
        </View>
          </ScrollView>
        </SafeAreaView>
    )
}

export default Signup

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
