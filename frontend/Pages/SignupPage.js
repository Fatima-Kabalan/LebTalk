import { StyleSheet, Text, View } from 'react-native';
import ContainedButton from '../Components/Button/ContainedButton';
import ConfirmPassInput from '../Components/Input/ConfirmPassInput';
import EmailInput from '../Components/Input/EmailInput';
import NameInput from '../Components/Input/NameInput';
import PasswordInput from '../Components/Input/PasswordInput';
import PhoneInput from '../Components/Input/PhoneInput';
import  Logo from '../Components/Logo';


export default function SignupPage({navigation }) {
  return (
    <View style={styles.container}>
      <Logo/>
      <Text style={styles.lebText}>
          Leb<Text style={styles.talkText}>Talk</Text>
      </Text>
      <View style={styles.boxContainer}>
        <NameInput/>
        <EmailInput />
        <PasswordInput />
        <ConfirmPassInput />
        <PhoneInput />
        <ContainedButton text={'Signup'} onPress={() => navigation.navigate('Login')} textStyle={styles.btnText} buttonStyle={styles.button} />
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