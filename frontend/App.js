import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CongratsPage from './Pages/CongratsPage';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import SignupPage from './Pages/SignupPage';
import FailedPage from './Pages/FailedPage';
import QuestionPage from './Pages/QuestionPage';
import UserProfile from './Pages/UserProfile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InstructorChatPage from './Pages/InstructorChatPage';
import CategoryPage from './Pages/CategoryPage';
import AnswersPage from './Pages/AnswersPage';



export default function App() {
  
const Stack = createNativeStackNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
      headerShown: false
    }}
    >
    <HomeStack.Screen  
      name="HomePage"
      component={HomePage} 
    />
    <HomeStack.Screen 
      name="Profile" 
      component={UserProfile} 
    />
    </HomeStack.Navigator>
  );
}

const UserStack = createNativeStackNavigator();
      
function UserProfileScreen() {
  return (
    <UserStack.Navigator
      screenOptions={{
      headerShown: false
    }}>
    <UserStack.Screen 
      name="Profile" 
      component={UserProfile} 
    />
    </UserStack.Navigator>
  );
}


const InstuctorStack = createNativeStackNavigator();
      
function InstuctorChatStackScreen() {
  return (
    <InstuctorStack.Navigator
      screenOptions={{
      headerShown: false
    }}>
    <InstuctorStack.Screen 
      name="InstructorChatPage" 
      component={InstructorChatPage} 
    />
    </InstuctorStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
        iconName = focused
          ? 'home'
          : 'home-outline';
        } else if (route.name === 'Profile') {
          iconName = focused 
          ? 'person'
          : 'person';
        } else if (route.name === 'Instructor') {
          iconName = focused 
          ? 'people'
          : 'people';
        };
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#F29D38',
      tabBarInactiveTintColor: 'white',
      tabBarStyle: {   backgroundColor: '#A42E2C',},
      headerShown: false
      })}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Instructor" component={InstuctorChatStackScreen} />
      <Tab.Screen name="Profile" component={UserProfileScreen}/>
    </Tab.Navigator>
  )
  }
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
            }}
        >
        <Stack.Screen
          name="Login"
          component={Login}
         
        />
        <Stack.Screen 
          name="Signup" 
          component={SignupPage} 
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
          name="Category"
          component={CategoryPage}
        />
        <Stack.Screen
          name="Answers"
          component={AnswersPage}
        />
        <Stack.Screen
          name="Questions"
          component={QuestionPage}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
        />
        <Stack.Screen 
          name="Home" 
          component={TabStack}
        />
       </Stack.Navigator>
    </NavigationContainer>
  );
}