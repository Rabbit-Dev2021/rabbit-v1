import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

export default function IntroHeaderDashBoard() {
  return (
   <>
        <Image resizeMode="contain" source={require("../assets/images/setUpHeader2.png")} style={{width, height: height/4, position: "absolute", top: 0,}}/>
        <Image resizeMode="contain" source={require("../assets/images/setupHeader1.png")} style={{width, height: height/4, position: "absolute", top: 0,}}/>
   </>
  );
}


const styles = StyleSheet.create({

});
