import {StatusBar, ScrollView, StyleSheet, Text, View, Image,Pressable, TextInput, Alert, KeyboardAvoidingView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect, createRef } from "react";
import Input from "../components/Input/Input";
import { AntDesign } from "@expo/vector-icons";
import logo from "../../assets/image/logo_fala_no_mic.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";


function Cadastro({ navigation }) {
  const [telaLogin, setTelaLogin] = useState(false);
  const [telaPeril, setTelaPerfil] = useState(false);
  const [telaHome, setHome] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [descricao, setDescricao] = useState("");
  const nomeInput = createRef();
  const emailInput = createRef();
  const senhaInput = createRef();

  useEffect(() => nomeInput.current.resetError(), [nome]);
  useEffect(() => emailInput.current.resetError(), [email]);
  useEffect(() => senhaInput.current.resetError(), [senha]);

  const salvar = async (event) => {
    event.preventDefault();
    // console.log(nome, email, mensagem)

    const opcoes = {
      method: "POST",
      body: JSON.stringify({ descricao, email }),
      headers: {
        // Configurando cabeçalhos para requisições
        "Content-type": "application/json; charset=utf-8",
      },
    };
    // Script para envio dos dados para a API

    // ATENÇÃO: Usem o aqui o IP da sua máquina
    if (nome == "") {
      Alert.alert("Atenção", "Você deve preencher nome, e-mail e senha");
      nomeInput.current.focusOnError();
      return;
    }
    if (email == "") {
      Alert.alert("Atenção", "Você deve preencher nome, e-mail e senha");
      emailInput.current.focusOnError();
      return;
    }
    if (senha == "") {
      Alert.alert("Atenção", "Você deve preencher nome, e-mail e senha");
      senhaInput.current.focusOnError();
      return;
    }

    try {
      await fetch(`http://10.20.48.31:3000/perfil`, opcoes);
      alert("Dados Enviados");
      cadastrar();
    } catch (error) {
      console.log("Deu ruim".error.message);
    }
  };

  const cadastrar = () => {
    if (!email || !senha) {
      Alert.alert("Atenção", "Você deve preencher e-mail e senha");
      return;
    }

    createUserWithEmailAndPassword(auth, email, senha)
      .then(() => {
        console.log(auth);
        /* Ao fazer a criação do novo usuário (com email e senha), aproveitamos para atualizar
        via updateProfile a propriedade do auth que permite adicionar um nome ao usuário */
        updateProfile(auth.currentUser, {
          displayName: nome,
        });

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
    <KeyboardAvoidingView 
    behavior="position"
    style={estilos.viewSafe}>
      <StatusBar barStyle="default" />
      <ScrollView>
        <View style={estilos.viewFoto}>
          <Image source={logo} />
        </View>

        <View style={estilos.viewCadastrar}>
          <Text style={estilos.titulo}>Cadastro</Text>
        </View>

        <Input
          ref={nomeInput}
          iconName={"account-outline"}
          placeholder="Nome"
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
          value={nome}
          onChangeText={setNome}
        />

        <Input
          ref={emailInput}
          iconName={"email-outline"}
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
          <Pressable style={estilos.botao} onPress={salvar}>
            <Text style={estilos.textoBotao}>Cadastrar</Text>
          </Pressable>
        </View>

        <View style={estilos.viewLgpd}>
          <Text style={estilos.tituloLgpd}>
            Ao criar o seu cadastro, você concorda com a nossa Política de
            Privacidade
          </Text>

          <Text style={estilos.entrar}>
            Já tem cadastro?{" "}
            <Text style={estilos.textEntrar} >
              Entrar.
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Cadastro;

const estilos = StyleSheet.create({
  viewSafe: {
    flex: 1,
    justifyContent: "center",
  },
  viewFoto: {
    alignItems: "center",
  },
  viewCadastrar: {
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
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textoBotao: {
    fontSize: 24,
    color: "#E3BC40",
    textAlign: "center",
  },
  lgpd: {
    color: "#322727",
    margin: 10,
    textAlign: "center",
    fontSize: 15,
    lineHeight: 24,
  },
  viewLgpd: {
    alignItems: "center",
  },
  tituloLgpd: {
    padding: 8,
    marginVertical: 8,
    fontSize: 16,
    color: "#372727",
  },
  entrar: {
    color: "#322727",
    fontSize: 16,
  },
  textEntrar: {
    fontWeight: "bold",
  },
});