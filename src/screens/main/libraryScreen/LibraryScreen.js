import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, ImageBackground} from 'react-native';
import moment from 'moment';
import fb from '../../../../firebase/config';
fb.firestore().settings({experimentalForceLongPolling: true});

import {PlayerScreen} from '../playerScreen/PlayerScreen';
import {MediaCard} from '../../../components/mediaCard/MediaCard';
// import {meditationList} from '../../../database/media';
import StyleSheet from './styles';

export const LibraryScreen = ({}) => {
  const dayOfWeek = moment().format('dddd').slice(0, 3);
  const currentDate = moment().format('DD MMM');

  const [showModal, setShowModal] = useState(false);
  const [meditationList, setMeditationList] = useState([]);

  const getMeditations = async () => {
    await fb
      .firestore()
      .collection('meditations')
      .onSnapshot(data =>
        setMeditationList(data.docs.map(doc => ({...doc.data(), id: doc.id}))),
      );
  };

  useEffect(() => {
    getMeditations();
  }, []);

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
          keyExtractor={item => item.title}
          data={meditationList}
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
