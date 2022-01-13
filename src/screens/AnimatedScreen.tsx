import React, {useEffect, useState} from 'react';
import {Animated, Easing, ScrollView, StyleSheet, View} from 'react-native';

import Icon from '../components/Icon';
import Palette from '../components/Palette';
import PressableIcon from '../components/PressableIcon';
import Spacer from '../components/Spacer';
import Text from '../components/Text';
import {Constants} from '../Constants';

const PulsingIcon = () => {
  const [animatedValue] = useState(new Animated.Value(1));
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 0.6,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [animatedValue]);

  return (
    <Animated.View
      style={{
        alignItems: 'center',
        opacity: animatedValue,
        transform: [{scale: animatedValue}],
      }}>
      <Icon name="bolt" color={Palette.brand} size={64} />
    </Animated.View>
  );
};

const AnimatedScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text h1>Icon</Text>
        <Spacer s />
        <Icon name="file-text" size={64} />
        <Spacer m />
        <Text h1>Animated Icon</Text>
        <Spacer l />
        <PulsingIcon />
        <Spacer l />
        <Text h1>Icon Row</Text>
        <Spacer s />
        <View style={{flexDirection: 'row'}}>
          <Icon name="arrow-right" />
          <Spacer m horizontal />
          <Icon name="add-person" />
          <Spacer m horizontal />
          <Icon name="calendar" />
          <Spacer m horizontal />
          <Icon name="restart" />
        </View>
        <Spacer l />
        <Text h1>PressableIcon</Text>
        <Spacer s />
        <View style={{flexDirection: 'row'}}>
          <PressableIcon name="arrow-right" onPress={() => {}} />
          <Spacer m horizontal />
          <PressableIcon name="add-person" onPress={() => {}} />
          <Spacer m horizontal />
          <PressableIcon name="calendar" onPress={() => {}} />
          <Spacer m horizontal />
          <PressableIcon name="restart" onPress={() => {}} />
        </View>
      </View>
    </ScrollView>
  );
};

export default AnimatedScreen;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 32,
  },
  content: {
    width: '100%',
    maxWidth: Constants.maxWidth,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 36,
  },
});
