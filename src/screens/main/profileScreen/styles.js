import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 76,
    paddingBottom: 70,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
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
    shadowOpacity: 0.14,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 22,

    elevation: 10,
  },
  button: {
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#E8B0B6',
    height: 64,
  },
  label: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 20,
    color: '#ffffff',
    textTransform: 'capitalize',
  },
  linearGradient: {
    height: 64,
    justifyContent: 'center',
    borderRadius: 10,
  },
});
