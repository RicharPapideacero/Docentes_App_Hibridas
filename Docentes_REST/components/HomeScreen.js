import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { Stack, IconButton } from "@react-native-material/core";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.titulodisenio}>Pantalla principal</Text>
      <IconButton
        icon={(props) => (
          <Icon
            name="account"
            size={30}
            onPress={() => navigation.navigate("AsignarasesorSA")}
            {...props}
          />
        )}
      />
      <IconButton icon={(props) => <Icon name="clock" {...props} />} />

      <IconButton
        icon={(props) => (
          <Icon
            name="account-search"
            onPress={() => navigation.navigate("TemainteresSA")}
            {...props}
          />
        )}
      />
      
      <IconButton icon={(props) => <Icon name="archive" {...props} />} />
      <Button
        title="Asignar asesor"
        onPress={() => navigation.navigate("AsignarasesorSA")}
      />
      <Button
        title="Tema de interes"
        onPress={() => navigation.navigate("TemainteresSA")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  titulodisenio: {
    height: 60,
    fontSize: 20,
    textAlign: "center",
  },
});
