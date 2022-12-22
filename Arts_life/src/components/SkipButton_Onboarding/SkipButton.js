import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
//import {AntDesign} from 'react-native-vector-icons';

//finish the animation and the design

const SkipButton = ({scrollTo}) => {
  return (
    <View style={styles.skip}>
      <Text style={styles.text}>Skip</Text>
      <TouchableOpacity
        onPress={scrollTo}
        style={styles.container}
        activeOpacity={0.6}>
        <Text>skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  skip: {
    //flex: ,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '900',
    fontSize: 20,
    color: '#26474E',
    fontFamily: 'poppins-regular',
  },
});

export default SkipButton;
