import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import Navigator from "./src/navigator/Navigator";

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width : "100%",
    // height : "100%",
    backgroundColor: '#EEEEEE',
  },
});
