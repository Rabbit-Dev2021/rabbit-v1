import * as React from 'react';
import { StyleSheet , ImageBackground, Dimensions, Image} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View,  } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Colors from "../constants/Colors"
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
import { Ionicons } from '@expo/vector-icons';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'Home'>) {

  return (
    <View style={styles.container}>
        {/* <ImageBackground
        source={require("../assets/images/Traffic.png")}
        resizeMode="cover"
        style={{width: width,
          height: height * 0.3,}}
        >
         <View style={{backgroundColor: "linear-gradient(90deg, #00AF52 27.78%, rgba(0, 175, 82, 0.6) 133.57%)", height: "100%"}} />
          </ImageBackground>  */}
          {/* //Image */}
          <Image 
          source={require("../assets/images/Traffic.png")}
          resizeMode="cover"
          style={{width: width,
            height: height * 0.3,}}
          />
          {/* Layout */}
          <View 
          style={{width: width,
            height: height * 0.3, backgroundColor: Colors.ImageBackground, position: "absolute", top: 0, left: 0, }}
          /> 

          <View  style={{width: width,
            height: height * 0.3, backgroundColor: Colors.ImageBackground, position: "absolute", top: 0, left: 0 }}>
              <View 
              style={{backgroundColor:Colors.ImageBackground, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}
              >
                <Image 
                source={require("../assets/images/Traffic.png")}
                resizeMode="cover"
                style={{width: 50, height:50, borderRadius: 25}}
                />
                <Text style={{color: "#fff"}}>Good morning Ben</Text>
                <Ionicons name="notifications" size={24} color="#fff" />
              </View>
              <View style={{backgroundColor:Colors.ImageBackground,}}>
                <Text style={{color: "#fff"}}>Wallet Balance</Text>
                <Text>#500.00</Text>
              <Text></Text>
              </View>
          </View>
       


        {/* <View style={{backgroundColor: "linear-gradient(90deg, #00AF52 27.78%, rgba(0, 175, 82, 0.6) 133.57%)", height: "100%"}} />  */}
        {/* <View style={styles.header}>
          <View>
            <Image source={require("../assets/images/Traffic.png")} style={{width: 50, height: 50, borderRadius: 25}} />
          </View>
        </View> */}

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative"
    // alignItems: 'center',
    // justifyContent: 'center',
  },
 header: {
   position: "absolute",
   top: 0,
   left: 0,
   backgroundColor: "linear-gradient(90deg, #00AF52 27.78%, rgba(0, 175, 82, 0.6) 133.57%)",
   width,
   height: height * 0.3,
   zIndex: 100
 },
 
});
