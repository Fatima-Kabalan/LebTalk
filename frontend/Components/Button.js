import { StyleSheet, View ,TouchableOpacity ,Text} from 'react-native';

export default function Button({text}) {
  return (
    <View >
      <TouchableOpacity style={styles.button}>
        <Text style={styles.loginText}>{text}</Text>
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
    loginText:{
      color:'white',
      textAlign:'center',
      padding:6,
      fontSize:18,
      fontWeight:'bold',
    },
});
