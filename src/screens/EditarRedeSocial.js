import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Pressable,
  Image,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";

import FontLoader from "../components/useFonts/useFont";

const EditarRedeSocial = ({route}) => {

  const [deezer, setDeezer] = useState("");
  const [youtube, setYoutube] = useState("");
  const [spotify, setSpotity] = useState("");
  const [soundcloud, setSoundcloud] = useState("");
  const [instagram, setInstagram] = useState("");
  const [redes, setRedes] = useState("");

  useEffect(() => {
    async function getRede() {
      try {
         // ATENÇÃO: Usem o aqui o IP da sua máquina
        const resposta = await fetch(
          `http://192.168.18.60:3000/rede/${route.params.paramKey}`
        );
        const dados = await resposta.json();
        setRedes(dados);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getRede();
  }, []);

  const salvarRedes = async(event) => {
  event.preventDefault();
  let perfilId = route.params.paramKey;

  if(!redes) {
    const opcoes = {
      method: "POST",
      body: JSON.stringify({ soundcloud, instagram, spotify, youtube, deezer, perfilId }),
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    };
  
    try {
      await fetch(`http://192.168.18.60:3000/rede`, opcoes);
      alert("Dados Enviados");
    } catch (error) {
      console.error("Deu ruim", error.message);
      setUploadInProgress(false);
    }
  } else {
     
    const opcoes = {
      method: "PATCH",
      body: JSON.stringify({ Deezer: deezer, youtube: youtube, spotify: spotify, soundcloud: soundcloud, instagram: instagram }),
      headers: {
        // Configurando cabeçalhos para requisições
        "Content-type": "application/json; charset=utf-8",
      },
    };
    // Script para envio dos dados para a API

    try {
      await fetch(
        `http://192.168.18.60:3000/rede/${perfilId}`,
        opcoes
      );
      alert("Atualizar rede");
     
    } catch (error) {
      console.log("Deu ruim".error.message);
    }
  }
  
}
  return (
    <KeyboardAvoidingView style={estilos.viewSafe}>
      <ScrollView>
        <FontLoader>
          <View style={estilos.container}>
            <View style={estilos.backgroundCard}>
              <Text style={estilos.titulo}>Deezer</Text>
              {redes && 
              <TextInput
                style={estilos.input}
                placeholder={redes.deezer}
                value={deezer}
                onChangeText={setDeezer}
              />}
              {!redes &&
                <TextInput
                style={estilos.input}
                placeholder="Digite ou cole o link"
                value={deezer}
                onChangeText={setDeezer}
              />
              }
            </View>

            <View style={estilos.backgroundCard}>
         
              <Text style={estilos.titulo}>Youtube</Text>
              {redes && 
              <TextInput
                style={estilos.input}
                placeholder={redes.youtube}
                value={youtube}
                onChangeText={setYoutube}
              />}

               {!redes && 
              <TextInput
                style={estilos.input}
                placeholder="Digite ou cole o link"
                value={redes.youtube}
                onChangeText={setYoutube}
              />}
            </View>

            <View style={estilos.backgroundCard}>
              <Text style={estilos.titulo}>Spotify</Text>
              {redes && 
              <TextInput
                style={estilos.input}
                placeholder={redes.spotify}
                value={spotify}
                onChangeText={setSpotity}
              />}
              {!redes && 
              <TextInput
                style={estilos.input}
                placeholder="Digite ou cole o link"
                value={spotify}
                onChangeText={setSpotity}
              />}
            </View>

            <View style={estilos.backgroundCard}>
              <Text style={estilos.titulo}>Soundcloud</Text>

              <TextInput
                style={estilos.input}
                placeholder="Digite ou cole o link"
                value={soundcloud}
                onChangeText={setSoundcloud}
              />
            </View>

            <View style={estilos.backgroundCard}>
              <Text style={estilos.titulo}>Instagram</Text>
              <TextInput
                style={estilos.input}
                placeholder="Digite ou cole o link"
                value={instagram}
                onChangeText={setInstagram}
              />
            </View>

            <View style={estilos.viewbotao}>
              <Pressable style={estilos.botao} onPress={salvarRedes}>
                <Text style={estilos.botaoTexto}>Salvar</Text>
              </Pressable>
            </View>
          </View>
        </FontLoader>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditarRedeSocial;

const estilos = StyleSheet.create({
  viewSafe: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: "#f7f7f7 ",
    padding: 8,
  },

  titulo: {
    fontFamily: "carterOne",
    fontSize: 24,
    padding: 4,
  },

  backgroundCard: {
    marginTop: 8,
    padding: 8,
    marginBottom: 8,
  },

  input: {
    height: 50,
    padding: 8,
    borderRadius: 5,
    marginTop: 8,
    fontFamily: "nunitoSans",
    /* config box shadow (Para android precisa colocar a propriedade "elevation") */
    backgroundColor: "white",
    shadowColor: "#171717",
    shadowOffset: { left: -15, right: 15 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },

  viewbotao: {
    marginTop: 8,
    padding: 8,
  },

  botao: {
    width: "100%",
    height: 50,
    backgroundColor: "#322727",
    borderRadius: 8,
    justifyContent: "center",
  },

  botaoTexto: {
    fontSize: 24,
    color: "#E3BC40",
    textAlign: "center",
    fontFamily: "carterOne",
  },
});
