import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import StyleSheet from './styles';

export const MessageWhenPause = ({setShowModal, setShowAlert}) => {
  return (
    <TouchableOpacity
      style={StyleSheet.alertButton}
      onPress={() => {
        setShowModal(false);
        setShowAlert(false);
      }}>
      <Text style={StyleSheet.alertMessage}>Finish later</Text>
    </TouchableOpacity>
  );
};
