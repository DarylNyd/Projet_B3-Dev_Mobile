/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//Imports for navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Import icons
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

//Import screens
import HomeScreen from '../screens/HomeScreen';
import MessageScreen from '../screens/MessageScreen/MessageScreen';
import ImportScreen from '../screens/ImportScreen/ImportScreen';
import Dashboard from '../screens/DashboardScreen/DashboardScreen';
import MoreScreen from '../screens/MoreScreen/MoreScreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import ViewProductScreen from '../screens/ViewProductScreen/ViewProductScreen';
import MyWorksScreen from '../screens/MyWorksScreen/MyWorksScreen';

import CustomTabBarButton from '../components/CustomTabBarButton/CustomTabBarButton';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ViewProduct"
        component={ViewProductScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MessageStack = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Message"
        component={MessageScreen}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerTintColor: '#5FC2BA',
          headerStyle: {
            backgroundColor: '#fff',
            height: 50,
          },
        }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={({route}) => ({
          title: route.params.userName,
          headerBackTitleVisible: true,
          headerTitleAlign: 'center',
          headerTintColor: '#5FC2BA',
          headerStyle: {
            backgroundColor: '#fff',
            height: 50,
          },
        })}
      />
    </Stack.Navigator>
  );
};

const ImportStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Import"
        component={ImportScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const DashboardStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyWorks"
        component={MyWorksScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MoreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="More"
        component={MoreScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  const getTabBarVisibility = route => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';

    if (routeName === 'Chat') {
      return false;
    }
    return true;
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          bottom: 10,
          left: 9,
          right: 9,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 80,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="HOME"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Entypo
                name="home"
                size={30}
                color={focused ? '#5FC2BA' : '#26474E'}
              />
              <Text
                style={{color: focused ? '#5FC2BA' : '#26474E', fontSize: 12}}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MESSAGE"
        component={MessageStack}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Entypo
                name="chat"
                size={30}
                color={focused ? '#5FC2BA' : '#26474E'}
              />
              <Text
                style={{color: focused ? '#5FC2BA' : '#26474E', fontSize: 12}}>
                Messages
              </Text>
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="IMPORT"
        component={ImportStack}
        options={{
          headerShown: false,
          tabBarVisible: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Feather
                name="plus-circle"
                size={65}
                color={focused ? '#ffffff' : '#26474E'}
              />
            </View>
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="DASHBOARD"
        component={DashboardStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Entypo
                name="user"
                size={30}
                color={focused ? '#5FC2BA' : '#26474E'}
              />
              <Text
                style={{color: focused ? '#5FC2BA' : '#26474E', fontSize: 12}}>
                User
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MORE"
        component={MoreStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Entypo
                name="dots-three-horizontal"
                size={30}
                color={focused ? '#5FC2BA' : '#26474E'}
              />
              <Text
                style={{color: focused ? '#5FC2BA' : '#26474E', fontSize: 12}}>
                More
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

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

export default AppStack;
