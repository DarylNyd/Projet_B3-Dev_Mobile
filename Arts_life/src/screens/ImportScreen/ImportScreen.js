import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ImportScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ImportScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ImportScreen;
