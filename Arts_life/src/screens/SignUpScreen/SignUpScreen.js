import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSigninButtons from '../../components/SocialSigninButtons/SocialSigninButtons';

const SignUpScreen = () => {
  //state variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [email, setemail] = useState('');

  //functions to handle button presses
  const onLoginPress = () => {
    console.warn('Login button pressed');
  };

  const onSignUpPress = () => {
    console.warn('Sign Up button pressed');
  };

  const onTermsandconditionsPress = () => {
    console.warn('Terms and conditions button pressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create Your Account</Text>
        {/*//<Text>Login Screen</Text>*/}

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Email address"
          value={email}
          setValue={setemail}
        />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Confirm Password"
          value={confirmPass}
          setValue={setConfirmPass}
          secureTextEntry={true}
        />

        <CustomButton text="SIGN UP" onPress={onSignUpPress} type="Primary" />

        <Text style={styles.text}>
          By signing up you are accepting our{' '}
          <Text style={styles.link} onPress={onTermsandconditionsPress}>
            Terms and conditions
          </Text>
        </Text>

        <SocialSigninButtons />

        <Text>You already have an account?</Text>

        <CustomButton text="SIGN IN" onPress={onLoginPress} type="Tertiary" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    paddingVertical: 15,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#1C2942',
  },
  text: {
    fontSize: 12,
    paddingVertical: 10,
    fontWeight: 'bold',
    marginVertical: 5,
    color: '#1C2942',
  },
  link: {
    fontSize: 12,
    paddingVertical: 10,
    fontWeight: 'bold',
    marginVertical: 5,
    color: '#5FC2BA',
  },
});

export default SignUpScreen;
