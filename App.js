import { StyleSheet, SafeAreaView } from 'react-native';

//exercises
import Calculator from './projects/Calculator/src';

export default function App() {

  return (
    < SafeAreaView style={styles.container}>
      <Calculator />
    </ SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    padding:1
  }
});
