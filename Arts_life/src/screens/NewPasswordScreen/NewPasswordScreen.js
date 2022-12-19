import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const NewPasswordScreen = () => {
  //state variables
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  //functions to handle button presses

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
        {/*//<Text>Login Screen</Text>*/}
        <CustomInput
          placeholder="Enter your email"
          value={email}
          setValue={setEmail}
          secureTextEntry={false}
        />

        <CustomButton
          text="Reset Password"
          onPress={() => navigation.navigate('ResetPassword')}
          type="Primary"
        />

        <CustomButton
          text="Back to Sign In"
          onPress={() => navigation.navigate('LogIn')}
          type="Secondary"
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

export default NewPasswordScreen;
