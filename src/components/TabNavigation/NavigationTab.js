import { View } from "react-native";

const Tabs = () => {
  return (
    <View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <StatusBar barStyle="default" />
        <Text>Home! teste do teste</Text>
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <StatusBar barStyle="default" />
        <Text>Favoritos!</Text>
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <StatusBar barStyle="default" />
        <Text>Publicar!</Text>
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <StatusBar barStyle="default" />
        <Text>Perfil!</Text>
      </View>
    </View>
  );
};

export default Tabs;
