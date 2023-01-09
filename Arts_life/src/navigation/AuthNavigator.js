import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

//redux imports
import AsyncStorage from '@react-native-async-storage/async-storage';

//Screens
import OnboardingPage from '../screens/OnboardingPage/OnboardingPage';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmail.Screen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen/ResetPasswordScreen';
import DoneScreen from '../screens/DoneScreen/DoneScreen';
import AppLoader from '../components/AppLoader/AppLoader';

//importing the AppStack
import AppStack from './AppStack';

const Stack = createNativeStackNavigator();
// Navigator, Screen, Group

const AuthNavigator = () => {
  //create states to store the loading and viewedOnboarding values
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  //check if the user has already seen the onboarding page or not and then set the state accordingly
  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding');
      if (value !== null) {
        setViewedOnboarding(true);
      } else {
        setViewedOnboarding(false);
      }
    } catch (err) {
      console.log('Error @checkOnboarding: ', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  if (loading) {
    return <AppLoader />;
  }

  /*//Create a useEffect hook to use the checkOnboarding function
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    checkOnboarding();
  }, []);*/
  return (
    <NavigationContainer>
      {viewedOnboarding ? (
        <LoginScreen />
      ) : (
        <Stack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Onboarding" component={OnboardingPage} />
          <Stack.Screen name="LogIn" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
          <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
          <Stack.Screen name="Done" component={DoneScreen} />
          <Stack.Screen name="Home" component={AppStack} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AuthNavigator;
