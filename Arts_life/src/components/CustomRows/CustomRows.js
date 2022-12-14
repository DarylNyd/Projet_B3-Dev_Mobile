import React from 'react';
import {
  MainRows,
  LeftView,
  CenterView,
  RightView,
  TextStyle,
  Bubble,
} from './styles';

import Feather from 'react-native-vector-icons/Feather';

const CustomRows = ({icon, icon2, value, onPress}) => {
  const rowAction = () => {
    onPress(onPress);
  };

  return (
    <MainRows onPress={rowAction}>
      <Bubble>
        <LeftView>
          <Feather name={icon} size={30} color="#26474E" />
        </LeftView>
      </Bubble>
      <CenterView>
        <TextStyle>{value}</TextStyle>
      </CenterView>
      <RightView>
        <Feather name={icon2} size={30} color="#26474E" />
      </RightView>
    </MainRows>
  );
};

export default CustomRows;
