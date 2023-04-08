import React from "react";
import { Button, View, Text } from "react-native";
export default function MateriaScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Menu Materias</Text>
      <Button title="MAteria" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}