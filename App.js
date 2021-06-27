import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./Screens/HomeScreen";
import { DepartmentsScreen } from "./Screens/DepartmentsScreen";
import { EmployeesScreen } from "./Screens/EmployeesScreen";
import { EmployeeDetailsScreen } from "./Screens/EmployeeDetailsScreen";
import { EmployeeUpdateScreen } from "./Screens/EmployeeUpdateScreen";
import { EmployeeAddScreen } from "./Screens/EmployeeAddScreen";
import { EmployeeDeleteScreen } from "./Screens/EmployeeDeleteScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Departments" component={DepartmentsScreen} />
        <Stack.Screen name="Employees" component={EmployeesScreen} />
        <Stack.Screen name="Details" component={EmployeeDetailsScreen} />
        <Stack.Screen name="Update" component={EmployeeUpdateScreen} />
        <Stack.Screen name="Add" component={EmployeeAddScreen} />
        <Stack.Screen name="Delete" component={EmployeeDeleteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
