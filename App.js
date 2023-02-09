import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useScrollToTop } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";


import { useState } from "react";
import Routes from "./src/navegacoes/Routes";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [areaLogada, setArealogada] = useState(true);

  return (
    <NavigationContainer>
    {/*   <Tab.Navigator
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
        <>
          {areaLogada ? (
            <>
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Favoritos" component={Favoritos} />
              <Tab.Screen name="Publicar" component={Publicar} />
              <Tab.Screen name="Login" component={Login} />
            </>
          ) : (
            <>
              <Tab.Screen name="Cadastro" component={Cadastro} />
            </>
          )}
        </>
      </Tab.Navigator> */}
      <Routes/>
    </NavigationContainer>
  );
}

const estilos = StyleSheet.create({});
