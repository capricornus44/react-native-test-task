import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/auth/LoginScreen';
import {RegisterScreen} from '../screens/auth/RegisterScreen';
import {UserScreen} from '../screens/UserScreen';

const MainStack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <MainStack.Screen
          options={{headerShown: false}}
          name="Registration"
          component={RegisterScreen}
        />
        <MainStack.Screen name="User" component={UserScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
