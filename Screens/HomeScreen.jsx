import {
  Button,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const HomeScreen = props => {
  return (
    <View style={styles.fullScreen}>
      <Text style={styles.content}>Translator</Text>

      <View>
        <Text style={styles.content2}>
          Translate easy and fast into 100+ languages
        </Text>
        <Image style={styles.img} source={require('../assets/icons/img.png')} />
      </View>
      <TouchableOpacity style={styles.opc} onPress={() => props.navigation.navigate('MyTabs')}>

        <Text style={styles.txt}>Continue</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: 'gold',
  },
  content: {
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 60,
    marginBottom: 10,
    paddingTop: 10,
    color: 'black',
  },

  content2: {
    fontSize: 25,
    margin: 50,
    marginTop: 10,
    textAlign: 'center',
  },
  img: {
    // padding: 40,
    // alignContent: 'center',
    // alignItems: 'center',
    alignSelf: 'center',
    height: 350,
    width: 350,
    resizeMode:"cover",
    borderRadius:20,
    // marginTop:20,
  },
 opc:{
  backgroundColor:"black",
  padding:15,
  borderRadius:10,
  marginHorizontal:20,
  marginTop:80,

 },
 txt:{
  color:"white",
  fontWeight:"bold",
  textAlign:"center",
  
 }
});
