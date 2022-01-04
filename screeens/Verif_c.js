import React from 'react'
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core'

const Verif_c = ({route, navigation}) => {
    const { email } = route.params;
  
    return (
        <SafeAreaView style={{flex:1}}>
         <SafeAreaView style={styles.container}>
      <Ionicons name="camera" size={52} color="black" /><Text style={styles.logotext}>Ipapz</Text>
    </SafeAreaView>
        <View style={{alignItems:"center",justifyContent:"center",flex:1,marginLeft:20,marginRight:20}}>
             
<Text style={{ fontSize: 20, fontWeight: "bold", color:"black"}}>Please verify your email address</Text>
<Text style={{}}>An email has been sent to {email}</Text>
<Text style={{color: 'blue'}}
      onPress={() => {navigation.reset({
            index: 0,
            routes: [{name: 'login'}],
          });}}>
 Login
</Text>
        </View>
           
        </SafeAreaView>
    )
}

export default Verif_c

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
