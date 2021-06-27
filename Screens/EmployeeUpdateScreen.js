import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { EmployeeForm } from "../components/EmployeeForm";

export function EmployeeUpdateScreen({ navigation, route }) {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetch(
      `http://localhost:59925/EmployeeManagementWebService.asmx/GetEmployee?id=${route.params.id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => setEmployee(json.d))
      .catch((error) => console.error(error));
  }, []);

  const updateEmployee = (id, employee) => {
    fetch(
      "http://localhost:59925/EmployeeManagementWebService.asmx/UpdateEmployee",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
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
      <Text style={styles.updateTxt}>
        Updating employee with the Id of {route.params.id}
      </Text>
      <EmployeeForm
        navigation={navigation}
        btnName="Update"
        btnFunction={(employee) => updateEmployee(route.params.id, employee)}
        initialValue={employee}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
  },
  updateTxt: {
    padding: 20,
    fontWeight: "bold",
    margin: "auto",
    marginBottom: 0,
    marginTop: 0,
  },
});
