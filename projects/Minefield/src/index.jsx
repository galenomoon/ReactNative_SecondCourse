import { SafeAreaView, View, StyleSheet } from 'react-native'
import React, { useState } from 'react'

//utils
import params from './params'
import { createMinedBoard } from './functions'

//components
import MineField from './components/MineField'

export default function Minefiled() {

  const [cols, setCols] = useState(params.getColumnsAmount())
  const [rows, setRows] = useState(params.getRowsAmount())
  const [board, setBoard] = useState(createMinedBoard(rows, cols, minesAmount))
  const [minesAmount, setMinesAmount] = useState(Math.ceil(cols * rows * params.difficultLevel))

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.board}>
        <MineField board={board} />
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  board: {
    justifyContent: 'center',
    alignItems: "center",
    // backgroundColor: "#AAA"
  }
});