import {StyleSheet, Text, View } from 'react-native';
import axios from "axios";
import  Logo from '../Components/Logo/MediumLogo';
import TextButton from '../Components/Button/TextButton';
import EmailInput from '../Components/Input/EmailInput';
import PasswordInput from '../Components/Input/PasswordInput';
import ContainedButton from '../Components/Button/ContainedButton';


// const { navigate } = this.props.data;

// const baseURL = "http://192.168.43.152:80/api"
// // const [email , setEmail] = useState('');
// // const [password , setPassword] = useState('');

// export async function signin(data){
//   console.log('hi88888');
//   const config = {
//     method: "post",
//     data,
//     url:`${baseURL}/login`,

//   }
//   try{
//     const res = await axios({
//       method: "post",
//       data:{
//         email:"hussien1@hussien",
//         password:"1234567"
//       },
//       url:`${baseURL}/login`,
  
//     }).then((response) => {
//       console.log(response.data);
//     });
//     await AsyncStorage.setItem({"@token":res.data['access-token']})
//     console.log(AsyncStorage.getItem("token"))
//     return {success:true , data: res.data }
//   }catch(error){
//     console.warn(error)
//     return{'success':false , error}
//   }
// }

export default function LandingPage({navigation}) {
  return (
    <View style={styles.container}>
      <Logo/>
      <Text style={styles.lebText}>
          Leb<Text style={styles.talkText}>Talk</Text>
      </Text>
      <View style={styles.boxContainer}>
        <View style={styles.inputContainer}>
          <EmailInput  />
          <PasswordInput />
        <Text style={styles.question}>Forgot password?</Text>
        </View>
        <View>        
          <ContainedButton text={"Login"} onPress={() => navigation.navigate('Failed')}  textStyle={styles.btnText} buttonStyle={styles.button}/>
          <Text style={styles.signupText}>Don’t have an account?<TextButton onPress={() => navigation.navigate('Signup')} text={"Create one"} style={styles.redText} /></Text>
        </View>
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
  button:{
    backgroundColor:'#F29D38',
    borderRadius:30,
    marginBottom:20,
  },
  btnText:{
    color:'white',
    textAlign:'center',
    padding:6,
    fontSize:18,
    fontWeight:'bold',
  },
  lebText:{
    fontWeight:'bold',
    fontSize:30,
    color:'white',
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
  question:{
    marginBottom:180,
    textAlign:'right',
    color:'#BB271A',
    fontSize:14,
  },
  signupText:{
    marginBottom:60,
    textAlign:'center',
    fontSize:14,
  },
  redText:{
    color:'#A42E2C',
  },
  inputContainer:{
    flex:1,
    flexDirection:'column',
    height:'50%',
    width:'100%',
    backgroundColor:'#fff',
    borderTopRightRadius:50,
    borderTopLeftRadius:50,
  },
});

