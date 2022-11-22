import { StyleSheet, View ,TouchableOpacity ,Text, Button} from 'react-native';


export default function PressedButton({text,textStyle, buttonStyle ,onPress ,type,props}) {

  const[confirmed,setComfirmed] = useState(false);
    // function btnStyle(type){
    //   if(type === "successBtn") return styles.successBtn;
    //   if(type === "failedBtn") return styles.failedBtn;
    //   if(type === "normalBtn") return styles.normalBtn;
    // }

  return (
    <View >
      <Button 
        btnstyle={confirmed ? "successBtn" : "failedBtn"}
        onPress={props.onPress}
      >
      <Text style={textStyle}>{text}</Text>
    </Button>
   
    </View>
  );
}
const styles = StyleSheet.create({
    successBtn:{
      backgroundColor:'#F29D38',
      borderRadius:30,
      marginBottom:20,
    },
    failedBtn:{
      backgroundColor:'red',
      borderRadius:30,
      marginBottom:20,
    },
    normalBtn:{
      backgroundColor:'grey',
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