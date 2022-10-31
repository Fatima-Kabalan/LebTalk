import { StyleSheet, Text, View } from 'react-native';
import  Logo from './Components/Logo';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo/>
      <Text style={styles.lebText}>
          Leb<Text style={styles.talkText}>Talk</Text>
      </Text>
      <View>
          
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
    // justifyContent: 'center',
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
});
