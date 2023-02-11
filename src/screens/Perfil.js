import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  TextInput,
  Button,
  Alert,
} from "react-native";
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
import * as ImagePicker from "expo-image-picker";
import { firebaseDois } from "../../firebaseConfigDois";

function Perfil() {
  /* Recuperando os dados do usuário atual (logado) */
  const usuarioLogado = auth.currentUser;
  // console.log(usuarioLogado);
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState("");
  const [perfil, setperfil] = useState("");
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [urlFoto, setUrlFoto] = useState(null);
  const [editar, setEditar] = useState("api");
  const [descricao, setDescricao] = useState("");





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

  const [products, setProducts] = useState([]);
  const navigation = useNavigation();
  console.log(posts);

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

  const alterarPerfil = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setperfil(result.assets[0].uri);
    }
  };

console.log(image)

  const logout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        navigation.replace("LoginStack");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  const [uploadInProgress, setUploadInProgress] = useState(false);

  const salvarCapa = async () => {
    const response = await fetch(image);
    const blob = await response.blob();
    const filename = image.substring(image.lastIndexOf("/") + 1);
    let upload = firebaseDois.storage().ref("eventos/").child(filename).put(blob);

    upload.on("state_changed", async function () {
      const url_imagem = await upload.snapshot.ref.getDownloadURL();
      var imagemCapa = url_imagem;
    
    


    // try {
    //   await upload;
    // } catch (error) {
    //   console.log(error);
    // }
    

    
    setUploading(false);
    // setImage(null);
      // event.preventDefault();
    // console.log(nome, email, mensagem)
    console.log(urlFoto)


      const opcoes = {
        method: "PATCH",
        body: JSON.stringify({ capa: imagemCapa}),
        headers: {
          // Configurando cabeçalhos para requisições
          "Content-type": "application/json; charset=utf-8",
        },
      };
      // Script para envio dos dados para a API
  
      try {
        await fetch(`http://192.168.18.60:3000/perfil/${posts.id}`, opcoes);
        alert("Dados Enviados");
        setImage("")
        setUploadInProgress(false);
      } catch (error) {
        console.log("Deu ruim".error.message);
        setUploadInProgress(false);

      }
    
    
    });
    
    
  };

 const editarPerfil = () => {
    setEditar("alterar");
  }

const salvarDescricao = async (event) => {

    const opcoes = {
      method: "PATCH",
      body: JSON.stringify({descricao}),
      headers: {
        // Configurando cabeçalhos para requisições
        "Content-type": "application/json; charset=utf-8",
      },
    };
    // Script para envio dos dados para a API

    try {
      await fetch(`http://192.168.18.60:3000/perfil/${posts.id}`, opcoes);
      alert("Dados Enviados");
      setEditar("alterada");
    } catch (error) {
      console.log("Deu ruim".error.message);
    }
}


  console.log(urlFoto);

  return (
    <SafeAreaView style={estilos.viewSafe}>
      <StatusBar barStyle="default" />

      <ScrollView>
        <View style={estilos.container}>
          {!image && 
          <ImageBackground
            source={{uri: posts.capa}}
            resizeMode="cover"
            style={estilos.imagem}
          >
            <View style={estilos.viewFoto}>
              <Pressable onPress={alterarPerfil}>
                {perfil && 
                  <Image source={{uri: perfil}} style={estilos.foto} />
                }
                 {!perfil && 
                    <Image source={astronauta} style={estilos.foto} />
              }
              </Pressable>
              <Text style={estilos.usuario}>{usuarioLogado.displayName}</Text>
              
                     

            <Pressable style={estilos.editCapa} onPress={pickImage}><Text style={{color: "white", fontWeight: "bold", fontSize:18}}>Editar Capa</Text></Pressable>   
            <Pressable style={estilos.Sair} onPress={logout}><Text style={{color: "white", fontWeight: "bold", fontSize:18}}>Sair</Text></Pressable>   
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
             
                     <Text style={estilos.endereco}></Text>

            {!image && 
           <Pressable style={estilos.editCapa} onPress={pickImage}><Text style={{color: "white", fontWeight: "bold", fontSize:18}}>Editar Capa</Text></Pressable> }    
            {image && 
           <Pressable style={estilos.editCapa} onPress={salvarCapa}><Text style={{color: "white", fontWeight: "bold", fontSize:18}}>Salvar Capa</Text></Pressable> }   
            <Pressable style={estilos.Sair} onPress={logout}><Text style={{color: "white", fontWeight: "bold", fontSize:18}}>Sair</Text></Pressable>    
           
           </View>
         </ImageBackground>}

          <View style={estilos.backgroundCard}>
            <View style={estilos.card}>
              <Text style={estilos.titulo}>Descrição:</Text>
              {editar == "api" && 
              <Text style={estilos.texto}>{posts.descricao}</Text>}
               {editar == "alterada" && 
              <Text style={estilos.texto}>{descricao}</Text>}
              {editar == "alterar" && 
              <TextInput 
              style={estilos.texto}
              value={descricao}
              onChangeText={setDescricao}
              />}

              {editar == "alterar" && 
               <Pressable style={estilos.editar} onPress={() => {
                salvarDescricao()
               }}><Text style={{fontWeight:"bold", fontSize: 18}}>Salvar</Text></Pressable> }
               {editar == "api" && 
               <Pressable style={estilos.editar} onPress={() => {
                editarPerfil()
               }}><Text style={{fontWeight:"bold", fontSize: 18}}>Editar</Text></Pressable>}
                {editar == "alterada" && 
               <Pressable style={estilos.editar} onPress={() => {
                editarPerfil()
               }}><Text style={{fontWeight:"bold", fontSize: 18}}>Editar</Text></Pressable>}
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
    left: 30,
  },
  Sair:{
    position: "absolute",
    bottom: 450,
    left: 320,
  }
});
