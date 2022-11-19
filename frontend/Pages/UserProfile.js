import { StyleSheet, Text,  View } from 'react-native';
import Logo from '../Components/Logo/MediumLogo';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { SERVER_URL } from "../env";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserProfile({username}){
  const [user, setUser] = useState([]);

  const getProfile = async () => {
    const token = await AsyncStorage.getItem("@token");

    const config = {
      method: "GET",
      headers:{Authorization: `Bearer ${token}`},
      url: `${SERVER_URL}/api/v1/profile`,
    }
    try{
      const res = await axios(config)
      if(res.data.status == "success"){
        setUser(res.data.data);
      }
      
    }catch(error){
      console.warn(error.response.data)
      return error
    }
  }

  useEffect(() => {
      getProfile();
  })


  if (user)
    return (
      <View style={styles.container}>
        <Logo/>
        <Text style={styles.lebText}>
            Leb<Text style={styles.talkText}>Talk</Text>
        </Text>
        <View style={styles.boxContainer}>
          <View style={{marginBottom: 30}}>
            <Text style={styles.subtitle}>Account Details</Text>
            <View style={styles.flexRow}>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.content}>{user.email}</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.label}>Username</Text>
              <Text style={styles.content}>{user.name}</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.label}>Phone Number</Text>
              <Text style={styles.content}>{user.phone_number}</Text>
            </View>
          </View>
          <View style={{marginBottom: 30}}>
            <Text style={styles.subtitle}>Additional Details</Text>
            <View style={styles.flexRow}>
              <Text style={styles.label}>Favorites</Text>
              <Text style={styles.content}>{5}</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.label}>Score</Text>
              <Text style={styles.content}>{30}</Text>
            </View>
          </View>

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
    fontSize:20,
    color:'#E1943C'
  },
  subtitle:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label:{
    fontSize: 16,
    color:'#A9A9A9',
    fontWeight: 'bold',
  },
  flexRow:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10
  },
  content:{
    fontSize: 16,
    color:'#A9A9A9',
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

