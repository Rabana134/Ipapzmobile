import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { useNavigation } from '@react-navigation/core'


const Specialities = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1}}>
       
        <ScrollView>
        <View style={{alignItems:"center",flex:1}}>
               <View style={styles.checkboxContainer}>
                    <View style={styles.checkboxContainer}>
                    <TouchableOpacity
              style={[styles.button, styles.buttonOutline]}
              onPress={()=>{navigation.navigate("type")}}
            >
            <Ionicons name="person-circle-outline" size={50} color="black" />
              <Text style={styles.buttonOutlineText}>Portrait</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.checkboxContainer}>
          <TouchableOpacity
             onPress={()=>{navigation.navigate("type")}}
              style={[styles.button, styles.buttonOutline]}
            >
             <Ionicons name="home" size={50} color="black" />
              <Text style={styles.buttonOutlineText}>Real Estate</Text>
            </TouchableOpacity>
          </View>
                    </View>
                    <View style={styles.checkboxContainer}>
                    <View style={styles.checkboxContainer}>
                    <TouchableOpacity
             onPress={()=>{navigation.navigate("type")}}
              style={[styles.button, styles.buttonOutline]}
            >
            <Ionicons name="balloon" size={50} color="black" />
              <Text style={styles.buttonOutlineText}>Anniversary</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.checkboxContainer}>
          <TouchableOpacity
             onPress={()=>{navigation.navigate("type")}}
              style={[styles.button, styles.buttonOutline]}
            >
             <Ionicons name="car" size={50} color="black" />
              <Text style={styles.buttonOutlineText}>Automotive</Text>
            </TouchableOpacity>
          </View>
                    </View>
                    <View style={styles.checkboxContainer}>
                    <View style={styles.checkboxContainer}>
                    <TouchableOpacity
            onPress={()=>{navigation.navigate("type")}}
              style={[styles.button, styles.buttonOutline]}
            >
            <Ionicons name="heart" size={50} color="black" />
              <Text style={styles.buttonOutlineText}>Wedding</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.checkboxContainer}>
          <TouchableOpacity
            onPress={()=>{navigation.navigate("type")}}
              style={[styles.button, styles.buttonOutline]}
            >
             <Ionicons name="people" size={50} color="black" />
              <Text style={styles.buttonOutlineText}>Family</Text>
            </TouchableOpacity>
          </View>
                    </View>
    
                    <View style={styles.checkboxContainer}>
                    <View style={styles.checkboxContainer}>
                    <TouchableOpacity
           onPress={()=>{navigation.navigate("type")}}
              style={[styles.button, styles.buttonOutline]}
            >
            <Ionicons name="cut" size={50} color="black" />
              <Text style={styles.buttonOutlineText}>Fashion</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.checkboxContainer}>
          <TouchableOpacity
             onPress={()=>{navigation.navigate("type")}}
              style={[styles.button, styles.buttonOutline]}
            >
             <Ionicons name="school" size={50} color="black" />
              <Text style={styles.buttonOutlineText}>Graduation</Text>
            </TouchableOpacity>
          </View>
                    </View>
    
                    <View style={styles.checkboxContainer}>
                    <View style={styles.checkboxContainer}>
                    <TouchableOpacity
              onPress={()=>{navigation.navigate("type")}}
              style={[styles.button, styles.buttonOutline]}
            >
            <Ionicons name="mic" size={50} color="black" />
              <Text style={styles.buttonOutlineText}>Media</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.checkboxContainer}>
                    <TouchableOpacity
              onPress={()=>{navigation.navigate("type")}}
              style={[styles.button, styles.buttonOutline]}
            >
            <Ionicons name="image" size={50} color="black" />
              <Text style={styles.buttonOutlineText}>Product</Text>
            </TouchableOpacity>
          </View>
                    </View>

                    <View style={styles.checkboxContainer}>
                    <View style={styles.checkboxContainer}>
                    <TouchableOpacity
              onPress={()=>{navigation.navigate("type")}}
              style={[styles.button, styles.buttonOutline]}
            >
            <Ionicons name="accessibility" size={50} color="black" />
              <Text style={styles.buttonOutlineText}>Kids</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.checkboxContainer}>
                    <TouchableOpacity
              onPress={()=>{navigation.navigate("type")}}
              style={[styles.button, styles.buttonOutline]}
            >
            <Ionicons name="bar-chart" size={50} color="black" />
              <Text style={styles.buttonOutlineText}>Industrial</Text>
            </TouchableOpacity>
          </View>
                    </View>

                    <View style={styles.checkboxContainer}>
                    <View style={styles.checkboxContainer}>
                    <TouchableOpacity
              onPress={()=>{navigation.navigate("type")}}
              style={[styles.button, styles.buttonOutline]}
            >
            <Ionicons name="airplane" size={50} color="black" />
              <Text style={styles.buttonOutlineText}>Travel</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.checkboxContainer}>
                    <TouchableOpacity
              onPress={()=>{navigation.navigate("type")}}
              style={[styles.button, styles.buttonOutline]}
            >
            <Ionicons name="leaf" size={50} color="black" />
              <Text style={styles.buttonOutlineText}>Landscape</Text>
            </TouchableOpacity>
          </View>
                    </View>        
    
                    <View style={styles.checkboxContainer}>
                    <View style={styles.checkboxContainer}>
                    <TouchableOpacity
              onPress={()=>{navigation.navigate("type")}}
              style={[styles.button, styles.buttonOutline]}
            >
            <Ionicons name="hand-right" size={50} color="black" />
              <Text style={styles.buttonOutlineText}>Religious</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.checkboxContainer}>
                    <TouchableOpacity
              onPress={()=>{navigation.navigate("type")}}
              style={[styles.button, styles.buttonOutline]}
            >
            <Ionicons name="bag-check" size={50} color="black" />
              <Text style={styles.buttonOutlineText}>Commercial</Text>
            </TouchableOpacity>
          </View>
                    </View>

                    <View style={styles.checkboxContainer}>
                    <View style={styles.checkboxContainer}>
                    <TouchableOpacity
              onPress={()=>{navigation.navigate("type")}}
              style={[styles.button, styles.buttonOutline]}
            >
            <Ionicons name="paw" size={50} color="black" />
              <Text style={styles.buttonOutlineText}>Pet</Text>
            </TouchableOpacity>
          </View>
         
                    </View>

               </View>
               </ScrollView>
            </SafeAreaView>
    )
}

export default Specialities

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? 39 : 0,
        flexDirection:'row', 
      },
      logotext:{
        fontSize: 30,
        fontWeight: "bold",
        color:"#a100ff"
      },
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
        fontSize: 10,
        width:60
      },
      checkboxContainer: {
        flexDirection: "row",
        margin: 10,
      },
})
