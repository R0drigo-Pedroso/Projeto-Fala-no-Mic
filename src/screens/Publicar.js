import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

function Publicar() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar barStyle="default" />
      <Text>Publicar!</Text>
    </View>
  );
}
export default Publicar;

const styles = StyleSheet.create({});
