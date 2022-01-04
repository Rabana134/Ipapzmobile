import React, { useEffect, useState } from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, View, Button } from 'react-native'
import { Image } from 'react-native-elements/dist/image/Image';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import app from '../../firebase';
import { Ionicons } from '@expo/vector-icons';
import { Rating, AirbnbRating } from 'react-native-ratings';


const Viewproduct = ({route,navigation}) => {
    const { key } = route.params;
    const[show, setShow] = useState(false);
    const[main_img, setMain] = useState("");
    const[title, setTitle] = useState("");
    const[price, setPrice] = useState("");
    const[desc, setDesc] = useState("");
    const[type, setType] = useState("");
    const[cond, setCond] = useState("");
    const[categ, setCateg] = useState("");
    const[likes, setLike] = useState(0);
    const[list, setList] = useState([]);
    const [user, setUser] = useState('');
    useEffect(() => {
        app.auth().onAuthStateChanged(user => {
            if (user) {
                setUser(user)
            }
           
        })
        app.database().ref("all/"+key+"/img").on("value", snapshot => {
           setMain(snapshot.val())
          });
           app.database().ref("all/"+key+"/title").on("value", snapshot => {
            setTitle(snapshot.val())
           });
           app.database().ref("all/"+key+"/price").on("value", snapshot => {
            setPrice(snapshot.val())
           });
           app.database().ref("all/"+key+"/desc").on("value", snapshot => {
            setDesc(snapshot.val())
           });
           app.database().ref("all/"+key+"/type").on("value", snapshot => {
            setType(snapshot.val())
           });
           app.database().ref("all/"+key+"/cond").on("value", snapshot => {
            setCond(snapshot.val())
           });
           app.database().ref("all/"+key+"/categ").on("value", snapshot => {
            setCateg(snapshot.val())
           });
           app.database().ref("all/"+key+"/likes").on("value", snapshot => {
            setLike(snapshot.val())
           });
        
          app.database().ref("all/"+key+"/url").on("value", snapshot => {
            let memberlist = [];
            snapshot.forEach(snap => {
                memberlist.push(snap.val());
            });
            setList(memberlist)
           });
    }, [])
    return (
        <SafeAreaView style={{flex:1}}>
        <Ionicons name="chevron-back" size={50} color="black" onPress={()=>{navigation.reset({
    index: 0,
    routes: [{name: 'product'}],
  })}}/>
        <ScrollView>
        <Image
               style={{width:Dimensions.get('window').width,height:300}}
                           source={{
                               uri: main_img
                           }}
                          />
        <ScrollView horizontal={true}>
        {list.map(data => {
                
                return (
                    <TouchableOpacity onPress={()=>{setMain(data)}}>
                         <Image
          style={{width:50,height:50,margin:5}}
          source={{uri: data}} 
        />
                    </TouchableOpacity>
                   
                    );
               
            })}
        </ScrollView>
        <View style={{margin:10}}>
        <Text style={{fontSize:20,fontWeight:"bold"}}>{title}</Text>
        <Text style={{fontSize:20,fontWeight:"bold",margin:10}}>Price: £{price}</Text>

        <Text style={{fontSize:10,fontWeight:"bold",margin:10}}>Availability: </Text>
        </View>
        <View style={{flexDirection:"row",margin:10}}>
            <Text>Quantity</Text>
            <TextInput  defaultValue='1' style={{width:40,borderColor:"black",borderWidth:1, marginLeft:10, marginRight:10,height:20}}/>
            <Button  title="Add To Cart" color="#a100ff" onPress={()=>{
                 app.database().ref("cart/"+user.uid).child(key).set({
            img: main_img,
            price: price,
            title: title,
            search: title.toUpperCase(),
            desc: desc,
            id: key,
            user_id:user.uid,
            cond: cond,
            categ: categ,
            type:type,
            quant: 1
        })
        navigation.navigate("cart")
            }}></Button>
             </View>
             <View style={{flexDirection:"row",margin:10}}>
             <Ionicons name="star-outline" size={20} color="purple"/>
              <Ionicons name="star-outline" size={20} color="purple"/>
              <Ionicons name="star-outline" size={20} color="purple"/>
              <Ionicons name="star-outline" size={20} color="purple"/>
              <Ionicons name="star-outline" size={20} color="purple"/>
             </View>
             <View style={{flexDirection:"row"}}>
             <TouchableOpacity onPressIn={()=>{
                          var like = 0;
                          app.database().ref("all/"+key).child("likes").on("value", snapshot => {
           if (snapshot.exists) {
             if(snapshot.val()<=0)
             {
                like = snapshot.val()+1
             }
             else
             {
              like = snapshot.val()-1
             }
           }
           else
           {
            like = 1
           }
          });
          app.database().ref("all/").child(key).update({
              likes: like
            })
                        }}>
                        <Ionicons name={likes>=1? "heart" : "heart-outline"} size={40}  color={likes>=1? "red" : "black"} />
        </TouchableOpacity>
        <Ionicons name="share-social-outline" size={40}  color="black" style={{marginLeft:20}}/>
             </View>
             <View style={{flexDirection:"row",margin:10,backgroundColor:"white"}}>
             <TouchableOpacity onPress={()=>{setShow(!show)}}>
              <Ionicons name={show?"remove-circle": "add-circle"} size={20}  color="black"/>   
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>{setShow(!show)}}>
             <Text style={{fontWeight:"bold"}}>Product Details</Text>
             </TouchableOpacity>
             
             </View>
             {
                 show?
                 <React.Fragment>
                 <Text style={{marginBottom:10}}>{desc}</Text>
                 <Text style={{marginBottom:10}}>Condition: {cond}</Text>
                 </React.Fragment>
                 :
                null
             }
             <View style={{flexDirection:"row",margin:10,backgroundColor:"white"}}>
             <TouchableOpacity onPress={()=>{setShow(!show)}}>
              <Ionicons name={show?"remove-circle": "add-circle"} size={20}  color="black"/>   
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>{setShow(!show)}}>
             <Text style={{fontWeight:"bold"}}>Additional Information</Text>
             </TouchableOpacity>
             </View>
             <Text style={{fontSize:20}}>You may also be interested in: </Text>
        </ScrollView>
             
        </SafeAreaView>
    )
}

export default Viewproduct

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#a100ff',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
      },
})
