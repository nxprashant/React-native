import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from './Screens/LoginScreen'
import DisplayLogin from './Screens/DisplayLogin'
import RegisterScreen from './Screens/RegisterScreen'
import SplashScreen from './Screens/SplashScreen'

const Stack=createStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator initialRouteName="Splash" component={SplashScreen} headerMode='none'>
      <Stack.Screen name="Splash" component={SplashScreen}/>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Register" component={RegisterScreen}/>
      <Stack.Screen name="LoginDisplay" component={DisplayLogin}/>
    </Stack.Navigator>
  );
};

export default function App(){
  return(
    <NavigationContainer>
      <MyStack/>
      </NavigationContainer>
  );
};
