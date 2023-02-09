import { useFonts } from "expo-font";
import { SafeAreaView, Text, View } from "react-native";

const FontLoader = ({ children }) => {
  const [carregarFonte] = useFonts({
    carterOne: require("../../../assets/font/CarterOne-Regular.ttf"),
    nunitoSans: require("../../../assets/font/NunitoSans-Regular.ttf"),
  });

  if (!carregarFonte) return <Text>Carregar fonte</Text>;

  return <SafeAreaView>{children}</SafeAreaView>;
};

export default FontLoader;
