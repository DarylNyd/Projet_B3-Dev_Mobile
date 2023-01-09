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
    backgroundColor: '#f0f0f2',
    borderRadius: 10,
    margin: 5,
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
        marginTop: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 5,
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
          paddingHorizontal: 5,
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
