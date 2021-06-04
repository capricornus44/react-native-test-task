import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {signInUser} from '../../../redux/auth/authOperations';
import StyleSheet from './styles';

const initialState = {
  email: '',
  password: '',
};

export const LoginScreen = ({navigation}) => {
  const [state, setState] = useState(initialState);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
    dispatch(signInUser(state));
    setState(initialState);
  };

  const keyboardHide = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <LinearGradient
        colors={['#ffffff', '#ede8e4']}
        useAngle={true}
        angle={135}
        style={StyleSheet.container}>
        <View style={{marginBottom: isKeyboardShown ? 70 : 150}}>
          <Text style={StyleSheet.title}>Welcome Back</Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={StyleSheet.form}>
            <View style={StyleSheet.field}>
              <Image
                style={StyleSheet.envelope}
                source={require('../../../assets/icons/envelope.png')}
              />
              <TextInput
                style={StyleSheet.input}
                value={StyleSheet.email}
                placeholder="Email"
                onChangeText={value =>
                  setState(prevState => ({...prevState, email: value}))
                }
                onFocus={() => setIsKeyboardShown(true)}
              />
            </View>

            <View style={StyleSheet.field}>
              <Image
                style={StyleSheet.lock}
                source={require('../../../assets/icons/lock.png')}
              />
              <TextInput
                style={StyleSheet.input}
                value={state.password}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={value =>
                  setState(prevState => ({...prevState, password: value}))
                }
                onFocus={() => setIsKeyboardShown(true)}
              />
            </View>

            <TouchableOpacity
              style={{
                ...StyleSheet.button,
                marginTop: isKeyboardShown ? 73 : 133,
              }}
              activeOpacity={0.8}
              onPress={handleSubmit}>
              <LinearGradient
                colors={['#E8B0B6', '#CC8389']}
                useAngle={true}
                angle={135}
                style={StyleSheet.linearGradient}>
                <Text style={StyleSheet.label}>log in</Text>
              </LinearGradient>
            </TouchableOpacity>

            <View style={StyleSheet.question}>
              <Text style={StyleSheet.text}>
                Don’t you have an account yet?{' '}
                <Text
                  style={StyleSheet.link}
                  onPress={() => navigation.navigate('Registration')}>
                  Sign Up
                </Text>
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};
