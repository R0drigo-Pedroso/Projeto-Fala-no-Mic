import { useFonts } from "expo-font";

function CarregarFont() {
  const [FonteCarregada] = useFonts({
    nunitoOne: require("./assets/fonts/NunitoSans-Regular.ttf"),
    carterTier: require("./assets/fonts/CarterOne-Regular.ttf"),
  });

  return FonteCarregada;
  /* Final inserir fontes */
}

export default CarregarFont;
