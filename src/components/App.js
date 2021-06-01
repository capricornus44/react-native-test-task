import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {useRoute} from '../router';

export const App = () => {
  const routing = useRoute(true);

  return <NavigationContainer>{routing}</NavigationContainer>;
};
