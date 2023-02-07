import { useFonts } from "expo-font";
import { Text, View } from "react-native";

const FontLoader = ({ children }) => {
  const [carregarFonte] = useFonts({
    carterOne: require("./CarterOne-Regular.ttf"),
    nunitoSans: require("./NunitoSans-Regular.ttf"),
  });

  if (!carregarFonte) return <Text>Teste de fonte</Text>;

  return <View>{children}</View>;
};

export default FontLoader;
