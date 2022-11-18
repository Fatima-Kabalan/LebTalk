import { StyleSheet, Text, TouchableOpacity, TextInput, View ,Label , Input} from 'react-native';
import Logo from '../Components/Logo/MediumLogo';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { IMAGE_URL, SERVER_URL } from "../env";
import CircularCard from '../Components/Card/CircularCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserProfile({username}){
//   const [user, setUser] = useState()

//   const token = AsyncStorage.getItem("@token");

//   console.log('token:', token)

//   const getProfile = async () => {
//       const config = {
//         method: "GET",
//         headers:{Authorization: `Bearer ${token}`},
//         url: `${SERVER_URL}/auth/api/v1/profile`,
//       }
//       try{
//         const res = await axios(config)
//         console.log("res: ", res)
        
//       }catch(error){
//         console.warn(error.response.data)
//         return error
//       }
//   }

//   useEffect(() => {
//       getProfile();
//   })

// console.log(user);

// if (user)

  return (
    <View style={styles.container}>
      <Logo/>
      <Text style={styles.lebText}>
          Leb<Text style={styles.talkText}>Talk</Text>
      </Text>
      <View style={styles.boxContainer}>
        <Text style={styles.text}>Welcome!</Text> 
        <TextInput style={styles.input} type='' placeholder='Favorites:' ></TextInput>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#A42E2C',
    alignItems: 'center',
  },
  input:{
    fontSize:25,
    color:'#E1943C'
  },
  lebText:{
    fontWeight:'bold',
    fontSize:30,
    color:'white',
  },
  text:{
    fontWeight:'bold',
    fontSize:25,
    color:'#E1943C',
  },
  talkText:{
    fontWeight: 'bold',
    fontSize:30,
    color:'#E1943C',
  },
  boxContainer:{
    height:'70%',
    width:'100%',
    padding:30,
    backgroundColor:'#fff',
    borderTopRightRadius:50,
    borderTopLeftRadius:50,
  },
});

