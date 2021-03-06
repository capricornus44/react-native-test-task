import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

import {LoginScreen} from '../screens/auth/loginScreen/LoginScreen';
import {RegisterScreen} from '../screens/auth/registerScreen/RegisterScreen';
import {ProfileScreen} from '../screens/main/profileScreen/ProfileScreen';
import {LibraryScreen} from '../screens/main/libraryScreen/LibraryScreen';

const AuthStack = createStackNavigator();

const MainTab = createBottomTabNavigator();

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
      </AuthStack.Navigator>
    );
  }

  return (
    <MainTab.Navigator
      tabBarOptions={{
        activeTintColor: '#d49499',
        style: {height: 83, paddingBottom: 15, paddingTop: 15},
      }}>
      <MainTab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('../assets/icons/libraryFocused.png')} />
            ) : (
              <Image source={require('../assets/icons/library.png')} />
            ),
        }}
        name="Library"
        component={LibraryScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('../assets/icons/profileFocused.png')} />
            ) : (
              <Image source={require('../assets/icons/profile.png')} />
            ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
