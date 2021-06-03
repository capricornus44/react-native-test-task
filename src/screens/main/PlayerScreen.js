import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Video from 'react-native-video';

export const PlayerScreen = ({setShowModal, showModal}) => {
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

        <Video
          controls
          // source={require('../../assets/mp3/niletto.mp3')}
          source={require('../../assets/mp3/2.mp4')}
          // ref={ref => {
          //   this.player = ref;
          // }}
          // onBuffer={this.onBuffer}
          // onError={this.videoError}
          style={styles.backgroundVideo}
        />
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
    paddingTop: '10%',
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
