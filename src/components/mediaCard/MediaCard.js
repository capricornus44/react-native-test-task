import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import StyleSheet from './styles';

export const MediaCard = ({item, setShowModal}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={StyleSheet.mediaCard}
      onPress={() => setShowModal(true)}>
      <Image source={{uri: item.imageURL}} style={StyleSheet.mediaPost} />

      <View style={StyleSheet.mediaDescription}>
        <Text style={StyleSheet.mediaSubtitle}>{item.subtitle}</Text>
        <Text style={StyleSheet.mediaTitle}>{item.title}</Text>
        <Text style={StyleSheet.mediaDuration}>{item.duration}</Text>
      </View>

      <Image
        source={require('../../assets/icons/play.png')}
        style={StyleSheet.play}
      />
    </TouchableOpacity>
  );
};
