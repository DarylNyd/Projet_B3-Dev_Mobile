import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Text>Home Screen</Text>
      {/*<Button title="LogIn" onPress={() => navigation.navigate('LogIn')} />*/}
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
