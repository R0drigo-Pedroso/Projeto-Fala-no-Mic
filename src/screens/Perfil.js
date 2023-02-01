import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import fruta from "../../assets/image/fruta.jpg";
import astronauta from "../../assets/image/astronauta.jpg";
/* Import dos ícones */
import { FontAwesome5 } from "@expo/vector-icons";

import Login from "./Login";
import Cadastro from "./Cadastro";

import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { useState } from "react";

function Perfil() {
  /* Recuperando os dados do usuário atual (logado) */
  const usuarioLogado = auth.currentUser;
  console.log(usuarioLogado);

  return (
    <SafeAreaView style={estilos.viewSafe}>
      <StatusBar barStyle="default" />

      <ScrollView>
        <View style={estilos.container}>
          <ImageBackground
            source={fruta}
            resizeMode="cover"
            style={estilos.imagem}
          >
            <View style={estilos.viewFoto}>
              <Image source={astronauta} style={estilos.foto} />
              <Text style={estilos.usuario}>{usuarioLogado.displayName}</Text>
              <Text style={estilos.endereco}>Informe sua localidade</Text>
            </View>
          </ImageBackground>

          <View style={estilos.backgroundCard}>
            <View style={estilos.card}>
              <Text style={estilos.titulo}>Descrição: </Text>
              <Text style={estilos.texto}>{usuarioLogado.descricao}</Text>
            </View>
          </View>

          <View style={estilos.redes}>
            <View style={estilos.nomeRede}>
              <FontAwesome5 name="deezer" size={32} color="black" />
              <Text style={estilos.textIcon}>deezer</Text>
            </View>

            <View style={estilos.nomeRede}>
              <FontAwesome5 name="youtube" size={32} color="black" />
              <Text style={estilos.textIcon}>youtube</Text>
            </View>

            <View style={estilos.nomeRede}>
              <FontAwesome5 name="spotify" size={32} color="black" />
              <Text style={estilos.textIcon}>spotify</Text>
            </View>

            <View style={estilos.nomeRede}>
              <FontAwesome5 name="soundcloud" size={32} color="black" />
              <Text style={estilos.textIcon}>soundcloud</Text>
            </View>

            <View style={estilos.nomeRede}>
              <FontAwesome5 name="instagram" size={32} color="black" />
              <Text style={estilos.textIcon}>instagram</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Perfil;

const estilos = StyleSheet.create({
  viewSafe: { flex: 1, backgroundColor: "#F7F7F7" },
  container: {},
  imagem: {
    height: 500,
  },
  user: {
    height: "50%",
    borderRadius: "50%",
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 350,
  },
  viewFoto: {
    height: 500,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, 0.8)",
  },
  usuario: {
    color: "white",
    fontSize: 18,
    marginVertical: 10,
    fontWeight: "bold",
  },
  endereco: {
    color: "white",
    fontSize: 16,
    marginVertical: 5,
  },
  card: {
    backgroundColor: "#FFFFFF",
    height: 300,
    padding: 16,
    width: "90%",
    borderRadius: 5,
    shadowColor: "#171717",
    shadowOffset: { left: -15, right: 15 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginVertical: 24,
  },
  titulo: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    padding: 8,
  },
  texto: {
    padding: 8,
    lineHeight: 20,
    fontSize: 13,
  },
  backgroundCard: {
    alignItems: "center",
  },
  redes: {
    flexDirection: "column",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 24,
  },
  nomeRede: {
    alignItems: "center",
  },
  textIcon: {
    marginVertical: 8,
  },
});
