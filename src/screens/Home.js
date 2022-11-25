import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar barStyle="default" />
      <Text>Home!</Text>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({});
