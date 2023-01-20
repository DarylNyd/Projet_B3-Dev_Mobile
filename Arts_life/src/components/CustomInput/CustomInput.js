import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput`
  background-color: white;
  width: 90%;
  justify-content: center;
  align-items: center;
  border-color: black;
  border-width: 1px;
  border-radius: 50px;
  padding-horizontal: 10px;
  margin-vertical: 5px;
`;
const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.StyledInput}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  StyledInput: {
    backgroundColor: 'white',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    alignContent: 'center',
  },
});

export default CustomInput;
