import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modalComponents: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    paddingVertical: '10%',
    backgroundColor: 'rgba(82, 55, 45, 0.8)',
  },
  close: {
    alignSelf: 'flex-start',
    marginBottom: 36,
  },
  subtitle: {
    marginBottom: 8,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
    color: '#ffffff',
    opacity: 0.6,
  },
  title: {
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 32,
    color: '#ffffff',
  },
  duration: {
    marginTop: 'auto',
    marginBottom: 'auto',
    fontFamily: 'SFProText',
    fontSize: 80,
    lineHeight: 94,
    color: '#ffffff',
  },
  sliderContainer: {
    justifyContent: 'center',
  },
  slider: {
    height: 40,
  },
  controlButtons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 30,
  },

  backgroundVideo: {
    // height: 0,
    // width: '100%',
    // height: 100,
    // borderColor: 'red',
    // borderWidth: 1,
    // borderStyle: 'solid',
  },
});
