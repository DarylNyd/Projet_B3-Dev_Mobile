/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

import CustomRows from './CustomRows';

const UserRows = () => {
  return (
    <View style={{flex: 1, marginTop: 30}}>
      <CustomRows icon="list" value="My Works" onPress={() => {}} />
      <CustomRows
        icon="message-circle"
        value="My Messages"
        onPress={() => {}}
      />
    </View>
  );
};

export default UserRows;
