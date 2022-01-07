import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { Dimensions, Image, KeyboardAvoidingView, Platform, StyleSheet, TouchableOpacity,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import CheckBox from '@react-native-community/checkbox';
import {Input, Item} from "native-base"
// import Picker from "native-base"

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import Button from '../components/Button';
import IntroHeaderDashBoard from '../components/IntroHeaderDashBoard';

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

export default function ModalScreen({ navigation} : {navigation: any}) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <IntroHeaderDashBoard />
        <Text style={{position: "absolute", top: 100, left: 10, fontSize: 18, color: "#fff"}}>Create your account</Text>
        <View style={{position: "absolute", top: height/4,}}> 
        <View> 
        <Input style={styles.input}  keyboardType="default" placeholder="Full Name" />
        <Input style={styles.input}  keyboardType="default" placeholder="Email" />
        <Input style={styles.input}  keyboardType="default" placeholder="Phone Number" />
        <Input style={styles.input}  keyboardType="default" placeholder="Gender" />
        <Input style={styles.input}  keyboardType="default" placeholder="Nearer bus stop" />
        <Input style={styles.input}  keyboardType="default" placeholder="Password" />
        <Input style={styles.input}  keyboardType="default" placeholder="Referral(Optional)" />
        </View>
        <View style={{marginBottom: 5}}> 
          <Text>I have read and understand the <Text style={{color: "#335442"}}>terms</Text> and <Text style={{color: "#335442"}}>conditions</Text> </Text>
        {/* <CheckBox
       disabled={false}
       value={toggleCheckBox}
       onValueChange={(newValue) => setToggleCheckBox(newValue)}
        /> */}
        </View>
        	<Button text="Sign Up" handleSubmit={() => navigation.navigate("Login")}/>
       
        </View>

        
   

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    position: "relative",
    backgroundColor: Colors.primaryColor.background
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  checkbox: {

  },
  input: {
    backgroundColor: Colors.primaryColor.grayBackGround, borderRadius: 5, borderColor: Colors.primaryColor.grayBackGround, borderWidth: 1, borderStyle: "solid", marginBottom: 15,
  }
});
