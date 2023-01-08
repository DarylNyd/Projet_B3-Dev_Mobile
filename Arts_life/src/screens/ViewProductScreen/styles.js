import styled from 'styled-components/native';

export const Root = styled.View`
  flex: 1;
  align-items: center;
  background-color: #c4d6f0;
`;

export const ImageCard = styled.View`
  background-color: #f2f2f2;
`;

export const ViewImage = styled.Image`
  height: 320px;
  width: 100%;
  resize-mode: contain;
`;

export const ProductViewName = styled.Text`
  color: #26474e;
  font-size: 24px;
  font-weight: bold;
  margin: 5px;
  margin-left: 10px;
`;

export const ProductViewPrice = styled.Text`
  font-size: 26px;
  font-weight: bold;
  margin: 5px;
  margin-left: 20px;
  color: green;
`;

export const ProductViewDescription = styled.ScrollView`
  margin: 10px;
  background-color: white;
  padding: 10px;
  height: 150px;
  border-color: black;
  border-width: 1px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  color: #26474e;
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
`;

export const ViewButtons = styled.View`
  align-items: center;
  margin: 10px;
`;

export const ViewAuthor = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 10px;
  border-radius: 40px;
  background-color: #f0f0f9;
`;

export const ViewAuthorPic = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 50px;
  margin: 10px;
`;

export const ViewAuthorInfo = styled.View`
  flex-direction: column;
  height: 80px;
`;

export const Time = styled.Text`
  font-size: 12px;
  color: grey;
  margin-left: 10px;
`;
