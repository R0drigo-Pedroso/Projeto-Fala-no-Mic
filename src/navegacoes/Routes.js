import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { NavegacaoHome,NavegacaoFavoritos,NavegacaoPublicar,NavegacaoPerfil, NavegacaoLogin, NavegacaoCadastro } from "./Stack";
import Login from "../screens/Login";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();



function Routes() {
    const [logado, setLogado] = useState(false);
  
    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Favoritos":
              iconName = focused ? "heart-sharp" : "heart-outline";
              break;

            case "Publicar":
              iconName = focused ? "add-circle" : "add-circle-outline";
              break;

            case "Login":
              iconName = focused
                ? "person-circle-sharp"
                : "person-circle-outline";
              break;

            default:
              iconName = focused ? "home" : "home-outline";
              break;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#372727 ",
        tabBarInactiveTintColor: "black",
      })}
      >
        <Tab.Screen
          name="HomeTab"
          component={NavegacaoHome}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Ionicons name="home" size={size} color={"black"} />;
              }
              return <Ionicons name="home-outline" size={size} color={"black"} />;
            },
            title: "Home"
          }}
        />
        <Tab.Screen
          name="FavoritosTab"
          component={NavegacaoFavoritos}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Ionicons name="heart-sharp" size={size} color={"black"} />;
              }
              return (
                <Ionicons name="heart-outline" size={size} color={"black"} />
              );
            },
            title: "Favoritos"
          }}
        />
        <Tab.Screen
          name="PublicarTab"
          component={NavegacaoPublicar}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Ionicons name="add-circle" size={size} color={"black"} />;
              }
              return <Ionicons name="add-circle-outline" size={size} color={"black"} />;
            },
            title: "Publicar"
          }}
        />
        {/* <Tab.Screen
          name="PerfilTab"
          component={NavegacaoPerfil}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return (
                  <Ionicons
                    name="ios-person-circle"
                    size={size}
                    color={"white"}
                  />
                );
              }
              
              return (
                <Ionicons
                  name="ios-person-circle-outline"
                  size={size}
                  color={"black"}
                />
              );
            },
          }}
        /> */}
        
        <Tab.Screen
          name="LoginTab"
          component={NavegacaoLogin}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return (
                  <Ionicons
                    name="ios-person-circle"
                    size={size}
                    color={"black"}
                  />
                );
              }
              
              return (
                <Ionicons
                  name="ios-person-circle-outline"
                  size={size}
                  color={"black"}
                />
              );
            },
            title: "Login"
          }}
        />
        

      </Tab.Navigator>
    );
  }
  export default Routes;
  