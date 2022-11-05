import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View ,Text } from 'react-native';
import CongratsPage from './Pages/CongratsPage';
import HomePage from './Pages/HomePage';
import LandingPage from './Pages/LandingPage';
import SignupPage from './Pages/SignupPage';
import FailedPage from './Pages/FailedPage';
import FoodPage from './Pages/FoodPage';
import QuizPage from './Pages/QuizPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>  
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Login"
          component={LandingPage}
        />
        <Stack.Screen name="Signup" component={SignupPage} />
        <Stack.Screen
          name="Home"
          component={HomePage}
        />
        <Stack.Screen
          name="Congrats"
          component={CongratsPage}
        />
        <Stack.Screen
          name="Failed"
          component={FailedPage}
        />
        <Stack.Screen
          name="Food"
          component={FoodPage}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizPage}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#BD4543',
  },
});

