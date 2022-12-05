import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

function Perfil({ navigation }) {
  return (
    <SafeAreaView style={estilos.viewSafe}>
      <StatusBar barStyle="default" />
      <View style={estilos.container}>
        <Pressable
          style={estilos.botao}
          onPress={() => {
            return navigation.navigate("Login");
          }}
        >
          <Text style={estilos.texto}>Enviar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
export default Perfil;

const estilos = StyleSheet.create({
  viewSafe: { flex: 1 },
  container: {
    padding: 8,
  },
  botao: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    padding: 8,
    width: "100%",
    borderRadius: 4,
  },
  texto: {
    color: "white",
    fontSize: 16,
  },
});
