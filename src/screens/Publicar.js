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
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { storage } from "../../firebaseConfig";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const salvarEvento = async (event) => {
  event.preventDefault();
  // console.log(nome, email, mensagem)

  const opcoes = {
    method: "POST",
    body: JSON.stringify({ descricao, email }),
    headers: {
      // Configurando cabeçalhos para requisições
      "Content-type": "application/json; charset=utf-8",
    },
  };
  // Script para envio dos dados para a API

  // ATENÇÃO: Usem o aqui o IP da sua máquina
  try {
    await fetch(`http://10.20.47.68:3000/evento`, opcoes);
    alert("Dados Enviados");
    cadastrar();
  } catch (error) {
    console.log("Deu ruim".error.message);
  }
};

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

          <Pressable onPress={pickImage}>
            <View style={estilos.backgroundCard}>
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
