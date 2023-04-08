import { TextInput } from "@react-native-material/core";
import { React, useState } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import AsignarasesorproyectoScreen from "./AsignarasesorproyectoScreen";

export default function AsignarasesorAPScreen({ navigation }) {
  const [Nombreproyecto, setNombreproyecto] = useState("");
  const [descripcion, setdescripcion] = useState("");

 
  cancelarbutton = () =>
    Alert.alert('Cancelar', '¿Estas seguro de que quieres cancelar?', [
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed')
      },
      {text: 'Si', onPress: () => navigation.navigate("Asignarasesorproyecto")},
    ]);
  
  
  return (
    <View>
      <Text style={styles.text}>Nombre del asesor</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNombreproyecto}
        placeholder="Escribe el nombre del proyecto"
      />
      <TextInput
        style={styles.input1}
        editable
        multiline
        numberOfLines={15}
        maxLength={40}
        onChangeText={(text) => setdescripcion(text)}
        value={descripcion}
        placeholder="Escribe la descripcion del proyecto"
      />

      <Button
        title="Confirmar"
        onPress={() => navigation.navigate("Asignarasesorproyecto")}
      />
      <Button
        title="cancelar"
        onPress={this.cancelarbutton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    textAlignVertical: "top",
    textAlign: "center",
    borderColor: "gray",
    borderWidth: 1,
    minWidth: 200,
    margin: 20,
  },
  input1: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    borderColor: "gray",
    borderWidth: 1,
    margin:20,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    padding: 10,
  },
});
