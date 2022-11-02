import { StyleSheet, Text, View } from 'react-native';
import Button from '../Components/Button/TextButton';
import TextButton from '../Components/Button/TextButton';
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
        <TextButton text={'Signup'} onPress={() => navigation.navigate('Login')}  />
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
  button1:{
    backgroundColor:'green',
    borderRadius:30,
    marginBottom:20,
  },
  
})