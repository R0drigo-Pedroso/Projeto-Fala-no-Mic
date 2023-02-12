import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native'

const CardEventos = () => {

    const {titulo, descricao} = evento;
    const [posts, setPosts] = useState([]);

    const navigation = useNavigation()
    const leiaMais = () => {
  
      navigation.navigate('Detalhes', {filme});
    }

    useEffect(() => {
        async function getPosts() {
          try {
            // ATENÇÃO: Usem o aqui o IP da sua máquina
            const resposta = await fetch(
              `https://mobile-api-8gey.onrender.com/evento/`
            );
            const dados = await resposta.json();
            setPosts(dados);
          } catch (error) {
            console.log("Deu ruim! " + error.message);
          }
        }
        getPosts();
      }, []);
       

  return (
    <View style={estilos.areaConteudo}>
     
        <Image style={estilos.imageTamanho} source={{uri: capaevento}} />

        <View style={estilos.descricao}>
          <View>
            <Text style={estilos.fontTitulo}>{titulo}</Text>
            <Text style={estilos.textDescricao}>
              {descricao}
            </Text>
          </View>
         
          <Pressable style={estilos.botaoSaiba} onPress={()=>{navigation.navigate("DetalhesStack")}}>
            <Text style={estilos.textSaiba}>Saiba +</Text>
          </Pressable>
        </View>
        
      </View>
  )
}

export default CardEventos

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
  });
  