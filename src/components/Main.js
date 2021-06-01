import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {stateChangedUser} from '../redux/auth/authOperations';
// import moduleName from 'react-native';

import {useRoute} from '../router';
import fb from '../../firebase/config';

export const Main = () => {
  const {stateChange} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(stateChangedUser());
  }, [stateChange]);

  const routing = useRoute(stateChange);

  return <NavigationContainer>{routing}</NavigationContainer>;
};
