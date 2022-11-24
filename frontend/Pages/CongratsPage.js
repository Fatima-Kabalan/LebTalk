import { StyleSheet, Text, View,Image ,height,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import ContainedButton from '../Components/Button/ContainedButton';

export default function CongratsPage({navigation}) {
  return (
    <View style={styles.congratsContainer}>
        <TouchableOpacity style={styles.close} onPress={() => navigation.navigate('Home')}> 
            <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
        <Image source={require('../assets/trophy.gif')} style={styles.trophy}></Image>
        <Text style={styles.congratsText}>Congratulations!</Text>
        <Text style={styles.scoreText}>You scored 1 points out of 5!</Text>
        {/* <ContainedButton text={'NEXT: SPORTS'} buttonStyle={styles.nextButton} textStyle={styles.nextText}></ContainedButton> */}
    </View>
  );
}

const styles = StyleSheet.create({
    nextText:{
        fontSize:14,
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:10
    },
    congratsContainer:{
        backgroundColor:'#FFFCF3',
        flex:1,
    },
    close:{
        flexDirection:'row',
        paddingTop:50,
        paddingLeft:10,
    },
    trophy:{
        marginLeft:60,
        width:'70%',
        height:'50%'
    },
    congratsText:{
       fontWeight:'bold',
       color:'#A30000',
       fontSize:24,
       textAlign:'center'
    },
    scoreText:{
        fontStyle:'normal',
        fontSize:16,
        color:'#A42E2C',
        paddingTop:12,
        textAlign:'center'
    },
    nextButton:{
        backgroundColor:'#F29D38',
        borderRadius:30,
        width:'50%',
        height:'15%',
        margin:87
    }
})
