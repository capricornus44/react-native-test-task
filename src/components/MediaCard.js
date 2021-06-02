import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export const MediaCard = ({song}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.mediaCard}
      onPress={() => navigation.navigate('Player')}>
      <Image
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={styles.mediaPost}
      />

      <View style={styles.mediaDescription}>
        <Text style={styles.mediaSubtitle}>Subtitle</Text>
        <Text style={styles.mediaTitle}>Title</Text>
        <Text style={styles.mediaDuration}>7 min</Text>
      </View>

      <Image source={require('../assets/icons/play.png')} style={styles.play} />
    </TouchableOpacity>
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
