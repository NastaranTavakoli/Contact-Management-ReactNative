import React from "react";
import { StyleSheet, View, Text } from "react-native";

export function DepartmentItem({ department }) {
  return (
    <View style={styles.departmentItem}>
      <Text style={styles.departmentText}>
        {department.Id} - {department.Name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  departmentItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
  },
  departmentText: {
    flex: 1,
    marginTop: 5,
    marginLeft: 20,
    fontFamily: "Trebuchet, Calibri, Arial",
  },
});
