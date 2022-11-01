import { StyleSheet, View ,TouchableOpacity ,Text} from 'react-native';

export default function Button({text}) {
  return (
    <View >
      <TouchableOpacity style={styles.button}  >
        <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:'#F29D38',
        margin:20,

    },
});
