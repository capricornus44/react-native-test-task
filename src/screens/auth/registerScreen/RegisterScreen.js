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

import {signUpUser} from '../../../redux/auth/authOperations';
import StyleSheet from './styles';

const initialState = {
  email: '',
  name: '',
  password: '',
};

export const RegisterScreen = ({navigation}) => {
  const [state, setState] = useState(initialState);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
    dispatch(signUpUser(state));
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
        <View style={{marginBottom: isKeyboardShown ? 60 : 150}}>
          <Text style={StyleSheet.title}>Create an Account</Text>
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
                value={state.email}
                placeholder="Email"
                onChangeText={value =>
                  setState(prevState => ({...prevState, email: value}))
                }
                onFocus={() => setIsKeyboardShown(true)}
              />
            </View>

            <View style={StyleSheet.field}>
              <Image
                style={StyleSheet.info}
                source={require('../../../assets/icons/info.png')}
              />
              <TextInput
                style={StyleSheet.input}
                value={state.name}
                placeholder="Name"
                onChangeText={value =>
                  setState(prevState => ({...prevState, name: value}))
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
                marginTop: isKeyboardShown ? 8 : 68,
              }}
              activeOpacity={0.8}
              onPress={handleSubmit}>
              <LinearGradient
                colors={['#E8B0B6', '#CC8389']}
                useAngle={true}
                angle={135}
                style={StyleSheet.linearGradient}>
                <Text style={StyleSheet.label}>sign up</Text>
              </LinearGradient>
            </TouchableOpacity>

            <View style={StyleSheet.question}>
              <Text style={StyleSheet.text}>
                Already have an account?{' '}
                <Text
                  style={StyleSheet.link}
                  onPress={() => navigation.navigate('Login')}>
                  Log In
                </Text>
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};
