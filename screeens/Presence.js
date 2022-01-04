import React from 'react'
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';


const Presence = ({route, navigation}) => {
  const { email } = route.params;
  const { pass } = route.params;
  const { fname } = route.params;
  const { lname } = route.params;
  const { phone } = route.params;
    const handleSignUp = () => {
        navigation.navigate("spec", {
          email: email,
          pass: pass,
          fname: fname,
          lname: lname,
          phone:phone
        });
    }
    return (
        <SafeAreaView style={{flex:1}}>
        <SafeAreaView style={styles.logo}>
        <Ionicons name="chevron-back" size={50} color="black" onPress={()=>{navigation.navigate("signup-p")}}/>
      <Ionicons name="camera" size={52} color="black" /><Text style={styles.logote}>Ipapz</Text>
    </SafeAreaView>
            <ScrollView>
            <View
        behavior="padding"
        style={{marginLeft:20,marginRight:20}}>
        <Text style={styles.logotext}>
            Online Presence
        </Text>
        <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper
dictum sem dictum scelerisque. Class aptent taciti sociosqu ad litora
torquent per conubia nostra, per inceptos himenaeos. Aenean imperdiet
dignissim velit eu congue.
        </Text>
        <View style={styles.align}><Ionicons name="camera" size={20} color="black" /><Text>Personal Portfolio Link:</Text></View>
        <TextInput
          placeholder=""
          style={styles.input}
          
        />

<View style={styles.align}><Ionicons name="logo-instagram" size={20} color="black" /><Text>Instagram handle:</Text></View>
        <TextInput
          placeholder=""
          style={styles.input}
          
        />
        <View style={styles.align}><Ionicons name="logo-facebook" size={20} color="black" /><Text>Facebook profle URL:</Text></View>
        <TextInput
          placeholder=""
          style={styles.input}
          
        />
        <View style={styles.align}><Ionicons name="logo-twitter" size={20} color="black" /><Text>Twitter handle:</Text></View>
        <TextInput
          placeholder=""
          style={styles.input}
         
        />
        <View style={styles.align}><Ionicons name="logo-pinterest" size={20} color="black" /><Text>Pintrest handle:</Text></View>
        <TextInput
          placeholder=""
          style={styles.input}
        
        />
        <View style={styles.align}><Ionicons name="logo-yen" size={20} color="black" /><Text>Yelp handle:</Text></View>
        <TextInput
          placeholder=""
          style={styles.input}
        
        />
         <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignUp}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        
      </View>
        </View>
       
            </ScrollView>
        </SafeAreaView>
    )
}

export default Presence

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
      align: {
        flexDirection:'row', 
       
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
        width: '100%',
        marginTop: 10,
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
