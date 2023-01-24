/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, ScrollView, Text, useWindowDimensions} from 'react-native';
import {
  Root,
  ImageCard,
  ProductViewName,
  ProductViewPrice,
  ProductViewDescription,
  Title,
  ViewImage,
  ViewButtons,
  ViewAuthor,
  ViewAuthorPic,
  ViewAuthorInfo,
  Time,
} from './styles';

import {useNavigation} from '@react-navigation/native';

import AppHeader from '../../components/AppHeader/AppHeader';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';

const ViewProductScreen = ({route}) => {
  const navigation = useNavigation();
  const {product} = route.params;
  const {width} = useWindowDimensions();
  const [message, setMessage] = useState('');

  const sendMessage = text => {
    setMessage(text);
  };

  return (
    <Root>
      <AppHeader
        back={true}
        title="Product Description"
        backPress={() => {
          navigation.navigate('Home');
        }}
      />
      <ScrollView>
        <ImageCard>
          <ViewImage
            source={product.image}
            style={{width, resizeMode: 'contain'}}
          />
        </ImageCard>
        <View>
          <ProductViewName>{product.name}</ProductViewName>
          <ProductViewPrice>{product.price} €</ProductViewPrice>
        </View>
        <ViewAuthor>
          <View>
            <ViewAuthorPic source={product.authorpic} />
          </View>
          <ViewAuthorInfo>
            <Title>By {product.author}</Title>
            <Time>{product.time}</Time>
          </ViewAuthorInfo>
        </ViewAuthor>
        <Title>Description</Title>
        <ProductViewDescription>
          <Text>{product.description}</Text>
        </ProductViewDescription>
        <ViewButtons>
          <CustomInput
            placeholder="Write your message here"
            onChangeText={sendMessage}
            value={message}
            setValue={setMessage}
          />

          <CustomButton text="Send Message" type="Primary" onPress={() => {}} />
          <CustomButton text="Buy Now" type="Primary" onPress={() => {}} />
        </ViewButtons>
      </ScrollView>
    </Root>
  );
};

export default ViewProductScreen;
