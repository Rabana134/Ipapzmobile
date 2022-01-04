import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { Image } from 'react-native-elements/dist/image/Image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import app from '../../firebase';
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

const Lists = ({navigation}) => {
    const[list, setList] = useState([]);
    const[num, setNum] = useState(0);

    useEffect(() => {
        app.auth().onAuthStateChanged(user => {
            if (user) {
               app.database().ref("posts/"+user.uid).orderByChild("pos").on("value", snapshot => {
            let memberlist = [];
            snapshot.forEach(snap => {
                memberlist.push(snap.val());
            });
            setList(memberlist)
          });
          app.database().ref("posts/"+user.uid).on("value", snapshot => {
           if (snapshot.exists) {
            setNum(snapshot.numChildren())
           }
           else
           {
            setNum(0)
           }
          });
            }
           
        })
       
    }, [])
    return (
        <SafeAreaView style={{flex:1}}>
        <TouchableOpacity
         onPress={()=>{navigation.reset({
          index: 0,
          routes: [{name: 'uplist'}],
        });}}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>List An Item</Text>
        </TouchableOpacity>
            <Text style={{fontSize:20,fontWeight:"bold",margin:20}}>Listings</Text>
            <Text style={{fontSize:15,margin:10}}>Active({num})</Text>
            <ScrollView>
            {list.map(data => {
                
                return (
                    <View style={{margin:5, borderWidth: 2, borderColor: "black"}}>
                   
                        <View style={{flexDirection:'row',marginTop: 15}}>
                        <Image
                           style={{width:100,height:100}}
                           source={{
                               uri: data.img
                           }}
                          
                       />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>{data.title}</Title>
                            </View>
                        </View>
                        
                        </View>
                );
               
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Lists

const styles = StyleSheet.create({
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
})
