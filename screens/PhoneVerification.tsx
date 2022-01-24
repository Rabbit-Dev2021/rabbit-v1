import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { Dimensions, Image, KeyboardAvoidingView, Platform, StyleSheet, TouchableOpacity,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import CheckBox from '@react-native-community/checkbox';
import {Input, Item, } from "native-base"
// import Picker from "native-base"
import { Feather } from '@expo/vector-icons';

import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import Button from '../components/Button';
import IntroHeaderDashBoard from '../components/IntroHeaderDashBoard';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';


const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

const CELL_COUNT = 4

export default function Login({ navigation}: {navigation: any}) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <SafeAreaView style={styles.container}>
      <IntroHeaderDashBoard />
        <Text style={{position: "absolute", top: 100, left: 10, fontSize: 18, color: "#fff"}}>Phone Number Verification</Text>
        <View style={{position: "absolute", top: height/4, width: width/1.05, }}> 
      
        <View> 
          <Text style={{color: Colors.primaryColor.textDark2, width: width * 0.8, marginBottom: 5}}>Enter the 4-digits code sent to your phone number</Text>
          <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />

        </View>
          <Text style={{color: Colors.primaryColor.rabbit, textAlign: "center", margin: 5}}>Resend OTP? </Text>
          <View style={styles.buttonWrapper}> 
        	<Button text="Proceed" handleSubmit={() => navigation.navigate("Root")}/>
          </View>
       
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  checkbox: {

  },
  input: {
    backgroundColor: "#E4E9E6", borderRadius: 5, borderColor: "#E4E9E6", borderWidth: 1, borderStyle: "solid", marginBottom: 15,
  },
  buttonWrapper: {
      bottom: 0,
      marginTop: height/20,
  },
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 80,
    height: 80,
    lineHeight: 80,
    fontSize: 24,
    borderWidth: 1,
    textAlign: 'center',
    backgroundColor: Colors.primaryColor.grayBackGround,
    borderColor: Colors.primaryColor.grayBackGround,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});
