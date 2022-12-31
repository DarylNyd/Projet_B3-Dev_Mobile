// Description: This file contains the routes for the app
//important imports that are used in this file
import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

//screens
import LoadingScreen from '../screens/OnboardingPage/LoadingScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmail.Screen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen/ResetPasswordScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DoneScreen from '../screens/DoneScreen/DoneScreen';
import OnboardingPage from '../screens/OnboardingPage/OnboardingPage';
import MessageScreen from '../screens/MessageScreen/MessageScreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import AppLoader from '../components/AppLoader/AppLoader';

//create a stack navigator to navigate between the screens
const Stack = createNativeStackNavigator();

//create a loading component to show the user that the app is loading while checking if the user has already seen the onboarding page or not
const Loading = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const Navigation = () => {
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
    //Verify if the user has already seen the onboarding page or not and then navigate to the correct screen accordingly
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Message"
        screenOptions={{headerShown: null}}>
        <Stack.Screen name="Onboarding" component={OnboardingPage} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="LogIn" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="Done" component={DoneScreen} />
        <Stack.Screen
          name="Message"
          component={MessageScreen}
          screenOptions={{headerShown: true}}
        />
        <Stack.Screen name="AppLoader" component={AppLoader} />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={({route}) => ({
            title: route.params.userName,
            headerBackTitleVisible: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
