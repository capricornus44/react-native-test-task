import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mediaCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginRight: 12,
    height: 88,
    width: 320,
    borderRadius: 10,
    backgroundColor: '#ffffff',

    shadowColor: 'rgb(39, 39, 39)',
    shadowOpacity: 0.14,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowRadius: 22,
    elevation: 7,
  },
  mediaPost: {
    marginRight: 16,
    width: 56,
    height: 56,
  },
  mediaDescription: {},
  mediaSubtitle: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    color: '#8A898E',
    textTransform: 'capitalize',
  },
  mediaTitle: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#1B181C',
    textTransform: 'capitalize',
  },
  mediaDuration: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    color: '#C2C2C2',
  },
  play: {
    marginLeft: 'auto',
    width: 14,
    height: 16,
  },
});
