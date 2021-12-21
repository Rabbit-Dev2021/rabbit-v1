import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Dimensions, Image, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

export default function ModalScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Image resizeMode="contain" source={require("../assets/images/setUpHeader2.png")} style={{width, height: height/4, position: "absolute", top: 0,}}/>
        <Image resizeMode="contain" source={require("../assets/images/setupHeader1.png")} style={{width, height: height/4, position: "absolute", top: 0,}}/>
        <Text style={{position: "absolute", top: 100, left: 10, fontSize: 18, color: "#fff"}}>Create your account</Text>
        <View style={{position: "absolute", top: height/4,}}> 
        <Text>Hello, looks good</Text>

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
});
