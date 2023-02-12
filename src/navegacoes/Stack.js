import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Favoritos from "../screens/Favoritos";
import Publicar from "../screens/Publicar";
import Perfil from "../screens/Perfil";
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import Detalhes from "../screens/Detalhes";
import EditarRedeSocial from "../screens/EditarRedeSocial";

import { auth } from "../../firebaseConfig";

const Stack = createNativeStackNavigator();

export function NavegacaoHome() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeStack" component={Home} />
      <Stack.Screen name="DetalhesStack" component={Detalhes} />
    </Stack.Navigator>
  );
}
export function NavegacaoFavoritos() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="FavoritosStack"
        component={Favoritos}
      />
    </Stack.Navigator>
  );
}
export function NavegacaoPublicar() {
  const usuarioLogado = auth.currentUser;
  if (!usuarioLogado) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="PublicarStack"
          component={Publicar}
          options={{ title: "Publicar" }}
        />
        <Stack.Screen
          name="LoginStack"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="CadastroStack"
          component={Cadastro}
          options={{ title: "Cadastro" }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ title: "Perfil" }}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="PublicarStack"
          component={Publicar}
          options={{ title: "Publicar" }}
        />
      </Stack.Navigator>
    );
  }
}

export function NavegacaoLogin() {
  const usuarioLogado = auth.currentUser;

  if (!usuarioLogado) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="LoginStack"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="CadastroStack"
          component={Cadastro}
          options={{ title: "Cadastro" }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ title: "Perfil" }}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ title: "Perfil" }}
        />
        <Stack.Screen
          name="LoginStack"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="EditarRede"
          component={EditarRedeSocial}
          options={{ title: "Editar Rede" }}
        />
      </Stack.Navigator>
    );
  }
}

export function NavegacaoPerfil() {
  <Stack.Navigator></Stack.Navigator>;
}
