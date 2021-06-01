import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyAwQIVSJfpyvBZZcMpt2VaAuOqIbtXCAnw',
  authDomain: 'zavalniuk-to-voypost.firebaseapp.com',
  projectId: 'zavalniuk-to-voypost',
  storageBucket: 'zavalniuk-to-voypost.appspot.com',
  messagingSenderId: '409640955636',
  appId: '1:409640955636:web:101f3fd7809178ae4db8a1',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
