import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import app, { auth } from '../firebase';
import { useNavigation } from '@react-navigation/core'

const Dashboard_p = ({navigation}) => {
    const [currentUser, setCurrentUser] = useState()
    const [name, setName] = useState()
    
    useEffect(() => {

      const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        
        app.database().ref().child('users/'+user.uid+"/username").on('value', snapshot => {
           setName(snapshot.val())

        })
      })
  
      return unsubscribe
    }, [])
  
    return (
        <SafeAreaView style={{flex:1}}>
       
    <ScrollView>
    <View style={{alignItems:"center",flex:1}}>
           <Text style={{ fontSize: 30, fontWeight: "bold", color:"black"}}>Welcome {name}</Text>
           <View style={styles.checkboxContainer}>
                <View style={styles.checkboxContainer}>
                <TouchableOpacity
         onPress={()=>{navigation.reset({
            index: 0,
            routes: [{name: 'settings'}],
          });}}
          style={[styles.button, styles.buttonOutline]}
        >
        <Ionicons name="person-circle-outline" size={50} color="black" />
          <Text style={styles.buttonOutlineText}>Personal Details</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.checkboxContainer}>
      <TouchableOpacity
         onPress={()=>{navigation.reset({
        index: 0,
        routes: [{name: ''}],
      });}}
          style={[styles.button, styles.buttonOutline]}
        >
         <Ionicons name="wallet-outline" size={50} color="black" />
          <Text style={styles.buttonOutlineText}>My Wallet</Text>
        </TouchableOpacity>
      </View>
                </View>
                <View style={styles.checkboxContainer}>
                <View style={styles.checkboxContainer}>
                <TouchableOpacity
        
          style={[styles.button, styles.buttonOutline]}
        >
        <Ionicons name="calendar-outline" size={50} color="black" />
          <Text style={styles.buttonOutlineText}>My Schedule</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.checkboxContainer}>
      <TouchableOpacity
         
          style={[styles.button, styles.buttonOutline]}
        >
         <Ionicons name="camera" size={50} color="black" />
          <Text style={styles.buttonOutlineText}>Live Bookings</Text>
        </TouchableOpacity>
      </View>
                </View>
                <View style={styles.checkboxContainer}>
                <View style={styles.checkboxContainer}>
                <TouchableOpacity
         
          style={[styles.button, styles.buttonOutline]}
        >
        <Ionicons name="folder-outline" size={50} color="black" />
          <Text style={styles.buttonOutlineText}>Completed Jobs</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.checkboxContainer}>
      <TouchableOpacity
         
          style={[styles.button, styles.buttonOutline]}
        >
         <Ionicons name="notifications-outline" size={50} color="black" />
          <Text style={styles.buttonOutlineText}>My Notifications</Text>
        </TouchableOpacity>
      </View>
                </View>

                <View style={styles.checkboxContainer}>
                <View style={styles.checkboxContainer}>
                <TouchableOpacity
      
          style={[styles.button, styles.buttonOutline]}
        >
        <Ionicons name="mail" size={50} color="black" />
          <Text style={styles.buttonOutlineText}>Messages</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.checkboxContainer}>
      <TouchableOpacity
        onPress={()=>{navigation.reset({
            index: 0,
            routes: [{name: 'acsettings'}],
          });}}
          style={[styles.button, styles.buttonOutline]}
        >
         <Ionicons name="settings" size={50} color="black" />
          <Text style={styles.buttonOutlineText}>Settings</Text>
        </TouchableOpacity>
      </View>
                </View>

                <View style={styles.checkboxContainer}>
                <View style={styles.checkboxContainer}>
                <TouchableOpacity
          onPress={()=>{navigation.navigate("list")}}
          style={[styles.button, styles.buttonOutline]}
        >
        <Ionicons name="folder-outline" size={50} color="black" />
          <Text style={styles.buttonOutlineText}>Product List</Text>
        </TouchableOpacity>
      </View>
                </View>

           </View>
           </ScrollView>
        </SafeAreaView>
    )
}

export default Dashboard_p

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
      fontSize: 10,
      width:60
    },
    checkboxContainer: {
      flexDirection: "row",
      margin: 10,
    },
})
