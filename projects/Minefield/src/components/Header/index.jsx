import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

//components
import Flag from '../Flag'

const Header = ({ onFlagPress, flagsLeft, onNewGame }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <TouchableOpacity onPress={onFlagPress} >
          <Flag bigger />
        </TouchableOpacity>
        <Text style={styles.flagsLeft} >= {flagsLeft || 0}</Text>
      </View>
      <TouchableOpacity onPress={onNewGame} style={styles.button} >
        <Text style={styles.buttonLabel}>New Game</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#777',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
  flagContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: "row",
    width: 200,
  },
  flagsLeft: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20
  },
  button: {
    backgroundColor: "#333",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 30,
    fontWeight: 'bold',
  }
})