import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

function Publicar() {
  return (
    <SafeAreaView style={estilos.viewSafe}>
      <ScrollView>
        <View style={estilos.container}>
          <View style={estilos.viewTitulo}>
            <Text style={estilos.titulo}>Descrição:</Text>
          </View>

          <View style={estilos.backgroundCard}>
            <View style={estilos.card}>
              <Text style={estilos.texto}>Qual é o seu evento?</Text>
            </View>
          </View>

          <View style={estilos.viewTitulo}>
            <Text style={estilos.titulo}>Adicionar imagem:</Text>
          </View>

          <View style={estilos.backgroundCard}>
            <View style={estilos.cardImage}>
              <Entypo
                name="image"
                size={24}
                color="black"
                style={estilos.icon}
              />
            </View>
          </View>

          <View style={estilos.viewCampo}>
            <Text style={estilos.nomeLabel}>Endereço</Text>
            <TextInput style={estilos.input} placeholder="Av, Rua ou estrada" />
          </View>

          <View style={estilos.viewCampo}>
            <Text style={estilos.nomeLabel}>Data</Text>
            <TextInput style={estilos.input} placeholder="Define uma data" />
          </View>

          <View style={estilos.viewbotao}>
            <Pressable style={estilos.botao}>
              <Text style={estilos.botaoTexto}>Publicar</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Publicar;

const estilos = StyleSheet.create({
  viewSafe: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#f7f7f7 ",
  },
  viewTitulo: {
    padding: 8,
    marginVertical: 8,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  nomeLabel: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 4,
  },
  backgroundCard: {
    padding: 8,
  },
  card: {
    backgroundColor: "#FFFFFF",
    height: 180,
    padding: 8,
    width: "100%",
    borderRadius: 5,
    shadowColor: "#171717",
    shadowOffset: { left: -15, right: 15 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginVertical: 8,
  },
  cardImage: {
    backgroundColor: "#FFFFFF",
    height: 180,
    padding: 8,
    width: "100%",
    borderRadius: 5,
    shadowColor: "#171717",
    shadowOffset: { left: -15, right: 15 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginVertical: 8,
    justifyContent: "center",
  },
  texto: {
    padding: 8,
    color: "#372727",
    opacity: 0.5,
    fontSize: 13
  },
  icon: {
    textAlign: "center",
  },
  viewCampo: {
    padding: 8,
    marginBottom: 10,
  },
  input: {
    height: 50,
    padding: 8,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#171717",
    shadowOffset: { left: -15, right: 15 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop: 4,
  },
  viewbotao: {
    padding: 8,
  },
  botao: {
    width: "100%",
    height: 60,
    backgroundColor: "#322727",
    borderRadius: 8,
    justifyContent: "center",
  },
  botaoTexto: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#E3BC40",
    textAlign: "center",
  },
});
