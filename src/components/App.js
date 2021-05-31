import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Login} from './Login';

export const App = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
