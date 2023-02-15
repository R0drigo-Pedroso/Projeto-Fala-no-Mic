import { StatusBar, View, Text, SafeAreaView, StyleSheet, Image, Pressable, Share, FlatList, ScrollView } from "react-native";
import imageteste from "../../assets/image/festahiphop.jpg";
import { useFonts } from "expo-font";
import { useState, useEffect } from "react";
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";


function Favoritos() {

  const [listaFavoritos, setListaFavoritos] = useState([]);


  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    async function carregarFavoritos() {
      try {
        // Acessar o storage @favoritos e tentar carregar os dados existentes
        const dados = await AsyncStorage.getItem("@favoritos");

        // Havendo dados, transformamos eles em array de objetos
        const eventos = JSON.parse(dados);

        // Se realmente tem dados (ou seja, não é null), atualizamos o componente
        if (dados != null) {
          setListaFavoritos(eventos); // state de dados do componente
        }
      } catch (error) {
        console.log("Deu ruim no carregamento: " + error.message);
      }
    }

    carregarFavoritos();
  }, []);

  console.log(listaFavoritos.length)

  return (
    <ScrollView>
             <Text style={estilos.titulo}>Favoritos</Text>  

          <View  style={estilos.areaConteudo}>
            <Image style={estilos.imageTamanho} source={imageteste} />
            
            <View style={estilos.descricao}>
              
              <View>
                <Text style={estilos.fontTitulo}>Em breve!</Text>
                <Text style={estilos.textDescricao}>
                 A funcionalidade de favoritos está em desenvolvimento e em breve estará inserida neste projeto
                </Text>
              </View>
              {/* 
              <View style={estilos.interacoes}>
                <Pressable style={estilos.botaoSaiba}>
                  <Text style={estilos.textSaiba}>Saiba +</Text>
                </Pressable> */}

                {/* <Pressable style={estilos.social} onPress={onShare}>
                  <Ionicons name="share-social" size={24} color="black" />
                </Pressable>
                <Pressable style={estilos.delete}>
                  <Ionicons name="trash-bin" size={24} color="black" />
                </Pressable> */}
              {/* </View> */}
            </View>
          </View>
       
    
    </ScrollView>
  );
}

export default Favoritos;

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
    marginTop: 16,
    marginBottom: 16,
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
  interacoes: {
    flexDirection: "row",
    alignItems: "center",
  },
  social: {
    marginLeft: 60,
    paddingTop: 10
  },
  delete: {
    paddingTop: 10,
    marginLeft: 25,

  }

});

