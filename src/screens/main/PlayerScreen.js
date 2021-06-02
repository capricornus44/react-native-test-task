import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';

export const PlayerScreen = () => {
  return (
    <View style={styles.modal}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.play}
        onPress={() => navigation.navigate('Library')}>
        <Image source={require('../../assets/icons/close.png')} />
      </TouchableOpacity>

      <Video
        source={{uri: 'background'}} // Can be a URL or a local file.
        ref={ref => {
          this.player = ref;
        }} // Store reference
        onBuffer={this.onBuffer} // Callback when remote video is buffering
        onError={this.videoError} // Callback when video cannot be loaded
        style={styles.backgroundVideo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
