import { StyleSheet, View ,Image, Text,ImageBackground, TouchableOpacity} from 'react-native';
import ContainedButton from '../Button/ContainedButton';
import { Entypo } from '@expo/vector-icons'; 
import TextButton from '../Button/TextButton';

export default function ChatCard({onPress}) {
  return (
    <View style={styles.container}>
        <View style={styles.picContainer}>
            <Image style={styles.pic}></Image>
            <Text style={styles.text}>Username</Text> 
            
        </View>
      <ContainedButton buttonStyle={styles.btn} textStyle={styles.btnText} text='hello'/> 
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        justifyContent:'space-evenly',
        borderRadius:10,
        height:'25%',
        width:'90%',
        backgroundColor:'#f5deb3',
    },
    pic:{
        borderRadius:50,
        height:'100%',
        width:'20%',
        backgroundColor:'black',

    },
    picContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        height:'50%',
        marginTop:20
    },
    btn:{
        height:'50%',
        width:'50%',
        backgroundColor:'red',
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:90,
        backgroundColor:'#F29D38',
    },
    text:{
        textAlign:'center',
        paddingTop:25
    }
});