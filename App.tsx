import React, { FC, useContext, useEffect, useState } from "react";
import { Platform,ImageBackground, StyleSheet, Text, View, Image, Alert,TouchableOpacity, SafeAreaView} from "react-native";
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import { Provider, useSelector, useDispatch } from "react-redux";
import { korLangAction,engLangAction } from "./src/components/actions/action";
import SplashScreen from "react-native-splash-screen";

import customData from './config.json';

import Home from './src/components/Home';
import Alram from './src/components/Alram';
import Menu from './src/components/Menu';
import Notice from './src/components/Notice';
import Rules from "./src/components/Rules";
import Inquiries from "./src/components/Inquiries";

import 'react-native-gesture-handler';
import { MemoryContextProvider } from "./src/contexts/memory.context";
import { MemoryContext } from "./src/contexts/memory.context";

// const instructions = Platform.select({
//   ios: `Press Cmd+R to reload,\n Cmd+D or shake for dev menu`,
//   android: `Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu`
// });


// let [buttonStyle,setButtonStyle] = useState({
//   color:"black"
// })

  //function todos(state = [], action){
  //   switch(action.type){
  //     case 'Change_Languge':
  //       return state.concat([action.text])
  //     default:
  //       return state
  //   }
  // }

const Stack = createStackNavigator();


const App = () => {

  const memoryContext = useContext(MemoryContext);
  const languge = memoryContext.leng;

  const notification = languge == "kor" ? customData.kor.main_title1 : customData.eng.main_title1;
  const menu = languge == "kor" ? customData.kor.main_title2 : customData.eng.main_title2;
  const notice = languge == "kor" ? customData.kor.main_title3 : customData.eng.main_title3;
  const rules = languge == "kor" ? customData.kor.main_title4 : customData.eng.main_title4;
  const inquiries = languge == "kor" ? customData.kor.main_title5 : customData.eng.main_title5;

  console.log(languge)

  return (
    <MemoryContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {/* <Stack.Screen options={{ headerShown: false }} name="home" component={HomeScrean}/> */}
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Alram" options={{title: notification }} >
              {props => <Alram {...props} langData={languge} />}
          </Stack.Screen>
          <Stack.Screen name="Menu" component={Menu} options={{title: menu}} />
          <Stack.Screen name="Notice" component={Notice} options={{title: notice}} />
          <Stack.Screen name="Rules" component={Rules} options={{title: rules}} />
          <Stack.Screen name="Inquiries" options={{title: inquiries}} >
            {props => <Inquiries {...props} langData={languge} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
   </MemoryContextProvider>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue"
  },
  bgImage:{
    width:"100%",
    height:"100%"
  },
  header:{
    width:"100%",
    height:"10%",
    justifyContent:"flex-end",
    alignItems:"center",
    flexDirection: 'row'
  },
  logoArea: {
    width:"100%",
    height:"20%",
    justifyContent:"center",
    alignItems:"center"
  },
  logo:{
    resizeMode:'contain',
    width:"70%"
  },
  contentArea:{
    width:"100%",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column"
  },
  footer:{
    width:"100%",
    height:"15%",
    justifyContent:"center",
    alignItems:"center"
  },
  mainFirst:{
    height:"50%",
    flexDirection:"row"
  },
  mainFirstEl:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,
    borderRadius:10,
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
    borderStyle:"solid",
    borderColor:"white",
    backgroundColor:"white"
  },
  iconEl:{
    resizeMode:'contain',
    width:"40%",
    height:"40%"
  },
  iconElTitle:{
    fontSize:15,
    fontWeight:"500",
    color:"black"
  }
});