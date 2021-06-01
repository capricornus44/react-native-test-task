import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import {signUpUser} from '../../redux/auth/authOperations';

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
      <View style={styles.container}>
        <View style={{marginBottom: isKeyboardShown ? 60 : 150}}>
          <Text style={styles.title}>Create an Account</Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.form}>
            <View style={styles.field}>
              <Image
                style={styles.envelope}
                source={require('../../assets/icons/envelope.png')}
              />
              <TextInput
                style={styles.input}
                value={state.email}
                placeholder="Email"
                onChangeText={value =>
                  setState(prevState => ({...prevState, email: value}))
                }
                onFocus={() => setIsKeyboardShown(true)}
              />
            </View>

            <View style={styles.field}>
              <Image
                style={styles.info}
                source={require('../../assets/icons/info.png')}
              />
              <TextInput
                style={styles.input}
                value={state.name}
                placeholder="Name"
                onChangeText={value =>
                  setState(prevState => ({...prevState, name: value}))
                }
                onFocus={() => setIsKeyboardShown(true)}
              />
            </View>

            <View style={styles.field}>
              <Image
                style={styles.lock}
                source={require('../../assets/icons/lock.png')}
              />
              <TextInput
                style={styles.input}
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
              style={{...styles.button, marginTop: isKeyboardShown ? 8 : 68}}
              activeOpacity={0.8}
              onPress={handleSubmit}>
              <Text style={styles.label}>sign up</Text>
            </TouchableOpacity>

            <View style={styles.question}>
              <Text style={styles.text}>
                Already have an account?{' '}
                <Text
                  style={styles.link}
                  onPress={() => navigation.navigate('Login')}>
                  Log In
                </Text>
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '500',
    lineHeight: 26,
    color: '#1B181C',
  },
  field: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 40,
    width: '100%',
    marginBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(163, 163, 163, 0.24)',
  },
  envelope: {
    width: 19,
    height: 14,
    marginRight: 11,
  },
  info: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  lock: {
    width: 16,
    height: 18,
    marginRight: 13,
  },
  input: {
    width: '100%',
    color: '#8a898e',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#E8B0B6',
    height: 64,
    // marginTop: 68,
    marginBottom: 32,
  },
  label: {
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 20,
    color: '#ffffff',
    textTransform: 'capitalize',
  },
  question: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#8A898E',
  },
  link: {
    textDecorationLine: 'underline',
  },
});
