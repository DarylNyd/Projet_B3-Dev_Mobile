import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, Text} from 'react-native';

const MyComponent = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8055/items/Products', {
        params: {
          sort: 'title',
          direction: 'asc',
        },
      })
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) {
    return (
      <View>
        <Text>An error occurred: {error.message}</Text>
      </View>
    );
  }

  console.log(items);

  return (
    <View>
      {/* Remove this code:
      {items.map(item => (
        <View key={item.id}>
          <Text>{item.title}</Text>
        </View>
      ))}
      */}
    </View>
  );
};

export default MyComponent;
