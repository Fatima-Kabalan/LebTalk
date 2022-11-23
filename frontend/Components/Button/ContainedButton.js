import { useState } from 'react';
import { StyleSheet, View ,TouchableOpacity ,Text} from 'react-native';

export default function ContainedButton({text,textStyle, buttonStyle ,onPress , isCorrect}) {
  const [pressed , setPressed] = useState(false);
  return (
    <View >
      <TouchableOpacity  onPress={
        ()=>{
          setPressed(true);
          
          onPress();
        }
      } style={pressed && isCorrect===0 ?  styles.btnWrong : pressed && isCorrect===1 ?  styles.btnCorrect : buttonStyle}>
        <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    button:{
      backgroundColor:'#F29D38',
      borderRadius:30,
      marginBottom:20,
    },
    btnText:{
      color:'white',
      textAlign:'center',
      padding:6,
      fontSize:18,
      fontWeight:'bold',
    },

    btnWrong:{
      backgroundColor:'red',
      width:'90%',
      marginLeft:20,
      marginTop:20,
      borderRadius:40
    },
    btnCorrect:{
      backgroundColor:'green',
      width:'90%',
      marginLeft:20,
      marginTop:20,
      borderRadius:40
    }
});