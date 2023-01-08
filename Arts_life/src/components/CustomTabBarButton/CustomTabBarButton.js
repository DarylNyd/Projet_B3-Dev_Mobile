/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#5FC2BA',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default CustomTabBarButton;
