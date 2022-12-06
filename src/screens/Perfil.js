import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import fruta from "../../assets/image/fruta.jpg";
import astronauta from "../../assets/image/astronauta.jpg";

function Perfil() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={estilos.viewSafe}>
      <StatusBar barStyle="default" />

      <ScrollView>
        <View style={estilos.container}>
          <ImageBackground
            source={fruta}
            resizeMode="cover"
            style={estilos.imagem}
          >
            <View style={estilos.viewFoto}>
              <Image source={astronauta} style={estilos.foto} />
              <Text style={estilos.usuario}>Nome do Usuário</Text>
              <Text style={estilos.endereco}>São Paulo, Brasil</Text>
            </View>
          </ImageBackground>

          <View style={estilos.backgroundCard}>
            <View style={estilos.card}>
              <Text style={estilos.texto}>Descrição</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Perfil;

const estilos = StyleSheet.create({
  viewSafe: { flex: 1, backgroundColor: "#F7F7F7" },
  container: {},
  imagem: {
    height: "90%",
  },
  user: {
    height: "50%",
    borderRadius: "50%",
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 350,
  },
  viewFoto: {
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, 0.8)",
  },
  usuario: {
    color: "white",
    fontSize: 18,
    marginVertical: 10,
    fontWeight: "bold",
  },
  endereco: {
    color: "white",
    fontSize: 16,
    marginVertical: 5,
  },
  card: {
    backgroundColor: "#FFFFFF",
    height: "80%",
    padding: 8,
    width: "90%",
    justifyContent: "center",
  },
  texto: {
    color: "black",
  },
  backgroundCard: {
    alignItems: "center",
  },
});
