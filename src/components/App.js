import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';

import {Main} from './Main';
import {store} from '../redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
