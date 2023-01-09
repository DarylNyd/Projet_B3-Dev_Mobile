/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import AppHeader from '../../components/AppHeader/AppHeader';
import CustomButton from '../../components/CustomButton/CustomButton';
import styled from 'styled-components';
import ImportForm from '../../components/ImportForm/ImportForm';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #c4d6f0;
`;
const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #26474e;
  margin-top: 20px;
  margin-left: 15px;
`;

const ValidateSection = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-horizontal: 20px;
  margin-top: 20px;
`;

const ImportScreen = () => {
  return (
    <View style={{flex: 1}}>
      <AppHeader menu={false} title="Import" />
      <Container>
        <HeaderTitle>Add Your New Product</HeaderTitle>

        <ImportForm />

        <ValidateSection>
          <CustomButton text="POST" type="Primary" onPress={() => {}} />
          <CustomButton text="Cancel" type="Tertiary" onPress={() => {}} />
        </ValidateSection>
      </Container>
    </View>
  );
};

export default ImportScreen;
