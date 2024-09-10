import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export const Picker = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "JavaScript", value: "javascript" },
    { label: "Python", value: "python" },
    { label: "Java", value: "java" },
    { label: "C++", value: "cpp" },
  ]);

  const handleSubmit = () => {
    if (!value) {
      alert("Please select a language");
      return;
    }
    alert(`You selected: ${value}`);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ marginBottom: 10 }}>Select a language:</Text>

      {/* Dropdown Picker */}
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Select a programming language"
        // Ensure the dropdown has a solid background
        dropDownContainerStyle={{
          backgroundColor: "white",
          zIndex: 1000, // Higher zIndex to ensure it's rendered above other components
        }}
        // Also set the zIndex for the Picker container itself
        style={{
          zIndex: 1000, // Higher zIndex for the dropdown container
        }}
        containerStyle={{
          zIndex: 1000, // Ensure the container style also has a high zIndex
        }}
        mode="BADGE"
        modalProps={{
          animationType: "slide",
          transparent: true,
        }}
      />

      {/* Submit Button */}
      {/* <Button title="Submit" onPress={handleSubmit} /> */}
    </View>
  );
};
