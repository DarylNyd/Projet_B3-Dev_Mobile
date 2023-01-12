import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Text, Image} from 'react-native';
import Logo from '../../../assets/images/Logo_Artslife.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSigninButtons from '../../components/SocialSigninButtons';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const Login = () => {
    if (username === '' && password === '') {
      navigation.navigate('Home');
    } else {
      console.log('Wrong username or password');
    }
  };
  return (
    <SafeAreaView showsVerticalScrollIndicator={false} flex={1}>
      <View style={styles.root}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.text}>
          Nice to see you!!! You will need to connect
        </Text>

        <CustomInput
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <CustomButton text="SIGN IN" type="Primary" onPress={() => Login()} />

        <CustomButton
          text="Forgot Password?"
          type="Tertiary"
          onPress={() => navigation.navigate('NewPassword')}
        />

        <SocialSigninButtons />

        <Text>Don't have an account?</Text>

        <CustomButton
          text="SIGN UP"
          type="Tertiary"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4D6F0',
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 300,
  },
  text: {
    fontSize: 14,
    marginVertical: 10,
    paddingBottom: 10,
    paddingTop: -20,
  },
});

export default LoginScreen;
