import { StyleSheet, Text, View } from 'react-native';
import Button from '../Components/Button';
import Input from '../Components/Input';
import  Logo from '../Components/Logo';




export default function LandingPage() {
  return (
    <View style={styles.container}>
      <Logo/>
      <Text style={styles.lebText}>
          Leb<Text style={styles.talkText}>Talk</Text>
      </Text>
      <View style={styles.boxContainer}>
        <Input/>
        <Text style={styles.question}>Forgot password?</Text>
          <Button text={"Login"}/>
          <Text style={styles.signupText}>Don’t have an account?<Text style={styles.redText}>Create one</Text></Text>
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
  }
});

