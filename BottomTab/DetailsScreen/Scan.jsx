import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Scan = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.txt1}>Scan</Text>
    </View>
  )
}

export default Scan

const styles = StyleSheet.create({
  content:{
    flex:1,
    backgroundColor:"gray"
   },
   txt1:{
     fontWeight: "bold",
     justifyContent: "center",
     alignSelf: "center",
     fontSize: 50,
     marginBottom: 10,
     paddingTop: 40,
     color:"black",
 
   },
})