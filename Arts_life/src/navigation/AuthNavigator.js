import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

//redux imports
import AsyncStorage from '@react-native-async-storage/async-storage';

//Screens
import OnboardingPage from '../screens/OnboardingPage/OnboardingPage';
import LoadingScreen from '../screens/OnboardingPage/LoadingScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmail.Screen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen/ResetPasswordScreen';
import DoneScreen from '../screens/DoneScreen/DoneScreen';
import AppLoader from '../components/AppLoader/AppLoader';

//import DrawerNavigator from './DrawerNavigator';
import BottomTabNavigator from './BottomTabNavigator';

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
      }
    } catch (err) {
      console.log('Error @checkOnboarding: ', err);
    } finally {
      setLoading(false);
    }
  };

  //Create a useEffect hook to use the checkOnboarding function
  useEffect(() => {
    checkOnboarding();
  }, []);
  return (
    <NavigationContainer>
      {loading ? (
        <AppLoader />
      ) : viewedOnboarding ? (
        <LoadingScreen />
      ) : (
        <Stack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Onboarding" component={OnboardingPage} />
          <Stack.Screen name="Loading" component={LoadingScreen} />
          <Stack.Screen name="LogIn" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
          <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
          <Stack.Screen name="Done" component={DoneScreen} />
          <Stack.Screen name="Home" component={BottomTabNavigator} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AuthNavigator;
