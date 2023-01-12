/* eslint-disable no-lone-blocks */
import React from 'react';
import {FlatList} from 'react-native';
//import Productcontent from './Productcontent';
import ProductItem from './ProductItem';
import styled from 'styled-components/native';

const Root = styled.View`
  flex: 16;
  align-items: center;
  background-color: #c4d6f0;
  margin-top: 10px;
`;

const ProductList = ({products}) => {
  {
    /*console.log(Productcontent);
  console.log(styled);/*/
  }

  return (
    <Root>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ProductItem item={item} />}
      />
    </Root>
  );
};

export default ProductList;
