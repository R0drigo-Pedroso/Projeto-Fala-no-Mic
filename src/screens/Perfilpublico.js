import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, ImageBackground, Image } from 'react-native'
import { FontAwesome5 } from "@expo/vector-icons";
import { useState, useEffect } from "react";

import FontLoader from "../components/useFonts/useFont";

const Perfilpublico = ({route}) => {
    const [posts, setPosts] = useState([]);
    const email = route.params.paramKey



    useEffect(() => {
        async function getPosts() {
          try {
            // ATENÇÃO: Usem o aqui o IP da sua máquina
            const resposta = await fetch(
              `http://192.168.18.60:3000/perfil/${email}`
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
        <SafeAreaView style={estilos.viewSafe}>
          <StatusBar barStyle="default" />
    
          <ScrollView>
            <View style={estilos.container}>
              <ImageBackground
                source={{uri: posts.capa}}
                resizeMode="cover"
                style={estilos.imagem}
              >
                <View style={estilos.viewFoto}>
                  <Image source={{uri: posts.fotoperfil}} style={estilos.foto} />
                  <Text style={estilos.usuario}>{posts.nome}</Text>
                </View>
              </ImageBackground>
    
              <View style={estilos.backgroundCard}>
                <View style={estilos.card}>
                  <Text style={estilos.titulo}>Descrição: </Text>
                  <Text style={estilos.texto}>
                   {posts.descricaoperfil}
                  </Text>
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
    export default Perfilpublico;
    
    const estilos = StyleSheet.create({
      viewSafe: { flex: 1 },
      container: { flex: 1, backgroundColor: "#f7f7f7" },
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
        fontSize: 24,
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
        fontSize: 13,
        lineHeight: 18
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
        fontSize: 13
      },
    });
    