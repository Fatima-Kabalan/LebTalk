import { StyleSheet, View ,TouchableOpacity ,Text, Button} from 'react-native';


export default function PressedButton({text,textStyle,props}) {

  const[confirmed,setComfirmed] = useState(false);

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