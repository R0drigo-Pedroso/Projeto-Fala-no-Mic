import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { NavegacaoHome,NavegacaoFavoritos,NavegacaoPublicar,NavegacaoPerfil } from "./Stack";
import Login from "../screens/Login";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();



function Routes() {
    const [logado, setLogado] = useState(false);
  
    return (
      <Tab.Navigator
        screenOptions={{
          unmountOnBlur: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            backgroundColor: `rgb(255, 109, 56)`,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          },
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={NavegacaoHome}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Ionicons name="home" size={size} color={"white"} />;
              }
              return <Ionicons name="home-outline" size={size} color={"black"} />;
            },
          }}
        />
        <Tab.Screen
          name="FavoritosTab"
          component={NavegacaoFavoritos}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Ionicons name="search" size={size} color={"white"} />;
              }
              return (
                <Ionicons name="search-outline" size={size} color={"black"} />
              );
            },
          }}
        />
        <Tab.Screen
          name="PublicarTab"
          component={NavegacaoPublicar}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Ionicons name="cart" size={size} color={"white"} />;
              }
              return <Ionicons name="cart-outline" size={size} color={"black"} />;
            },
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
          component={Login}
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
        />
        

      </Tab.Navigator>
    );
  }
  export default Routes;
  