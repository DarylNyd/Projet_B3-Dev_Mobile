import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ResetPasswordScreen = () => {
  //state variables
  //const [] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //functions to handle button presses

  const onResetPress = () => {
    console.warn('Reset button pressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
        {/*//<Text>Login Screen</Text>*/}
        <CustomInput
          placeholder="New Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <CustomInput
          placeholder="Enter the code sent to your email"
          value={confirmPassword}
          setValue={setConfirmPassword}
          secureTextEntry={true}
        />

        <CustomButton
          text="Reset Password"
          onPress={onResetPress}
          type="Primary"
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

export default ResetPasswordScreen;
