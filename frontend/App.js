import { StyleSheet, View } from 'react-native';
import LandingPage from './Pages/LandingPage';



export default function App() {
  return (
    <View style={styles.container}>
      <LandingPage/>
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

