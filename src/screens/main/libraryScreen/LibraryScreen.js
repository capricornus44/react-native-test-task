import React, {useState} from 'react';
import {View, Text, Image, FlatList, ImageBackground} from 'react-native';
import moment from 'moment';
import firestore from '@react-native-firebase/firestore';

import {PlayerScreen} from '../playerScreen/PlayerScreen';
import {MediaCard} from '../../../components/mediaCard/MediaCard';
import StyleSheet from './styles';

export const LibraryScreen = ({}) => {
  const dayOfWeek = moment().format('dddd').slice(0, 3);
  const currentDate = moment().format('DD MMM');

  const [showModal, setShowModal] = useState(false);
  const [media, setMedia] = useState([
    {
      id: 1,
      subtitle: 'subtitle1',
      title: 'title1',
      duration: '7 min',
      mediaURL: '',
      imageURL: 'http://picsum.photos/id/1/200',
    },
    {
      id: 2,
      subtitle: 'subtitle2',
      title: 'title2',
      duration: '6 min',
      mediaURL: '',
      imageURL: 'http://picsum.photos/id/10/200',
    },
    {
      id: 3,
      subtitle: 'subtitle3',
      title: 'title3',
      duration: '13 min',
      mediaURL: '',
      imageURL: 'http://picsum.photos/id/1002/200',
    },
    {
      id: 4,
      subtitle: 'subtitle4',
      title: 'title4',
      duration: '13 min',
      mediaURL: '',
      imageURL: 'http://picsum.photos/id/103/200',
    },
    {
      id: 5,
      subtitle: 'subtitle5',
      title: 'title5',
      duration: '13 min',
      mediaURL: '',
      imageURL: 'http://picsum.photos/id/106/200',
    },
  ]);

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
