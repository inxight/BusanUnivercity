import React, { FC, useEffect, useState } from "react";
import { Platform,ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import ToggleSwitch from 'toggle-switch-react-native';

import AlramList from "./AlramList";

import listData from '../notification.json';
import customData from '../../config.json';

const Alram = ({langData}) => {

  const pushTitle = langData == "ko" ? customData.kor.sub_page1_t1 : customData.eng.sub_page1_t1;
  const ListTitle = langData == "ko" ? customData.kor.sub_page1_t2 : customData.eng.sub_page1_t2;


  const [on, setOn] = useState(true);

  const noticeList = listData.list.map(list=>{
    return(
      <>
      <AlramList list={list} key={list.date}/>
      </>
    )
  });

  return (
    <>
    <View style={styles.container}>
      <View style={styles.pushSettingCon}>
        <Text style={styles.pushSetTitle}>{pushTitle}</Text>
        <ToggleSwitch style={styles.toggle} isOn={on} size="medium" onToggle={() => {setOn(value => !value) }} />
        
      </View>
      <View style={styles.pushSettingCon}>
        <Text style={styles.pushSetTitle}>{ListTitle}</Text>
      </View>
      <ScrollView>
      {noticeList}
      </ScrollView>
    </View>
    </>
  );
};
export default Alram;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pushSettingCon:{
    flexDirection:"row",
    padding:15,
    backgroundColor:"#e2e2e2"
  },
  pushSetTitle:{
    fontSize:18,
    color:"black",
    fontWeight:"600"
  },
  toggle:{
    marginLeft:"auto"
  }

});