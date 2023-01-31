import {
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import logo from "../../assets/image/logo_fala_no_mic.png";
import Login from "./Login";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import Perfil from "./Perfil";

function Cadastro() {
  const [telaLogin, setTelaLogin] = useState(false);
  const [telaCadastro, setTelaCadastro] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const login = () => {
    setTelaLogin(true);
  };

  if (telaLogin) {
    return <Login />;
  }

  const perfil = () => {
    setTelaCadastro(true);
  };

  if (telaCadastro) {
    return <Cadastro />;
  }

  const cadastrar = () => {
    if (!email || !senha) {
      Alert.alert("Atenção", "Você deve preencher e-mail e senha");
      return;
    }

    createUserWithEmailAndPassword(auth, email, senha)
      .then(() => {
        Alert.alert("Cadastro", "Conta criada com sucesso!", [
          {
            text: "Não, me deixe aqui mesmo",
            onPress: () => {
              // setEmail("");
              // setSenha("");
              // return false;
              navigation.replace("Cadastro");
            },
            style: "cancel",
          },
          {
            text: "Sim, bora lá!",
            onPress: () => {
              navigation.replace("Perfil");
            },
            style: "default",
          },
        ]);
      })
      .catch((error) => {
        console.log(error);
        let mensagem;
        switch (error.code) {
          case "auth/email-already-in-use":
            mensagem = "E-mail já cadastrado!";
            break;

          case "auth/weak-password":
            mensagem = "Senha deve ter pelo menos 6 dígitos!";
            break;

          case "auth/invalid-email":
            mensagem = "Endereço de e-mail inválido!";
            break;

          default:
            mensagem = "Algo deu errado... tente novamente!";
            break;
        }
        Alert.alert("Atenção!", mensagem);
      })
      .finally(() => setLoading(false));
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <ScrollView>
        <View style={estilos.container}>
          <View style={estilos.containerFoto}>
            <Image source={logo} style={estilos.foto} />
          </View>

          <View style={estilos.containerTitulo}>
            <Text style={estilos.titulo}>Cadastro</Text>
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

          <View style={estilos.containerBotao}>
            <Pressable style={estilos.botao}>
              <Text style={estilos.textoBotao} onPress={cadastrar}>
                Cadastrar
              </Text>
            </Pressable>
          </View>

          <View>
            <Text style={estilos.lgpd}>
              Ao criar o seu cadastro, você concorda com a nossa Política de
              Privacidade
            </Text>
            <Text style={estilos.entrar}>
              Já tem cadastro?{" "}
              <Text style={estilos.vaiLogin} onPress={login}>
                Entrar
              </Text>
            </Text>
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
    marginLeft: 8,
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
    fontSize: 16,
    textAlign: "center",
    margin: 10,
    marginBottom: 30,
  },
  vaiLogin: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
