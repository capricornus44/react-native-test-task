import 'react-native-gesture-handler';
import React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from './LoginScreen';
import {RegisterScreen} from './RegisterScreen';
import {UserScreen} from './UserScreen';

const MainStack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Registration" component={RegisterScreen} />
        <MainStack.Screen name="User" component={UserScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
