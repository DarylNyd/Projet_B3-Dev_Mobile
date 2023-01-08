import styled from 'styled-components/native';

export const MainRows = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: 5px;
  height: 80px;
  width: 100%;
  background-color: #ffff;
`;

export const LeftView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Bubble = styled.View`
  background-color: #d9d9d9;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const CenterView = styled.View`
  flex: 8;
  align-items: center;
  justify-content: center;
`;

export const RightView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextStyle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #26474e;
`;
