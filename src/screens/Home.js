import { StatusBar, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import imageteste from "../../assets/image/festahiphop.jpg";

function Home() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text style={estilos.titulo}>Eventos</Text>
      <View style={estilos.areaConteudo}>
        <View style={estilos.image}>
          <Image style={estilos.imageTamanho} source={imageteste} />
        </View>

        <View style={estilos.descricao}>
          <Text>Teste descrição</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;

const estilos = StyleSheet.create({
  titulo: {
    textAlign: "center",
    fontSize: 24,
    padding: 8,
  },
  areaConteudo: {
    flexDirection: "row",
    margin: 8,
  },
  image: {
    width: "30%",
  },
  imageTamanho: {
    width: "100%",
    height: 150,
  },
  descricao: {
    width: "70%",
    backgroundColor: "blue",
  },
});
