import React from "react";
import { StyleSheet, View, Button, Text, TouchableOpacity } from "react-native";

export function EmployeeItem({ employee, navigation }) {
  return (
    <View style={styles.employeeItem}>
      <View style={styles.empTxtContainer}>
        <Text
          style={styles.empTxt}
          onPress={() => {
            navigation.navigate("Details", { id: employee.Id });
          }}
        >
          {employee.Name}
        </Text>
      </View>
      <View>
        <Button
          color="#262626"
          title="Update"
          onPress={() => navigation.navigate("Update", { id: employee.Id })}
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.delete}
          onPress={() => navigation.navigate("Delete", { id: employee.Id })}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  employeeItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopWidth: 1,
  },
  empTxtContainer: {
    flex: 1,
    marginTop: 5,
    marginLeft: 20,
  },
  empTxt: {
    marginRight: 20,
    fontFamily: "Trebuchet, Calibri, Arial",
    fontSize: 16,
  },
  delete: {
    backgroundColor: "#941a1d",
    padding: 8,
    marginLeft: 10,
    borderRadius: 3,
  },
});
