import React from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import {logOutUser} from '../redux/auth/authOperations';

export const UserScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image
          style={styles.avatar}
          source={require('../assets/images/avatar.png')}
        />
        <Text style={styles.name}>User name</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleLogout}>
        <Text style={styles.label}>logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 76,
    paddingBottom: 169,
    paddingHorizontal: 24,
  },
  user: {
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 128,
  },
  avatar: {
    position: 'absolute',
    top: 0,

    width: 112,
    height: 112,
  },
  name: {
    width: 140,
    height: 32,
    borderRadius: 10,
    paddingVertical: 8,
    fontWeight: '900',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
    color: '#1B181C',
    backgroundColor: '#ffffff',

    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 22,

    elevation: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#E8B0B6',
    height: 64,
  },
  label: {
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 20,
    color: '#ffffff',
    textTransform: 'capitalize',
  },
});
