import { SafeAreaView, ScrollView, View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

export default function Display({ value, calcPreview }) {
  return (
    <SafeAreaView style={styles.display} >
      <View style={styles.history}>
        <ScrollView>
          <FlatList
            data={calcPreview}
            renderItem={({ item }) =>
              <Text style={styles.calcPreview}>
                {item}
              </Text>
            }
          />
        </ScrollView>
      </View>
      <Text
        numberOfLines={1}
        style={styles.displayValue}
      >
        {value || 0}
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 22,
    borderRadius: 5,
    backgroundColor: '#333',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderRadius: 6,
    margin: 5,
    height:345
  },
  displayValue: {
    fontSize: 60,
    color: '#FFF',
  },
  calcPreview: {
    color: "#888",
    fontSize: 20,
    textAlign: "right",
    marginBottom:3
  },
  history: {
    width: "50%",
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderRadius: 6,
  }
})