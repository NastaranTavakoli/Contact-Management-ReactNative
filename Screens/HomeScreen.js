import React from "react";
import { StyleSheet, View, Button, Image } from "react-native";

export function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          color="#941a1d"
          title="Employees"
          onPress={() => navigation.navigate("Employees")}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#941a1d"
          title="Departments"
          onPress={() => navigation.navigate("Departments")}
        />
      </View>
      <Image style={styles.logo} source={require("../assets/logo.png")}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#595959",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginBottom: 50,
    width: 200,
  },
  logo: {
    width: 100,
    height: 50,
    marginTop: 200,
  },
});
