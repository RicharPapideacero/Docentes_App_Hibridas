import { React, useState } from "react";
import { Button, View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const Listaasesores = [
  { key: "Luis" },
  { key: "Adrian" },
  { key: "Juan" },
  { key: "Martin" },
  { key: "Pedro" },
  { key: "Jimena" },
  { key: "Sonia" },
  { key: "Mario" },
  { key: "Carlos" },
  { key: "Simon" },
  { key: "Juancarlos" },
  { key: "Dios" },
];

export default function AsignarasesorSAScreen({ navigation }) {
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
      <TouchableOpacity style={itemStyle} onPress={() => navigation.navigate("Asignarasesorproyecto")}>
        <Text>{props.nombre}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.text}>Asignar asesor</Text>
      <Text style={styles.text}>Selecciona asesor</Text>
      <FlatList
        data={Listaasesores}
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
