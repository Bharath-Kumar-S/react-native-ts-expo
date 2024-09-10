import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground,StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Picker } from "./components/Picker";


export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [number, setNumber] = useState("");

  const image = {uri:'https://legacy.reactjs.org/logo-og.png'}

  const handleSumbit = () => {
    //validate name and age
    if (name === "" || age === "" || number === "") {
      alert("Please enter name,age and Number");
      return;
    }
    alert(`Hello ${name} you are ${age} years old`);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}/>
      <Text style={styles.items}>PolarWeb</Text>
      <StatusBar style="dark" hidden />

      <TextInput
        value={name}
        keyboardAppearance="dark"
        keyboardType="default"
        onChangeText={(text) => setName(text)}
        placeholder="Enter your name"
        style={{ borderWidth: 1, padding: 10, margin: 10,width:'90%'}}

      />
      <TextInput
        value={age}
        keyboardType="numeric"
        onChangeText={(text) => setAge(text)}
        placeholder="Enter your age"
        style={{ borderWidth: 1, padding: 10, margin: 10, width:'90%' }}
      />
      <TextInput
        value={number}
        keyboardAppearance="dark"
        keyboardType="numeric"
        onChangeText={(text) => setNumber(text)}
        placeholder="Enter Your Number"
        maxLength={10}
        style={{ borderWidth: 1, padding: 10, margin: 10, width:'90%' }}
      />
      <Picker />
      <Button color='#000000' title="Sign Up" onPress={handleSumbit} />
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
  items:{
    fontSize:30,
    fontWeight:'bold',
    paddingBottom:50
  },
  image:{
    flex: 1,
    justifyContent: 'center',
  }
});
function useSate(): [any, any] {
  throw new Error("Function not implemented.");
}
