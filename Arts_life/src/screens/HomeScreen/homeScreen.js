import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import AppHeader from '../../components/AppHeader/AppHeader';
import FilterList from '../../components/FilterList.js/FilterList';
import HomeList from '../../components/HomeScrollList/HomeList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
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
        <HomeList />
      </View>
    </SafeAreaView>
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
