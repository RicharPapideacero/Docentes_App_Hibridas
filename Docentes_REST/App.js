import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import MateriaScreen from "./components/MateriaScreen";
import AsignarasesorSAScreen from "./components/AsignarasesorSAScreen";
import AsignarasesorproyectoScreen from "./components/AsignarasesorproyectoScreen";
import AsignarasesorAPScreen from "./components/AsignarasesorAPScreen";
import TemainteresSAScreen from "./components/TemainteresSAScreen";
import TemainteresVITScreen from "./components/TemainteresVITScreen";
import TemainteresATIScreen from "./components/TemainteresATIScreen";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Materia" component={MateriaScreen} />
        <Stack.Screen name="AsignarasesorSA" component={AsignarasesorSAScreen} />
        <Stack.Screen name="Asignarasesorproyecto" component={AsignarasesorproyectoScreen} />
        <Stack.Screen name="AsignarasesorAP" component={AsignarasesorAPScreen} />
        <Stack.Screen name="TemainteresSA" component={TemainteresSAScreen} />
        <Stack.Screen name="TemainteresVIT" component={TemainteresVITScreen} />
        <Stack.Screen name="TemainteresATI" component={TemainteresATIScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;