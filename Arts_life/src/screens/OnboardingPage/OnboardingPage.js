import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Onboarding from '../../components/Onboarding/Onboarding';
//import HomeScreen from '../HomeScreen/HomeScreen';

const OnboardingPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Onboarding />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4D6F0',
  },
});

export default OnboardingPage;
