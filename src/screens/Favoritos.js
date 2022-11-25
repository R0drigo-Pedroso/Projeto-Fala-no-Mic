import { StatusBar, View, Text } from "react-native";

function Favoritos() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar barStyle="default" />
      <Text>Favoritos teste!</Text>
    </View>
  );
}

export default Favoritos;
