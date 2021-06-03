import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export const MediaCard = ({item, setShowModal}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.mediaCard}
      onPress={() => setShowModal(true)}>
      <Image source={{uri: item.imageURL}} style={styles.mediaPost} />

      <View style={styles.mediaDescription}>
        <Text style={styles.mediaSubtitle}>{item.subtitle}</Text>
        <Text style={styles.mediaTitle}>{item.title}</Text>
        <Text style={styles.mediaDuration}>{item.duration}</Text>
      </View>

      <Image source={require('../assets/icons/play.png')} style={styles.play} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mediaCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginRight: 12,
    height: 88,
    width: 320,
    // width: '60%',
    borderRadius: 10,
    backgroundColor: '#ffffff',

    shadowColor: '#000',
    shadowOpacity: 0.14,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 22,
    elevation: 7,
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
