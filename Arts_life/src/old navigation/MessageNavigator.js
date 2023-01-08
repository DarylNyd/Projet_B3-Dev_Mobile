import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import MessageScreen from '../screens/MessageScreen/MessageScreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen';

const Stack = createNativeStackNavigator();

const MessageNavigator = () => {
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
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Message"
        component={MessageScreen}
        options={{
          headerShown: true,
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
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTintColor: '#5FC2BA',
          headerStyle: {
            backgroundColor: '#fff',
            height: 50,
          },
          tarBarVisible: getTabBarVisibility(route),
        })}
      />
    </Stack.Navigator>
  );
};

export default MessageNavigator;
/*const MessageNavigator = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={({route}) => ({
        title: route.params.userName,
        headerBackTitleVisible: false,
      })}
    />
  </Stack.Navigator>
);*/
