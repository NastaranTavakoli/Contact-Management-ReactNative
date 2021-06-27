import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { DepartmentItem } from "../components/DepartmentItem";

export function DepartmentsScreen() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:59925/DepartmentsDetailsWebService.asmx/GetDepartments",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => setDepartments(json.d))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={departments}
        keyExtractor={(department) => department.Id.toString()}
        renderItem={(item) => <DepartmentItem department={item.item} />}
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
});
