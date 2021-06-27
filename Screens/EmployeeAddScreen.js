import React from "react";
import { StyleSheet, View } from "react-native";
import { EmployeeForm } from "../components/EmployeeForm";

export function EmployeeAddScreen({ navigation }) {
  const addEmployee = (employee) => {
    fetch(
      "http://localhost:59925/EmployeeManagementWebService.asmx/AddEmployee",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: employee.name,
          phone: employee.phone,
          departmentId: employee.departmentId,
          street: employee.street,
          city: employee.city,
          state: employee.state,
          zip: employee.zip,
          country: employee.country,
        }),
      }
    ).then(() => navigation.navigate("Employees"));
  };

  return (
    <View style={styles.container}>
      <EmployeeForm
        navigation={navigation}
        btnName="Add Employee"
        btnFunction={(employee) => addEmployee(employee)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
  },
});
