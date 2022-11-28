import { View ,TouchableOpacity ,Text} from 'react-native';

export default function TextButton({text, style ,onPress}) {
  return (
    <View >
      <TouchableOpacity onPress={onPress} >
        <Text style={style}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
