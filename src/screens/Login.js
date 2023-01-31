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
import { auth } from "../../firebaseConfig";

/* Importamos as funções de autenticação diretamente da lib */
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import Perfil from "./Perfil";
import Cadastro from "./Cadastro";

function Login({ navigation }) {
  const [telaCadastro, setTelaCadastro] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [validaLogin, setValidaLogin] = useState(false);

  const cadastro = () => {
    setTelaCadastro(true);
  };

  const login = () => {
    if (!email || !senha) {
      Alert.alert("Atenção!", "Você deve preencher todos os campos");
      return; // parar o processo
    }

    signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        setValidaLogin(true);
        Alert.alert("Você foi logado");
      })
      .catch((error) => {
        console.log(error);
        console.log(error.code);
        let mensagem;
        switch (error.code) {
          case "auth/user-not-found":
            mensagem = "Usuário não encontrado!";
            break;
          case "auth/wrong-password":
            mensagem = "Senha incorreta";
            break;
          default:
            mensagem = "Houve um erro, tente novamente mais tarde";
            break;
        }
        Alert.alert("Ops!", mensagem);
      });
  };

  const recuperarSenha = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert("Recuperar senha", "Verifique sua caixa de entrada");
      })
      .catch((error) => console.log(error));
  };

  /* Vai para tela de Cadastro */
  if (telaCadastro) {
    return <Cadastro />;
  }

  if (validaLogin) {
    return <Perfil />;
  } else {
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
              <Pressable style={estilos.botao} onPress={login}>
                <Text style={estilos.textoBotao}>Entrar</Text>
              </Pressable>
            </View>

            <View>
              <Text style={estilos.lgpd}>
                Não tem cadastro?
                <Text style={estilos.cadastrese} onPress={cadastro}>
                  {" "}
                  Cadastre-se
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Login;

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
    fontSize: 16,
    lineHeight: 24,
  },
  cadastrese: {
    fontWeight: "bold",
    fontSize: 18,
  },
  entrar: {
    color: "#322727",
    fontSize: 15,
    textAlign: "center",
    margin: 10,
    marginBottom: 30,
  },
});
