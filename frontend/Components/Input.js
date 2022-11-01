import { StyleSheet, View , TextInput} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Input() {
  return (
    <View style={styles.inputContainer}>
        <View style={styles.inputIcon}>
         <MaterialCommunityIcons name="email" size={20} color="#BD4543" />
         <TextInput style={styles.input} type='email' placeholder='Email'></TextInput>
        </View>
        <View style={styles.inputIcon}>
            <MaterialCommunityIcons name="lock" size={20} color="#BD4543" />
            <TextInput style={styles.input} type='password' placeholder='Password'></TextInput>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        flexDirection:'column',
        height:'60%',
        width:'100%',
        backgroundColor:'#fff',
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
    },
    input: {
        width:'96%',
        paddingLeft:8,
    },
    inputIcon:{
        borderBottomWidth:1,
        borderColor:'#A42E2C',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:12,
    }
});
