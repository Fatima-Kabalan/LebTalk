import { StyleSheet, View ,TouchableOpacity ,Text} from 'react-native';

export default function TextButton({text, style ,onPress}) {
  return (
    <View >
      <TouchableOpacity onPress={onPress} >
        <Text style={style}>{text}</Text>
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
