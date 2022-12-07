import {
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  Button,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import logo from "../../assets/image/logo_fala_no_mic.png";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <ScrollView>
        <View style={estilos.container}>
          <View style={estilos.containerFoto}>
            <Image source={logo} style={estilos.foto} />
          </View>

          <View style={estilos.containerTitulo}>
            <Text style={estilos.titulo}>Cadastrar</Text>
          </View>

          <View style={estilos.inputs}>
            <TextInput
              style={estilos.campoNome}
              onChangeText={setNome}
              placeholder="nome"
              value={nome}
            />

            <TextInput
              style={estilos.campoEmail}
              onChangeText={setEmail}
              placeholder="exemplo@exemplo.com"
              value={email}
            />

            <TextInput
              style={estilos.campoSenha}
              onChangeText={setSenha}
              placeholder="senha"
              value={senha}
            />
          </View>
          <Pressable style={estilos.botao} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Cadastro;

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 22,
  },
  campoNome: {
    fontSize: 16,
    height: 54,
    margin: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
    borderRadius: 10,
    width: "85%",
    // shadowColor: "#171717",
    // shadowOffset: { width: -2, height: 4 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
  },
  campoEmail: {
    fontSize: 16,
    height: 54,
    margin: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
    borderRadius: 10,
    width: "85%",
  },
  campoSenha: {
    fontSize: 16,
    height: 54,
    margin: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
    borderRadius: 10,
    width: "85%",
  },
  campoConfirmarSenha: {
    fontSize: 16,
    height: 64,
    margin: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
  foto: {
    textAlign: "center",
  },
  containerFoto: {
    alignItems: "center",
  },
  containerTitulo: {
    paddingHorizontal: 25,
  },
  inputs: {
    alignItems: "center",
  },
  botao: {
    backgroundColor: "red",
  },
});
