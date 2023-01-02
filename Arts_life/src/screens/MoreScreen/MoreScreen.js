import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text>More Or Futur Options here</Text>
    </View>
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

export default Dashboard;
