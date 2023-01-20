import React from 'react';
import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #c4d6f0;
`;

const AppLoader = props => {
  const {loading} = props;
  return (
    <Container style={[StyleSheet.absoluteFillObject]} animating={loading}>
      <LottieView
        source={require('../../../assets/animations/character-walk.json')}
        autoPlay
        loop
      />
    </Container>
  );
};

export default AppLoader;
