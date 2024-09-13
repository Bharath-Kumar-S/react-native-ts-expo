import React,{useState} from "react";
import { View,Text,TextInput,StyleSheet,Button,ImageBackground,Image} from "react-native";
import BG from '../assets/Background.jpg';
import Images from '../assets/Mail.png';

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
            <Text style={styles.sub}>Subscribe us</Text>
            <View style={styles.views}>
                <Image 
                source ={Images}
                style={styles.image1}>
                </Image>
            </View>
            <View
            style={styles.inner}>
            <TextInput
                value={mail}
                keyboardAppearance="dark"
                keyboardType="default"
                onChangeText={(text) => setmail(text)}
                placeholder="Enter you mail"
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
        margin: 40,
        height:55,
        fontWeight:'bold',
        backgroundColor:'ffffff',
        color:'ffffff',
        zIndex:1000,
        backgroundColor: 'white'
    },
    inner:{
        alignItems:'center',
        marginTop:30,
    },
    image:{
        flex: 1,
        width:'100%',
        height: '100%',
      },
      image1:{
        width:160,
        height:130,
        borderRadius:30,
        borderColor:'#000000',
        marginTop:30
      },
      views:{
        alignItems: 'center',
      },
      sub:{
        fontWeight:'bold',
        fontSize:40,
        textAlign:'center',
        marginTop:120,
        borderRadius:30
      }
})

export default Sub;