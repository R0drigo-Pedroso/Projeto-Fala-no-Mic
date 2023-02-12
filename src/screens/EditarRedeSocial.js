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
import React from "react";

import FontLoader from "../components/useFonts/useFont";

const EditarRedeSocial = () => {
  return (
    <KeyboardAvoidingView style={estilos.viewSafe}>
      <ScrollView>
        <FontLoader>
          <View style={estilos.container}>
            <View style={estilos.backgroundCard}>
              <Text style={estilos.titulo}>Deezer</Text>

              <TextInput
                style={estilos.input}
                placeholder="Digite ou cole o link"
              />
            </View>

            <View style={estilos.backgroundCard}>
              <Text style={estilos.titulo}>Youtube</Text>
              <TextInput
                style={estilos.input}
                placeholder="Digite ou cole o link"
              />
            </View>

            <View style={estilos.backgroundCard}>
              <Text style={estilos.titulo}>Spotify</Text>
              <TextInput
                style={estilos.input}
                placeholder="Digite ou cole o link"
              />
            </View>

            <View style={estilos.backgroundCard}>
              <Text style={estilos.titulo}>Soundcloud</Text>

              <TextInput
                style={estilos.input}
                placeholder="Digite ou cole o link"
              />
            </View>

            <View style={estilos.backgroundCard}>
              <Text style={estilos.titulo}>Instagram</Text>
              <TextInput
                style={estilos.input}
                placeholder="Digite ou cole o link"
              />
            </View>

            <View style={estilos.viewbotao}>
              <Pressable style={estilos.botao}>
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
