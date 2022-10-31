import { StyleSheet, Text, View } from 'react-native';
import  Logo from './Components/Logo';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo/>
      <View>
        <Text>Hello</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#A42E2C',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
