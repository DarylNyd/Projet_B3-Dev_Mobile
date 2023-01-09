/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  CameraButton,
  ProductInput,
  PriceInput,
  CategoryInput,
  DescriptionInput,
} from './styles';

const ImportForm = () => {
  return (
    <View>
      <CameraButton>
        <Feather name="camera" size={30} color="#26474E" />
      </CameraButton>
      <ProductInput>
        <Feather
          name="edit-3"
          size={30}
          color="#26474E"
          style={{marginLeft: 15}}
        />
        <TextInput style={{marginLeft: 15}} placeholder="Product Name" />
      </ProductInput>
      <PriceInput>
        <Feather
          name="dollar-sign"
          size={30}
          color="#26474E"
          style={{marginLeft: 15}}
        />
        <TextInput style={{marginLeft: 15}} placeholder="Price" />
      </PriceInput>
      <CategoryInput>
        <Feather
          name="grid"
          size={30}
          color="#26474E"
          style={{marginLeft: 15}}
        />
        <TextInput style={{marginLeft: 15}} placeholder="Category" />
        <Feather
          name="chevron-down"
          size={30}
          color="#26474E"
          style={{marginLeft: 70}}
        />
      </CategoryInput>
      <DescriptionInput>
        <Feather
          name="book"
          size={30}
          color="#26474E"
          style={{marginLeft: 15, marginTop: 10}}
        />
        <TextInput
          style={{marginLeft: 15, marginTop: -100}}
          placeholder="Description"
        />
      </DescriptionInput>
    </View>
  );
};

export default ImportForm;
