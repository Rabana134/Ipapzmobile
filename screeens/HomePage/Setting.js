import React, { useEffect, useState } from 'react'
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Ionicons } from '@expo/vector-icons';
import { BarPasswordStrengthDisplay } from 'react-native-password-strength-meter';
import { Image } from 'react-native-elements/dist/image/Image';
import app, { auth, storage } from '../../firebase';
import * as ImagePicker from 'expo-image-picker';

const Setting = () => {
    const [email, setEmail] = useState('')
    const [cemail, setcEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [fname, setfName] = useState('')
    const [name, setName] = useState('')
    const [lname, setlName] = useState('')
    const [add2,setAdd2] = useState("")
    const [city,setCity] = useState("")
    const [postc,setPostc] = useState("")
    const [password, setPassword] = useState('')
    const [Rpassword, setRPassword] = useState('')
    const [user, setUser] = useState('');
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const navigation = useNavigation()
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);
   

    useEffect(() =>  {
        (async () => {
            if (Platform.OS !== 'web') {
              const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
              if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
              }
            }
          })();
        auth.onAuthStateChanged(user => {
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
      setcEmail(snapshot.val()) 
       
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
app.database().ref().child('users/'+user.uid+'/address/add').on('value', snapshot => {
        
    setAddress(snapshot.val()) 
     
    })
app.database().ref().child('users/'+user.uid+'/address/postc').on('value', snapshot => {
        
setPostc(snapshot.val()) 

})
app.database().ref().child('users/'+user.uid+'/profile/url/').on('value', snapshot => {
        
setImage(snapshot.val()) 

})
          })
 
  }, [])
    const handleSignUp = () => {
    
    
        if (!email) {
          return setError('Email required');
        }else if (email !== cemail) {
          return setError("Email do not match")
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          return setError('Email address is invalid');
        }
        if (!fname) {
          return setError('First name required');
        }
      if (!lname) {
        return setError('Last name required');
        }
       
     if (!phone) {
        return setError('Telephone required'); 
        }
        if (!address) {
            return setError('Address 1 required'); 
            }
            if (!postc) {
                return setError('Post Code required'); 
                }
                if (!city) {
                    return setError('City/Town required'); 
                    }
                    setMessage("")
                    updateEmail(user, email).then(() => {
                      app.database().ref("users/"+user.uid).update({
                        username: fname,
                        firstn: fname,
                        lastn: lname,
                        phone: phone,
                        email: email,
                     
                      })
                      app.database().ref('users/'+user.uid+'/address').update({
                        add1: address,
                        add2: add2,
                        postc:postc,
                        city:city
                      })
                      setMessage("Successful!")
                    }).catch((error) => {
                      setError("Failed")
                    });
        }
        const handleImage =  async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
        
            console.log(result);
        
            if (!result.cancelled) {
              setImage(result.uri);
              uploadImage(result.uri); 
            }
           
          }
     
        const  uploadImage = async(uri) => {
            const response = await fetch(uri);
            const blob = await response.blob();
            var ref = storage.ref(`images/${user.uid}.jpg`);
            const uploadTask =ref.put(blob);
            ref.getDownloadURL().then((url) => console.log(url))
            uploadTask.on('state_changed',  
    () => {
        // complete function ....
        storage.ref('images').child(user.uid+".jpg").getDownloadURL().then(url => {
          app.database().ref("users/"+user.uid+"/profile").update({
          url: url
          })
        })
    });
    }
         
         
    return (
        <SafeAreaView style={{flex:1}}>
        <SafeAreaView style={styles.logo}>
        <Ionicons name="chevron-back" size={50} color="black" onPress={()=>{
             app.database().ref().child('users/'+user.uid+"/type").on('value', snapshot => {
          if(snapshot.exists())
          {
         
          if(snapshot.val()=="photo")
          {
             navigation.navigate("dashboard_p")
          }
          else
          {
            navigation.navigate("dashboard_c")
          }  
          }
          else{
            navigation.navigate("dashboard_c")
          }

        })
      
        }}/>
        <Ionicons name="camera" size={52} color="black" /><Text style={styles.logote}>Ipapz</Text>
      </SafeAreaView>
          <ScrollView >
          <View
          style={styles.container}
          behavior="padding">
          <Image
          style={styles.userImg}
          source={{uri: image}}
          onPress={handleImage}
        />
        
           <Text style={{color: 'blue'}}
      onPress={handleImage}>
  Change Profile 
</Text>
<Text style={{color: 'blue'}}
      onPress={{}}>
 Remove
</Text>
                  <View style={styles.inputContainer}>
                  <TextInput
            placeholder="*Mobile Phone"
           
            defaultValue={phone}
            onChangeText={text => setPhone(text)}
            style={styles.input}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="*First Name"
            
            defaultValue={fname}
            onChangeText={text => setfName(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="*Last Name"
            
            defaultValue={lname}
            onChangeText={text => setlName(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="*Address 1"
           
            defaultValue={address}
            onChangeText={text => setAddress(text)}
            style={styles.input}
          />
            <TextInput
            placeholder="Address 2"
            
            defaultValue={add2}
            onChangeText={text => setAdd2(text)}
            style={styles.input}
          />
            <TextInput
            placeholder="*City/Town"
            
            defaultValue={city}
            onChangeText={text => setCity(text)}
            style={styles.input}
          />
            <TextInput
            placeholder="*Post Code"
           
            defaultValue={postc}
            onChangeText={text => setPostc(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="*Email"
            
            defaultValue={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="*Confirm Email"
            
            defaultValue={cemail}
            onChangeText={text => setcEmail(text)}
            style={styles.input}
          />
        
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleSignUp}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <Text style={{color: "red"}}>{error}</Text>
          <Text style={{color: "green"}}>{message}</Text>
        </View>
          </View>
          </ScrollView>
        </SafeAreaView>
    )
}

export default Setting

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
      userImg: {
        height: 140,
        width: 140,
        borderRadius: 75,
      
      },
      logote:{
        fontSize: 30,
        fontWeight: "bold",
        color:"#a100ff"
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
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
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
      },
      checkbox: {
        alignSelf: "center",
      },
      label: {
        margin: 8,
      },
})

