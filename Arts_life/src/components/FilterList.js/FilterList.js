import React from 'react';
import CustomFilter from '../CustomFilter/CustomFilter';

import styled from 'styled-components';

const Root = styled.ScrollView`
  background-color: #c4d6f0;
  height: 10px;
  flex-direction: row;
  margin-top: 10px;
`;

//This is the filter list component where we can add more filters to the home screen
const FilterList = ({onPress}) => {
  return (
    <Root horizontal={true} showsHorizontalScrollIndicator={false}>
      <CustomFilter text="All" type="Primary" onPress={() => onPress(null)} />

      <CustomFilter
        text="Manga"
        type="Primary"
        onPress={() => onPress('Manga')}
      />

      <CustomFilter
        text="Realism"
        type="Primary"
        onPress={() => onPress('Realism')}
      />

      <CustomFilter
        text="Cartoon"
        type="Primary"
        onPress={() => onPress('Cartoon')}
      />

      <CustomFilter
        text="Painting"
        type="Primary"
        onPress={() => onPress('Painting')}
      />

      <CustomFilter
        text="Calligraphy"
        type="Primary"
        onPress={() => onPress('Calligraphy')}
      />

      <CustomFilter
        text="Digital Painting"
        type="Primary"
        onPress={() => onPress('Digital Painting')}
      />

      <CustomFilter
        text="Illustration"
        type="Primary"
        onPress={() => onPress('Illustration')}
      />

      <CustomFilter
        text="Scuplture"
        type="Primary"
        onPress={() => onPress('Scuplture')}
      />

      <CustomFilter
        text="Photography"
        type="Primary"
        onPress={() => onPress('Photography')}
      />

      <CustomFilter
        text="Sketch"
        type="Primary"
        onPress={() => onPress('Sketch')}
      />

      <CustomFilter
        text="Pen Art"
        type="Primary"
        onPress={() => onPress('Pen Art')}
      />

      <CustomFilter
        text="3D Art"
        type="Primary"
        onPress={() => onPress('3D Art')}
      />
    </Root>
  );
};

export default FilterList;
