/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import AppHeader from '../../components/AppHeader/AppHeader';
import FilterList from '../../components/FilterList.js/FilterList';
import HomeList from '../../components/HomeScrollList/HomeList';
import ProductList from '../../components/ProductList/ProductList';
import TestApi from './TestApi';

const HomeScreen = () => {
  return (
    <View style={[styles.root]}>
      <View>
        <AppHeader
          menu={true}
          title="Home"
          right="search"
          onRightPress={() => {}}
          optionalBtn="bell"
          optionalBtnPress={() => {}}
          optionalBadge={3}
        />
        <FilterList style={styles.filterList} />
        <ProductList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4D6F0',
  },
  filterList: {
    flex: 1,
  },
});

export default HomeScreen;
