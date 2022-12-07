import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

function Publicar() {
  return (
    <SafeAreaView style={estilos.viewSafe}>
      <View style={estilos.container}>
        <Text>Descrição:</Text>
      </View>
    </SafeAreaView>
  );
}
export default Publicar;

const estilos = StyleSheet.create({
  viewSafe: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#f7f7f7",
  },
});
