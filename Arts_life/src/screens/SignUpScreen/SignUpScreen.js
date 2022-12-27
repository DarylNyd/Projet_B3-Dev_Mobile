import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Image, Text} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Logo from '../../../assets/images/Logo_Artslife.png';
import SocialSigninButtons from '../../components/SocialSigninButtons/SocialSigninButtons';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  //state variables
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [email, setemail] = useState('');

  //functions to handle button presses

  const onTermsandconditionsPress = () => {
    console.warn('Terms and conditions button pressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
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

        <CustomButton
          text="SIGN UP"
          type="Primary"
          onPress={() => navigation.navigate('ConfirmEmail')}
        />

        <Text style={styles.text}>
          By signing up you are accepting our{' '}
          <Text style={styles.link} onPress={onTermsandconditionsPress}>
            Terms and conditions
          </Text>
        </Text>

        <SocialSigninButtons />

        <Text>You already have an account?</Text>

        <CustomButton
          text="SIGN IN"
          type="Tertiary"
          onPress={() => navigation.navigate('LogIn')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4D6F0',
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
  logo: {
    width: '60%',
    maxWidth: 300,
    maxHeight: 300,
    marginTop: -80,
    marginBottom: -50,
  },
});

export default SignUpScreen;
