import { View ,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function ContainedButton({ buttonStyle , onPress }) {
  return (
    <View >
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <AntDesign name="left" size={23} color="white" />
      </TouchableOpacity>
    </View>
  );
};