import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import Slider from '@react-native-community/slider';
import Video from 'react-native-video';

import {MessageWhenPause} from '../../../components/messageWhenPause/MessageWhenPause';
import StyleSheet from './styles';

const mediaURL = require('../../../assets/mp3/niletto.mp3');

export const PlayerScreen = ({setShowModal, showModal}) => {
  const [showAlert, setShowAlert] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={StyleSheet.modalComponents}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={StyleSheet.close}
          onPress={() => setShowModal(false)}>
          <Image source={require('../../../assets/icons/close.png')} />
        </TouchableOpacity>
        <Text style={StyleSheet.subtitle}>Subtitle</Text>
        <Text style={StyleSheet.title}>Title</Text>
        <Text style={StyleSheet.duration}>6:59</Text>

        {showAlert && (
          <MessageWhenPause
            setShowModal={setShowModal}
            setShowAlert={setShowAlert}
            setIsPaused={setIsPaused}
          />
        )}

        <View style={StyleSheet.controlContainer}>
          <View style={StyleSheet.sliderContainer}>
            <Slider
              style={StyleSheet.slider}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#FFFFFF"
              thumbTintColor="#FFFFFF"
            />
          </View>
          <View style={StyleSheet.controlButtons}>
            <TouchableOpacity activeOpacity={0.7}>
              <Image
                style={StyleSheet.backward}
                source={require('../../../assets/icons/back.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setIsPaused(true);
                setShowAlert(true);
              }}>
              <Image
                style={StyleSheet.pause}
                source={require('../../../assets/icons/stop.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <Image
                style={StyleSheet.forward}
                source={require('../../../assets/icons/fwd.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        {!isPaused && (
          <Video
            paused={isPaused}
            // onProgress={onProgress}
            // onEnd={onEnd}
            // onLoad={onLoad}
            // ref={videoPLayer => (videoPLayer = videoPLayer)}
            source={mediaURL}
            style={StyleSheet.backgroundVideo}
          />
        )}
      </View>
    </Modal>
  );
};
