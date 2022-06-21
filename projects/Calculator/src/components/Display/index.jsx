import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Display({ value }) {
  return (
    <View style={styles.display} >
      <Text
        numberOfLines={1}
        style={styles.displayValue}
      >
        {value || 0}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  display: {
    padding: 20,
    backgroundColor: '#333',
    alignItems: 'flex-end',
    borderRadius: 5,
    margin: 2,
  },
  displayValue: {
    fontSize: 40,
    color: '#FFF',
  }
})