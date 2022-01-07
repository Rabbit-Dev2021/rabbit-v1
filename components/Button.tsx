import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function Button({text, handleSubmit}: {text: string, handleSubmit: () => void}) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
      <Text style={styles.text}> 
            {text}
        </Text> 
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
buttonContainer: {
    backgroundColor: Colors.primaryColor.rabbit,
    borderRadius: 20,
    display: "flex",
    alignItems: 'center',
    justifyContent: "center",
    width: "100%",
    height: 50,  
    // margin: 10,
},

text: {
color: Colors.primaryColor.background
}
});
