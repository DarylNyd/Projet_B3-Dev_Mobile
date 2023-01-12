import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import axios from 'axios';

import ProductItem from '../ProductList/ProductItem';

const ApiUrl = 'http://localhost:8055/items/Products';

/*const getProducts = () => {
  const response = axios.get(ApiUrl);
  return response.data;
};*/

const HomeList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(ApiUrl)
      .then(response => {
        console.log(response.data.data);
        setProducts(response.data.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, [products]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ProductItem item={item} />}
          onEndReachedThreshold={0.5}
        />
      )}
    </View>
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
    width: 400,
    height: 100,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeList;
