import { useState } from 'react';
import { View ,TouchableOpacity ,Text} from 'react-native';

export default function ContainedButton({text,textStyle, buttonStyle ,onPress , disabled }) {
  const [pressed , setPressed] = useState(disabled);
  
  return (
    <View >
      <TouchableOpacity  onPress={
        ()=>{
          setPressed(!pressed);
          onPress();
        }
      } 
      disabled={disabled}
      style={ 
      buttonStyle }>
        <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}