import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import WelcomeScreen from './src/screens/WelcomeScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import RescueScreen from './src/screens/RescueScreen';
import ProfileScreen from './src/screens/ProfileScreen';

// Import other screens you have
// import ReportScreen from './src/screens/ReportScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false, // Hide header for all screens
        }}
      >
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
        />
        <Stack.Screen 
          name="SignupScreen" 
          component={SignupScreen} 
        />
        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
        />
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
        />
        <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} />

        <Stack.Screen 
        name="Rescue" 
        component={RescueScreen} />
        
        {/* Add your other screens here */}
        {/* 
        <Stack.Screen 
          name="ReportScreen" 
          component={ReportScreen} 
        />
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;