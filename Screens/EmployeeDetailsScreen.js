import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

export function EmployeeDetailsScreen({ route }) {
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

  return (
    <View style={styles.container}>
      {employee && (
        <View>
          <Text style={styles.textItem}>Id: {employee.Id}</Text>
          <Text style={styles.textItem}>Name: {employee.Name}</Text>
          <Text style={styles.textItem}>Phone: {employee.Phone}</Text>
          <Text style={styles.textItem}>
            DepartmentId: {employee.DepartmentId}
          </Text>
          <Text style={styles.textItem}>Street: {employee.Address.Street}</Text>
          <Text style={styles.textItem}>City: {employee.Address.City}</Text>
          <Text style={styles.textItem}>State: {employee.Address.State}</Text>
          <Text style={styles.textItem}>Zip: {employee.Address.Zip}</Text>
          <Text style={styles.textItem}>
            Country: {employee.Address.Country}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
    padding: 25,
  },
  textItem: {
    fontFamily: "Trebuchet, Calibri, Arial",
    fontSize: 18,
    justifyContent: "space-around",
    marginBottom: 10,
  },
});
