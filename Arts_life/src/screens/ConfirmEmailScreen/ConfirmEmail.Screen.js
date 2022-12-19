import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ConfirmEmailScreen = () => {
  //state variables
  //const [] = useState('');
  const [code, setCode] = useState('');

  //functions to handle button presses

  const onConfirmPress = () => {
    console.warn('Confirm button pressed');
  };

  const onLoginPress = () => {
    console.warn('Login button pressed');
  };

  const onResendPress = () => {
    console.warn('Resend button pressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm Your Email</Text>
        {/*//<Text>Login Screen</Text>*/}
        <CustomInput
          placeholder="Enter the code sent to your email"
          value={code}
          setValue={setCode}
          secureTextEntry={true}
        />

        <CustomButton
          text="Confirm Email"
          onPress={onConfirmPress}
          type="Primary"
        />

        <CustomButton
          text="Back to Sign"
          onPress={onLoginPress}
          type="Tertiary"
        />
        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="Tertiary"
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
  },
  title: {
    fontSize: 32,
    paddingVertical: 15,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#1C2942',
  } /*,
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
  }*/,
});

export default ConfirmEmailScreen;
