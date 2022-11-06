import { StyleSheet, View ,Image, Text,ImageBackground, TouchableOpacity} from 'react-native';
import ContainedButton from '../Button/ContainedButton';
import { Entypo } from '@expo/vector-icons'; 
import TextButton from '../Button/TextButton';

export default function ChatCard({username,source}) {
  return (
    <View style={styles.container}>
        <View style={styles.picContainer}>
            <Image style={styles.pic} source={source}></Image>
            <Text style={styles.text}>{username}</Text> 
        </View>
      <ContainedButton buttonStyle={styles.btn} textStyle={styles.btnText} text='Connect' /> 
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
        height:'80%',
        width:'20%',
        backgroundColor:'black',
        marginRight:10
    },
    picContainer:{
        flexDirection:'row',
        justifyContent:'center',
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
        borderRadius:30
    },
    text:{
        textAlign:'center',
        paddingTop:25
    },
    btnText:{
        fontWeight:'bold',
        color:'white',
        fontSize: 18
    }
});