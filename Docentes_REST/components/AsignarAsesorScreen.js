import React from "react";
import { Button, View, Text } from "react-native";
export default function AsignarasesorScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Asignar asesor</Text>
      <Text>Selecciona asesor</Text>
      <Button title="asesor aleatorio" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}