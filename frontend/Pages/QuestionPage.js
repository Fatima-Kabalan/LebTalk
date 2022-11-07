import { StyleSheet, Text, View, Image , TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Logo from '../Components/Logo/SmallLogo';
import ContainedButton from '../Components/Button/ContainedButton';


export default function QuestionPage({navigation , source }) {
  return (
    <View style={styles.container}>
        <View style={styles.nav}>
            <TouchableOpacity style={styles.close} onPress={() => navigation.navigate('Login')}> 
                <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
            <MaterialCommunityIcons name="alarm-multiple" size={24} color="black" />
            <Logo/>
        </View>
        <Image source={require('../assets/Kibbeh.jpg')} style={styles.image}>
        </Image>
        <View>
            <Text style={styles.questionNum}>Question1</Text>
            <Text style={styles.question}>What is the name of the above meal?</Text>
        </View>
        <View style={styles.btnFlex}>
            <ContainedButton buttonStyle={styles.btnSuccess} text={'كبة'} textStyle={styles.text}/>
            <ContainedButton buttonStyle={styles.btnFail} text={'فتوش'} textStyle={styles.text2}/>
            <ContainedButton buttonStyle={styles.btnFail} text={'حمص'} textStyle={styles.text2}/>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    nav:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
        marginTop:25,
    },
    image:{
        height:'30%',
        width:'90%', 
        borderRadius:30,
        marginLeft:10,
        marginRight:10
    },
    questionNum:{
        color:'#BB271A',
        fontWeight:'bold',
        fontSize:18,
        marginTop:20,
        marginRight:20,
        marginLeft:20,
    },
    question:{
        fontSize:16,
        marginRight:20,
        marginTop:20,
        marginLeft:20,
    },
    btnSuccess:{
        backgroundColor:'#F29D38',
        width:'90%',
        marginLeft:20,
        marginTop:20,
        borderRadius:40
    },
    btnFail:{
        backgroundColor:'#d3d3d3',
        width:'90%',
        marginLeft:20,
        marginTop:20,
        borderRadius:40
    },
    text:{
        fontSize:35,
        color:'#BB271A',
        textAlign:'center',
        padding:10
    },
    text2:{
        fontSize:35,
        color:'#778899',
        textAlign:'center',
        padding:10
    }
})