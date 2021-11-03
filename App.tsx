import React, { FC, useEffect, useState } from "react";
import { Platform,ImageBackground, StyleSheet, Text, View, Image, Alert,TouchableOpacity, SafeAreaView} from "react-native";
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import { Provider, useSelector, useDispatch } from "react-redux";
import SplashScreen from "react-native-splash-screen";
import store from './src/store'

import messaging from '@react-native-firebase/messaging'

import customData from './config.json';

import Alram from './src/components/Alram';
import Menu from './src/components/Menu';
import Notice from './src/components/Notice';
import Rules from "./src/components/Rules";
import Inquiries from "./src/components/Inquiries";

import 'react-native-gesture-handler';

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



const App: FC = () => {

  useEffect(()=>{
    SplashScreen.hide();
  })

  const [languge,setLanguge] = useState('ko');

  const langugeChange = function(lang){
    setLanguge(lang);
  }

  const [notification,setNotification] = useState(customData.kor.main_title1);
  const [menu, setMenu] = useState(customData.kor.main_title2);
  const [notice,setNotice] = useState(customData.kor.main_title3);
  const [rules,setRules] = useState(customData.kor.main_title4);
  const [inquiries,setInquiries] = useState(customData.kor.main_title5);

  let onBtn = { 
    width:70,
    height:30,
    borderWidth:2,
    borderRadius:10,
    marginRight:10,
    borderStyle:"solid",
    borderColor:"white",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"white",
    color:"black"}
  let offBtn = {
    width:70,
    height:30,
    borderWidth:2,
    borderRadius:10,
    marginRight:10,
    borderStyle:"solid",
    borderColor:"white",
    justifyContent: "center",
    alignItems: "center"
  };

  let onText = {color:"black"}
  let offText = {color:"white"}

  let koBtn, engBtn, koText, engText;
  if(languge == 'ko'){
  koBtn = onBtn;
  koText = onText;
  engBtn = offBtn;
  engText = offText;
 }
 else if(languge == 'eng'){
  koBtn = offBtn;
  koText = offText;
  engBtn = onBtn;
  engText = onText;
 }

  


  const setLangugeEng = () =>{
    setNotification(customData.eng.main_title1);
    setMenu(customData.eng.main_title2);
    setNotice(customData.eng.main_title3);
    setRules(customData.eng.main_title4);
    setInquiries(customData.eng.main_title5);

  }
  const setLangugeKor = () =>{
    setNotification(customData.kor.main_title1);
    setMenu(customData.kor.main_title2);
    setNotice(customData.kor.main_title3);
    setRules(customData.kor.main_title4);
    setInquiries(customData.kor.main_title5);
  }

  // let store = createStore(todos, ['Using Languge'])

  // function addTodo(text) {
  //   return {
  //     type: 'Change_Languge',
  //     text
  //   }
  // }
  
  // store.dispatch(addTodo(languge))


  
function HomeScrean({navigation}){
  return(
    <>
    <View style={styles.container}>
      <ImageBackground source={require('./public/img/main_bg.png')} style={styles.bgImage} resizeMode="cover">
      {/* <Image style={styles.logo} source={require('./public/img/main_logo.png')} /> */}
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.8} style={koBtn} onPress={()=>{setLangugeKor(); setLanguge('ko')}}>
          <Text style={koText}>한국어</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={engBtn} onPress={()=>{setLangugeEng(); setLanguge('eng')}} >
          <Text style={engText}>ENG</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logoArea}>
        <Image style={styles.logo} source={require('./public/img/main_logo.png')} />
      </View>

      <View style={styles.contentArea}>
        <View style={styles.mainFirst}>
          <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate('Alram',{lang:languge})}} style={styles.mainFirstEl}>
            <Image style={styles.iconEl} source={require('./public/img/icon1.png')} />
            <Text style={styles.iconElTitle}>
            {notification}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate('Menu')}} style={styles.mainFirstEl}>
          <Image style={styles.iconEl} source={require('./public/img/icon3.png')} />
            <Text style={styles.iconElTitle}>
              {menu}
            </Text>
         </TouchableOpacity>
       </View>
       <View style={styles.mainFirst}>
          <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate('Notice')}} style={styles.mainFirstEl}>
            <Image style={styles.iconEl} source={require('./public/img/icon2.png')} />
            <Text style={styles.iconElTitle}>
            {notice}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate('Rules')}} style={styles.mainFirstEl}>
          <Image style={styles.iconEl} source={require('./public/img/icon4.png')} />
            <Text style={styles.iconElTitle}>
              {rules}
            </Text>
         </TouchableOpacity>
         <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate('Inquiries')}} style={styles.mainFirstEl}>
         <Image style={styles.iconEl} source={require('./public/img/icon5.png')} />
            <Text style={styles.iconElTitle}>
              {inquiries}
            </Text>
         </TouchableOpacity>
       </View>
      </View>
      <View style={styles.footer}></View>
      </ImageBackground>
    </View>
    </>
  )
}

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen options={{ headerShown: false }} name="home" component={HomeScrean}/>
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
   </Provider>
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