import React from 'react';
import {View, StyleSheet} from 'react-native';
import {LoginScreen} from './LoginScreen';
import {RegisterScreen} from './RegisterScreen';
// import {UserScreen} from './UserScreen';

export const App = () => {
  return (
    <View style={styles.container}>
      <LoginScreen />
      {/* <RegisterScreen /> */}
      {/* <UserScreen /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
