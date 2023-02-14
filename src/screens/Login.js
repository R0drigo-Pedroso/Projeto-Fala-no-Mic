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
  KeyboardAvoidingView,
  Platform
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, createRef, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import logo from "../../assets/image/logo_fala_no_mic.png";
import { auth } from "../../firebaseConfig";
import Input from "../components/Input/Input";
/* Importamos as funções de autenticação diretamente da lib */
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import Perfil from "./Perfil";
import Cadastro from "./Cadastro";

function Login({navigation}) {
  const [telaCadastro, setTelaCadastro] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [validaLogin, setValidaLogin] = useState(false);

  const emailInput = createRef();
  const senhaInput = createRef();

  useEffect(() => emailInput.current.resetError(), [email]);
  useEffect(() => senhaInput.current.resetError(), [senha]);


 



  const login = () => {
    if (email == "") {
      Alert.alert("E-mail inválido", "Tente novamente!");
      emailInput.current.focusOnError();
      return;
    }
    if (senha == "") {
      Alert.alert("Senha inválida", "Tente novamente!");
      senhaInput.current.focusOnError();
      return;
    }
    signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        setValidaLogin(true);
        Alert.alert("Você foi logado");
        navigation.replace("Perfil");
        
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

  const irParaoCadastro = () => {
    navigation.navigate("CadastroStack")
  }

  
 
    return (
      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={estilos.viewSafe}>
      <StatusBar barStyle="dark" />
      <ScrollView>
        <View style={estilos.viewFoto}>
          <Image source={logo} />
        </View>

        <View style={estilos.viewAcessarConta}>
          <Text style={estilos.titulo}>Acessar conta</Text>
        </View>

        <Input
          ref={emailInput}
          iconName={"account-outline"}
          placeholder="E-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          ref={senhaInput}
          iconName={"lock-outline"}
          secureTextEntry
          placeholder="Senha"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          value={senha}
          onChangeText={setSenha}
        />

        <View style={estilos.viewBotao}>
          <Pressable style={estilos.botao} onPress={login}>
            <Text style={estilos.textoBotao}>Entrar</Text>
          </Pressable>
        </View>

        <View style={estilos.viewLgpd}>
          <Pressable>
            <Text style={estilos.tituloLgpd}>
              Não tem cadastro?
              </Text >
          </Pressable>
              
              <Pressable onPress={irParaoCadastro}>
                <Text style={estilos.cadastresess}>Cadastre-se</Text>
              </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    );
  }

export default Login;

const estilos = StyleSheet.create({
  viewSafe: {
    flex: 1,
    justifyContent: "center",
  },
  viewFoto: {
    alignItems: "center",
  },
  viewAcessarConta: {
    marginLeft: 22,
  },
  titulo: {
    fontSize: 24,
    color: "#372727",
  },
  viewBotao: {
    padding: 8,
    marginVertical: 8,
  },
  botao: {
    width: "94%",
    height: 50,
    backgroundColor: "#322727",
    borderRadius: 8,
    marginLeft: 11,
    justifyContent: "center",
    shadowColor: "#171717",
    shadowOffset: { left: -15, right: 15 },
    elevation: 3,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textoBotao: {
    fontSize: 24,
    color: "#E3BC40",
    textAlign: "center",
  },
  viewLgpd: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignContent: "center"
  },
  tituloLgpd: {
    padding: 8,
    fontSize: 16,
    color: "#372727",
  },
  cadastresess: {
    fontWeight: "bold",
    fontSize: 17,
  },
});