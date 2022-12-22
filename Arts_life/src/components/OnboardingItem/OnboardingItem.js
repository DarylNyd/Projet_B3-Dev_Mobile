/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  SafeAreaView,
} from 'react-native';

const OnboardingItem = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <SafeAreaView style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
      <View style={{flex: 0.4}}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.description}>{item.description}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4D6F0',
  },
  image: {
    flex: 0.6,
    justifyContent: 'center',
    //marginTop: -150,
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    //marginTop: -300,
    color: '#26474E',
    textAlign: 'center',
  },
  description: {
    fontWeight: '500',
    color: '#1C2942',
    textAlign: 'center',
    paddingHorizontal: 64,
    //marginTop: -10,
  },
});

export default OnboardingItem;
