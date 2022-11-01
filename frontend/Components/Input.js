import { StyleSheet, View , TextInput} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Input() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} type='email' placeholder='Email'></TextInput>
      <View style={styles.inputIcon}>
         <MaterialCommunityIcons name="email-outline" size={20} color="" />
         <TextInput style={styles.input} type='password' placeholder='Password'></TextInput>
      </View>
     
    </View>
  );
}
const styles = StyleSheet.create({
    inputContainer:{
       
        flex:1,
        flexDirection:'column',
        height:'70%',
        width:'100%',
        backgroundColor:'#fff',
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
    },
    input: {
        // borderBottomWidth:1,
        borderColor:'#A42E2C',
        margin:10,
        width:'95%',
    },
    inputIcon:{
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center',
    }
});
