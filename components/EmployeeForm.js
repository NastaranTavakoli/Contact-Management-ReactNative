import React, { useState, useEffect } from "react";
import { View, TextInput, Picker, Button, StyleSheet } from "react-native";

export function EmployeeForm({ initialValue, btnName, btnFunction }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");

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

  useEffect(() => {
    if (initialValue) {
      setName(initialValue.Name);
      setPhone(initialValue.Phone);
      setDepartmentId(initialValue.DepartmentId);
      setStreet(initialValue.Address.Street);
      setCity(initialValue.Address.City);
      setState(initialValue.Address.State);
      setZip(initialValue.Address.Zip);
      setCountry(initialValue.Address.Country);
    }
  }, [initialValue]);

  return (
    <View style={{ padding: 30 }}>
      <TextInput
        style={styles.row}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.row}
        placeholder="Phone"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <Picker
        itemStyle={{
          fontFamily: "Trebuchet, Calibri, Arial",
        }}
        style={styles.row}
        selectedValue={departmentId}
        onValueChange={(itemValue) => setDepartmentId(itemValue)}
      >
        <Picker.Item label="Please select..." value="-1" />
        {departments.map((department) => (
          <Picker.Item
            label={department.Name}
            value={department.Id}
            key={department.Id}
          />
        ))}
      </Picker>
      <TextInput
        style={styles.row}
        placeholder="Street"
        value={street}
        onChangeText={(text) => setStreet(text)}
      />
      <TextInput
        style={styles.row}
        placeholder="City"
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <TextInput
        style={styles.row}
        placeholder="State"
        value={state}
        onChangeText={(text) => setState(text)}
      />
      <TextInput
        style={styles.row}
        placeholder="Zip"
        value={zip}
        onChangeText={(text) => setZip(text)}
      />
      <TextInput
        style={styles.row}
        placeholder="Country"
        value={country}
        onChangeText={(text) => setCountry(text)}
      />
      <Button
        color="#941a1d"
        onPress={() => {
          btnFunction({
            name,
            phone,
            departmentId,
            street,
            city,
            state,
            zip,
            country,
          });
        }}
        title={btnName}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginBottom: 10,
    fontFamily: "Trebuchet, Calibri, Arial",
    fontSize: 16,
  },
});
