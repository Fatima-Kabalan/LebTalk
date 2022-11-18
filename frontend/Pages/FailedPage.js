import { StyleSheet, Text, View,Image ,height,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import ContainedButton from '../Components/Button/ContainedButton';

export default function FailedPage({navigation}) {
  return (
    <View style={styles.failedContainer}>
        <TouchableOpacity style={styles.close} onPress={() => navigation.navigate('Question')}> 
            <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
        <Image source={require('../assets/giphy.gif')} style={styles.giphy}></Image>
        <Text style={styles.congratsText}>You Lost!</Text>
        <Text style={styles.scoreText}>Better Luck next try!</Text>
        <ContainedButton text={'Retry'} buttonStyle={styles.retryButton} textStyle={styles.retryText}></ContainedButton>
    </View>
  );
}

const styles = StyleSheet.create({
    retryText:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:6
    },
    failedContainer:{
        backgroundColor:'#FFFCF3',
        flex:1,
    },
    close:{
        flexDirection:'row',
        paddingTop:50,
        paddingLeft:10,
    },
    giphy:{
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
    retryButton:{
        backgroundColor:'#F29D38',
        borderRadius:30,
        width:'50%',
        height:'15%',
        margin:87
    }
})
