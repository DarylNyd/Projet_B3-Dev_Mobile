/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useWindowDimensions, TouchableOpacity} from 'react-native';
import {
  CapsuleContainer,
  ImageContainer,
  DetailsContainer,
  AuthorPic,
  ProductInfo,
  OptionsBloc,
  Options,
  ProductImage,
  ProductName,
  AuthorName,
  Time,
  Price,
  PriceValue,
  AuthorImage,
} from './ProductItemStyle';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const ProductItem = ({item}) => {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();
  const [isliked, setIsLiked] = useState(false);

  const Like = () => {
    setIsLiked(!isliked);
  };
  return (
    <CapsuleContainer>
      <ImageContainer>
        <ProductImage
          source={item.image}
          style={[{width, resizeMode: 'contain'}]}
        />
      </ImageContainer>
      <DetailsContainer>
        <AuthorPic>
          <AuthorImage source={item.authorpic} />
        </AuthorPic>
        <ProductInfo>
          <ProductName>{item.name}</ProductName>
          <AuthorName>By {item.author}</AuthorName>
          <Time>{item.time}</Time>
        </ProductInfo>
        <OptionsBloc>
          <Price>
            <PriceValue>{item.price} €</PriceValue>
          </Price>
          <Options>
            <TouchableOpacity
              onPress={() => {
                Like();
              }}>
              {isliked ? (
                <AntDesign name="heart" size={27} color="red" />
              ) : (
                <AntDesign name="hearto" size={27} color="#000" />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MESSAGE', {
                  screen: 'Chat',
                  params: {title: item.author},
                });
              }}>
              <Feather name="message-circle" size={27} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <AntDesign name="sharealt" size={27} color="#000" />
            </TouchableOpacity>
          </Options>
        </OptionsBloc>
      </DetailsContainer>
    </CapsuleContainer>
  );
};

export default ProductItem;
