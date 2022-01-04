import React, { useState } from 'react'
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Ionicons } from '@expo/vector-icons';
import { BarPasswordStrengthDisplay } from 'react-native-password-strength-meter';





const SignupP = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [cemail, setcEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [fname, setfName] = useState('')
    const [lname, setlName] = useState('')
    const [password, setPassword] = useState('')
    const [Rpassword, setRPassword] = useState('')
    const [isSelected, setSelection] = useState(false);
    const [error, setError] = useState("")
    
    

    
    const handleSignUp = () => {
    
      if (!password) {
        return setError("Passwords is required")
      } else if (password.length < 8 ) {
        return setError('Password needs to be 6 characters or more');
      }
    
      if (!Rpassword) {
        return setError("Passwords is required")
      } else if (Rpassword !== password) {
        return setError("Passwords do not match")
      }
      else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password))
      {
        return setError("Password Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
      }
  
      if (!email) {
        return setError('Email required');
      }else if (email !== cemail) {
        return setError("Email do not match")
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        return setError('Email address is invalid');
      }
      if (!fname) {
        return setError('First name required');
      }
    if (!lname) {
      return setError('Last name required');
      }
     
   if (!phone) {
      return setError('Telephone required'); 
      }
      navigation.navigate("presence", {
        email: email,
        pass: password,
        fname: fname,
        lname: lname,
        phone:phone
      });
      }
    return (
      <SafeAreaView style={{flex:1}}>
      <SafeAreaView style={styles.logo}>
      <Ionicons name="chevron-back" size={50} color="black" onPress={()=>{navigation.navigate("Home_p")}}/>
      <Ionicons name="camera" size={52} color="black" /><Text style={styles.logote}>Ipapz</Text>
    </SafeAreaView>
        <ScrollView >
        <View
        style={styles.container}
        behavior="padding">
        <Text style={styles.logotext}>
            Photographer Registration
        </Text>
                <View style={styles.inputContainer}>
                <TextInput
          placeholder="*Mobile Phone"
          value={phone}
          onChangeText={text => setPhone(text)}
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="*First Name"
          value={fname}
          onChangeText={text => setfName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="*Last Name"
          value={lname}
          onChangeText={text => setlName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="*Address"
          value={address}
          onChangeText={text => setAddress(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="*Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="*Confirm Email"
          value={cemail}
          onChangeText={text => setcEmail(text)}
          style={styles.input}
        />
       <Text>(minimum 8 characters)</Text>
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
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <Text style={{color: "red"}}>{error}</Text>
        <Text style={{color: 'blue'}}
      onPress={() => {navigation.navigate("login")}}>
 Already have an account?
</Text>
      </View>
        </View>
        </ScrollView>
      </SafeAreaView>
        
    )
}

export default SignupP

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
      inputContainer: {
        width: '80%'
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
