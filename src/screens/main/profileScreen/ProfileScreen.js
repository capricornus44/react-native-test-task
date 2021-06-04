import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {logOutUser} from '../../../redux/auth/authOperations';
import StyleSheet from './styles';

export const ProfileScreen = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.name);
  console.log(userName);

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <View style={StyleSheet.container}>
      <View style={StyleSheet.user}>
        <Image
          style={StyleSheet.avatar}
          source={require('../../../assets/images/avatar.png')}
        />
        <Text style={StyleSheet.name}>User name</Text>
      </View>

      <TouchableOpacity
        style={StyleSheet.button}
        activeOpacity={0.8}
        onPress={handleLogout}>
        <LinearGradient
          colors={['#E8B0B6', '#CC8389']}
          useAngle={true}
          angle={135}
          style={StyleSheet.linearGradient}>
          <Text style={StyleSheet.label}>logout</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
