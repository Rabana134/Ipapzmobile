import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Type_of = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1}}>
        <Ionicons name="chevron-back" size={50} color="black" onPress={()=>{navigation.navigate("searchpro")}}/>
            <Text style={{fontSize:20,fontWeight:"bold",margin:10}}>What kind of photo shoot are you booking? Business or personal?</Text>
            <View style={{alignItems:"center",justifyContent:"center"}}>
        <TouchableOpacity
         onPress={()=>{navigation.navigate("re_spec")}}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}><Ionicons name="briefcase" size={50} color="black" />Business</Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>{navigation.navigate("re_spec")}}
          style={[styles.button, styles.buttonOutline]}
        >
         <Text style={styles.buttonOutlineText}> <Ionicons name="person-circle-outline" size={50} color="black" />Personal</Text>
        </TouchableOpacity>
      </View>
        </SafeAreaView>
    )
}

export default Type_of

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
        fontSize: 16,
      },
})
