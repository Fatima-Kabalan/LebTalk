import { StyleSheet, View , TextInput} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function EmailInput() {
  return (
        <View style={styles.inputIcon}>
            <MaterialCommunityIcons name="email" size={20} color="#BD4543" />
            <TextInput style={styles.input} type='email' placeholder='Email' ></TextInput>
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
