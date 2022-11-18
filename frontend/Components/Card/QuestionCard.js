import { StyleSheet, View ,Image, Text,ImageBackground, TouchableOpacity} from 'react-native';
import ContainedButton from '../Button/ContainedButton';
import { Entypo } from '@expo/vector-icons'; 
import TextButton from '../Button/TextButton';

export default function CircularCard({quizNum,question,onPress}) {
  return (
    <View style={styles.container}>
        <View style={styles.btnFlex}>
           
                <Text style={styles.quizNum}>{quizNum}</Text>
                <TouchableOpacity onPress={onPress}>
                    <Entypo name="chevron-small-right" size={40} color="black" /> 
                </TouchableOpacity>
         
           
        </View> 
        {/* <View>
             <Text style={styles.questionText}>{question}</Text>
        </View> */}
        {/* <View style={styles.btnFlex}>   */}
            {/* <ContainedButton buttonStyle={styles.button}/>
            <ContainedButton buttonStyle={styles.button}/>
            <ContainedButton buttonStyle={styles.statusButton} textStyle={styles.statusText} text={'Answered'}/> */}
        {/* </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
container:{
    flexDirection:'column',
    paddingRight:40,
    justifyContent:'space-evenly',
    borderRadius:10,
    paddingButtom:40,
    paddingLeft:20,
    height:114,
    width:330,
    backgroundColor:'#dcdcdc',
    margin:10
},
quizNum:{
    color:'#BB271A',
    fontWeight:'bold',
    fontSize:20
},
questionText:{
    color:'#BB271A',
    fontSize:14,
    fontWeight:'normal'
},
button:{
    width:74,
    height:28,
    borderRadius:20,
    backgroundColor:'#8B1A10'
},
btnFlex:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10
},
statusButton:{
    height:28,
    width:114,
    backgroundColor:'green',
    borderRadius:14
},
statusText:{
    fontSize:14,
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
    padding:3
}
});