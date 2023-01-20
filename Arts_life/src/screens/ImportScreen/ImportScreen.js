/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Container, HeaderTitle, ValidateSection} from './styles';
import AppHeader from '../../components/AppHeader/AppHeader';
import CustomButton from '../../components/CustomButton/CustomButton';
import ImportForm from '../../components/ImportForm/ImportForm';

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
