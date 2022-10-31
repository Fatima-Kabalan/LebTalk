import { StyleSheet, Text, View } from 'react-native';
import  Logo from './Components/Logo';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
