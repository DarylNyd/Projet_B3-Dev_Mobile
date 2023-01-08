import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #c4d6f0;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #5fc2ba;
  width: 100%;
  height: 100px;
`;

const UserImage = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin-left: -100px;
`;

const Image2 = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;

const UserDetails = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 40px;
`;

const UserName = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

const UserEmail = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-top: 5px;
`;

export {Container, Header, UserImage, Image2, UserDetails, UserName, UserEmail};
