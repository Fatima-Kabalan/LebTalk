import { StyleSheet, View , TextInput} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function PasswordInput({password , setPassword}) {
  return (
        <View style={styles.inputIcon}>
            <MaterialCommunityIcons name="lock" size={20} color="#BD4543" />
            <TextInput style={styles.input} type='password' placeholder='Password' value={password} onChangeText={setPassword}/> 
        </View>
  );
}
const styles = StyleSheet.create({
    input: {
        width:'96%',
        paddingLeft:8,
    },
    inputIcon:{
        borderBottomWidth:1,
        borderColor:'#A42E2C',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20,
    }
});
