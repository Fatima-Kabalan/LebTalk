import { StyleSheet, View , TextInput} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Input() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} type='email' placeholder='Email'></TextInput>
      <TextInput style={styles.input} type='password' placeholder='Password'></TextInput>
    </View>
  );
}
const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        flexDirection:'column',
    }
});
