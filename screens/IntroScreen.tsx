import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { Image, Platform, StyleSheet, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';



export default function ModalScreen({navigation}:any) {
  const [isReady, setIsReady] = useState(false)
  const _width = Dimensions.get("screen").width
  const _height = Dimensions.get("screen").height

  const slides = [
    {
      key: 1,
      title: "Convenience at one click",
      text: "Easily schedule trips at your own convenience, get picked up at your selected bus stop, and dropped off at your destination. No queues, no hassles, always on schedule.",
      image: require("../assets/images/Intro1.png"),
      button: false
    },
    {
      key: 2,
      title: "Comfortable and Reliable Commute ",
      text: "With our fixed route-fixed bus fare principle, everyone gets a clean spacious Air-conditioned bus equipped with modern conveniences right On-Time, and always knowing how much a trip costs, No surprise!",
      image: require("../assets/images/Intro2.png"),
      button: false
    },
    {
      key: 3,
      title: "Experience Better Delivery ",
      text: "Discover a completely convenient way to send packages within your city, with door-2-door package pick-up and drop-off at a cheap fixed price",
      image: require("../assets/images/Intro3.png"),
      button: true,
    },
  ]

  const renderSkipButton = () => {
    return (
      <TouchableOpacity style={{backgroundColor: Colors.primaryColor.rabbit, padding: 15, width: "90%", borderRadius: 25}}>
      <Text style={{textAlign: "center", color:  Colors.light.background}}>Get Started</Text>
      </TouchableOpacity>
    );
  };

  // const renderDoneButton = () => (
  //   <View>
  //     <Text>This is the Button</Text>
  //   </View>
  // )
  

    const renderItem = ({item}: any) => {
      return (
        <View style={styles.container}>
        <Image style={{width: 
      _width, height: _height}} source={item.image} />
      <View style={{width: _width, 
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: "#fff", height: _height/2, zIndex: 100, borderTopLeftRadius: 100, display: 'flex', justifyContent: 'space-around', alignItems: "center" }}> 
        <Text style={{fontWeight: "bold"}}>{item.title}</Text>
        <Text style={{textAlign: "center", width: "80%", marginTop: -80, color: Colors.primaryColor.textDark2}}>{item.text}</Text>
       {item.button && <TouchableOpacity 
        onPress={() => navigation.navigate("SignUp")}
        
        style={{backgroundColor: Colors.primaryColor.rabbit, padding: 15, width: "90%", borderRadius: 25, marginBottom: 20}}>
        <Text style={{textAlign: "center", color:  Colors.light.background,}}>Get Started</Text>
        </TouchableOpacity>}
      </View>
     
          {/* Use a light status bar on iOS to account for the black space above the modal */}
          <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
      );
    }

    return (<AppIntroSlider
    renderItem={renderItem}
    data={slides}
    activeDotStyle={{backgroundColor: Colors.primaryColor.rabbit, width: 40}}

    // onDone={onDone}
    // renderNextButton={renderNextButton}
    // bottomButton={true}
    // showNextButton={true}
    // renderDoneButton={renderDoneButton}
    // renderSkipButton={renderSkipButton}
    // showSkipButton={true}
    // activeDotStyle={styles.dot}
  />)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: Dimensions.get("screen").width,
     height: Dimensions.get("screen").height
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
