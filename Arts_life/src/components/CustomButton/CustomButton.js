import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CustomButton = ({onPress, text, type, bgColor, fgColor}) => {
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
    width: '100%',
    height: 50,

    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },

  container_Primary: {
    backgroundColor: '#5FC2BA',

    width: '100%',
    height: 50,

    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },

  container_Secondary: {},

  container_Tertiary: {
    backgroundColor: '#C4D6F0',

    width: '100%',
    height: 50,

    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },

  text_Primary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },

  text_Secondary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },

  text_Tertiary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default CustomButton;
