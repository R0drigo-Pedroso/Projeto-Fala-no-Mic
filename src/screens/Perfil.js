import { ImageBackground, SafeAreaView, StatusBar,StyleSheet,Text,View,Image,ScrollView,Pressable,
TextInput, Button, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import fruta from "../../assets/image/fruta.jpg";
import astronauta from "../../assets/image/astronauta.jpg";
/* Import dos ícones */
import { FontAwesome5 } from "@expo/vector-icons";

import Login from "./Login";
import Cadastro from "./Cadastro";

import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import * as ImagePicker from 'expo-image-picker';
import { firebaseDois } from "../../firebaseConfigDois"


function Perfil() {
  /* Recuperando os dados do usuário atual (logado) */
  const usuarioLogado = auth.currentUser;
  // console.log(usuarioLogado);
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);


  useEffect(() => {
    async function getPosts() {
      try {
         // ATENÇÃO: Usem o aqui o IP da sua máquina
        const resposta = await fetch(`192.168.18.60:3000/perfil/${usuarioLogado.email}`);
        const dados = await resposta.json();
        setPosts(dados);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getPosts();
  }, []);

  const [products, setProducts] = useState([]);
  const navigation = useNavigation();
  console.log(posts)


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

  const uploadingImage = async () => {
    setUploading(true);
    const response = await fetch(image);
    const blob = await response.blob();
    const filename = image.substring(image.lastIndexOf("/") + 1);
    let ref = firebaseDois.storage().ref("eventos/").child(filename).put(blob);

    try {
      await ref;
    } catch (error) {
      console.log(error);
    }
    setUploading(false);
    Alert.alert("photo Uploaded");
    setImage(null);
  };





console.log(posts.descricao)
   
  return (
    <SafeAreaView style={estilos.viewSafe}>
      <StatusBar barStyle="default" />

      <ScrollView>
        <View style={estilos.container}>
          {!image && 
          <ImageBackground
            source={fruta}
            resizeMode="cover"
            style={estilos.imagem}
          >
            <View style={estilos.viewFoto}>
              <Image source={astronauta} style={estilos.foto} />
              <Text style={estilos.usuario}>{usuarioLogado.displayName}</Text>
              
                      <Text style={estilos.endereco}>{posts.email}</Text>

            <Pressable style={estilos.editCapa} onPress={pickImage}><Text style={{color: "white", fontWeight: "bold", fontSize:18}}>Editar Capa</Text></Pressable>     
            </View>
          </ImageBackground>
          }
          {image && 
           <ImageBackground
           source={{ uri: image }}
           resizeMode="cover"
           style={estilos.imagem}
         >
           <View style={estilos.viewFoto}>
             <Image source={astronauta} style={estilos.foto} />
             <Text style={estilos.usuario}>{usuarioLogado.displayName}</Text>
             
                     <Text style={estilos.endereco}>{posts.email}</Text>

            {!image && 
           <Pressable style={estilos.editCapa} onPress={pickImage}><Text style={{color: "white", fontWeight: "bold", fontSize:18}}>Editar Capa</Text></Pressable> }    
            {image && 
           <Pressable style={estilos.editCapa} onPress={uploadingImage}><Text style={{color: "white", fontWeight: "bold", fontSize:18}}>Salvar Capa</Text></Pressable> }    
           </View>
         </ImageBackground>}

          <View style={estilos.backgroundCard}>
            <View style={estilos.card}>
              <Text style={estilos.titulo}>Descrição:</Text>
              <TextInput 
              style={estilos.texto}
              value={products.email}
              />
               <Pressable style={estilos.editar} onPress={() => {
                editarPerfil()
               }}><Text style={{fontWeight:"bold", fontSize: 18}}>Editar</Text></Pressable> 
            </View>
          </View>

          <View style={estilos.redes}>
            <View style={estilos.nomeRede}>
              <FontAwesome5 name="deezer" size={32} color="black" />
              <Text style={estilos.textIcon}>deezer</Text>
            </View>

            <View style={estilos.nomeRede}>
              <FontAwesome5 name="youtube" size={32} color="black" />
              <Text style={estilos.textIcon}>youtube</Text>
            </View>

            <View style={estilos.nomeRede}>
              <FontAwesome5 name="spotify" size={32} color="black" />
              <Text style={estilos.textIcon}>spotify</Text>
            </View>

            <View style={estilos.nomeRede}>
              <FontAwesome5 name="soundcloud" size={32} color="black" />
              <Text style={estilos.textIcon}>soundcloud</Text>
            </View>

            <View style={estilos.nomeRede}>
              <FontAwesome5 name="instagram" size={32} color="black" />
              <Text style={estilos.textIcon}>instagram</Text>
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
    height: 300,
    padding: 16,
    width: "90%",
    borderRadius: 5,
    shadowColor: "#171717",
    shadowOffset: { left: -15, right: 15 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginVertical: 24,
  },
  titulo: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    padding: 8,
  },
  texto: {
    padding: 8,
    lineHeight: 20,
    fontSize: 13,
  },
  backgroundCard: {
    alignItems: "center",
  },
  redes: {
    flexDirection: "column",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 24,
  },
  nomeRede: {
    alignItems: "center",
  },
  textIcon: {
    marginVertical: 8,
  },
  editar: {
    position: "absolute",
    top: 260,
    left: 250
  },
  editCapa: {
    position: "absolute",
    bottom: 450,
    left: 260
  }
});
