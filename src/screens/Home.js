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
  Touchable,
  TouchableOpacity,
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
            <Text style={estilos.titulo}>Acessar conta</Text>
          </View>

          <View style={estilos.inputs}>
            <TextInput
              style={estilos.campoEmail}
              onChangeText={setEmail}
              placeholder="email"
              value={email}
            />

            <TextInput
              style={estilos.campoSenha}
              onChangeText={setSenha}
              placeholder="senha"
              value={senha}
            />
          </View>

          <View style={estilos.containerBotao}>
            <TouchableOpacity style={estilos.botao}>
              <Text style={estilos.textoBotao}>Entrar</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={estilos.lgpd}>Não tem cadastro? Cadastre-se</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Cadastro;

const estilos = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  titulo: {
    fontSize: 22,
    marginBottom: 10,
    //marginTop: 20
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
    backgroundColor: "#322727", //"#322727"
    fontSize: 16,
    height: 58,
    margin: 20,
    padding: 10,
    borderRadius: 5,
    borderRadius: 10,
  },
  textoBotao: {
    fontSize: 20,
    color: "#E3BC40",
    textAlign: "center",
    marginTop: 5,
  },
  lgpd: {
    color: "#322727",
    margin: 10,
    textAlign: "center",
    fontSize: 15,
    lineHeight: 24,
  },
  entrar: {
    color: "#322727",
    fontSize: 15,
    textAlign: "center",
    margin: 10,
    marginBottom: 30,
  },
});
