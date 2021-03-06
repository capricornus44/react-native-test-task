import fb from '../../../firebase/config';
import firestore from '@react-native-firebase/firestore';

import {authSlice} from './authReducer';

const {authSignOut, updateUserInfo, authStateChahge} = authSlice.actions;

const signUpUser =
  ({email, name, password}) =>
  async dispatch => {
    try {
      await fb.auth().createUserWithEmailAndPassword(email, password);

      const user = await fb.auth().currentUser;

      await user.updateUserInfo({
        displayName: name,
        uid: userId,
      });

      const {uid, displayName} = await fb.auth().currentUser;

      const userInfo = {
        name: displayName,
      };

      dispatch(updateUserInfo(userInfo));
    } catch (error) {
      console.log('Error =>', error.message);
    }
  };

const signInUser =
  ({email, password}) =>
  async () => {
    try {
      const user = await fb.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('Error =>', error.message);
    }
  };

const logOutUser = () => async dispatch => {
  await fb.auth().signOut();

  dispatch(authSignOut());
};

const stateChangedUser = () => async dispatch => {
  await fb.auth().onAuthStateChanged(user => {
    if (user) {
      const userInfo = {
        userId: user.uid,
        name: user.displayName,
      };
      dispatch(authStateChahge({stateChange: true}));
      dispatch(updateUserInfo(userInfo));
    }
  });
};

export {signUpUser, signInUser, logOutUser, stateChangedUser};
