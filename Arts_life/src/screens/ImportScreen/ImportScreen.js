import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppHeader from '../../components/AppHeader/AppHeader';

const ImportScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader menu={false} title="Import" />
      <Text>ImportScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#C4D6F0',
  },
});
export default ImportScreen;
