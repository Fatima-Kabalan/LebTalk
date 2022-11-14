import { StyleSheet, Text, View } from 'react-native';
import ContainedButton from '../Components/Button/ContainedButton';
import ConfirmPassInput from '../Components/Input/ConfirmPassInput';
import EmailInput from '../Components/Input/EmailInput';
import NameInput from '../Components/Input/NameInput';
import PasswordInput from '../Components/Input/PasswordInput';
import PhoneInput from '../Components/Input/PhoneInput';
import  Logo from '../Components/Logo/MediumLogo';
import { useState } from 'react';

export default function SignupPage({navigation }) {
  const baseURL = "http://192.168.16.111/api"
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();
  const [name , setName] = useState();
  const [phoneNumber , setPhoneNumber] = useState();
  
  const signup = async () => {
    const data = {
      email:email,
      password:password,
      name:name,
      phoneNumber:phoneNumber
    }

    console.log("data:", data)
    const config = {
      method: "post",
      data,
      url:`${baseURL}/register`,
    }
    try{
      const res = await axios(config)
      await AsyncStorage.setItem("@token", res.data.authorisation.token);
      if(res.data.status == "success"){
        navigation.navigate('Home')
      }
    }catch(error){
      console.warn(error)
      return error
    }
  }
  
  return (
    
    <View style={styles.container}>
      <Logo/>
      <Text style={styles.lebText}>
          Leb<Text style={styles.talkText}>Talk</Text>
      </Text>
      <View style={styles.boxContainer}>
        <NameInput setName={setName} name={name}/>
        <EmailInput setEmail={setEmail} email={email}/>
        <PasswordInput setPassword={setPassword} password={password}/>
        {/* <ConfirmPassInput /> */}
        <PhoneInput setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber}/>
        <ContainedButton text={'Signup'} onPress={signup} textStyle={styles.btnText} buttonStyle={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#A42E2C',
    alignItems: 'center',
  },
  lebText:{
    fontWeight:'bold',
    fontSize:30,
    color:'white',
  },
  boxContainer:{
    height:'70%',
    width:'100%',
    padding:30,
    backgroundColor:'#fff',
    borderTopRightRadius:50,
    borderTopLeftRadius:50,
  },
  button:{
    backgroundColor:'#F29D38',
    borderRadius:30,
    marginTop:70,
    marginBottom:20,
  },
  btnText:{
    color:'white',
    textAlign:'center',
    padding:6,
    fontSize:18,
    fontWeight:'bold',
  },
})