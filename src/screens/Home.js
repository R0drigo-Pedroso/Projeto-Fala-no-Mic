import {StatusBar,StyleSheet,Text,View,Image,Pressable,ScrollView, Alert, FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import imageteste from "../../assets/image/festahiphop.jpg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState, useEffect } from "react";

function Home({navigation}) {
  const [fontCarregar] = useFonts({
    nunitoOne: require("../../assets/fonts/NunitoSans-Regular.ttf"),
    carterTier: require("../../assets/fonts/CarterOne-Regular.ttf"),
  });
  const [posts, setPosts] = useState([]);


  if (!fontCarregar);

  useEffect(() => {
    async function getPosts() {
      try {
        // ATENÇÃO: Usem o aqui o IP da sua máquina
        const resposta = await fetch(
          `http://192.168.18.60:3000/evento/`
        );
        const dados = await resposta.json();
        setPosts(dados);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getPosts();
  }, []);


  const favoritar = async () => {
    
    const eventosFavoritos = await AsyncStorage.getItem("@favoritos")
    // 2) Havendo storage prévio, transformamos os dados de filme em objeto e os guardamos numa lista (array)
    let listaDeEventos = JSON.parse(eventosFavoritos)
    // console.log(listaDeFilmes)

    // 3) Se a lista não for indefinada, vamos iniciá-la com um array vazio
    if(!listaDeEventos){
      listaDeEventos = [];
    }

    // 4) Adicionamos os dados do filme na lista (array)
    listaDeEventos.push(posts)
    // 5) Finalmente, salvamos no storage dos dispositivos
    await AsyncStorage.setItem("@favoritos", JSON.stringify(listaDeEventos));

    Alert.alert("Favoritos", "Evento salvo com sucesso!")
    // console.log(listaDeFilmes)
  }

   

  return (
    <SafeAreaView style={estilos.corFundo}>
      <StatusBar barStyle="default" />
       <Text style={estilos.titulo}>Eventos</Text>  

      <FlatList
  data={posts}
  renderItem={({ item: { id, titulo, descricao, capaevento } }) => (
    <View style={estilos.areaConteudo}>
      <Image style={estilos.imageTamanho} source={{ uri: capaevento }} />
      <View style={estilos.descricao}>
        <View>
          <Text style={estilos.fontTitulo}>{titulo}</Text>
          <Text style={estilos.textDescricao}>{descricao}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable
            style={estilos.botaoSaiba}
            onPress={() => {
              navigation.navigate("DetalhesStack", { paramKey: id });
            }}
          >
            <Text style={estilos.textSaiba}>Saiba +</Text>
          </Pressable>
          <Pressable
            style={{ marginLeft: 85, marginTop: 10 }}
            onPress={() => favoritar(id, titulo, descricao, capaevento)}
          >
            <Ionicons name="heart-sharp" size={35} color={"black"} />
          </Pressable>
        </View>
      </View>
    </View>
  )}
  keyExtractor={(item) => item.id}
/>

    </SafeAreaView>
  );
}

export default Home;

const estilos = StyleSheet.create({
  corFundo: {
    backgroundColor: "#F7F7F7",
  },

  fontTitulo: {
    fontFamily: "carterTier",
    fontSize: 24,
  },

  descricao: {
    flex: 0.7,
    padding: 8,
    marginLeft: 8,
    marginBottom: 8,
    marginTop: 8,
  },

  textDescricao: {
    fontFamily: "nunitoOne",
    fontSize: 13,
    marginTop: 8,
    marginBottom: 8,
  },

  titulo: {
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 24,
    padding: 8,
    marginTop: 5,
    marginBottom: 5,
    fontFamily: "carterTier",
  },

  areaConteudo: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    elevation: 5,
  },

  botaoSaiba: {
    backgroundColor: "#322727",
    width: 80,
    padding: 8,
    marginTop: 16,
    alignItems: "center",
    borderRadius: 8,
  },

  textSaiba: {
    fontSize: 16,
    color: "#E3BC40",
    fontFamily: "carterTier",
  },

  imageTamanho: {
    width: "100%",
    height: "100%",
    flex: 0.4,
  },
});
