import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import FilterList from '../../components/FilterList.js/FilterList';

const HomeScreen = () => {
  return (
    <ScrollView>
      <FilterList style={styles.filterList} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4D6F0',
  },
  filterList: {
    flex: 1,
  },
});

export default HomeScreen;
