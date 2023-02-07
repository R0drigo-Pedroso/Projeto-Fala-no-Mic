import React, { useState, useEffect } from "react";
import * as Font from "expo-font";

const FontLoader = ({ carterTier, nunitoOne }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        [carterTier]: require(`./CarterOne-Regular.ttf`),
        [nunitoOne]: require(`./NunitoSans-Regular.ttf`),
      });
      setFontLoaded(true);
    })();
  }, []);

  return fontLoaded ? <></> : <></>;
};

export default FontLoader;
