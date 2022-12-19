import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  //state variables
  //const [] = useState('');
  const navigation = useNavigation();
  const [code, setCode] = useState('');

  //functions to handle button presses

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
          secureTextEntry={false}
        />

        <CustomButton
          text="Confirm Email"
          type="Primary"
          onPress={() => navigation.navigate('Done')}
        />

        <CustomButton
          text="Back to Sign"
          type="Secondary"
          onPress={() => navigation.navigate('LogIn')}
        />
        <CustomButton
          text="Resend code"
          onPress={onResendPress}
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

export default ConfirmEmailScreen;
