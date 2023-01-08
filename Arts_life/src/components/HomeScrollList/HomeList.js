import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import axios from 'axios';

const ApiUrl = 'http://localhost:8055/items/Products';

/*const getProducts = () => {
  const response = axios.get(ApiUrl);
  return response.data;
};*/

const HomeList = () => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const offset = 10;

  useEffect(() => {
    setLoading(true);
    axios({
      method: 'GET',
      url: ApiUrl,
      params: {
        offset: page * offset,
        limit: 20,
      },
    })
      .then(response => {
        console.log(response.data.data.results);
        setProducts(response.data.data.results);
        setTotalPages(response.data.data.totalPages);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, [page, products]);

  const renderProduct = ({item}) => {
    return (
      <View>
        <Image
          source={{uri: item.image}}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
          <Text>{item.Author}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={renderProduct}
          onEndReached={() => {
            if (page < totalPages) {
              setPage(page + 1);
            }
          }}
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
