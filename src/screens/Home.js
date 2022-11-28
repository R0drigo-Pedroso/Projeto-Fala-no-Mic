import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import imageteste from "../../assets/image/festahiphop.jpg";

function Home() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <Text style={estilos.titulo}>Eventos</Text>

      <View style={estilos.areaConteudo}>
        <View style={estilos.image}>
          <Image style={estilos.imageTamanho} source={imageteste} />
        </View>

        <View style={estilos.descricao}>
          <View>
            <Text>Titulo</Text>
            <Text>descrição</Text>
          </View>
          <Pressable>
            <Text>Saiba +</Text>
          </Pressable>
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
    width: "100%",
    flexDirection: "row",
    padding: 8,
  },

  image: {
    flex: 0.3,
  },

  imageTamanho: {
    width: "100%",
    height: 150,
  },

  descricao: {
    flex: 0.7,
    backgroundColor: "blue",
    padding: 8,
  },
});
