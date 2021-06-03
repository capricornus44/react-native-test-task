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
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.mediaCard}
          onPress={() => setShowModal(true)}>
          <Image
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={styles.mediaPost}
          />

          <View style={styles.mediaDescription}>
            <Text style={styles.mediaSubtitle}>Subtitle</Text>
            <Text style={styles.mediaTitle}>Title</Text>
            <Text style={styles.mediaDuration}>7 min</Text>
          </View>

          <Image
            source={require('../../assets/icons/play.png')}
            style={styles.play}
          />
        </TouchableOpacity>

        {/* <FlatList
          keyExtractor={item => item.id}
          data={songs}
          renderItem={({item}) => <MediaCard song={item} />}
        /> */}
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
    flexDirection: 'row',
    height: '25%',
    paddingHorizontal: 24,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
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
