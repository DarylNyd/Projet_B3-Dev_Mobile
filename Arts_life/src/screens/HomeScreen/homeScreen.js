import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4D6F0',
  },
});

export default HomeScreen;
