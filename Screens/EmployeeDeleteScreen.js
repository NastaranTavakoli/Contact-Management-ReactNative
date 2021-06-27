import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export function EmployeeDeleteScreen({ navigation, route }) {
  const deleteEmployee = (id) => {
    fetch(
      "http://localhost:59925/EmployeeManagementWebService.asmx/DeleteEmployee",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      }
    ).then(() => navigation.navigate("Employees"));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.delTxt}>
        Are you sure to delete employee with the Id of {route.params.id}?
      </Text>
      <View style={styles.cancelBtn}>
        <Button
          color="#262626"
          title="Cancel"
          onPress={() => navigation.navigate("Employees")}
        />

        <TouchableOpacity
          style={styles.delBtn}
          onPress={() => {
            deleteEmployee(route.params.id);
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
  },
  delTxt: {
    padding: 20,
    fontFamily: "Trebuchet, Calibri, Arial",
    fontSize: 16,
    textAlign: "center",
  },
  cancelBtn: {
    flexDirection: "row",
    justifyContent: "center",
  },
  delBtn: {
    backgroundColor: "#941a1d",
    padding: 8,
    marginLeft: 10,
    borderRadius: 3,
  },
});
