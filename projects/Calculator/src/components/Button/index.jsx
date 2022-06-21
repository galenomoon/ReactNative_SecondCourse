import { View, Text, Dimensions, TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'

export default function Button({ fn, label }) {
  return (
    <TouchableHighlight onPress={() => fn && fn()}>
      <Text style={typeof label === 'number' ? styles.button : styles.operationButton}>
        {label}
      </Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#333',
    color: '#20e4fa',
    textAlign: 'center',
    borderRadius: 5,
    margin: 2,
  },
  operationButton: {
    fontSize: 40,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#20e4fa',
    color: '#333',
    textAlign: 'center',
    borderRadius: 5,
    margin: 2,
  }
})