/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import AppHeader from '../../components/AppHeader/AppHeader';
import {
  Container,
  Conatainer,
  MoreImage,
  Line,
  Text2,
  Text3,
  Header,
} from './styles';
import LottieView from 'lottie-react-native';

const Dashboard = () => {
  return (
    <Container>
      <AppHeader menu={false} title="More" />
      <Conatainer>
        <Header>Thank You for Your Support..</Header>
        <MoreImage>
          <LottieView
            source={require('../../../assets/animations/thanks-message.json')}
            autoPlay
            loop
          />
        </MoreImage>
        <Text2>Stay Tuned, More Thinhgs are Coming for Dear Artist</Text2>
        <Line>
          <Text3>Nyd Coperation</Text3>
          <Text3>Contact Us on nyddaryl@gmail.com</Text3>
        </Line>
      </Conatainer>
    </Container>
  );
};

export default Dashboard;
