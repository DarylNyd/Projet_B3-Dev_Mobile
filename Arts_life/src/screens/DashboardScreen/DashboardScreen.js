import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AppHeader from '../../components/AppHeader/AppHeader';
import UserRows from '../../components/CustomRows/UserRows';
import Icon from 'react-native-vector-icons/Feather';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <AppHeader menu={false} title="User Dashboard" />
      <View style={styles.Header}>
        <View style={styles.UserImage}>
          <Image
            source={require('../../../assets/images/Author-images/me.jpeg')}
            style={styles.Image}
          />
        </View>
        <View style={styles.UserDetails}>
          <Text style={styles.UserName}>Rajesh Kumar</Text>
          <Text style={styles.UserEmail}>sfdgsfhjh@gmail.com</Text>
        </View>
      </View>

      <UserRows />

      <TouchableOpacity style={styles.LogButton}>
        <View style={styles.LogButtonLeft}>
          <Icon name="log-out" size={20} color="#fff" />
        </View>
        <View style={styles.LogButtonRight}>
          <Text style={styles.LogButtonText}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4D6F0',
  },
  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5FC2BA',
    width: '100%',
    height: 100,
  },
  UserImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -100,
  },
  Image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  UserDetails: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
  },
  UserName: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  UserEmail: {
    fontSize: 15,
    color: '#fff',
    marginTop: 5,
  },
  LogButton: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: '#5FC2BA',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  LogButtonLeft: {
    width: 50,
    height: 50,
    backgroundColor: '#5FC2BA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogButtonRight: {
    width: '100%',
    height: 50,
    backgroundColor: '#5FC2BA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Dashboard;
