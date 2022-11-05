import { StyleSheet, Text, View, Image , TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Logo from '../Components/Logo/SmallLogo';


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
        <View style={styles.imgContainer}>
            <Image source={require('../assets/Kibbeh.jpg')} style={styles.image}></Image>
        </View>
        <View >
            <Text style={styles.questionNum}>Question1</Text>
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
        marginTop:25
    },
    image:{
        height:'55%',
        width:'90%', 
        borderRadius:30
    },
    imgContainer:{
        alignItems:'center',
        
    },
    questionNum:{
        color:'#BB271A',
        fontWeight:'bold',
        fontSize:18,
      
    },
    questionText:{
        color:'#BB271A',
        fontSize:14,
        fontWeight:'normal'
    },
})