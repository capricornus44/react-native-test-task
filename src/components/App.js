import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Login} from './Login';
import {Register} from './Register';

export const App = () => {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <Register />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
