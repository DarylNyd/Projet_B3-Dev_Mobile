/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';

const Work = ({image}) => {
  return (
    <View styles={styles.MainContainer}>
      <TouchableOpacity style={styles.WorkContainer}>
        <Image source={image} style={styles.WorkImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  WorkContainer: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  WorkImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 10,
  },
});

const WorkList = () => {
  return (
    <View
      style={{
        padding: 10,
        marginTop: 10,
        marginVertical: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 5,
          paddingVertical: 8,
        }}>
        <Work
          image={require('../../../assets/images/Products-images/blackstar.jpeg')}
        />
        <Work
          image={require('../../../assets/images/Products-images/Escanor.jpeg')}
        />
        <Work
          image={require('../../../assets/images/Products-images/Italian-1.jpeg')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 5,
          paddingVertical: 8,
        }}>
        <Work
          image={require('../../../assets/images/Products-images/Italiankids.jpeg')}
        />
        <Work
          image={require('../../../assets/images/Products-images/Joker.jpeg')}
        />
        <Work
          image={require('../../../assets/images/Products-images/Ironman.jpeg')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 8,
          paddingHorizontal: 5,
        }}>
        <Work
          image={require('../../../assets/images/Products-images/Ragedog.jpeg')}
        />
      </View>
    </View>
  );
};

export default WorkList;
