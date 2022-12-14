import React from 'react';
import {
  Container,
  Header,
  UserImage,
  Image2,
  UserDetails,
  UserName,
  UserEmail,
} from './styles';
import AppHeader from '../../components/AppHeader/AppHeader';
import UserRows from '../../components/CustomRows/UserRows';

const Dashboard = () => {
  return (
    <Container>
      <AppHeader menu={false} title="User Dashboard" />
      <Header>
        <UserImage>
          <Image2
            source={require('../../../assets/images/Author-images/me.jpeg')}
          />
        </UserImage>
        <UserDetails>
          <UserName>Daryl Nyd</UserName>
          <UserEmail>artnyd@gmail.com</UserEmail>
        </UserDetails>
      </Header>
      <UserRows />
    </Container>
  );
};

export default Dashboard;
