import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text /*Image, useWindowDimensions*/,
} from 'react-native';
//import Logo from '';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSigninButtons from '../../components/SocialSigninButtons';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const {height} = useWindowDimensions();

  const onLoginPress = () => {
    console.warn('Login button pressed');
  };

  const onSignUpPress = () => {
    console.warn('Sign Up button pressed');
  };

  const onForgotpassPress = () => {
    console.warn('Forgot password button pressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        {/*<Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
  />*/}
        {/*<Text>Arts and LIfe</Text>*/}
        {/*//<Text>Login Screen</Text>*/}
        <Text>Nice to see you!!! You will need to connect</Text>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />

        <CustomButton text="SIGN IN" onPress={onLoginPress} type="Primary" />

        <CustomButton
          text="Forgot Password?"
          onPress={onForgotpassPress}
          type="Tertiary"
        />

        <SocialSigninButtons />

        <Text>Don't have an account?</Text>

        <CustomButton text="SIGN UP" onPress={onSignUpPress} type="Tertiary" />
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
  logo: {
    width: '60%',
    maxWidth: 300,
    maxHeight: 300,
  },
});

export default LoginScreen;
