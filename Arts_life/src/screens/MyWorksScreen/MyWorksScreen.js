import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../components/AppHeader/AppHeader';
import {
  Container,
  Header,
  UserImage,
  Image2,
  UserDetails,
  UserName,
  UserEmail,
} from './styles';
import WorkList from '../../components/WorkList/WorkList';

const MyWorksScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <AppHeader
        menu={false}
        back={true}
        backPress={() => {
          navigation.navigate('Dashboard');
        }}
        title="My Works"
      />
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
      <WorkList />
    </Container>
  );
};

export default MyWorksScreen;
