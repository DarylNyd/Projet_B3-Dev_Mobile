import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
//import LoginScreen from './src/screens/LoginScreen';
//import SignUpScreen from './src/screens/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <ConfirmEmailScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#C4D6F0',
  },
});

export default App;
