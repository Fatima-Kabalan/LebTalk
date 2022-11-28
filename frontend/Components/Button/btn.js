import { StyleSheet, View ,Text,TouchableHighlight} from 'react-native';


export default function PressedButton({text,textStyle,onPress}) {

  return (
    <View >
      <TouchableHighlight
       activeOpacity={0.6}
       underlayColor="green"
       onPress={onPress}
      >
      <Text style={textStyle}>{text}</Text>
     
      </TouchableHighlight>
    </View>
  );
}