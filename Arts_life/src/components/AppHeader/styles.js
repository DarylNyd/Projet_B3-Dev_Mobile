import styled from 'styled-components/native';

const StyledHeader = styled.View` 
height: 50px; 
elevation: 5px; 
justify-content: 
space-between; 
align-items: center; 
flex-direction: row; 
background-color: #ffff; 
shadow-color: #000; 
shadow-offset: {width: 0, height: 10}; 
shadow-opacity: 0.5px; 
shadow-radius: 3.5px;
`;

const StyledView = styled.View`
  margin-horizontal: 16px;
  align-items: center;
  flex-direction: row;
`;

const StyledTitleView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledRightView = styled.View`
  justify-content: flex-end;
`;

const StyledRowView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;

export {
  StyledHeader,
  StyledView,
  StyledTitleView,
  StyledRightView,
  StyledRowView,
};
