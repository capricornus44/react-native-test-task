import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export const AlertMessage = ({setShowModal, setShowAlert}) => {
  return (
    <TouchableOpacity
      style={styles.alertButton}
      onPress={() => {
        setShowModal(false);
        setShowAlert(false);
      }}>
      <Text style={styles.alertMessage}>Finish later</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  },
});
