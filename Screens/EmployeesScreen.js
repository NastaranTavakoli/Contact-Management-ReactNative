import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  Text,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { EmployeeItem } from "../components/EmployeeItem";

export function EmployeesScreen({ navigation }) {
  const [employees, setEmployees] = useState([]);
  const [term, setTerm] = useState("");
  const [refinedEmployees, setRefinedEmployees] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      fetch(
        "http://localhost:59925/EmployeeManagementWebService.asmx/GetEmployees",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((json) => setEmployees(json.d))
        .catch((error) => console.error(error));
    }, [])
  );

  useEffect(() => {
    setRefinedEmployees(employees);
  }, [employees]);

  useEffect(() => {
    const refinedEmployees = employees.filter((employee) =>
      employee.Name.toLowerCase().includes(term.toLowerCase())
    );

    setRefinedEmployees(refinedEmployees);
  }, [term]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => navigation.navigate("Add")}
      >
        <Text style={styles.addBtnSign}>+</Text>
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <Text style={[styles.searchTxt, { fontWeight: "bold" }]}>
          Search Employee:{" "}
        </Text>
        <TextInput
          style={styles.searchTxt}
          placeholder="Enter employee name..."
          value={term}
          onChangeText={(text) => setTerm(text)}
        />
      </View>
      <FlatList
        data={refinedEmployees}
        keyExtractor={(employee) => employee.Id.toString()}
        renderItem={(item) => (
          <EmployeeItem employee={item.item} navigation={navigation} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
  },
  addBtn: {
    backgroundColor: "#595959",
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: "auto",
    marginRight: 10,
    marginTop: 10,
  },
  addBtnSign: {
    color: "#fff",
    fontWeight: "bolder",
    fontSize: 30,
    marginLeft: 9,
    marginTop: -2,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  searchTxt: {
    fontFamily: "Trebuchet, Calibri, Arial",
    fontSize: 16,
  },
});
