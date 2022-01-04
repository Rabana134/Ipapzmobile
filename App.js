import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Button, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screeens/Login';
import Signup from './screeens/Signup';
import SignupP from './screeens/SignupP';
import { useNavigation } from '@react-navigation/core'
import Home from './screeens/Home';
import Presence from './screeens/Presence';
import Specs from './screeens/Specs';
import Quali from './screeens/Quali';
import Verif_p from './screeens/Verif_p';
import Equip from './screeens/Equip';
import Verif_c from './screeens/Verif_c';
import Forgot from './screeens/Forgot';
import Re_verify from './screeens/Re_verify';
import Auth from './screeens/Auth';
import Dashboard_p from './screeens/Dashboard_p';
import Dashboard_c from './screeens/Dashboard_c';
import Setting from './screeens/HomePage/Setting';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Homepage from './screeens/HomePage/Homepage';
import app, { auth } from './firebase';
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
import Profile from './screeens/HomePage/Profile';
import Productss from './screeens/HomePage/Productss';
import Lists from './screeens/HomePage/Lists';
import Upload from './screeens/HomePage/Upload';
import Viewproduct from './screeens/HomePage/Viewproduct';
import Specialities from './screeens/HomePage/Specialities';
import Search from './screeens/HomePage/Search';
import { navigationRef } from './RootNavigation';
import Type_of from './screeens/HomePage/Type_of';
import Re_spec from './screeens/HomePage/Re_spec';
import Location_f from './screeens/HomePage/Location_f';
import Ac_setting from './screeens/HomePage/Ac_setting';
import Cart from './screeens/HomePage/Cart';

export default function App({}) {
  const [logged, setLogged] = useState(false)
  const [fname, setfName] = useState('')
    const [name, setName] = useState('')
    const [lname, setlName] = useState('')
    const [image, setImage] = useState(null);

  
  useEffect(() => {
    app.auth().onAuthStateChanged(user => {
        if (user) {
          app.database().ref('users/'+user.uid+'/type').on('value', snapshot => {
            if(snapshot.exists())
            {
            if(snapshot.val()=="photo")
            {
              setLogged(true)
            }
            else
            {
              setLogged(false)
            }  
            }
            else{
              setLogged(false)
            }
          })
          app.database().ref().child('users/'+user.uid+'/username').on('value', snapshot => {
          
            setName(snapshot.val()) 
             
        })
        app.database().ref().child('users/'+user.uid+'/firstn').on('value', snapshot => {
              
            setfName(snapshot.val()) 
             
        })
        app.database().ref().child('users/'+user.uid+'/lastn').on('value', snapshot => {
              
            setlName(snapshot.val()) 
             
        })
        
        app.database().ref().child('users/'+user.uid+'/profile/url/').on('value', snapshot => {
        
          setImage(snapshot.val()) 
          
          })
        }
        else
        {
            setLogged(false)
        }
    })
}, [])
function searchHandle(){
  navigation.reset({
    index: 0,
    routes: [{name: 'search'}],
  });
}
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

 
  function PhotoDrawerContent() {
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [fname, setfName] = useState('')
    const [name, setName] = useState('')
    const [lname, setlName] = useState('')
    const [add2,setAdd2] = useState("")
    const [city,setCity] = useState("")
    const [postc,setPostc] = useState("")
    const [image, setImage] = useState(null);
    const [logged, setLogged] = useState(false)
    const navigation = useNavigation();
  
  useEffect(() => {
    app.auth().onAuthStateChanged(user => {
        if (user) {
          app.database().ref('users/'+user.uid+'/type').on('value', snapshot => {
            if(snapshot.exists())
            {
            if(snapshot.val()=="photo")
            {
              setLogged(true)
            }
            else
            {
              setLogged(false)
            }  
            }
            else{
              setLogged(false)
            }
          })
          app.database().ref().child('users/'+user.uid+'/username').on('value', snapshot => {
          
            setName(snapshot.val()) 
             
        })
        app.database().ref().child('users/'+user.uid+'/firstn').on('value', snapshot => {
              
            setfName(snapshot.val()) 
             
        })
        app.database().ref().child('users/'+user.uid+'/lastn').on('value', snapshot => {
              
            setlName(snapshot.val()) 
             
        })
        
        app.database().ref().child('users/'+user.uid+'/profile/url/').on('value', snapshot => {
        
          setImage(snapshot.val()) 
          
          })
      }
        
    })
}, [])
    return (
      <DrawerContentScrollView >
     
      {
        logged? 
        <React.Fragment>
        <View style={styles.drawerContent}  >
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                        <TouchableOpacity
         onPress={() => {navigation.reset({
        index: 0,
        routes: [{name: 'profile'}],
      });}}
         
        >
         <Avatar.Image 
                           
                           source={{
                               uri: image
                           }}
                           size={50}
                       />
        </TouchableOpacity>
                           
                            <View style={{marginLeft:15, flexDirection:'column'}} >
                                <Title style={styles.title}>{name}</Title>
                                <Caption style={styles.caption}>@{name}</Caption>
                            </View>
                        </View>
                    </View>
                    </View>
       <DrawerItem
        label="Home"
        onPress={() => {navigation.reset({
              index: 0,
              routes: [{name: 'Home'}],
            });}}
         icon={() => (
          <Ionicons name="home" size={20} color="black" />
                    )}
      />


   <DrawerItem
        label="My Account"
        onPress={() => {navigation.reset({
              index: 0,
              routes: [{name: 'dashboard_p'}],
            });}}
        icon={() => (
          <Ionicons name="person" size={20} color="black" />
                    )}
      />
      <DrawerItem
        label="Settings"
        onPress={() => {navigation.reset({
              index: 0,
              routes: [{name: 'acsettings'}],
            });}}
        icon={() => (
          <Ionicons name="settings" size={20} color="black" />
                    )}
      />
      <DrawerItem
        label="Help"
        onPress={() => {navigation.navigate("")}}
        icon={() => (
          <Ionicons name="help" size={20} color="black" />
                    )}
      />
      <DrawerItem
        label="Log Out"
        onPress={() => {auth.signOut()
          navigation.reset({
              index: 0,
              routes: [{name: 'Home_p'}],
            });}}
        icon={() => (
          <Ionicons name="log-out" size={20} color="black" />
                    )}
      />
        </React.Fragment>
        :
        <React.Fragment>
        <View style={styles.drawerContent}  >
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                        <TouchableOpacity
         onPress={() => {navigation.reset({
        index: 0,
        routes: [{name: 'profile'}],
      });}}
         
        >
         <Avatar.Image 
                           
                           source={{
                               uri: image
                           }}
                           size={50}
                       />
        </TouchableOpacity>
                           
                            <View style={{marginLeft:15, flexDirection:'column'}} >
                                <Title style={styles.title}>{name}</Title>
                                <Caption style={styles.caption}>@{name}</Caption>
                            </View>
                        </View>
                    </View>
                    </View>
       <DrawerItem
        label="Home"
        onPress={() => {navigation.reset({
              index: 0,
              routes: [{name: 'Home'}],
            });}}
         icon={() => (
          <Ionicons name="home" size={20} color="black" />
                    )}
      />

<DrawerItem
        label="My Account"
        onPress={() => {navigation.reset({
              index: 0,
              routes: [{name: 'dashboard_c'}],
            });}}
        icon={() => (
          <Ionicons name="person" size={20} color="black" />
                    )}
      />
      
      <DrawerItem
        label="Specialties"
        onPress={() => {navigation.reset({
              index: 0,
              routes: [{name: 'special'}],
            });}}
        icon={() => (
          <Ionicons name="camera" size={20} color="black" />
                    )}
      />
      <DrawerItem
        label="Products"
        onPress={() => {navigation.reset({
              index: 0,
              routes: [{name: 'product'}],
            });}}
        icon={() => (
          <Ionicons name="images" size={20} color="black" />
                    )}
      />
      <DrawerItem
        label="Settings"
        onPress={() => {navigation.reset({
              index: 0,
              routes: [{name: 'acsettings'}],
            });}}
        icon={() => (
          <Ionicons name="settings" size={20} color="black" />
                    )}
      />
      <DrawerItem
        label="Help"
        onPress={() => {navigation.navigate("")}}
        icon={() => (
          <Ionicons name="help" size={20} color="black" />
                    )}
      />
      <DrawerItem
        label="Log Out"
        onPress={() => {auth.signOut()
          navigation.reset({
              index: 0,
              routes: [{name: 'Home_p'}],
            });}}
        icon={() => (
          <Ionicons name="log-out" size={20} color="black" />
                    )}
      />
        </React.Fragment>
      }
      
      </DrawerContentScrollView>
    );
  }
  return (
   
    <NavigationContainer  ref={navigationRef}>
   
   <Drawer.Navigator initialRouteName="Home_p" screenOptions={{ headerTitle:""
        ,
          headerStyle: {
            backgroundColor: '#a100ff',
          }, 
          headerRight: () => (
            <React.Fragment>
            <View style={{flexDirection:"row"}}>
            <TouchableOpacity  onPress={()=>{navigationRef.navigate("searchpro")}}>
            <Ionicons name="search" size={40} color="black" style={{marginRight:10}} />
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>{navigationRef.navigate("cart")}}>
              <Ionicons name="cart" size={40} color="black" />
            </TouchableOpacity>
            
            </View>
            </React.Fragment>
          ),
          swipeEnabled:false,
          headerShown: true,
          }}  
          drawerContent={(props) => <PhotoDrawerContent {...props}/>}>
           <Drawer.Screen options={{headerShown: true, swipeEnabled:true}} name="Home" component={Homepage} />
        <Drawer.Screen name="My Account" component={Dashboard_c} />
        <Drawer.Screen name="LogOut" component={Out} />
      <Drawer.Screen options={{headerShown: false,drawerLabel:()=> null }} name="Home_p" component={Home} />
      <Drawer.Screen options={{headerShown: false,drawerLabel:()=> null}} name="login" component={Login} />
      <Drawer.Screen options={{headerShown: false,drawerLabel:()=> null}} name="signup" component={Signup} />
      <Drawer.Screen options={{headerShown: false,drawerLabel:()=> null}} name="signup-p" component={SignupP} />
      <Drawer.Screen options={{headerShown: false,drawerLabel:()=> null}} name="presence" component={Presence} />
      <Drawer.Screen options={{headerShown: false,drawerLabel:()=> null}} name="spec" component={Specs} />
      <Drawer.Screen options={{headerShown: false,drawerLabel:()=> null}} name="quali" component={Quali} />
      <Drawer.Screen options={{headerShown: false,drawerLabel:()=> null}} name="verif_p" component={Verif_p} />
      <Drawer.Screen options={{headerShown: false,drawerLabel:()=> null}} name="equip" component={Equip} />
      <Drawer.Screen options={{headerShown: false,drawerLabel:()=> null}} name="verif_c" component={Verif_c} />
      <Drawer.Screen options={{headerShown: false,drawerLabel:()=> null}} name="forgot" component={Forgot} />
      <Drawer.Screen options={{headerShown: false,drawerLabel:()=> null}} name="re_verify" component={Re_verify} />
      <Drawer.Screen options={{headerShown: false,drawerLabel:()=> null}} name="auth" component={Auth} />
      <Drawer.Screen options={{headerShown: true,drawerLabel:()=> null}} name="dashboard_p" component={Dashboard_p} />
      <Drawer.Screen options={{headerShown: true,drawerLabel:()=> null}} name="dashboard_c" component={Dashboard_c} />
      <Drawer.Screen options={{headerShown: true,drawerLabel:()=> null}} name="profile" component={Profile} />
      <Drawer.Screen options={{headerShown: true,drawerLabel:()=> null}}  initialParams={{ search: "" }} name="product" component={Productss} />
      <Drawer.Screen options={{headerShown: false,drawerLabel:()=> null}} name="settings" component={Setting} />
      <Drawer.Screen options={{headerShown: true,drawerLabel:()=> null}} name="acsettings" component={Ac_setting} />
      <Drawer.Screen options={{headerShown: true,drawerLabel:()=> null}} name="view_product" component={Viewproduct} />
      <Drawer.Screen options={{headerShown: true,drawerLabel:()=> null,headerTitle:"My Lists"}} name="list" component={Lists} />
      <Drawer.Screen options={{headerShown: true,drawerLabel:()=> null,headerTitle:"Listing summary"}} name="uplist" component={Upload} />
      <Drawer.Screen options={{headerShown: true,drawerLabel:()=> null,headerTitle:"All Specialties"}} name="special" component={Specialities} />
      <Drawer.Screen options={{headerShown: true,drawerLabel:()=> null,headerTitle:"Search"}} name="searchpro" component={Search} />
      <Drawer.Screen options={{headerShown: true,drawerLabel:()=> null}} name="type" component={Type_of} />
      <Drawer.Screen options={{headerShown: true,drawerLabel:()=> null}} name="re_spec" component={Re_spec} />
      <Drawer.Screen options={{headerShown: true,drawerLabel:()=> null}} name="find" component={Location_f} />
      <Drawer.Screen options={{headerShown: false,drawerLabel:()=> null}} name="cart" component={Cart} />
      </Drawer.Navigator>
     
   
    
  </NavigationContainer>
  );
}
function Out({navigation}) {
 
  return (
    <View>
         <TouchableOpacity  onPress={()=>{navigation.navigate("searchpro")}}>
            <Ionicons name="search" size={40} color="black" style={{marginRight:10}} />
            </TouchableOpacity>
            
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a100ff',
   
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
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
})