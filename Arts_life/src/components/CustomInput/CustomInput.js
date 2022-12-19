import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
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
  container: {
    backgroundColor: 'white',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',

    //borderColor: 'black',
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
