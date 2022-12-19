import React from 'react';
import {SafeAreaView, StyleSheet, Text, Image} from 'react-native';
import Logo from '../../../assets/images/cat_Arts-life.png';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const LoadingPage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.root}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>HI!!!! Welcome to Art's Life</Text>
      <CustomButton
        text="Let's get started"
        type={'Primary'}
        onPress={() => navigation.navigate('LogIn')}
      />
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
  title: {
    fontSize: 32,
    paddingVertical: 5,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#1C2942',
    width: '70%',
    textAlign: 'center',
  },
  logo: {
    width: '100%',
    maxWidth: 300,
    maxHeight: 300,
  },
});

export default LoadingPage;
