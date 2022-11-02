import { StyleSheet, View , TextInput} from 'react-native';
import { Entypo } from '@expo/vector-icons';


export default function NameInput() {
  return (
        <View style={styles.inputIcon}>
            <Entypo name="user" size={20} color="#BD4543" />
            <TextInput style={styles.input} type='name' placeholder='Name'></TextInput>
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