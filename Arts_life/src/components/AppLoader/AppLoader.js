import React from 'react';
import {View, StyleSheet} from 'react-native';

import LottieView from 'lottie-react-native';

const AppLoader = props => {
  const {loading} = props;
  return (
    <View
      style={[StyleSheet.absoluteFillObject, styles.container]}
      animating={loading}>
      <LottieView
        source={require('../../../assets/animations/character-walk.json')}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4D6F0',
  },
});

export default AppLoader;
