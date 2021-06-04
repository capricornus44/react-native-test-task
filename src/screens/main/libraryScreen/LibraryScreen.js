import React, {useState} from 'react';
import {View, Text, Image, FlatList, ImageBackground} from 'react-native';
import moment from 'moment';
import firestore from '@react-native-firebase/firestore';

import {PlayerScreen} from '../playerScreen/PlayerScreen';
import {MediaCard} from '../../../components/mediaCard/MediaCard';
import {media} from '../../../database/media';
import StyleSheet from './styles';

export const LibraryScreen = ({}) => {
  const dayOfWeek = moment().format('dddd').slice(0, 3);
  const currentDate = moment().format('DD MMM');

  const [showModal, setShowModal] = useState(false);

  const getMeditations = async () => {
    const meditationsList = await firestore().collection('meditations').get();
    console.log(meditationsList);
  };

  return (
    <>
      <View style={StyleSheet.upperContainer}>
        <ImageBackground
          style={StyleSheet.imageBackground}
          source={require('../../../assets/images/bg.png')}>
          <Text style={StyleSheet.date}>
            {dayOfWeek} {currentDate}
          </Text>
          <Text style={StyleSheet.slogan}>Let’s work on your intention</Text>
          <Image
            style={StyleSheet.anchor}
            source={require('../../../assets/images/anchor.png')}
          />
        </ImageBackground>
      </View>

      <View style={StyleSheet.lowerContainer}>
        <FlatList
          keyExtractor={item => item.id}
          data={media}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <MediaCard item={item} setShowModal={setShowModal} />
          )}
        />
      </View>

      <PlayerScreen setShowModal={setShowModal} showModal={showModal} />
    </>
  );
};
