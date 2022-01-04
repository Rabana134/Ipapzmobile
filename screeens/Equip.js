import { useNavigation } from '@react-navigation/core';
import Checkbox from 'expo-checkbox'
import React, { useState } from 'react'
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown'

const Equip = ({route}) => {
    const [isSelected, setSelection] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);
    const [isSelected5 ,setSelection5] = useState(false);
    const [isSelected6, setSelection6] = useState(false);
    const [isSelected7, setSelection7] = useState(false);
    const [isSelected8, setSelection8] = useState(false);
    const [isSelected9, setSelection9] = useState(false);
    const [isSelected10, setSelection10] = useState(false);
    const [isSelected11, setSelection11] = useState(false);
    const [isSelected12, setSelection12] = useState(false);
    const Ctypes = ["Agfa ePhoto 1280",
      "Canon ELPH 100 HS (IXUS 115 HS)",
      "Canon ELPH 115 IS (IXUS 132 HS)",
      "Canon ELPH 130 (IXUS 140)",
      "Canon ELPH 300 HS (IXUS 220 HS)",
      "Canon ELPH 310 HS (IXUS 230 HS)",
      "Canon ELPH 520 HS (IXUS 500 HS)",
      "Canon EOS 1000D (EOS Rebel XS / Kiss F Digital)",
     " Canon EOS 1100D (EOS Rebel T3 / EOS Kiss X50)",
      "Canon EOS 1200D (EOS Rebel T5 / EOS Kiss X70)",
      "Canon EOS 4000D",
     " Canon EOS 500D (EOS Rebel T1i / EOS Kiss X3)",
     " Canon EOS 50D",
      "Canon EOS 550D (EOS Rebel T2i / EOS Kiss X4)"]

    const navigation = useNavigation()
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
      if (!isSelected12) {
        alert("Please accept terms and conditions")
      }
      else{
      navigation.navigate("verif_p", {
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
        
    }

    return (
        <SafeAreaView style={{paddingTop: Platform.OS === 'android' ? 39 : 0, flex:1}}>
          
        <ScrollView >
        <SafeAreaView style={styles.logo}>
        <Ionicons name="chevron-back" size={50} color="black" onPress={()=>{navigation.navigate("quali", {
          email: email,
          pass: pass,
          fname: fname,
          lname: lname,
          phone:phone
        });}}/>
      <Ionicons name="camera" size={52} color="black" /><Text style={styles.logote}>Ipapz</Text>
    </SafeAreaView>
            <View behavior="padding"
            >
    <Text style={styles.logotext}>
        Photography Equipments
    </Text>
    <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper
dictum sem dictum scelerisque. Class aptent taciti sociosqu ad litora
torquent per conubia nostra, per inceptos himenaeos. Aenean imperdiet
dignissim velit eu congue.
    </Text>
           
            <Text style={styles.logotext}>
            Camera Type
    </Text> 
            <View >
            <SelectDropdown style={styles.input}
	data={Ctypes}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
	
		return item
	}}
/>
            </View>
  
  <Text style={styles.logotext}>
            Lighting Type
    </Text> 
            <View >
            <SelectDropdown style={styles.input}
	data={Ctypes}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
	
		return item
	}}
/>
  </View>

  <Text style={styles.logotext}>
  Backdrop Types
    </Text> 
            <View >
            <SelectDropdown style={styles.input}
	data={Ctypes}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
	
		return item
	}}
/>
           
  </View>
  <Text>List of all other equipments</Text>
    <TextInput
      placeholder=""
      style={styles.input}
    />
    <Text>List of Props</Text>
    <TextInput
      placeholder=""
      style={styles.input}
    />

<Text style={styles.logotext}>
Declaration of ownwership of images submitted
    </Text>
    <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper
dictum sem dictum scelerisque. Class aptent taciti sociosqu ad litora
torquent per conubia nostra, per inceptos himenaeos. Aenean imperdiet
dignissim velit eu congue.
    </Text>
          
            <View style={styles.buttonContainer}>
    <TouchableOpacity
      onPress={handleSignUp}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.checkboxContainer}>
        <Checkbox
          value={isSelected12}
          onValueChange={setSelection12}
          style={styles.checkbox}
        />
        <Text style={styles.label}>I agree to the Terms of Use and Privacy Policy</Text>
      </View>
      </View>
        </ScrollView>
    </SafeAreaView>
)
}

export default Equip

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 5 : 0,
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
    paddingVertical: 30,
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
    marginLeft:30
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
})