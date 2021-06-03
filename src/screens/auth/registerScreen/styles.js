import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '500',
    lineHeight: 26,
    color: '#1B181C',
  },
  field: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 40,
    width: '100%',
    marginBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(163, 163, 163, 0.24)',
  },
  envelope: {
    width: 19,
    height: 14,
    marginRight: 11,
  },
  info: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  lock: {
    width: 16,
    height: 18,
    marginRight: 13,
  },
  input: {
    width: '100%',
    color: '#8a898e',
  },
  button: {
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#E8B0B6',
    height: 64,
    marginBottom: 32,
  },
  label: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 20,
    color: '#ffffff',
    textTransform: 'capitalize',
  },
  question: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#8A898E',
  },
  link: {
    textDecorationLine: 'underline',
  },
  linearGradient: {
    height: 64,
    justifyContent: 'center',
    borderRadius: 10,
  },
});
