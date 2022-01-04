import React, { useEffect, useState } from 'react'
import { Dimensions, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import app from '../../firebase'
import MapView from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SliderBox } from "react-native-image-slider-box";
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';
import img4 from '../Images/img4.jpg';
import img5 from '../Images/img5.jpg';
import { Image } from 'react-native-elements/dist/image/Image';

const Homepage = ({navigation}) => {
    const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  var images=[
img1,
img2,
img3,
img4,
img5
  ]

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    navigation.reset({
      index: 0,
      routes: [{name: 'type'}],
    });
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
    useEffect(() => {
        app.auth().onAuthStateChanged(user => {
            if (!user) {
             
                navigation.reset({
                    index: 0,
                    routes: [{name: 'Home_p'}],
                  });
            }
           
        })
    }, [])
    return (
        <SafeAreaView>
        <View style={styles.container}>
       <View>
       <Image
                        
                        style={{width:Dimensions.get('window').width,height:200,alignSelf: 'center'}}
                          source={img4}
                         
                      />
       </View>
        <TouchableOpacity  style={{marginTop:20,marginLeft:30}}>
                        <Ionicons name= "images-outline" size={30}  color="black" style={{textAlign:"center"}}/>
                        <Text style={{fontSize:10}}>Ipapz Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft:55, marginTop:20}}>
                        <Ionicons name= "square-outline" size={30}  color="black" style={{textAlign:"center"}}/>
                        <Text style={{fontSize:10}}>Picture Frames</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft:55, marginTop:20}}>
                        <Ionicons name= "trending-up-outline" size={30}  color="black" style={{textAlign:"center"}}/>
                        <Text style={{fontSize:10}}>Trending</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <Ionicons name= "logo-instagram" size={30}  color="black" style={{marginLeft:30, marginTop:20,marginBottom:20}}/>
        <Ionicons name= "logo-facebook" size={30}  color="blue" style={{marginLeft:55, marginTop:20,marginBottom:20}}/>
        <Ionicons name= "logo-twitter" size={30}  color="skyblue" style={{marginLeft:55, marginTop:20,marginBottom:20}}/>
        <Ionicons name= "logo-pinterest" size={30}  color="red" style={{marginLeft:30, marginTop:20,marginBottom:20}}/>
        </View>
        <View style={{margin:10, borderWidth:1,borderColor:"black",flexDirection:"row"}}>
        <Text style={{fontSize:20,fontWeight:"bold"}}>Book Photoshoot</Text>
        <TouchableOpacity   style={[styles.button, styles.buttonOutline2]} onPress={showDatepicker}>
                        <Text style={{fontSize:10}}>Select Date</Text>
        </TouchableOpacity>
        {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
        </View>
        <Text style={{fontSize:20,fontWeight:"bold",marginLeft:10}}>Photographers Near You</Text>
             <MapView style={styles.map} />
        </SafeAreaView>
    )
}

export default Homepage

const styles = StyleSheet.create({
    container: {
       
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', // if you want to fill rows left to right
     
      },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
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
          borderColor: '#a100ff',
          borderWidth: 2,
          marginLeft:100,
          
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
