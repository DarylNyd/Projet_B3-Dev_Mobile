import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CustomFilter = ({onPress, text, type, bgColor, fgColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundcolor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '20%',
    height: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  container_Primary: {
    backgroundColor: '#5FC2BA',
  },
  container_Secondary: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
  },

  text: {
    alignContent: 'center',
    fontWeight: 'bold',
  },
  text_Primary: {
    color: 'white',
  },
  text_Secondary: {
    color: 'black',
  },
});

export default CustomFilter;
