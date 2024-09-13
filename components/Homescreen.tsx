import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground,StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Picker } from "./Picker";
import BG from "../assets/Background.jpg";


export default function Home({navigation}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [number, setNumber] = useState("");
  const [ pass1,setpass1 ] = useState('');
  const [ pass2,setpass2 ] = useState('');
  const [ mail,setmail ] = useState('');
  const [ loc,setloc ] = useState('');


  const handleSumbit = () => {
    //validate name and age
    if (name === "" || age === "" || number === "" || pass1 === "" || pass2 === "" || mail === "") {
      alert("Please fill all Columns");
      return;
    }else if(pass1 !== pass2){
      alert("confirm password not matching");
      return;
    }
    alert(`Signed Up successfully`);
  };
  return (
    <View style={styles.container}>
    <ImageBackground source={BG} resizeMode="cover" style={styles.image}>
      <Text style={styles.head}>PolarWeb.io</Text>
      <StatusBar style="dark" hidden />
      <TextInput
        value={name}
        keyboardAppearance="dark"
        keyboardType="default"
        onChangeText={(text) => setName(text)}
        placeholder="Enter your name"
        style={styles.items}
        autoFocus={true}
        

      />
      <TextInput
        value={age}
        keyboardType="numeric"
        onChangeText={(text) => setAge(text)}
        placeholder="Enter your age"
        style={styles.items}
      />
      <TextInput
        value={number}
        keyboardAppearance="dark"
        keyboardType="numeric"
        onChangeText={(text) => setNumber(text)}
        placeholder="Enter Your Number"
        maxLength={10}
        style={styles.items}
      />
      <TextInput
        value={pass1}
        keyboardAppearance="dark"
        keyboardType="default"
        onChangeText={(text) => setpass1(text)}
        placeholder="Enter Your Password"
        style={styles.items}
        secureTextEntry={true}
      />
      <TextInput
        value={pass2}
        keyboardAppearance="dark"
        keyboardType="default"
        onChangeText={(text) => setpass2(text)}
        placeholder="Confirm your password"
        style={styles.items}
        secureTextEntry={true}
      />
      <TextInput
        value={mail}
        keyboardAppearance="dark"
        keyboardType="default"
        onChangeText={(text) => setmail(text)}
        placeholder="Enter Your Mail"
        inputMode="email"
        style={styles.items}
      />
      <Picker />
      <Button color='#000000' title="Sign Up" onPress={handleSumbit} />
      <View style={styles.button}>
      <Button color = '#000000' title="Subscribe Us" onPress={()=>navigation.navigate('subscribe')} />
      </View>
      </ImageBackground>
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
  head:{
    fontSize:30,
    fontWeight:'bold',
    paddingBottom:50,
    color:''
  },
  items:{
    justifyContent: 'center',
    width:'90%',
    borderRadius:10,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    height:45,
    fontWeight:'bold'
},
  image:{
    flex: 1,
    justifyContent: 'center',
    width:'100%',
    height: '100%',
    alignItems: "center",
  },
  button:{
    borderRadius: 20,
    margin:10
  }
});
