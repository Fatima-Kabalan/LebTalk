import { StyleSheet, View ,Image, Text,ImageBackground, Linking , TouchableOpacity} from 'react-native';
import ContainedButton from '../Button/ContainedButton';
import { Entypo } from '@expo/vector-icons'; 
import TextButton from '../Button/TextButton';

export default function ChatCard({username,source ,onPress, to}) {
    const image = { uri : source }
    return (
    <View style={styles.container}>
        <View style={styles.picContainer}>
            <Image style={styles.pic} source={image} ></Image>
            <Text style={styles.text}>{username}</Text> 
        </View>
      <ContainedButton buttonStyle={styles.btn} textStyle={styles.btnText} text='Connect' onPress={onPress} to={to}/> 
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
        marginTop:20,
        marginLeft:20,
        
    },
    pic:{
        borderRadius:50,
        height:'90%',
        width:'40%',
        backgroundColor:'black',
        marginRight:10,
        marginLeft:10,
    },
    picContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:'50%',
        marginTop:10,
        paddingLeft:20,
        paddingRight:80,
        paddingTop:10
    },
    btn:{
        height:'45%',
        width:'90%',
        backgroundColor:'red',
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20,
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