import { StyleSheet, Text, View, Image, KeyboardAvoidingView, ScrollView, Pressable, Alert } from 'react-native'
import React from 'react'
import { useState, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";
import FontLoader from "../components/useFonts/useFont";
import { FontAwesome } from '@expo/vector-icons';

const Detalhes = ({route}) => {
  const evento = route.params.paramKey

  console.log(evento)
  const [image, setImage] = useState("");
  teste = () => {
    Alert.alert("Testando", "Isso ai!")
  }

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    async function getPosts() {
      try {
        // ATENÇÃO: Usem o aqui o IP da sua máquina
        const resposta = await fetch(
          `http://10.20.48.31:3000/evento/${evento}`
        );
        const dados = await resposta.json();
        setPosts(dados);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getPosts();
  }, []);

  return (
    <KeyboardAvoidingView style={estilos.viewSafe}>
      <ScrollView>
        <FontLoader>
          <View style={estilos.container}>
             
                <Image 
                  source={{uri: posts.capaevento}}
                  style={{width: "100%", height: 200}}
                />
             
             

            <View style={estilos.cardUsuario}>
            <Pressable onPress={teste} style={{flexDirection: "row", alignItems:"center"}}>
            <View style={estilos.imagemPerfil}>
              <FontAwesome name="user-circle-o" size={50} color="black" />
            </View>
              <View>
                <Text style={estilos.donoPost}>Nome do usuário</Text>
                  <Text style={estilos.visualizarPerfil}>Visualizar Perfil</Text>
              </View>
              </Pressable>

              {/* <View style={estilos.iconePerfil}>
                <FontAwesome name="user-circle-o" size={50} color="black" />
              </View> */}
            </View>

            <View style={estilos.cardTitulo}>
              <Text style={estilos.nomeEvento}>{posts.titulo}</Text>
              <Text style={estilos.dataEvento}>Seg, 25 Ago - 10:00hs  às 13:00hs </Text>
            </View>

            <View style={estilos.descricao}>
              <Text style={estilos.tituloDescricao}>Descrição:</Text>
              <Text style={estilos.descricaoEvento}>{posts.descricao}</Text>
            </View>

            <View style={estilos.local}>
              <Text style={estilos.tituloLocalizacao}>Localização:</Text>
              <Text style={estilos.endereco}>{posts.endereco} </Text>
            </View>
          </View>
        </FontLoader>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Detalhes

const estilos = StyleSheet.create({

  viewSafe: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7 ",
    padding: 8,
    marginTop: 10,
  },
  
  cardImage: {
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    height: 180,
    width: "100%",
    borderRadius: 5,
    shadowColor: "#171717",
    shadowOffset: { left: -15, right: 15 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent: "center",
  },
  icon: {
    textAlign: "center"
  },
  cardUsuario: {
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    height: 100
  },
  donoPost: {
    fontFamily: "carterOne",
    fontSize: 22,
    marginLeft: 40,
    marginTop: 20
  },
  visualizarPerfil: {
    marginLeft: 40
  },
    imagemPerfil: {
      paddingTop: 25,
      marginLeft: 12
    },
  cardTitulo: {
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    height: 100
  },
  nomeEvento: {
    fontFamily: "carterOne",
    fontSize: 32,
    marginTop: 10,
    marginLeft: 10
  },
  dataEvento: {
    marginLeft: 10
  },
  descricao: {
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    height: 200,
  },
  descricaoEvento: {
    marginLeft: 10
  },
  tituloDescricao: {
    fontFamily: "carterOne",
    fontSize: 25,
    marginTop: 10,
    marginLeft: 10
  },
  local: {
    marginTop: 10,
    backgroundColor: "#FFFFFF", 
  },
  tituloLocalizacao: {
    fontSize: 25,
    fontFamily: "carterOne",
    marginLeft: 10
  },
  endereco: {
    marginTop: 1,
    marginLeft: 10
  }



})