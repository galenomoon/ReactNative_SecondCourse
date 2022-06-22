import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
//exercises
import Calculator from './projects/Calculator/src';
import Minefiled from './projects/Minefield/src';
import Divider from './utils/Divider';

export default function App() {

  return (
    < SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor={"#f2f"} />
      <ScrollView style={styles.container} >
        <Divider label={"#01 - Calculator"} />
        <Calculator />
        <Divider label={"#02 - MiningField"} />
        <Minefiled />
      </ScrollView>
    </ SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    paddingTop: 18,
  }
});
