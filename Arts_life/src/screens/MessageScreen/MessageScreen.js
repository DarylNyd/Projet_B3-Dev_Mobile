import React from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from './MessageStyles';
import AppHeader from '../../components/AppHeader/AppHeader';

const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../../../assets/images/Users_Pictures/user-3.jpg'),
    messageTime: '4 mins ago',
    messageText: 'Hey there, Is this still available.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../../../assets/images/Users_Pictures/user-1.jpg'),
    messageTime: '2 hours ago',
    messageText: 'Hello Love your work. How do you draw so well.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../../../assets/images/Users_Pictures/user-4.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'What is up bro, can you please make a discount on this work?.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../../../assets/images/Users_Pictures/user-6.jpg'),
    messageTime: '1 day ago',
    messageText: 'Hey there, this is my test for a post of my social app.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../../../assets/images/Users_Pictures/user-7.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

const MessageScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <AppHeader
        menu={false}
        title="Messages"
        right="more-vertical"
        onRightPress={() => {}}
      />
      <FlatList
        data={Messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card
            onPress={() =>
              navigation.navigate('Chat', {userName: item.userName})
            }>
            <UserInfo>
              <UserImgWrapper>
                <UserImg source={item.userImg} />
              </UserImgWrapper>
              <TextSection>
                <UserInfoText>
                  <UserName>{item.userName}</UserName>
                  <PostTime>{item.messageTime}</PostTime>
                </UserInfoText>
                <MessageText>{item.messageText}</MessageText>
              </TextSection>
            </UserInfo>
          </Card>
        )}
      />
    </Container>
  );
};

export default MessageScreen;
