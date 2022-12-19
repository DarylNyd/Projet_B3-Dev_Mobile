import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CustomButton from '../CustomButton';

const SocialSigninButtons = () => {
  const onFacebookPress = () => {
    console.warn('Facebook pressed');
  };

  const onGooglePress = () => {
    console.warn('Google pressed');
  };
  return (
    <SafeAreaView style={styles.root}>
      <CustomButton
        text="Sign in with Facebook"
        onPress={onFacebookPress}
        bgColor="#0e8cf1"
        fgColor="#ffffff"
      />

      <CustomButton
        text="Sign in with Google"
        onPress={onGooglePress}
        bgColor="#E64B51"
        fgColor="#dd4d44"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SocialSigninButtons;
