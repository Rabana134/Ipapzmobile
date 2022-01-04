import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as ImagePicker from 'expo-image-picker';
import app, { storage } from '../../firebase';
import { Image } from 'react-native-elements';

const Upload = ({navigation}) => {
    const[title, setTitle] = useState("");
    const[loading, setLoading] = useState(false);
    const[categ, setCateg] = useState("");
    const[type, setType] = useState("");
    const[cond, setCond] = useState("");
    const[desc, setDesc] = useState("");
    const[pricing, setPricing] = useState("");
    const[user, setUser] = useState("");
    const[num, setNum] = useState(0);
    const[images, setImages] = useState([]);
    const[thumb, seThumb] = useState(null);
    const[url, setUrl] = useState([]);
    const[catlist, setCatlist] = useState([]);
    var key = app.database().ref().push().key;

    useEffect(() => {
        app.auth().onAuthStateChanged(user => {
            if (user) {
              setUser(user)
            }
           
        })
       
    }, [])
   
    const handleImages =async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
            setLoading(true)
          setImages(oldArray => [...oldArray,result.uri])
          uploadImage(result.uri); 
        }
       
      }
      const  uploadImage = async(uri) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        var ref = storage.ref(`images/${key}.png`);
        const uploadTask =ref.put(blob);
       
      return  uploadTask.on('state_changed',  
       () => {
          ref.getDownloadURL().then((url) => {
        if (thumb==null) {
            seThumb(url) 
        }
        setUrl(oldArray => [...oldArray, url])
       alert("success")
        setLoading(false)
    })
       }
       );
       
  
      }
      const handleSubmit =()=>{

        app.database().ref("posts/"+user.uid).child(key).set({
            img: thumb,
            price: pricing,
            title: title,
            search: title.toUpperCase(),
            desc: desc,
            id: key,
            user_id:user.uid,
            cond: cond,
            categ: catlist,
            type:type,
            url: url
        })
        app.database().ref("all/").child(key).set({
          img: thumb,
          price: pricing,
          title: title,
          search: title.toUpperCase(),
          desc: desc,
          id: key,
          user_id:user.uid,
          cond: cond,
          categ: catlist,
          type:type,
          url: url
      })
        
        if (catlist[0]!== null) {
          app.database().ref(catlist[0]+"/").child(key).set({
            img: thumb,
            price: pricing,
            title: title,
            search: title.toUpperCase(),
            desc: desc,
            id: key,
            user_id:user.uid,
            cond: cond,
            categ: catlist,
            type:type,
            url: url
        })
        }
        if (catlist[1]!== null) {
          app.database().ref(catlist[1]+"/").child(key).set({
            img: thumb,
            price: pricing,
            title: title,
            search: title.toUpperCase(),
            desc: desc,
            id: key,
            user_id:user.uid,
            cond: cond,
            categ: catlist,
            type:type,
            url: url
        })
        }
        if (catlist[2]!== null) {
          app.database().ref(catlist[2]+"/").child(key).set({
            img: thumb,
            price: pricing,
            title: title,
            search: title.toUpperCase(),
            desc: desc,
            id: key,
            user_id:user.uid,
            cond: cond,
            categ: categ,
            type:type,
            url: url
        })
        }
        if (catlist[3]!== null) {
          app.database().ref(catlist[3]+"/").child(key).set({
            img: thumb,
            price: pricing,
            title: title,
            search: title.toUpperCase(),
            desc: desc,
            id: key,
            user_id:user.uid,
            cond: cond,
            categ: categ,
            type:type,
            url: url
        })
        }
        if (catlist[4]!== null) {
          app.database().ref(catlist[4]+"/").child(key).set({
            img: thumb,
            price: pricing,
            title: title,
            search: title.toUpperCase(),
            desc: desc,
            id: key,
            user_id:user.uid,
            cond: cond,
            categ: categ,
            type:type,
            url: url
        })
        }
        if (catlist[5]!== null) {
          app.database().ref(catlist[5]+"/").child(key).set({
            img: thumb,
            price: pricing,
            title: title,
            search: title.toUpperCase(),
            desc: desc,
            id: key,
            user_id:user.uid,
            cond: cond,
            categ: categ,
            type:type,
            url: url
        })
        }
        if (catlist[6]!== null) {
          app.database().ref(catlist[6]+"/").child(key).set({
            img: thumb,
            price: pricing,
            title: title,
            search: title.toUpperCase(),
            desc: desc,
            id: key,
            user_id:user.uid,
            cond: cond,
            categ: categ,
            type:type,
            url: url
        })
        }
        if (catlist[7]!== null) {
          app.database().ref(catlist[7]+"/").child(key).set({
            img: thumb,
            price: pricing,
            title: title,
            search: title.toUpperCase(),
            desc: desc,
            id: key,
            user_id:user.uid,
            cond: cond,
            categ: categ,
            type:type,
            url: url
        })
        }
        if (catlist[8]!== null) {
          app.database().ref(catlist[8]+"/").child(key).set({
            img: thumb,
            price: pricing,
            title: title,
            search: title.toUpperCase(),
            desc: desc,
            id: key,
            user_id:user.uid,
            cond: cond,
            categ: categ,
            type:type,
            url: url
        })
        }
        if (catlist[9]!== null) {
          app.database().ref(catlist[9]+"/").child(key).set({
            img: thumb,
            price: pricing,
            title: title,
            search: title.toUpperCase(),
            desc: desc,
            id: key,
            user_id:user.uid,
            cond: cond,
            categ: categ,
            type:type,
            url: url
        })
        }
        if (catlist[10]!== null) {
          app.database().ref(catlist[10]+"/").child(key).set({
            img: thumb,
            price: pricing,
            title: title,
            search: title.toUpperCase(),
            desc: desc,
            id: key,
            user_id:user.uid,
            cond: cond,
            categ: categ,
            type:type,
            url: url
        })
        }
        if (catlist[11]!== null) {
          app.database().ref(catlist[11]+"/").child(key).set({
            img: thumb,
            price: pricing,
            title: title,
            search: title.toUpperCase(),
            desc: desc,
            id: key,
            user_id:user.uid,
            cond: cond,
            categ: categ,
            type:type,
            url: url
        })
        }
        if (catlist[12]!== null) {
          app.database().ref(catlist[12]+"/").child(key).set({
            img: thumb,
            price: pricing,
            title: title,
            search: title.toUpperCase(),
            desc: desc,
            id: key,
            user_id:user.uid,
            cond: cond,
            categ: categ,
            type:type,
            url: url
        })
        }
        navigation.reset({
          index: 0,
          routes: [{name: 'list'}],
        });
    }
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{margin:5}}>
            <ScrollView>
            <Text style={{fontSize:20,fontWeight:"bold",margin:20}}>Photos</Text>
            <TouchableOpacity
         onPress={handleImages}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>+</Text>
        </TouchableOpacity>
        <ScrollView
  horizontal={true}
  >
  <Image
          style={{width:40,height:40}}
          source={{uri: images[0]}} 
        />
        <Image
          style={{width:40,height:40}}
          source={{uri: images[1]}} 
        />
        <Image
          style={{width:40,height:40}}
          source={{uri: images[2]}} 
        />
        <Image
          style={{width:40,height:40}}
          source={{uri: images[3]}} 
        />
        <Image
          style={{width:40,height:40}}
          source={{uri: images[4]}} 
        />
        <Image
          style={{width:40,height:40}}
          source={{uri: images[5]}} 
        />
        <Image
          style={{width:40,height:40}}
          source={{uri: images[6]}} 
        />
        <Image
          style={{width:40,height:40}}
          source={{uri: images[7]}} 
        />
        <Image
          style={{width:40,height:40}}
          source={{uri: images[8]}} 
        />
        <Image
          style={{width:40,height:40}}
          source={{uri: images[9]}} 
        />
        <Image
          style={{width:40,height:40}}
          source={{uri: images[10]}} 
        />
        <Image
          style={{width:40,height:40}}
          source={{uri: images[11]}} 
        />
        <Image
          style={{width:40,height:40}}
          source={{uri: images[12]}} 
        />
  </ScrollView>
  <Text  style={{margin:5, color:"blue"}} onPress={()=>{setImages([]), setUrl([]), seThumb(null)}}>Clear</Text>
        <Text style={{fontSize:20,fontWeight:"bold",margin:20}}>Title</Text>
        <TextInput
          placeholder=" Title"
          onChangeText={text => setTitle(text)}
          style={styles.input}
        />
        <Text style={{fontSize:20,fontWeight:"bold",margin:20}}>Item specification</Text>
        <TextInput
          placeholder="Condition"
          onChangeText={text => setCond(text)}
          style={styles.input}
        />
         <TextInput
          placeholder="Type"
          onChangeText={text => setType(text)}
          style={styles.input}
        />
         <Text style={{fontSize:20,fontWeight:"bold",margin:20}}>Category</Text>
         <Text style={{margin:5, color:"blue"}}
         onPress={()=>{ setCatlist(oldArray => [...oldArray, categ])}}> +Add Category </Text>
        <TextInput
          placeholder="Category"
          onChangeText={text => setCateg(text)}
          style={styles.input}
        />
        <Text style={{margin:5, color:"blue"}} onPress={()=>{setCatlist([])}}> Clear </Text>
        <ScrollView
  horizontal={true}
  >
     <Text style={{marginRight:5, backgroundColor: "grey"}}>{catlist[0]}</Text>
        <Text style={{marginRight:5, backgroundColor: "grey"}}>{catlist[1]}</Text>
        <Text style={{marginRight:5, backgroundColor: "grey"}}>{catlist[2]}</Text>
        <Text style={{marginRight:5, backgroundColor: "grey"}}>{catlist[3]}</Text>
        <Text style={{marginRight:5, backgroundColor: "grey"}}>{catlist[4]}</Text>
        <Text style={{marginRight:5, backgroundColor: "grey"}}>{catlist[5]}</Text>
        <Text style={{marginRight:5, backgroundColor: "grey"}}>{catlist[6]}</Text>
        <Text style={{marginRight:5, backgroundColor: "grey"}}>{catlist[7]}</Text>
        <Text style={{marginRight:5, backgroundColor: "grey"}}>{catlist[8]}</Text>
        <Text style={{marginRight:5, backgroundColor: "grey"}}>{catlist[9]}</Text>
        <Text style={{marginRight:5, backgroundColor: "grey"}}>{catlist[10]}</Text>
        <Text style={{marginRight:5, backgroundColor: "grey"}}>{catlist[11]}</Text>
        <Text style={{marginRight:5, backgroundColor: "grey"}}>{catlist[12]}</Text>
  </ScrollView>
       
        <Text style={{fontSize:20,fontWeight:"bold",margin:20}}>Description</Text>
        <TextInput
          placeholder="Description"
          onChangeText={text => setDesc(text)}
          style={styles.input}
        />
        <Text style={{fontSize:20,fontWeight:"bold",margin:20}}>Pricing</Text>
        <TextInput
          placeholder="Price"
          keyboardType="numeric"
          onChangeText={text => setPricing(text)}
          style={styles.input}
        />
        <Text style={{fontSize:20,fontWeight:"bold",margin:20}}>Delivery</Text>
        <TextInput
          placeholder="Delivery"
          style={styles.input}
        />
          <TouchableOpacity
          onPress={handleSubmit}
          style={styles.button}
          disabled={loading}
        >
          <Text style={styles.buttonText}>Submit Listing</Text>
        </TouchableOpacity>  
            </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Upload

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
        borderStyle:"dashed"
      },
    
      buttonOutlineText: {
        color: '#a100ff',
        fontWeight: '700',
        fontSize: 50,
        width:60,
        height:60,
        textAlign:"center"
      },
      input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
      },
})
