import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';

import MediaCard from '../../components/MediaCard';
import {PlayerScreen} from './PlayerScreen';

export const LibraryScreen = ({navigation}) => {
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
      imageURL: 'http://picsum.photos/id/1002/200',
    },
    {
      id: 5,
      subtitle: 'subtitle5',
      title: 'title5',
      duration: '13 min',
      mediaURL: '',
      imageURL: 'http://picsum.photos/id/1002/200',
    },
  ]);

  const dayOfWeek = moment().format('dddd').slice(0, 3);
  const currentDate = moment().format('DD MMM');

  return (
    <>
      <View style={styles.upperContainer}>
        <LinearGradient
          style={styles.linearGradient}
          colors={['#FAFAFA', '#E3E1E6']}
          useAngle={true}
          angle={135}>
          <Text style={styles.date}>
            {dayOfWeek} {currentDate}
          </Text>
          <Text style={styles.slogan}>Let’s work on your intention</Text>
          <Image
            style={styles.anchor}
            source={require('../../assets/images/anchor.png')}
          />
        </LinearGradient>
      </View>

      <View style={styles.lowerContainer}>
        <FlatList
          keyExtractor={item => item.id}
          data={media}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.mediaCard}
              onPress={() => setShowModal(true)}>
              <Image
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                style={styles.mediaPost}
              />

              <View style={styles.mediaDescription}>
                <Text style={styles.mediaSubtitle}>{item.subtitle}</Text>
                <Text style={styles.mediaTitle}>{item.title}</Text>
                <Text style={styles.mediaDuration}>{item.duration}</Text>
              </View>

              <Image
                source={require('../../assets/icons/play.png')}
                style={styles.play}
              />
            </TouchableOpacity>
          )}
        />
      </View>

      <PlayerScreen setShowModal={setShowModal} showModal={showModal} />
    </>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingTop: '10%',
    paddingHorizontal: 24,
  },
  upperContainer: {
    height: '75%',
  },
  date: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#C2C2C2',
  },
  slogan: {
    fontWeight: '500',
    fontSize: 22,
    lineHeight: 26,
    color: '#1B181C',
  },
  anchor: {
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  lowerContainer: {
    flex: 1,
    height: '25%',
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
  mediaCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginRight: 12,
    marginBottom: 5,
    height: 88,
    width: 320,
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
