import {StyleSheet, Text, TextInput, View} from 'react-native';
import React,{useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const SearchTab = () => {
  const [isOpen, SetisOpen] = useState();
  const [currentValue, SetCurrentValue] = useState();


  const items =[
    {label:'tamil', value:'tamil'},
    {label:'english', value:'english'},
    {label:'telegu', value:'telegu'},
    {label:'malayalam', value:'malayalam'},
    {label:'kanada', value:'kanada'},
    {label:'marathi', value:'marathi'},
  ]


  return (
    <View style={styles.content}>
      <Text style={styles.txt1} >Search</Text>
      <DropDownPicker
        items={items}
        open={isOpen}
        setOpen={() => SetisOpen(!isOpen)}
        value={currentValue}
        setValue={val => SetCurrentValue(val)}
        maxHeight={100}
        
        placeholder='Select your language'
        placeholderStyle={{color:"black",fontWeight:"bold",fontSize:16}}
        theme='DARK'
        mode="BADGE"
        
       
      />
      <TextInput  style={styles.txtin}>{}</TextInput>
      <DropDownPicker
        items={items}
        open={isOpen}
        setOpen={() => SetisOpen(!isOpen)}
        value={currentValue}
        setValue={val => SetCurrentValue(val)}
        maxHeight={100}
        
        placeholder='Select your language'
        placeholderStyle={{color:"black",fontWeight:"bold",fontSize:16}}
        theme='DARK'
        
       
      />
      <TextInput style={styles.txtin}>English</TextInput>
      
    </View>

  );
};
export default SearchTab;

const styles = StyleSheet.create({
  content: {
    flex:1,
     backgroundColor:"gold",

  },
  txt1:{
    fontWeight:"700",
    alignSelf:"center",
    fontSize:40,
    color:"black",
    marginBottom:40,
  },
  txtin:{
    backgroundColor:"white",
    padding:50,
    borderRadius:30,
    margin:10,
    marginHorizontal:20,
    paddingVertical:60,
  },


});
