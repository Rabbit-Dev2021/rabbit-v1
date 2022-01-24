import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { Dimensions, Image, KeyboardAvoidingView, Platform, StyleSheet, TouchableOpacity,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import CheckBox from '@react-native-community/checkbox';
import {Input, Item, } from "native-base"
// import Picker from "native-base"
import { Feather } from '@expo/vector-icons';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import Button from '../components/Button';
import IntroHeaderDashBoard from '../components/IntroHeaderDashBoard';
import { Entypo } from '@expo/vector-icons';

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

export default function Login({ navigation}: {navigation: any}) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <IntroHeaderDashBoard />
        <Text style={{position: "absolute", top: 100, left: 10, fontSize: 18, color: "#fff"}}>Login to your account</Text>
        <View style={{position: "absolute", top: height/4, width: width/1.05}}> 
        <View> 
        <Input style={styles.input}  keyboardType="default" placeholderTextColor={Colors.primaryColor.textDark2} placeholder="Email" />
        <Item style={styles.input}> 
        <Input  keyboardType="default" placeholderTextColor={Colors.primaryColor.textDark2}placeholder="Password" />
        </Item>

        </View>
          <Text style={{color: Colors.primaryColor.textDark2, textAlign: "right", margin: 5}}>Forgot Password? </Text>
          <View style={styles.buttonWrapper}> 
        	<Button text="Log In" handleSubmit={() => navigation.navigate("PhoneVerification")}/>
          </View>
          <Text style={{textAlign: "center", margin: 10, color: Colors.primaryColor.textDark2}}>Don’t have an Account? <Text>Sign Up</Text></Text>
       
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
    justifyContent: 'center',
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    position: "relative",
    backgroundColor: Colors.primaryColor.background,
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
  },
  buttonWrapper: {
      bottom: 0,
      marginTop: height/20,
  }
});
