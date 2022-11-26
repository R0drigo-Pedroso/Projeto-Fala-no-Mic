import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import imageteste from "../../assets/image/festahiphop.jpg";

function Home() {
  return (
    <SafeAreaView style={estilos.container}>
      <StatusBar barStyle="default" />

      <View style={estilos.spaceTitulo}>
        <Text style={estilos.titulo}>Eventos</Text>
      </View>

      <View style={estilos.block}>
        <View style={estilos.img}>
          <ImageBackground style={estilos.tamanho} source={imageteste} />
        </View>

        <View style={estilos.descricao}>
          <Text>teste</Text>
          <Button
            title="Press me"
            onPress={() => Alert.alert("Simple Button pressed")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },

  spaceTitulo: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    color: "black",
  },

  tamanho: {
    width: 150,
    height: 150,
  },

  block: {
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 8,
  },

  img: {
    width: "10%",
  },
});
