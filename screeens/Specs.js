import { useNavigation } from '@react-navigation/core';
import Checkbox from 'expo-checkbox'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Specs = ({route, navigation}) => {
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

    
    const { email } = route.params;
  const { pass } = route.params;
  const { fname } = route.params;
  const { lname } = route.params;
  const { phone } = route.params;
    const handleSignUp = () => {
        navigation.navigate("quali", {
          email: email,
          pass: pass,
          fname: fname,
          lname: lname,
          phone:phone,
          port: isSelected,
          corp: isSelected2,
          bday: isSelected3,
          event: isSelected4,
          wedd: isSelected5,
          natu: isSelected6,
          fash: isSelected7,
          grad: isSelected8,
          food: isSelected9,
          auto: isSelected10,
          sport: isSelected11,
          other: isSelected12,
        });
    }
    
    return (
        <SafeAreaView style={{flex:1}}>
            <SafeAreaView style={styles.logo}>
            <Ionicons name="chevron-back" size={50} color="black" onPress={()=>{navigation.navigate("presence", {
          email: email,
          pass: pass,
          fname: fname,
          lname: lname,
          phone:phone
        });}}/>
      <Ionicons name="camera" size={52} color="black" /><Text style={styles.logote}>Ipapz</Text>
    </SafeAreaView>
            <ScrollView >
                <View behavior="padding"
                style={{marginLeft:20,marginRight:20}}>
        <Text style={styles.logotext}>
            Photography Specialities
        </Text>
        <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper
dictum sem dictum scelerisque. Class aptent taciti sociosqu ad litora
torquent per conubia nostra, per inceptos himenaeos. Aenean imperdiet
dignissim velit eu congue.
        </Text>
                </View>
                
                <View style={styles.checkboxContainer}>
                <View style={styles.checkboxContainer}>
        <Checkbox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}> <Ionicons name="person" size={22} color="black" />Portrait</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={isSelected2}
          onValueChange={setSelection2}
          style={styles.checkbox}
        />
        <Text style={styles.label}> <Ionicons name="briefcase" size={22} color="black" />Corporate</Text>
      </View>
                </View>

                <View style={styles.checkboxContainer}>
                <View style={styles.checkboxContainer}>
        <Checkbox
          value={isSelected3}
          onValueChange={setSelection3}
          style={styles.checkbox}
        />
        <Text style={styles.label}><Ionicons name="calendar" size={22} color="black" /> Birthday</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={isSelected4}
          onValueChange={setSelection4}
          style={styles.checkbox}
        />
        <Text style={styles.label}> <Ionicons name="people" size={22} color="black" />Events</Text>
      </View>
                </View>

                <View style={styles.checkboxContainer}>
                <View style={styles.checkboxContainer}>
        <Checkbox
          value={isSelected5}
          onValueChange={setSelection5}
          style={styles.checkbox}
        />
        <Text style={styles.label}> <Ionicons name="heart" size={22} color="black" />Wedding</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={isSelected6}
          onValueChange={setSelection6}
          style={styles.checkbox}
        />
        <Text style={styles.label}><Ionicons name="cloud" size={22} color="black" />Nature</Text>
      </View>
                </View>

                <View style={styles.checkboxContainer}>
                <View style={styles.checkboxContainer}>
        <Checkbox
          value={isSelected7}
          onValueChange={setSelection7}
          style={styles.checkbox}
        />
         <Text style={styles.label}><Ionicons name="cut" size={22} color="black" />Fashion</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={isSelected8}
          onValueChange={setSelection8}
          style={styles.checkbox}
        />
        <Text style={styles.label}><Ionicons name="balloon" size={22} color="black" />Graduation</Text>
      </View>
                </View>

                <View style={styles.checkboxContainer}>
                <View style={styles.checkboxContainer}>
        <Checkbox
          value={isSelected9}
          onValueChange={setSelection9}
          style={styles.checkbox}
        />
        <Text style={styles.label}><Ionicons name="pizza" size={22} color="black" />Food</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={isSelected10}
          onValueChange={setSelection10}
          style={styles.checkbox}
        />
        <Text style={styles.label}><Ionicons name="car" size={22} color="black" />Automotive</Text>
      </View>
                </View>

                <View style={styles.checkboxContainer}>
                <View style={styles.checkboxContainer}>
        <Checkbox
          value={isSelected11}
          onValueChange={setSelection11}
          style={styles.checkbox}
        />
        <Text style={styles.label}><Ionicons name="football" size={22} color="black" />Sport</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={isSelected12}
          onValueChange={setSelection12}
          style={styles.checkbox}
        />
        <Text style={styles.label}>..Others</Text>
      </View>
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

export default Specs

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
        marginLeft:30
      },
      checkbox: {
        alignSelf: "center",
      },
      label: {
        margin: 8,
      },
})

