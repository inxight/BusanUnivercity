import React, { useState,useContext } from "react";
import { Platform, ScrollView, StyleSheet, Text, View} from "react-native";
import ToggleSwitch from 'toggle-switch-react-native';

import AlramList from "./AlramList";

import listData from '../notification.json';
import customData from '../../config.json';
import { MemoryContext } from "../../src/contexts/memory.context";

const Alram = () => {

  const memoryContext = useContext(MemoryContext);

  const languge = memoryContext.lang;

  const pushTitle = languge == "kor" ? customData.kor.sub_page1_t1 : customData.eng.sub_page1_t1;
  const ListTitle = languge == "kor" ? customData.kor.sub_page1_t2 : customData.eng.sub_page1_t2;
  
  const [on, setOn] = useState(true);

  const [listOn, setListOn] = useState(false);

  const listOnFunc = (toggle) => {
    setListOn(toggle);
  }

  const noticeList = listData.list.map((list)=>{
    return(
      <AlramList key={(list.idx).toString()} list={list} listOn={listOn} listOnFunc={listOnFunc} />
    );
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