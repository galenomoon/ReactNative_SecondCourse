import { SafeAreaView, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Divider({label}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    borderRadius:20,
    padding:15,
    marginVertical:7,
    marginHorizontal:10
  },
  label:{
    color:"#FFF",
    fontSize:20,
    // padding:20,
    fontWeight:'bold'
  }

});
