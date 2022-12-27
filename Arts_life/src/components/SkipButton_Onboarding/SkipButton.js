import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

//finish the animation and the design
//stepforward

const SkipButton = ({scrollTo}) => {
  return (
    <View style={styles.skip}>
      <Text onPress={scrollTo} style={styles.text}>
        Skip
      </Text>
      <TouchableOpacity
        onPress={scrollTo}
        style={styles.container}
        activeOpacity={0.6}>
        <AntDesign name="stepforward" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#5FC2BA',
    borderRadius: 50,
    marginHorizontal: 5,
  },
  skip: {
    //flex: ,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 260,
  },
  text: {
    fontWeight: '900',
    fontSize: 20,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    color: '#26474E',
    fontFamily: 'poppins-regular',
  },
});

export default SkipButton;
