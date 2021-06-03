import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  alertButton: {
    position: 'absolute',
    bottom: '33%',
    height: 64,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    opacity: 0.2,
  },
  alertMessage: {
    fontSize: 20,
    lineHeight: 24,
    color: '#ffffff',
    textTransform: 'capitalize',
  },
});
