import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const CustomInput = ({value, setValue, placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={'placeholder'}
        style={styles.input}
        secureTextEntry={placeholder === 'Password' ? true : false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',

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
