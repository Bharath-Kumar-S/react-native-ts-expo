import React,{useState} from "react";
import { View,Text,TextInput,StyleSheet,Button,ImageBackground} from "react-native";
import BG from '../assets/Background.jpg'

const Sub = () => {

    const [mail,setmail]=useState('')
    const email = {'email':mail}
    const check= async ()=>{
        if (mail == ''){
           alert('Enter a Valid mail')
            return
        } 
        try{
        const response = await fetch("http://10.0.2.2:5000/subscribe",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(email)
            
        });
        alert(response.status === 201 ? "subscribed successfully":'Email already exist' )
        }catch(error){
        alert(error)
    }   
    }
    return(
        
        <View
        style = {styles.container}>
            <ImageBackground source={BG} resizeMode="cover" style={styles.image}>
            <Text style={{fontWeight:'bold',fontSize:40,textAlign:'center',marginTop:60}}>Subscribe Us</Text>
            <View
            style={styles.inner}>
            <Text style={{fontWeight:'bold',fontSize:30}}>Enter Mail ID</Text>
            <TextInput
                value={mail}
                keyboardAppearance="dark"
                keyboardType="default"
                onChangeText={(text) => setmail(text)}
                placeholder="Enter you Mail"
                inputMode="email"
                style={styles.items}
                >
            </TextInput>
            <Button color='#000000' title="Submit" onPress={check}/>            
            </View>
            </ImageBackground>
        </View>
)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    items:{
        justifyContent: 'center',
        width:'90%',
        borderRadius:10,
        borderWidth: 1,
        padding: 10,
        margin: 10,
        height:55,
        fontWeight:'bold',
    },
    inner:{
        flex:1,
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center'
    },
    image:{
        flex: 1,
        width:'100%',
        height: '100%',
      },
})

export default Sub;