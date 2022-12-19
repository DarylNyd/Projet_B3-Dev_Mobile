import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import CustomFilter from '../CustomFilter/CustomFilter';

//This is the filter list component where we can add more filters to the home screen
const FilterList = () => {
  return (
    <ScrollView
      horizontal={true}
      style={styles.root}
      showsHorizontalScrollIndicator={false}>
      <CustomFilter text="Popular" type="Primary" onPress={() => {}} />

      <CustomFilter text="Manga" type="Secondary" onPress={() => {}} />

      <CustomFilter text="Realism" type="Primary" onPress={() => {}} />

      <CustomFilter text="Cartoon" type="Secondary" onPress={() => {}} />

      <CustomFilter text="Popular" type="Primary" onPress={() => {}} />

      <CustomFilter text="Manga" type="Secondary" onPress={() => {}} />

      <CustomFilter text="Realism" type="Primary" onPress={() => {}} />

      <CustomFilter text="Cartoon" type="Secondary" onPress={() => {}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    //flexWrap: 'wrap',
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#C4D6F0',
  },
});

export default FilterList;
