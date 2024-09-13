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
      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        keyboardAppearance="dark"
        keyboardType="default"
        onChangeText={(text) => setName(text)}
        placeholder="Enter your name"
        style={styles.items}
        autoFocus={true}
      />
      <Text style={styles.label}>Age</Text>
      <TextInput
        value={age}
        keyboardType="numeric"
        onChangeText={(text) => setAge(text)}
        placeholder="Enter your age"
        style={styles.items}
      />
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        value={number}
        keyboardAppearance="dark"
        keyboardType="numeric"
        onChangeText={(text) => setNumber(text)}
        placeholder="Enter your number"
        maxLength={10}
        style={styles.items}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        value={pass1}
        keyboardAppearance="dark"
        keyboardType="default"
        onChangeText={(text) => setpass1(text)}
        placeholder="Enter your password"
        style={styles.items}
        secureTextEntry={true}
      />
      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        value={pass2}
        keyboardAppearance="dark"
        keyboardType="default"
        onChangeText={(text) => setpass2(text)}
        placeholder="Confirm your password"
        style={styles.items}
        secureTextEntry={true}
      />
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        value={mail}
        keyboardAppearance="dark"
        keyboardType="default"
        onChangeText={(text) => setmail(text)}
        placeholder="Enter your mail"
        inputMode="email"
        style={styles.items}
      />
      <Picker />
      <Button color='#000000' title="Sign up" onPress={handleSumbit} />
      <View style={styles.button}>
      <Button color = '#000000' title="Subscribe us" onPress={()=>navigation.navigate('subscribe')} />
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
  label:{
    width: '87%',
    marginTop: 10,
    marginBottom: -5,
    fontWeight: 'bold',
    fontSize: 15
  },
  items:{
    justifyContent: 'center',
    width:'90%',
    borderRadius:10,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    height:45,
    fontWeight:'bold',
    backgroundColor: 'white'
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
