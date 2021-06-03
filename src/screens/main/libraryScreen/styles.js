import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  upperContainer: {
    height: '75%',
    backgroundColor: '#fafafa',
  },
  imageBackground: {
    resizeMode: 'cover',
    flex: 1,
    paddingTop: '10%',
    paddingHorizontal: 24,
  },
  date: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#C2C2C2',
  },
  slogan: {
    fontWeight: '500',
    fontSize: 22,
    lineHeight: 26,
    color: '#1B181C',
  },
  anchor: {
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  lowerContainer: {
    flex: 1,
    height: '25%',
    paddingHorizontal: 24,
    backgroundColor: '#fafafa',
  },
});
