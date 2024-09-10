import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Picker } from "./components/Picker";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSumbit = () => {
    //validate name and age
    if (name === "" || age === "") {
      alert("Please enter a name and age");
      return;
    }
    alert(`Hello ${name} you are ${age} years old`);
  };

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="dark" hidden />

      <TextInput
        value={name}
        keyboardAppearance="dark"
        keyboardType="default"
        onChangeText={(text) => setName(text)}
        placeholder="Enter your name"
        style={{ borderWidth: 1, padding: 10, margin: 10 }}
      />
      <TextInput
        value={age}
        keyboardType="numeric"
        onChangeText={(text) => setAge(text)}
        placeholder="Enter your age"
        style={{ borderWidth: 1, padding: 10, margin: 10 }}
      />
      <Picker />
      <Button title="Submit" onPress={handleSumbit} />
      <Text>
        Your name is {name} and your age is {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
function useSate(): [any, any] {
  throw new Error("Function not implemented.");
}
