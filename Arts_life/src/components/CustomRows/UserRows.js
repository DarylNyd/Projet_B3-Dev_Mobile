/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CustomRows from './CustomRows';

const UserRows = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 3, marginTop: 20}}>
      <CustomRows
        icon="list"
        icon2="chevron-right"
        value="My Works"
        onPress={() => navigation.navigate('MyWorks')}
      />
      <CustomRows
        icon={'message-circle'}
        icon2={'chevron-right'}
        value="My Messages"
        onPress={() => navigation.navigate('MESSAGE')}
        style={{marginTop: 20}}
      />

      <CustomRows
        icon="log-out"
        value="Logout"
        onPress={() => navigation.navigate('LogIn', {screen: 'AuthStack'})}
      />
    </View>
  );
};

export default UserRows;
