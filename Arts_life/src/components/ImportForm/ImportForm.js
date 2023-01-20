/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput, ToastAndroid} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-picker';
import {
  CameraButton,
  ProductInput,
  PriceInput,
  CategoryInput,
  DescriptionInput,
} from './styles';

const ImportForm = ({products, setProducts}) => {
  const [pic, setPic] = React.useState('');
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleChooseImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setPic(response.uri);
      }
    });
  };

  const handleUpload = () => {};

  const handleSubmit = () => {
    const newProduct = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
      pic,
      name,
      price,
      category,
      description,
    };
    setProducts([...products, newProduct]);
  };

  //For Show Toast Messages

  const setToastMessage = message => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const removeImage = () => {
    setPic('');
    setToastMessage('Image removed');
  };

  return (
    <View>
      <CameraButton source={{uri: pic}} onPress={() => {}}>
        <Feather
          name="camera"
          size={30}
          color="#26474E"
          onPress={() => removeImage()}
        />
      </CameraButton>
      <ProductInput onPress={() => {}}>
        <Feather
          name="edit-3"
          size={30}
          color="#26474E"
          style={{marginLeft: 15}}
        />
        <TextInput
          style={{marginLeft: 15}}
          placeholder="Product Name"
          value={name}
          onChangeText={text => setName(text)}
        />
      </ProductInput>
      <PriceInput>
        <Feather
          name="dollar-sign"
          size={30}
          color="#26474E"
          style={{marginLeft: 15}}
        />
        <TextInput
          style={{marginLeft: 15}}
          placeholder="Price"
          value={price}
          onChangeText={text => setPrice(text)}
        />
      </PriceInput>
      <CategoryInput>
        <Feather
          name="grid"
          size={30}
          color="#26474E"
          style={{marginLeft: 15}}
        />
        <TextInput
          style={{marginLeft: 15}}
          placeholder="Category"
          value={category}
          onChangeText={text => setCategory(text)}
        />
        <Feather
          name="chevron-down"
          size={30}
          color="#26474E"
          style={{marginLeft: 70}}
        />
      </CategoryInput>
      <DescriptionInput>
        <Feather
          name="book"
          size={30}
          color="#26474E"
          style={{marginLeft: 15, marginTop: 10}}
        />
        <TextInput
          style={{marginLeft: 15, marginTop: -100}}
          placeholder="Description"
          value={description}
          onChangeText={text => setDescription(text)}
        />
      </DescriptionInput>
    </View>
  );
};

export default ImportForm;
