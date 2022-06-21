import { StyleSheet, SafeAreaView, View } from 'react-native';
import React, { useState, useEffect } from 'react';

//components - Calculator
import Button from './projects/Calculator/src/components/Button';
import Display from './projects/Calculator/src/components/Display';

export default function App() {
  const [value, setValue] = useState('0');

  const allButtons = () => {
    let buttons = [];
    let buttonNames = ['AC', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
    for (let i = 0; i < buttonNames.length; i++) {
      buttons.push(<Button label={buttonNames[i]} />)
    }
    return buttons;
  }

  return (
    < SafeAreaView style={styles.container}>
      <Display value={value} />
      <View style={styles.buttons}>
        {allButtons()}
      </View>
    </ SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
