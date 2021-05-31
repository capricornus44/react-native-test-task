import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>Create an Account</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.field}>
          <Image
            style={styles.envelope}
            source={require('../assets/icons/envelope.png')}
          />
          <TextInput style={styles.input} value={email} placeholder="Email" />
        </View>

        <View style={styles.field}>
          <Image
            style={styles.info}
            source={require('../assets/icons/info.png')}
          />
          <TextInput style={styles.input} value={name} placeholder="Name" />
        </View>

        <View style={styles.field}>
          <Image
            style={styles.lock}
            source={require('../assets/icons/lock.png')}
          />
          <TextInput
            style={styles.input}
            value={password}
            placeholder="Password"
          />
        </View>

        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.label}>sign up</Text>
        </TouchableOpacity>

        <View style={styles.question}>
          <Text style={styles.text}>
            Already have an account? <Text style={styles.link}>Log In</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  heading: {
    marginBottom: 150,
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
    color: '#8a898e',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#E8B0B6',
    height: 64,
    marginTop: 68,
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