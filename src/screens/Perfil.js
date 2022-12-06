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
import { FontAwesome5 } from "@expo/vector-icons";

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
              <Text style={estilos.texto}>Descrição: </Text>
              <Text>loremdmasçflnsaçlfnlfnddddddddddddddddddddddddddddddd</Text>
              <Text>loremdmasçflnsaçlfnlfnddddddddddddddddddddddddddddddd</Text>
              <Text>loremdmasçflnsaçlfnlfnddddddddddddddddddddddddddddddd</Text>
              <Text>loremdmasçflnsaçlfnlfnddddddddddddddddddddddddddddddd</Text>
            </View>
          </View>

          <View style={estilos.redes}>
            <FontAwesome5 name="deezer" size={24} color="red" />
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
    height: 500,
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
    height: 500,
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
    height: 250,
    padding: 12,
    width: "90%",
    borderRadius: 5,
    shadowColor: "#171717",
    shadowOffset: { left: -15, right: 15 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  texto: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
  backgroundCard: {
    alignItems: "center",
  },
  redes: {
    flex: 1,
    alignItems: "center",
    marginVertical: 50,
  },
});
