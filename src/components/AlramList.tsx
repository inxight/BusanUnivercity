import React, { FC, useEffect, useState } from "react";
import { Platform,ImageBackground, ScrollView, StyleSheet, Text, View, Button, TouchableOpacity, TouchableWithoutFeedback} from "react-native";


const AlramList = ({list}) => {


  const [hide, setHide] = useState<Boolean>(false);
  const [hideChar, setHideChar] = useState<String>('▼');

  const hidefunc = () => {
      setHide(value => !value);

      if(hide == false){
        setHideChar('▲')
      }
      else{
        setHideChar('▼')
      }
  }

  return (
    <View style={styles.listContaner}>
      <TouchableWithoutFeedback onPress={hidefunc}>
        <View style={styles.listTitleArea}>
            <Text style={styles.listTitle}>{list.title}</Text>
            <Text style={styles.moreInfo}>{hideChar}</Text>
        </View>
      </TouchableWithoutFeedback>
        { hide &&
        <View style={styles.listContentsArea}>
            <Text style={styles.listDate}>{list.date}</Text>
            <Text style={styles.listContents}>{list.contents}</Text>
        </View>
        }
      </View>
  );
};
export default AlramList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContaner:{
    backgroundColor:"#e2e2e2",
    borderBottomWidth:1,
    borderColor:"gray",
    padding:15,
    paddingLeft:20,
    paddingRight:20
  },
  listTitle:{
    fontSize:13,
    fontWeight:"600",
    color:"black",
    flex:9
  },
  listTitleArea:{
    flexDirection:"row"
  },
  moreInfo:{
      marginLeft:"auto",
      fontSize:15,
      fontWeight:"600"
  },
  listContentsArea:{
      backgroundColor:"white",
      marginTop:10,
      padding:10,
      height:200
  },
  listDate:{
      marginLeft:"auto",
      color:"black"
  },
  listContents:{
      color:"black"
  }

});