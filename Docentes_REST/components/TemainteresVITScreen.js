import { React, useState } from "react";
import { Button, View, Text, FlatList, TouchableOpacity,StyleSheet } from "react-native";

const Temasintereslista = [
  { key: "Proyecto 1" },
  { key: "Proyecto 2" },
  { key: "Proyecto 3" },
  { key: "Proyecto 4" },
  { key: "Proyecto 5" },
  { key: "Proyecto 6" },
  { key: "Proyecto 7" },
  { key: "Proyecto 8" },
];
export default function TemainteresVITScreen({ navigation }) {
  const [itemres, setitemres] = useState(null);

  const Materia = (props) => {
    const itemStyle = {
      backgroundColor: "white",
      color: "gray",
      borderColor: "black",
      height: 40,
      borderWidth: 1,
      minWidth: 200,
      borderRadius: 30,
      padding: 10,
      margin: 10,
    };

    return (
      <TouchableOpacity
        style={itemStyle}
        onPress={() => navigation.navigate("TemainteresATI")}
      >
        <Text>{props.nombre}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tema interes</Text>
      <Text>selecciona Tema de interes</Text>
      <Button
        title="Agregar tema de interes"
        onPress={() => navigation.navigate("TemainteresATI")}
      />
      <FlatList
        data={Temasintereslista}
        renderItem={({ item }) => <Materia nombre={item.key} />}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    padding: 10,
  },
});
