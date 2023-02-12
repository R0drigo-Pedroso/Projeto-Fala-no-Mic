import { StyleSheet, Text, View, Image,   KeyboardAvoidingView, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import FontLoader from "../components/useFonts/useFont";
import { FontAwesome } from '@expo/vector-icons';

const Detalhes = () => {

  const [image, setImage] = useState("");

  return (
    <KeyboardAvoidingView style={estilos.viewSafe}>
      <ScrollView>
        <FontLoader>
          <View style={estilos.container}>
              {image && (
                <Image 
                  source={{uri: image}}
                  style={{width: "100%", height: 200}}
                />
              )}
              {!image && (
                <View style={estilos.cardImage}>
                  <Entypo
                  name="image"
                  size={24}
                  color="black"
                  style={estilos.icon}
                  />
                </View>
                )}
            <View style={estilos.cardUsuario}>
              <Text style={estilos.donoPost}>Nome do usuário</Text>
              <Pressable>
                <Text style={estilos.visualizarPerfil}>Visualizar Perfil</Text>
              </Pressable>
              <View>
              <FontAwesome style={estilos.iconePerfil} name="user-circle-o" size={50} color="black" />
              </View>
            </View>

            <View style={estilos.cardTitulo}>
              <Text style={estilos.nomeEvento}>Show em FM</Text>
              <Text style={estilos.dataEvento}>Seg, 25 Ago - 10:00hs  às 13:00hs </Text>
            </View>

            <View style={estilos.descricao}>
              <Text style={estilos.tituloDescricao}>Descrição:</Text>
              <Text style={estilos.descricaoEvento}>id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada.</Text>
            </View>

            <View style={estilos.local}>
              <Text style={estilos.tituloLocalizacao}>Localização:</Text>
              <Text style={estilos.endereco}>AV. Lorem Ipsum is simply dummy, 200 - Bairro Cidade Líder </Text>
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
    marginLeft: 10
  },
  visualizarPerfil: {
    marginLeft: 10
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