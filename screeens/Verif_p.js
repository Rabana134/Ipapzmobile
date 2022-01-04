import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import app, { auth } from '../firebase';
import { useNavigation } from '@react-navigation/core'

const Verif_p = ({route,navigation}) => {
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
    
    useEffect (() => {
        auth
        .createUserWithEmailAndPassword(email, pass)
        .then(userCredentials => {
          const user = userCredentials.user;
          user.sendEmailVerification();
          app.database().ref('users/'+user.uid).set({
            username:fname,
            firstn: fname,
            lastn: lname,
            email:email,
            phone:phone,
            type:"photo"
          })
          app.database().ref('users/'+user.uid+'/specs').update({
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
            other: other
          })
          auth.signOut();
         
        })
        .catch(error => alert(error.message))
       
      }, [])
    return (
        <View style={{flex:1}}>
         <SafeAreaView style={styles.container}>
      <Ionicons name="camera" size={52} color="black" /><Text style={styles.logotext}>Ipapz</Text>
    </SafeAreaView>
            <View style={{alignItems:"center",justifyContent:"center",flex:1,marginLeft:20,marginRight:20}}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color:"black"}}>
            Thank you for submitting your
Photographer application.
A confirmation email has been sent to {email} We will vet and verify all information provided and register you accordingly.
Once a decision is made you will receive
an email notifcation.
            </Text>
            <Text style={{color: 'blue'}}
      onPress={() => { navigation.reset({
            index: 0,
            routes: [{name: 'login'}],
          });}}>
 Login
</Text>
        </View>
        </View>
        
    )
}

export default Verif_p

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
        fontSize: 16,
      },
})
