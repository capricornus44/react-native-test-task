import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Slider from '@react-native-community/slider';
import Video from 'react-native-video';

import {AlertMessage} from '../../components/AlertMessage';

const testVideo = require('../../assets/mp3/2.mp4');

export const PlayerScreen = ({setShowModal, showModal}) => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.modalComponents}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.close}
          onPress={() => setShowModal(false)}>
          <Image source={require('../../assets/icons/close.png')} />
        </TouchableOpacity>
        <Text style={styles.subtitle}>Subtitle</Text>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.duration}>6:59</Text>

        {showAlert && (
          <AlertMessage
            setShowModal={setShowModal}
            setShowAlert={setShowAlert}
          />
        )}

        <View style={styles.controlContainer}>
          <View style={styles.sliderContainer}>
            <Slider
              style={{height: 40}}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#FFFFFF"
              thumbTintColor="#FFFFFF"
            />
          </View>
          <View style={styles.controlButtons}>
            <TouchableOpacity activeOpacity={0.7}>
              <Image
                style={styles.backward}
                source={require('../../assets/icons/back.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setShowAlert(true)}>
              <Image
                style={styles.pause}
                source={require('../../assets/icons/stop.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <Image
                style={styles.forward}
                source={require('../../assets/icons/fwd.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* <Video
          controls
          // source={require('../../assets/mp3/niletto.mp3')}
          source={require('../../assets/mp3/2.mp4')}
          style={styles.backgroundVideo}
        /> */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  controlButtons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 30,
  },

  backgroundVideo: {
    // position: 'absolute',
    // bottom: 0,
    height: 150,
    width: '100%',
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
