import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  createRef,
  useEffect,
} from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Input = forwardRef((props, ref) => {
  const [sec, setSec] = useState(props.secureTextEntry);
  const [error, setError] = useState(false);
  const inputref = createRef();

  /* useImperativeHandle -> é um objeto de funções */
  useImperativeHandle(ref, () => ({
    focusOnError() {
      setError(true);
      inputref.current.focus();
    },
    resetError() {
      setError(false);
    },
  }));
  return (
    <View style={estilos.container}>
      <TextInput
        style={[estilos.input, { borderColor: error ? "#e91e63" : "#E4E7EB" }]}
        ref={inputref}
        underlineColorAndroid="transparent"
        placeholder="placeholder"
        placeholderTextColor={"#7b8794"}
        {...props}
        secureTextEntry={sec}
      />
      <MaterialCommunityIcons
        name={props.iconName}
        size={26}
        color={error ? "#e91e63" : "#444"}
        style={estilos.icon}
      />
      {props.secureTextEntry && (
        <Pressable onPress={() => setSec(!sec)}>
          <Ionicons
            name={sec ? "eye-sharp" : "eye-off-sharp"}
            size={26}
            color="#788974"
            style={estilos.iconSecret}
          />
        </Pressable>
      )}
    </View>
  );
});
const estilos = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
    marginVertical: 8,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: "#F8F9FA",
    paddingLeft: 40,
    marginHorizontal: 20,
    borderRadius: 8,
    fontSize: 18,
    borderWidth: 1,
    elevation: 10,
    shadowColor: "#171717",
    shadowOffset: { left: -15, right: 15 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  icon: {
    position: "absolute",
    left: 30,
    top: 12,
  },
  iconSecret: {
    position: "absolute",
    right: 30,
    top: 12,
  },
});

export default Input;