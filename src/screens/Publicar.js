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
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

function Publicar() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView style={estilos.viewSafe}>
      <ScrollView>
        <View style={estilos.container}>
          <View style={estilos.backgroundCard}>
            <Text style={estilos.titulo}>Titulo:</Text>

            <TextInput
              style={estilos.cardTitulo}
              placeholder="Digite seu nome"
            ></TextInput>
          </View>
          <View style={estilos.backgroundCard}>
            <Text style={estilos.titulo}>Descrição:</Text>

            <View style={estilos.cardArea}>
              <Text style={estilos.texto}>Qual é o seu evento?</Text>
            </View>
          </View>
          <Pressable onPress={pickImage} style={estilos.backgroundCard}>
            <Text style={estilos.tituloImagem}>Adicionar imagem:</Text>
            <View>
              {image && (
                <Image
                  source={{ uri: image }}
                  style={{ width: "100%", height: 200 }}
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
            </View>
          </Pressable>
          <View style={estilos.backgroundCard}>
            <Text style={estilos.titulo}>Endereço</Text>

            <TextInput style={estilos.input} placeholder="Av, Rua ou estrada" />
          </View>

          <View style={estilos.backgroundCard}>
            <Text style={estilos.titulo}>Data</Text>
            <TextInput style={estilos.input} placeholder="Define uma data" />
          </View>

          <View style={estilos.backgroundCard}>
            <Text style={estilos.titulo}>Horário</Text>
            <TextInput style={estilos.input} placeholder="Define uma data" />
          </View>

          <View style={estilos.viewbotao}>
            <Pressable style={estilos.botao}>
              <Text style={estilos.botaoTexto}>Publicar</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
export default Publicar;

const estilos = StyleSheet.create({
  viewSafe: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7 ",
    padding: 8,
  },

  viewTitulo: {
    paddingLeft: 8,
    marginVertical: 8,
  },

  titulo: {
    paddingLeft: 4,
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "carterTier",
  },

  backgroundCard: {
    marginTop: 16,
    padding: 8,
    marginBottom: 8,
  },

  cardArea: {
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

  cardTitulo: {
    backgroundColor: "#FFFFFF",
    height: 50,
    padding: 8,
    width: "100%",
    borderRadius: 5,
    shadowColor: "#171717",
    shadowOffset: { left: -15, right: 15 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginVertical: 8,
  },

  tituloImagem: {
    paddingLeft: 4,
    marginBottom: 8,
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "carterTier",
  },

  cardImage: {
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
  texto: {
    padding: 8,
    color: "#372727",
    opacity: 0.5,
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
    marginTop: 8,

    fontFamily: "nunitoOne",
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
    fontWeight: "bold",
    color: "#E3BC40",
    textAlign: "center",
  },
});
