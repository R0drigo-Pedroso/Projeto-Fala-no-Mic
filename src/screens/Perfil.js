import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import fruta from "../../assets/image/fruta.jpg";

function Perfil() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={estilos.viewSafe}>
      <StatusBar barStyle="default" />
      <View style={estilos.container}>
        <ImageBackground
          source={fruta}
          resizeMode="cover"
          style={estilos.imagem}
        >
          <Text style={estilos.text}>Inside</Text>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
export default Perfil;

const estilos = StyleSheet.create({
  viewSafe: { flex: 1 },
  container: {},
  imagem: {
    height: "80%",
  },
});
