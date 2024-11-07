import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'; // Corrected 'React' import capitalization

export default function App() {
  return (
      <View style={styles.container}>
        <View style={styles.greenBox}>
          <Text style={styles.boxText}>Who We are</Text>
        </View>
        <View style={styles.greenBox}>
          <Text style={styles.boxText}>Our people</Text>
        </View>
        <View style={styles.greenBox}>
          <Text style={styles.boxText}>Our Campus</Text>
        </View>

        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Uses flex to fill the screen
    justifyContent: 'flex-start', // Center children vertically
    alignItems: 'left', // Center children horizontally
    backgroundColor: '#fff', // Optional: set background color for the entire screen
  },
  greenBox: {
    width: 100,
    height: 100,
    backgroundColor: 'green', // Corrected property
    justifyContent: 'center', // Center the Text vertically
    alignItems: 'center', // Center the Text horizontally
    margin: 10, // Adds space between boxes
  },

  boxText: {
    color: 'white',
    textAlign: 'center', // Centers text horizontally inside the Text component
  },

});
