import { StyleSheet, View ,Text } from 'react-native';
import Button from './Components/Button';
import LandingPage from './Pages/LandingPage';



export default function App() {
  return (
    <View style={styles.container}>
      <LandingPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#BD4543',
  },
});

