import { StatusBar, View, Text, SafeAreaView, StyleSheet, Image, Pressable, Share } from "react-native";
import imageteste from "../../assets/image/festahiphop.jpg";
import { useFonts } from "expo-font";
import { Ionicons } from '@expo/vector-icons';

function Favoritos() {

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

  return (
    <SafeAreaView style={estilos.corFundo}>
      <StatusBar barStyle="default" />
      <Text style={estilos.titulo}>Meus Favoritos</Text>

      <View style={estilos.areaConteudo}>
        <Image style={estilos.imageTamanho} source={imageteste} />

        <View style={estilos.descricao}>
          <View>
            <Text style={estilos.fontTitulo}>Titulo</Text>
            <Text style={estilos.textDescricao}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry, Lorem Ipsum is simply dummy text of the printing and
              typesetting industry
            </Text>
          </View>

          <View style={estilos.interacoes}>
            <Pressable style={estilos.botaoSaiba}>
              <Text style={estilos.textSaiba}>Saiba +</Text>
            </Pressable>
           
              <Pressable style={estilos.social}  onPress={onShare}>
                <Ionicons name="share-social" size={24} color="black" />
              </Pressable>
              <Pressable style={estilos.delete}>
                <Ionicons name="trash-bin" size={24} color="black" />
              </Pressable>
           
          </View>
        </View>
      </View>
    </SafeAreaView>
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

