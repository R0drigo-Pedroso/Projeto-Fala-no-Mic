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
  ActivityIndicator } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useEffect } from "react";
import FontLoader from "../components/useFonts/useFont";
import { auth } from "../../firebaseConfig";
import { firebaseDois } from "../../firebaseConfigDois";


function Publicar({navigation}) {

  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [capaEvento, setcapaEvento] = useState("")
  const [endereco, setEndereco] = useState("")
  const [dia, setDia] = useState("")
  const [horario, setHorario] = useState("")
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState("");

  // const [perfilId, setperfilid] = useState(null)






  const usuarioLogado = auth.currentUser;

  if(!usuarioLogado) {
    Alert.alert("Atenção", "Você precisa estar logado para postar um evento", [
      {
        text: "Cadastrar",
        onPress: () => {
          // setEmail("");
          // setSenha("");
          // return false;
          navigation.replace("CadastroStack");
        },
        style: "cancel",
      },
      {
        text: "Efetuar Login",
        onPress: () => {
          navigation.replace("LoginStack");
        },
        style: "default",
      },
    ]);
  }


  const [contadorText, setContadorText] = useState("");

  const contadorTextChange = (inputText) => {
    if (inputText.length <= 250) {
      setContadorText(inputText);
    }
  };

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

  useEffect(() => {
    async function getPosts() {
      try {
        // ATENÇÃO: Usem o aqui o IP da sua máquina
        const resposta = await fetch(
          `http://192.168.18.60:3000/perfil/${usuarioLogado.email}`
        );
        const dados = await resposta.json();
        setPosts(dados);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getPosts();
  }, []);

  console.log(posts.id)

  const [uploadInProgress, setUploadInProgress] = useState(false);
  const [progressPercentage, setProgressPercentage] = useState(0);
  
  
  const salvarEvento = async (event) => {
    event.preventDefault();
  
    if (!uploadInProgress) {
      setUploadInProgress(true);
  
      const response = await fetch(image);
      const blob = await response.blob();
      const filename = image.substring(image.lastIndexOf("/") + 1);
      let upload = firebaseDois.storage().ref("eventos/").child(filename).put(blob);
  
      upload.on("state_changed", (snapshot) => {
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      }, (error) => {
        console.error(error.message);
      }, async () => {
        const url_imagem = await upload.snapshot.ref.getDownloadURL();
        var capaevento = url_imagem;
  
        const perfilId = posts.id
  
        const opcoes = {
          method: "POST",
          body: JSON.stringify({ titulo, descricao, capaevento, endereco, dia, horario, perfilId }),
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
        };
  
        try {
          await fetch(`http://192.168.18.60:3000/evento`, opcoes);
          alert("Dados Enviados");
          setUploadInProgress(false);
        } catch (error) {
          console.error("Deu ruim", error.message);
          setUploadInProgress(false);
        }
      });
    }
  };
  


  return (
    <KeyboardAvoidingView style={estilos.viewSafe}>
      <ScrollView>
        <FontLoader>
          <View style={estilos.container}>
            <View style={estilos.backgroundCard}>
              <Text style={estilos.titulo}>Titulo:</Text>
              <TextInput
                style={estilos.cardTitulo}
                placeholder="Digite seu nome"
                value={titulo}
                onChangeText={setTitulo}
              ></TextInput>
            </View>
            <View style={estilos.backgroundCard}>
              <Text style={estilos.titulo}>Descrição:</Text>

              <View style={estilos.cardArea}>
                {/* <TextInput
                editable={true}
                multiline
                  style={estilos.texto}
                  placeholder="Digite sua mensagem"
                  onChangeText={contadorTextChange}
                  value={contadorText}
                />
                {contadorText.length == 250 ||  contadorText.length < 250 && <Text>Limite máximo alcançado</Text>} */}
                <TextInput
                editable={true}
                multiline
                  style={estilos.texto}
                  placeholder="Digite sua mensagem"
                  onChangeText={setDescricao}
                  value={descricao}
                />
               
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
            {uploadInProgress && (
  <ActivityIndicator size="large" color="5451a6" />
)}


            <View style={estilos.backgroundCard}>
              <Text style={estilos.titulo}>Endereço</Text>

              <TextInput
                style={estilos.input}
                placeholder="Av. Rua ou estrada"
                onChangeText={setEndereco}
                value={endereco}
              />
            </View>

            <View style={estilos.backgroundCard}>
              <Text style={estilos.titulo}>Data</Text>
              <TextInput style={estilos.input} placeholder="Define uma data" 
              onChangeText={setDia}
              value={dia}/>
            </View>

            <View style={estilos.backgroundCard}>
              <Text style={estilos.titulo}>Horário</Text>
              <TextInput style={estilos.input} placeholder="Define uma data" 
              onChangeText={setHorario}
              value={horario}/>

            </View>

            <View style={estilos.viewbotao}>
              <Pressable style={estilos.botao} onPress={salvarEvento}>
                <Text style={estilos.botaoTexto}>Publicar</Text>
              </Pressable>
            </View>
          </View>
        </FontLoader>
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
    fontFamily: "carterOne",
    fontSize: 24,
    padding: 4,
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

    backgroundColor: "white",
    shadowColor: "#171717",
    shadowOffset: { left: -15, right: 15 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
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
    elevation: 3,

    fontFamily: "nunitoSans",
  },

  tituloImagem: {
    paddingLeft: 4,
    marginBottom: 8,
    fontSize: 24,
    fontFamily: "carterOne",
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

    backgroundColor: "white",
    shadowColor: "#171717",
    shadowOffset: { left: -15, right: 15 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  texto: {
    padding: 4,
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