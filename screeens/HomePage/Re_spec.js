import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Re_spec = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1}}>
            <SafeAreaView style={styles.logo}>
            <Ionicons name="chevron-back" size={50} color="black" onPress={()=>{navigation.navigate("type")}}/>
    </SafeAreaView>
            <ScrollView>
                <View behavior="padding"
                style={{marginLeft:20,marginRight:20}}>
       
        <Text style={{fontSize:20,fontWeight:"bold",margin:10}}>Specialties</Text>
        <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper
dictum sem dictum scelerisque. Class aptent taciti sociosqu ad litora
torquent per conubia nostra, per inceptos himenaeos. Aenean imperdiet
dignissim velit eu congue.
        </Text>
                </View>
                
                <View style={styles.checkboxContainer}>
                <TouchableOpacity onPress={()=>{navigation.navigate("find")}}>
 <View style={styles.checkboxContainer}>
         <Text style={styles.label}><Ionicons name="person" size={22} color="black" />Portrait</Text>
      </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate("find")}}>
 <View style={styles.checkboxContainer}>
       <Text style={styles.label}> <Ionicons name="briefcase" size={22} color="black" /> Corporate</Text>
      </View>
</TouchableOpacity>
     
                </View>

                <View style={styles.checkboxContainer}>
                <TouchableOpacity onPress={()=>{navigation.navigate("find")}}>
<View style={styles.checkboxContainer}>
        <Text style={styles.label}><Ionicons name="calender" size={22} color="black" /> Birthday</Text>
      </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate("find")}}>
<View style={styles.checkboxContainer}>
         <Text style={styles.label}><Ionicons name="people" size={22} color="black" />Events</Text>
      </View>
</TouchableOpacity>       
      
                </View>

                <View style={styles.checkboxContainer}>

                <TouchableOpacity onPress={()=>{navigation.navigate("find")}}>
 <View style={styles.checkboxContainer}>
         <Text style={styles.label}><Ionicons name="heart" size={22} color="black" />Wedding</Text>
      </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate("find")}}>
<View style={styles.checkboxContainer}>
        <Text style={styles.label}><Ionicons name="cloud" size={22} color="black" />Nature</Text>
      </View>
</TouchableOpacity>         
      
                </View>

                <View style={styles.checkboxContainer}>

                <TouchableOpacity onPress={()=>{navigation.navigate("find")}}>
 <View style={styles.checkboxContainer}>
         <Text style={styles.label}><Ionicons name="cut" size={22} color="black" />Fashion</Text>
      </View>
                </TouchableOpacity>

        <TouchableOpacity onPress={()=>{navigation.navigate("find")}}>
<View style={styles.checkboxContainer}>
        <Text style={styles.label}><Ionicons name="balloon" size={22} color="black" />Graduation</Text>
      </View>
                </TouchableOpacity>       
      
                </View>

                <View style={styles.checkboxContainer}>

                <TouchableOpacity onPress={()=>{navigation.navigate("find")}}>
  <View style={styles.checkboxContainer}>
       <Text style={styles.label}> <Ionicons name="pizza" size={22} color="black" />Food</Text>
      </View>
                </TouchableOpacity>

          <TouchableOpacity onPress={()=>{navigation.navigate("find")}}>
<View style={styles.checkboxContainer}>
        <Text style={styles.label}><Ionicons name="car" size={22} color="black" />Automotive</Text>
      </View>
                </TouchableOpacity>    
      
                </View>

                <View style={styles.checkboxContainer}>

                <TouchableOpacity onPress={()=>{navigation.navigate("find")}}>
<View style={styles.checkboxContainer}>
        <Text style={styles.label}><Ionicons name="football" size={22} color="black" />Sport</Text>
      </View>
                </TouchableOpacity>

         <TouchableOpacity onPress={()=>{navigation.navigate("find")}}>
<View style={styles.checkboxContainer}>
        <Text style={styles.label}>..Others</Text>
      </View>
                </TouchableOpacity>       
      
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Re_spec

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        marginLeft:30,
       
      },
      checkbox: {
        alignSelf: "center",
      },
      label: {
        margin: 8,
        backgroundColor:"#C8A2C8",
        paddingHorizontal: 15,
        paddingVertical: 10
      },
})
