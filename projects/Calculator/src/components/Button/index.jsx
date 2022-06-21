import { Text, Dimensions, TouchableHighlight, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function Button({ fn, label, doubleButton, tripleButton }) {
  const [style, setStyle] = useState([styles.button])

  useEffect(() => {
    let style = style
    if (doubleButton) {
      setStyle([styles.button, styles.doubleButton])
      return
    }
    if (tripleButton) {
      setStyle([styles.button, styles.tripleButton])
      return
    }
    typeof label !== 'number' && setStyle([styles.button, styles.operation])
  }, [])

  return (
    <TouchableHighlight onPress={()=> fn()}>
      <Text style={style}>
        {label}
      </Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    width: Dimensions.get('window').width / 4.2,
    height: Dimensions.get('window').width / 4.2,
    padding: 20,
    backgroundColor: '#333',
    color: '#f542d7',
    textAlign: 'center',
    borderRadius: 5,
    margin: 2,
  },
  operation: {
    backgroundColor: '#f542d7',
    color: '#333',
  },
  doubleButton: {
    width: (Dimensions.get('window').width / 4.2) * 2.03,
  },
  tripleButton: {
    width: (Dimensions.get('window').width / 4.2) * 3.08,
  }
})