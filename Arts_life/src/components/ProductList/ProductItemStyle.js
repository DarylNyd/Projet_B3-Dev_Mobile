import styled from 'styled-components/native';

export const Root = styled.View`
  flex: 16;
  align-items: center;
  background-color: #c4d6f0;
  margin-top: 10;
`;

export const CapsuleContainer = styled.View`
  height: 400;
  background-color: #fff;
  margin-vertical: 10;
  border-radius: 10;
`;

export const ImageContainer = styled.TouchableOpacity`
  background-color: #f2f2f2;
  height: 300;
  width: 390;
`;

export const DetailsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: white;
  height: 100;
  width: 390;
  border-radius: 10;
`;

export const AuthorPic = styled.View`
  background-color: red;
  height: 50;
  width: 50;
  border-radius: 50;
  margin-left: 10;
`;

export const ProductInfo = styled.View`
  height: 70;
  width: 150;
  margin-left: 10;
`;

export const OptionsBloc = styled.View`
  height: 80;
  width: 120;
  margin-right: 10;
  margin-left: 40;
`;

export const Options = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductImage = styled.Image`
  flex: 1;
  height: 300;
`;

export const ProductName = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: #26474e;
  font-family: 'Poppins';
`;

export const AuthorName = styled.Text`
  font-size: 14;
  font-weight: bold;
  color: #26474e;
  font-family: 'Poppins';
`;

export const Time = styled.Text`
  font-size: 12;
  color: grey;
  font-family: 'Poppins';
`;

export const Price = styled.View`
  height: 40;
  border-radius: 10;
  justify-content: center;
  align-items: center;
`;

export const PriceValue = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: green;
  font-family: 'Poppins';
`;

export const AuthorImage = styled.Image`
  width: 50;
  height: 50;
  border-radius: 50;
`;
