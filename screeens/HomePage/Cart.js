import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import app from '../../firebase'
import { Image } from 'react-native-elements'


const Cart = ({navigation}) => {
    const[list, setList] = useState([]);
    const[num, setNum] = useState(0);
    const[user, setUser] = useState("");
    const[quant, setQua] = useState(1);
    useEffect(() => {
        app.auth().onAuthStateChanged(user => {
            if (user) {
              setUser(user)
               app.database().ref("cart/"+user.uid).on("value", snapshot => {
            let memberlist = [];
            snapshot.forEach(snap => {
                memberlist.push(snap.val());
            });
            setList(memberlist)
          });
          app.database().ref("cart/"+user.uid).on("value", snapshot => {
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
        <Ionicons name="chevron-back" size={50} color="black" onPress={()=>{navigation.goBack(null)}}/>
    <ScrollView>
       <Text style={{fontWeight:"bold", fontSize:20,margin:5}}>Your Shopping Cart</Text>
            <Text style={{margin:5}}>{num} items</Text> 
            <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
  />
  {list.map(data => {
                
                return (
                  
                    <View style={styles.item} >
                        <View style={{flexDirection:"row"}}>
                        <TouchableOpacity onPress={()=>{navigation.navigate("view_product",{
                      key: data.id
                    })}}>
                           <Image
                        
                         style={{width:100,height:100,alignSelf: 'center', margin:5}}
                           source={{
                               uri: data.img
                           }}
                          
                       />
                        </TouchableOpacity>
                        <View>
                        <Text style={{textAlign: 'center',fontSize:12,fontWeight:"bold",margin:5}}>{data.title}</Text>
                        <Text style={{fontSize:12,fontWeight:"bold",margin:5}}>£{data.price}</Text>
                        <View style={{flexDirection:"row"}}>
                        <Ionicons name="remove" size={20} color="black" onPress={()=>{
                        var like = 0;
                        app.database().ref("cart/"+user.uid+"/"+data.id).child("quant").on("value", snapshot => {
                          like = snapshot.val()-1
                          });
                          app.database().ref("cart/"+user.uid).child(data.id).update({
                            quant: like
                          })
                        }}/>
                        <Text style={{fontSize:15,fontWeight:"bold",marginRight:5,borderColor:"black",borderWidth:1,width:19,textAlign:"center"}}>{data.quant}</Text>
                        <Ionicons name="add" size={20} color="black" onPress={()=>{
                          var like = 0;
                        app.database().ref("cart/"+user.uid+"/"+data.id).child("quant").on("value", snapshot => {
                          like = snapshot.val()+1
                          });
                          app.database().ref("cart/"+user.uid).child(data.id).update({
                            quant: like
                          })
                        }}/>
                        </View>
                        <Ionicons name="trash" size={20} color="red" style={{margin:10}} onPress={()=>{
                           app.database().ref("cart/"+user.uid+"/"+data.id).remove()
                        }}/>
                        </View>
                        </View>
                    </View>
                );
               
                })
                }
                <View style={{margin:10}}>
                 <Button title="Update Cart" color="#a100ff" />  
                </View>
                <View style={{margin:10}}>
                   <Button title="Continue Shopping" color="#a100ff" onPress={()=>{ navigation.reset({
              index: 0,
              routes: [{name: 'product'}],
            });}}/>
                </View>
            
    </ScrollView>
            
        </SafeAreaView>
    )
}

export default Cart

const styles = StyleSheet.create({
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
})
