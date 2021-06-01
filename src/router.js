import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginScreen} from './screens/auth/LoginScreen';
import {RegisterScreen} from './screens/auth/RegisterScreen';
import {UserScreen} from './screens/UserScreen';

const AuthStack = createStackNavigator();

export const useRoute = isAuth => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{headerShown: false}}
          name="Registration"
          component={RegisterScreen}
        />
        <AuthStack.Screen name="User" component={UserScreen} />
      </AuthStack.Navigator>
    );
  }

  return <UserScreen />;
};
