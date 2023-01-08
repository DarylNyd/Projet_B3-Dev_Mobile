import styled from 'styled-components/native';

export const Root = styled.View`
  flex: 16;
  align-items: center;
  background-color: #c4d6f0;
  margin-top: 10px;
`;

export const CapsuleContainer = styled.View`
  height: 400px;
  background-color: #fff;
  margin-vertical: 10px;
  border-radius: 10px;
`;

export const ImageContainer = styled.TouchableOpacity`
  background-color: #f2f2f2;
  height: 300px;
  width: 390px;
`;

export const DetailsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: white;
  height: 100px;
  width: 390px;
  border-radius: 10px;
`;

export const AuthorPic = styled.View`
  background-color: red;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  margin-left: 10px;
`;

export const ProductInfo = styled.View`
  height: 70px;
  width: 150px;
  margin-left: 10px;
`;

export const OptionsBloc = styled.View`
  height: 80px;
  width: 120px;
  margin-right: 10px;
  margin-left: 40px;
`;

export const Options = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductImage = styled.Image`
  flex: 1;
  height: 300px;
`;

export const ProductName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #26474e;
  font-family: 'Poppins';
`;

export const AuthorName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #26474e;
  font-family: 'Poppins';
`;

export const Time = styled.Text`
  font-size: 12px;
  color: grey;
  font-family: 'Poppins';
`;

export const Price = styled.View`
  height: 40px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const PriceValue = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: green;
  font-family: 'Poppins';
`;

export const AuthorImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
