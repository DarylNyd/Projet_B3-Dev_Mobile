/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {SafeAreaView, StyleSheet, FlatList, Animated, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import slides from '../../../slides';
import OnboardingItem from '../../components/OnboardingItem/OnboardingItem';
import Paginator from '../../components/Paginator_Onboarding/Paginator';
import NextButton from '../../components/NextButton_Onboarding/NextButton';
import SkipButton from '../SkipButton_Onboarding/SkipButton';

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const navigation = useNavigation();

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const scrollTo = async () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      try {
        console.log('navigate to home');
        navigation.replace('LogIn', {screen: 'AuthStack'});
        await AsyncStorage.setItem('@viewedOnboarding', 'true');
      } catch (err) {
        console.log('Error @setItem', err);
      }
    }
  };

  const scrollToLast = () => {
    const lastSlide = slides.length - 1;
    if (currentIndex !== lastSlide) {
      slidesRef.current.scrollToIndex({index: lastSlide});
    } else {
      console.log('navigate to home');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 3}}>
        {currentIndex !== slides.length - 1 ? (
          <SkipButton scrollTo={scrollToLast} />
        ) : null}

        <FlatList
          data={slides}
          renderItem={({item}) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      <Paginator data={slides} scrollX={scrollX} />
      <NextButton
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / slides.length)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.95,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4D6F0',
  },
});

export default Onboarding;
