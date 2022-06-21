import { SafeAreaView, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Display({ value, calcPreview }) {
  return (
    <SafeAreaView style={styles.display} >
      <Text style={styles.calcPreview}>
        {value !== 0 &&calcPreview}
      </Text>
      <Text
        numberOfLines={1}
        style={styles.displayValue}
      >
        {value || 0}
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 22,
    borderRadius: 5,
    backgroundColor: '#333',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderRadius: 6,
    margin: 5,
  },
  displayValue: {
    fontSize: 60,
    color: '#FFF',
  },
  calcPreview:{
    color: "#888",
    fontSize: 20
  }
})