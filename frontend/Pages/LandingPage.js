import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../Components/Button/TextButton';
import  Logo from '../Components/Logo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TextButton from '../Components/Button/TextButton';
import EmailInput from '../Components/Input/EmailInput';
import PasswordInput from '../Components/Input/PasswordInput';
import ContainedButton from '../Components/Button/ContainedButton';


export default function LandingPage({navigation}) {
  return (
    <View style={styles.container}>
      <Logo/>
      <Text style={styles.lebText}>
          Leb<Text style={styles.talkText}>Talk</Text>
      </Text>
      <View style={styles.boxContainer}>
        <View style={styles.inputContainer}>
          <EmailInput />
          <PasswordInput />
        </View>
        <Text style={styles.question}>Forgot password?</Text>
        <ContainedButton text={"Login"}  textStyle={styles.signupText} buttonStyle={styles.button}/>
          <Text style={styles.signupText}>Don’t have an account?</Text>
          <TextButton onPress={() => navigation.navigate('Signup')} text={"Create one"} style={styles.redText} />
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
    marginBottom:190,
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
    justifyContent:'center',
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
  flex:{
    flexDirection:'row',
    alignItems:'center',
    
  }
});

