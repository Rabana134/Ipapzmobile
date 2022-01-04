import React, { useState } from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MapView from 'react-native-maps'
import { Ionicons } from '@expo/vector-icons';

const Location_f = ({navigation}) => {
    const [search, setSearch] = useState('')
    return (
        <SafeAreaView>
        <Ionicons name="chevron-back" size={50} color="black" onPress={()=>{navigation.navigate("re_spec")}}/>
           <Text style={{fontSize:20,fontWeight:"bold",margin:10}}>Location of photo shoot</Text>
           <View style={{flexDirection:"row"}}>
            <TextInput
          placeholder="Location"
          value={search}
          onChangeText={text => setSearch(text)}
          style={styles.input}/>
          <View style={{alignItems:"center",justifyContent:"center"}}>
          <TouchableOpacity onPress={{}}>
              <Text
               style={{textAlign:"center",backgroundColor:"red",paddingHorizontal: 15,paddingVertical: 17,marginTop: 5}}>GO</Text>
          </TouchableOpacity>
                </View>
         
        </View>
        <MapView style={styles.map} />
        </SafeAreaView>
    )
}

export default Location_f

const styles = StyleSheet.create({
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
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        marginTop:30
      },
})
