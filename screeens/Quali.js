import React from 'react'
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';


const Quali = ({route, navigation}) => {
    const { email } = route.params;
    const { pass } = route.params;
    const { fname } = route.params;
    const { lname } = route.params;
    const { phone } = route.params;
    const { port } = route.params;
    const { corp } = route.params;
    const { bday } = route.params;
    const { event } = route.params;
    const { wedd } = route.params;
    const { natu } = route.params;
    const { fash } = route.params;
    const { grad } = route.params;
    const { food } = route.params;
    const { auto } = route.params;
    const { sport } = route.params;
    const { other } = route.params;
    const handleSignUp = () => {
        navigation.navigate("equip", {
          email: email,
          pass: pass,
          fname: fname,
          lname: lname,
          phone:phone,
          port: port,
          corp: corp,
          bday: bday,
          event: event,
          wedd: wedd,
          natu: natu,
          fash: fash,
          grad: grad,
          food: food,
          auto: auto,
          sport: sport,
          other: other,
        });
    }
    
    return (
        <SafeAreaView style={{flex:1}}>
            <SafeAreaView style={styles.logo}>
            <Ionicons name="chevron-back" size={50} color="black" onPress={()=>{navigation.navigate("spec", {
          email: email,
          pass: pass,
          fname: fname,
          lname: lname,
          phone:phone
        });}}/>
      <Ionicons name="camera" size={52} color="black" /><Text style={styles.logote}>Ipapz</Text>
    </SafeAreaView>
        <ScrollView >
        <View
    behavior="padding"
    style={{marginLeft:20,marginRight:20}}>
    <Text style={styles.logotext}>
        Photography Qualification
    </Text>
    <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper
dictum sem dictum scelerisque. Class aptent taciti sociosqu ad litora
torquent per conubia nostra, per inceptos himenaeos. Aenean imperdiet
dignissim velit eu congue.
    </Text>
    <Text>Qualification 1</Text>
    <TextInput
      placeholder=""
      style={styles.input}
    />
    <Text>Qualification 2</Text>
    <TextInput
      placeholder=""
      style={styles.input}
    />
    <Text>Qualification 3</Text>
    <TextInput
      placeholder=""
      style={styles.input}
    />
    </View>
    <View style={styles.buttonContainer}>
    <TouchableOpacity
      onPress={handleSignUp}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>
    
  </View>
        </ScrollView>
    </SafeAreaView>
    )
}

export default Quali

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
        marginTop:50
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
