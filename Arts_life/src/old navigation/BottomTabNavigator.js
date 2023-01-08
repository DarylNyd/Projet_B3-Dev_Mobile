/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

import HomeScreen from '../screens/HomeScreen';
//import MessageScreen from '../screens/MessageScreen/MessageScreen';
import ImportScreen from '../screens/ImportScreen/ImportScreen';
import Dashboard from '../screens/DashboardScreen/DashboardScreen';
import MoreScreen from '../screens/MoreScreen/MoreScreen';

//import other StackNavigators
import MessageNavigator from './MessageNavigator';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
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

const BottomTabNavigator = () => {
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
          position: 'absolute',
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
        component={HomeScreen}
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
        component={MessageNavigator}
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
        component={ImportScreen}
        options={{
          headerShown: false,
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
        component={Dashboard}
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
        component={MoreScreen}
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

export default BottomTabNavigator;
