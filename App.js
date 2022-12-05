import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useScrollToTop } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./src/screens/Home";
import Favoritos from "./src/screens/Favoritos";
import Publicar from "./src/screens/Publicar";
import Perfil from "./src/screens/Perfil";
import Login from "./src/screens/Login";
import Cadastro from "./src/screens/Cadastro";

import { useState } from "react";

const Tab = createBottomTabNavigator();

export default function App() {
  const [areaLogada, setAreaLogada] = useState("");
  return (
    <NavigationContainer>
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

              case "Perfil":
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
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favoritos" component={Favoritos} />
        <Tab.Screen name="Publicar" component={Publicar} />
        <Tab.Screen name="Perfil" component={Perfil} />

        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Cadastro" component={Cadastro} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const estilos = StyleSheet.create({});
