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
import { useFonts } from "expo-font";

function Home() {
  const [fontCarregar] = useFonts({
    nunitoOne: require("../../assets/fonts/NunitoSans-Regular.ttf"),
    carterTier: require("../../assets/fonts/CarterOne-Regular.ttf"),
  });

  if (!fontCarregar);

  return (
    <SafeAreaView style={estilos.corFundo}>
      <StatusBar barStyle="default" />
      <Text style={estilos.titulo}>Eventos</Text>

      <View style={estilos.areaConteudo}>
        <Image style={estilos.imageTamanho} source={imageteste} />

        <View style={estilos.descricao}>
          <View>
            <Text style={estilos.fontTitulo}>Titulo</Text>
            <Text style={estilos.textDescricao}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry, Lorem Ipsum is simply dummy text of the printing and
              typesetting industry
            </Text>
          </View>

          <Pressable style={estilos.botaoSaiba}>
            <Text style={estilos.textSaiba}>Saiba +</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;

const estilos = StyleSheet.create({
  corFundo: {
    backgroundColor: "#F7F7F7",
  },

  fontTitulo: {
    fontFamily: "carterTier",
    fontSize: 24,
  },

  descricao: {
    flex: 0.7,
    padding: 8,
    marginLeft: 8,
    marginBottom: 8,
    marginTop: 8,
  },

  textDescricao: {
    fontFamily: "nunitoOne",
    fontSize: 13,
    marginTop: 8,
    marginBottom: 8,
  },

  titulo: {
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 24,
    padding: 8,
    marginTop: 16,
    marginBottom: 16,
    fontFamily: "carterTier",
  },

  areaConteudo: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    elevation: 5,
  },

  botaoSaiba: {
    backgroundColor: "#322727",
    width: 80,
    padding: 8,
    marginTop: 16,
    alignItems: "center",
    borderRadius: 8,
  },

  textSaiba: {
    fontSize: 16,
    color: "#E3BC40",
    fontFamily: "carterTier",
  },

  imageTamanho: {
    width: "100%",
    height: "100%",
    flex: 0.4,
  },
});
