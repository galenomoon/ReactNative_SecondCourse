import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

//components
import params from './params'
import Field from './components/Field'

export default function Minefiled() {
  return (
    <SafeAreaView style={styles.container}>
        <Field/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:30
  }
});