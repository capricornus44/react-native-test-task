import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const MediaCard = ({song}) => {
  return (
    <View
      style={{
        padding: 16,
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}>
      <View style={styles.mediaPost}>
        <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={{width: 56, height: 56}}
        />
      </View>
      <View style={styles.mediaDescription}>
        <Text style={styles.mediaSubtitle}>{song.subtitle}</Text>
        <Text style={styles.mediaTitle}>{song.title}</Text>
        <Text style={styles.mediaDuration}>{song.duration}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.play}>
        <Image source={require('../assets/icons/play.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mediaCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    marginRight: 12,
    height: 88,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#ffffff',

    shadowColor: '#000',
    shadowOpacity: 0.14,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 22,

    elevation: 10,
  },
  mediaPost: {
    marginRight: 16,
  },
  mediaDescription: {},
  mediaSubtitle: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    color: '#8A898E',
  },
  mediaTitle: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#1B181C',
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
