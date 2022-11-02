import { StyleSheet, View ,TouchableOpacity ,Text} from 'react-native';

export default function ContainedButton({text,textStyle, buttonStyle ,onPress}) {
  return (
    <View >
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
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
});