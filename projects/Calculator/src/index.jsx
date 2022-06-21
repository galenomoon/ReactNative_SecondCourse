import { StyleSheet, SafeAreaView, View } from 'react-native';
import React, { useState, useEffect } from 'react';

//components
import Button from './components/Button';
import Display from './components/Display';

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState(0);
  const [values, setValues] = useState([0, 0]);
  const [valueIndex, setValueIndex] = useState(0);
  const [operator, setOperation] = useState(null);
  const [calcPreview, setCalcPreview] = useState()

  const clear = (warning) => {
    setValues([0, 0])
    setOperation(null)
    setValueIndex(0)
    setCalcPreview("")

    warning ? setDisplayValue(">:(") : setDisplayValue(0)
  }

  const addOperator = op => {
    console.log("OPERATOR", op)

    valueIndex === 1 && calculate(operator)
    setValueIndex(1)
    setOperation(op)
  }

  const addDigit = (digit) => {
    if (digit === 0 && displayValue === 0) return

    let numbers = [...values]

    if (numbers[valueIndex] === 0 && digit !== '.') {
      numbers[valueIndex] = ''
    }

    numbers[valueIndex] += digit

    setValues(numbers)
    setDisplayValue(numbers[valueIndex])
  }

  const calculate = (operator) => {
    setCalcPreview(`${values[0]} ${operator} ${values[1]}`)
  if (operator === "/" && values[1] === "0") {
    clear(true)
    return
  }
  let result = eval(`${values[0]} ${operator} ${values[1]}`);

  const newValue = result
  setValues([result, 0])
  setDisplayValue(result);
}

const handleFunction = (item) => {
  if (typeof item === 'number' || item === ".") {
    addDigit(item);
    return
  }
  if (item === "AC") {
    clear()
    return
  }
  if (item === "=") {
    operator && calculate(operator)
    return
  }
  addOperator(item);
}

const allButtons = () => {
  let buttons = [];
  let buttonNames = ['AC', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  for (let i = 0; i < buttonNames.length; i++) {
    buttons.push(
      <Button
        label={buttonNames[i]}
        key={i}
        doubleButton={buttonNames[i] === 0}
        tripleButton={buttonNames[i] === 'AC'}
        fn={() => handleFunction(buttonNames[i])}
      />
    )
  }
  return buttons;
}

return (
  < SafeAreaView style={styles.container}>
    <Display value={displayValue} calcPreview={calcPreview} />
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
