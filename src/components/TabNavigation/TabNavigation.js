import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar barStyle="default" />
      <Text>Home!</Text>
    </View>
  );
}

function Favoritos() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar barStyle="default" />
      <Text>Favoritos!</Text>
    </View>
  );
}

function Publicar() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar barStyle="default" />
      <Text>Publicar!</Text>
    </View>
  );
}

function Perfil() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar barStyle="default" />
      <Text>Perfil!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigation() {
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigation;
