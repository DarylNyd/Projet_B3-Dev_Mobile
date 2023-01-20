/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import AppHeader from '../../components/AppHeader/AppHeader';
import FilterList from '../../components/FilterList.js/FilterList';
//import HomeList from '../../components/HomeScrollList/HomeList';
import ProductList from '../../components/ProductList/ProductList';
import Productcontent from '../../components/ProductList/Productcontent';
import styled from 'styled-components';

const Root = styled.View`
  flex: 1;
  align-items: center;
  background-color: #c4d6f0;
`;

//import TestApi from './TestApi';

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredData = Productcontent.filter(
    item => !selectedCategory || item.category === selectedCategory,
  );

  return (
    <Root>
      <View>
        <AppHeader
          menu={true}
          title="Home"
          right="search"
          onRightPress={() => {}}
          optionalBtn="bell"
          optionalBtnPress={() => {}}
          optionalBadge={3}
        />
        <FilterList style={{flex: 3}} onPress={setSelectedCategory} />
        <ProductList products={filteredData} />
      </View>
    </Root>
  );
};

export default HomeScreen;
