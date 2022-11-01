import { StyleSheet, View ,Text } from 'react-native';
import Input from './Components/Input';
import LandingPage from './Pages/LandingPage';



export default function App() {
  return (
    <View style={styles.container}>
      <LandingPage>
      </LandingPage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#A42E2C',
  },
});

