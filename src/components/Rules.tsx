import React, { FC, useEffect, useState } from "react";
import { WebView } from 'react-native-webview';
import { Platform,ImageBackground, StyleSheet, Text, View, Image, Button,TouchableOpacity, SafeAreaView} from "react-native";
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 



// const instructions = Platform.select({
//   ios: `Press Cmd+R to reload,\n Cmd+D or shake for dev menu`,
//   android: `Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu`
// });


// let [buttonStyle,setButtonStyle] = useState({
//   color:"black"
// })

const Rules: FC = () => {

  return (
    <>
        <WebView source={{uri : "https://dorm.pusan.ac.kr/dorm/bbs/list05/20000401"}} />
    </>
  );
};
export default Rules;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

});