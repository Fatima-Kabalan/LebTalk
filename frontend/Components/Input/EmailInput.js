import { StyleSheet, View , TextInput} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function EmailInput({email , setEmail}) {

    return (
        <View style={styles.inputIcon}>
            <MaterialCommunityIcons name="email" size={20} color="#BD4543" />
            <TextInput style={styles.input} type='email' name='email' placeholder='Email' value={email} onChangeText={setEmail}/>
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
