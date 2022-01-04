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
import app from '../../firebase';
import Dialog from "react-native-dialog";
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {
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

  const showF = () => {
    setVisible(true);
  };
  const showL = () => {
    setVisible2(true);
  };
  const showPh = () => {
    setVisible3(true);
  };
  const showE = () => {
    setVisible4(true);
  };
  const showP = () => {
    setVisible5(true);
  };

  const handleCancel = () => {
    setVisible(false);
    setVisible2(false);
    setVisible3(false);
    setVisible4(false);
    setVisible5(false);
  };

  const handleProceed = () => {
    app.database().ref("users/"+user.uid).update({
        username: fname,
        firstn: fname,
      })
    setVisible(false);
  };
  const handleProceed2 = () => {
    app.database().ref("users/"+user.uid).update({
        lastn: lname,
      })
    setVisible2(false);
  };
  const handleProceed3 = () => {
    app.database().ref("users/"+user.uid).update({
        phone: phone,
      })
    setVisible3(false);
  };
  const handleProceed4 = () => {
    updateEmail(user, email).then(() => {
        app.database().ref("users/"+user.uid).update({
          email: email,
       
        })
        
      }).catch((error) => {
        setError("Failed")
      });
    
    setVisible4(false);
  };
  const handleProceed5 = async () => {
    const emailCred  = app.auth.EmailAuthProvider.credential(
        user.email, current_p);

        await app.auth().currentUser.reauthenticateWithCredential(emailCred)
    .then(() => {
      return user.updatePassword(new_p).then(() => {
        console.log("Password updated!");
        alert("Password updated!")
      }).catch((error) => { 
        alert("Failed")
      });
    })
    
    setVisible5(false);
  };
  
  


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
        <SafeAreaView>
        <ScrollView>
             <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                        <TouchableOpacity
         onPress={handleImage}
         
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
<TouchableOpacity
         onPress={showF} >
             <Text style={{fontWeight:"bold", color:"grey", margin: 15,fontSize:20}}>First Name </Text> 
<Text style={{ color:"black", margin: 15}}>{fname}</Text>
         </TouchableOpacity>
         <TouchableOpacity
         onPress={showL} >
             <Text style={{fontWeight:"bold", color:"grey", margin: 15,fontSize:20}}>Surname:</Text>
<Text style={{ color:"black", margin: 15}}>{lname}</Text>
         </TouchableOpacity>
         <TouchableOpacity
         onPress={showPh} >
             <Text style={{fontWeight:"bold", color:"grey", margin: 15,fontSize:20}}>Phone number:</Text>
<Text style={{ color:"black", margin: 15}}>{phone}</Text>
         </TouchableOpacity>
         <TouchableOpacity
         onPress={showE} >
             <Text style={{fontWeight:"bold", color:"grey", margin: 15,fontSize:20}}>Email:</Text>
<Text style={{ color:"black", margin: 15}}>{email}</Text>
         </TouchableOpacity>
         <TouchableOpacity
        onPress={showP} >
             <Text style={{fontWeight:"bold", color:"grey", margin: 15,fontSize:20}}>Password:</Text>
<Text style={{ color:"blue", margin: 15}}>Change Password</Text>
         </TouchableOpacity>

                    </View>
                    <Dialog.Container visible={visible}>
      <Dialog.Title>First Name</Dialog.Title>
      <Dialog.Input defaultValue={fname}
          onChangeText={text => setfName(text)}
      />
      <Dialog.Button label="Cancel" onPress={handleCancel}/>
      <Dialog.Button label="Proceed" onPress={handleProceed}/>
    </Dialog.Container>

    <Dialog.Container visible={visible2}>
      <Dialog.Title>Surname</Dialog.Title>
      <Dialog.Input defaultValue={lname}
          onChangeText={text => setlName(text)}
      />
      <Dialog.Button label="Cancel" onPress={handleCancel}/>
      <Dialog.Button label="Proceed" onPress={handleProceed2}/>
    </Dialog.Container>

    <Dialog.Container visible={visible3}>
      <Dialog.Title>Phone number</Dialog.Title>
      <Dialog.Input defaultValue={phone}
          onChangeText={text => setPhone(text)}
      />
      <Dialog.Button label="Cancel" onPress={handleCancel}/>
      <Dialog.Button label="Proceed" onPress={handleProceed3}/>
    </Dialog.Container>

    <Dialog.Container visible={visible4}>
      <Dialog.Title>Email</Dialog.Title>
      <Dialog.Input defaultValue={email}
          onChangeText={text => setEmail(text)}
      />
      <Dialog.Button label="Cancel" onPress={handleCancel}/>
      <Dialog.Button label="Proceed" onPress={handleProceed4}/>
    </Dialog.Container>

    <Dialog.Container visible={visible5}>
      <Dialog.Title>Change password</Dialog.Title>
      <Dialog.Input placeholder='Current' secureTextEntry
          onChangeText={text => setCurrent(text)}
      />
      <Dialog.Input placeholder='New' secureTextEntry
          onChangeText={text => setNew(text)}
      />
      <Dialog.Input placeholder='Re-type' secureTextEntry
          onChangeText={text => setRetype(text)}
      />
      <Dialog.Button label="Cancel" onPress={handleCancel}/>
      <Dialog.Button label="Proceed" onPress={handleProceed5}/>
    </Dialog.Container>
                    </ScrollView>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({})
