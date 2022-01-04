import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
  } from 'react-native-paper';
import app, { auth } from '../../firebase';
import Dialog from "react-native-dialog";
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons'

const Ac_setting = () => {
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [fname, setfName] = useState('')
    const [name, setName] = useState('')
    const [lname, setlName] = useState('')
    const [current_p,setCurrent] = useState("")
    const [new_p,setNew] = useState("")
    const [re_type,setRetype] = useState("")
    const [add2,setAdd2] = useState("")
    const [city,setCity] = useState("")
    const [postc,setPostc] = useState("")
    const [image, setImage] = useState(null);
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible5, setVisible5] = useState(false);
    const [user, setUser] = useState('');
    useEffect(() => {
        app.auth().onAuthStateChanged(user => {
            if (user) {
                setUser(user)
              app.database().ref().child('users/'+user.uid+'/username').on('value', snapshot => {
              
                setName(snapshot.val()) 
                 
            })
            app.database().ref().child('users/'+user.uid+'/firstn').on('value', snapshot => {
                  
                setfName(snapshot.val()) 
                 
            })
            app.database().ref().child('users/'+user.uid+'/lastn').on('value', snapshot => {
                  
                setlName(snapshot.val()) 
                 
            })
            app.database().ref().child('users/'+user.uid+'/email').on('value', snapshot => {
            
                setEmail(snapshot.val()) 
                 
            })
            app.database().ref().child('users/'+user.uid+'/phone').on('value', snapshot => {
            
                setPhone(snapshot.val()) 
                 
            })
            app.database().ref().child('users/'+user.uid+'/address/city').on('value', snapshot => {
                    
              setCity(snapshot.val()) 
               
            })
            app.database().ref().child('users/'+user.uid+'/address/add2').on('value', snapshot => {
                    
            setAdd2(snapshot.val()) 
             
            })
            app.database().ref().child('users/'+user.uid+'/address/postc').on('value', snapshot => {
                    
            setPostc(snapshot.val()) 
            
            })
    
            app.database().ref().child('users/'+user.uid+'/profile/url/').on('value', snapshot => {
            
              setImage(snapshot.val()) 
              
              })
              app.database().ref().child('users/'+user.uid+'/address/add').on('value', snapshot => {
            
        setAddress(snapshot.val()) 
         
        })
            }
           
        })
    }, [])
    return (
        <SafeAreaView>
            <ScrollView>
            <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                        <TouchableOpacity
        >
         <Avatar.Image 
                           
                           source={{
                               uri: image
                           }}
                           size={70}
                       />
        </TouchableOpacity>
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>{name}</Title>
                                <Caption style={styles.caption}>@{name}</Caption>
                                <Caption style={styles.caption}>Location: {address}</Caption>
                            </View>
                        </View>
                    </View>
                    <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>
<Text style={{fontWeight:"bold"}}><Ionicons name="home" size={50} color="black" /> Saved Addresses</Text>
<Text style={{margin:5}}>Address 1</Text>
<Text style={{margin:5}}>{address}</Text>
<Text style={{margin:5}}>Address 2</Text>
<Text style={{margin:5}}>{add2}</Text>
    <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
  />
  <Text style={{margin:5, fontWeight:"bold"}}>Privacy</Text>
  <Text style={{margin:5}}>Manage the data you share with us</Text>
  <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
  />
   <Text style={{margin:5, fontWeight:"bold"}}>Security</Text>
  <Text style={{margin:5}}>Control your account security with 2-step verification</Text>
  <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
  />
  <Text style={{margin:5, fontWeight:"bold",color:"red"}} onPress={()=>{auth.signOut()}}>Logout</Text>
</View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Ac_setting

const styles = StyleSheet.create({})
