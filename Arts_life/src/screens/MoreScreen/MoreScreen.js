import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppHeader from '../../components/AppHeader/AppHeader';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <AppHeader menu={false} title="More" />
      <Text>More Or Futur Options here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4D6F0',
  },
});

export default Dashboard;
