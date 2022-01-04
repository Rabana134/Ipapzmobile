import React, { useEffect, useState } from 'react'
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import app from '../../firebase';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native-elements/dist/image/Image';

const Productss = ({navigation,route}) => {
    const[list, setList] = useState([]);
    const[num, setNum] = useState(0);
    const[liked, setLiked] = useState(0);
    const { search } = route.params;
    const [searchb, setSearch] = useState(search)
   

    useEffect(() => {
        app.auth().onAuthStateChanged(user => {
            if (user) {
              
               app.database().ref("all/").orderByChild("search").startAt(searchb.toUpperCase())
               .endAt(searchb.toUpperCase()+"\uf8ff").on("value", snapshot => {
            let memberlist = [];
            snapshot.forEach(snap => {
                memberlist.push(snap.val());
            });
            setList(memberlist)
          });
          app.database().ref("all/").orderByChild("search").startAt(searchb.toUpperCase())
          .endAt(searchb.toUpperCase()+"\uf8ff").on("value", snapshot => {
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
    const handeleSearch=()=>{
      app.database().ref("all/").orderByChild("search").startAt(searchb.toUpperCase())
      .endAt(searchb.toUpperCase()+"\uf8ff").on("value", snapshot => {
   let memberlist = [];
   snapshot.forEach(snap => {
       memberlist.push(snap.val());
   });
   setList(memberlist)
 });
 app.database().ref("all/").orderByChild("search").startAt(searchb.toUpperCase())
 .endAt(searchb.toUpperCase()+"\uf8ff").on("value", snapshot => {
  if (snapshot.exists) {
   setNum(snapshot.numChildren())
  }
  else
  {
   setNum(0)
  }
 });
    }
    return (
        <SafeAreaView style={{flex:1}}>
        <View style={{flexDirection:"row"}}>
            <TextInput
          placeholder="Search"
          defaultValue={searchb}
          onChangeText={text => setSearch(text)}
          style={styles.input}/>
          <View style={{alignItems:"center",justifyContent:"center"}}>
          <TouchableOpacity onPress={handeleSearch}>
              <Ionicons name="search" size={30} color="black" 
               style={{textAlign:"center",backgroundColor:"white",paddingHorizontal: 15,paddingVertical: 10,marginTop: 5}}/>
          </TouchableOpacity>
                </View>
         
        </View>
        <View style={{flexDirection:"row-reverse"}}>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline2]}
        >
          <Text style={styles.buttonOutlineText}>Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Sort By</Text>
        </TouchableOpacity>
       
        </View>
            <ScrollView>
<View >
<View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop:10
  }}
/>
<View> 
<Text style={{textAlign: 'center',fontSize:15,fontWeight:"bold"}}>{num} Results</Text> 
</View>
<View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop:5
  }}
/>
</View>

<View style={styles.container}>
{list.map(data => {
                
                return (
                  
                    <View style={styles.item} >
                        <View style={{flexDirection:"row-reverse"}}>
                        <TouchableOpacity onPressIn={()=>{
                          var like = 0;
                          app.database().ref("all/"+data.id).child("likes").on("value", snapshot => {
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
          app.database().ref("all/").child(data.id).update({
              likes: like
            })
                        }}>
                        <Ionicons name={data.likes>=1? "heart" : "heart-outline"} size={20}  color={data.likes>=1? "red" : "black"} />
        </TouchableOpacity>
                        </View>
                        <View style={styles.img}>
                        <TouchableOpacity onPress={()=>{navigation.navigate("view_product",{
                      key: data.id
                    })}}>
                           <Image
                        
                         style={{width:150,height:200,alignSelf: 'center'}}
                           source={{
                               uri: data.img
                           }}
                          
                       />
                        </TouchableOpacity>
                         
                        </View>
                        
                       <Text style={{textAlign: 'center',fontSize:12,fontWeight:"bold",margin:5}}>{data.title}</Text>
                       <Text style={{fontSize:12,fontWeight:"bold",margin:5}}>£{data.price}</Text>
                       <View style={{flexDirection:"row",margin:10}}>
             <Ionicons name="star-outline" size={20} color="purple"/>
              <Ionicons name="star-outline" size={20} color="purple"/>
              <Ionicons name="star-outline" size={20} color="purple"/>
              <Ionicons name="star-outline" size={20} color="purple"/>
              <Ionicons name="star-outline" size={20} color="purple"/>
             </View>
                    </View>
                );
               
                })}
  
</View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Productss

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', // if you want to fill rows left to right
     
      },
      item: {
        width: '50%', // is 50% of container width
         borderWidth: 1,
          borderColor: "black",
          
      },
      img: {
          alignItems:"center"
      },
    button: {
        backgroundColor: '#a100ff',
       
        padding: 8,
        borderRadius: 10,
        alignItems: 'center',
      },
      buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#a100ff',
        borderWidth: 2,
        
      },
      buttonOutline2: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#a100ff',
        borderWidth: 2,
        marginLeft:Dimensions.get('window').width/2,
        marginRight:10
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
      inputContainer: {
        width: '80%'
      },
      input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 5,
        width:Dimensions.get('window').width-50
      },
})
