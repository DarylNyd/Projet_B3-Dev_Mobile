import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SocialSigninButtons = () => {
  const onFacebookPress = () => {
    console.warn('Facebook pressed');
  };

  const onGooglePress = () => {
    console.warn('Google pressed');
  };
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={onFacebookPress}
        style={styles.button}
        activeOpacity={0.6}
        backgroundColor="#0e8cf1">
        <Entypo name="facebook" size={38} color="#0e8cf1" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onGooglePress}
        style={styles.button}
        activeOpacity={0.6}
        backgroundColor="#e64b51">
        <AntDesign name="instagram" size={38} color="#e64b51" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onGooglePress}
        style={styles.button}
        activeOpacity={0.6}
        backgroundColor="#e64b51">
        <AntDesign name="google" size={38} color="#e64b51" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onGooglePress}
        style={styles.button}
        activeOpacity={0.6}
        backgroundColor="black">
        <Entypo name="app-store" size={38} color="#000000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginHorizontal: 5,
  },
});

export default SocialSigninButtons;
