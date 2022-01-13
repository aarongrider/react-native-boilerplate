import React, {useState} from 'react';
import {Animated, ViewStyle, Pressable, View} from 'react-native';

type Props = {
  style?: ViewStyle;
  onPress: () => void;
  children: any;
};

const ScalePressable = (props: Props) => {
  const {style, children, onPress} = props;

  const [scaleInAnimated] = useState(new Animated.Value(0));

  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        onPressIn={() => {
          Scale.pressInAnimation(scaleInAnimated);
        }}
        onPressOut={() => {
          Scale.pressOutAnimation(scaleInAnimated);
        }}>
        <Animated.View
          style={[Scale.getScaleTransformationStyle(scaleInAnimated)]}>
          {children}
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default ScalePressable;

const Scale = {
  // this defines the terms of our scaling animation.
  getScaleTransformationStyle(animated: Animated.Value) {
    const scaleInterpolation = animated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.98],
    });
    const opacityInterpolation = animated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.8],
    });
    return {
      opacity: opacityInterpolation,
      transform: [{scale: scaleInterpolation}],
    };
  },
  // This defines animation behavior we expext onPressIn
  pressInAnimation(animated: Animated.Value, duration: number = 150) {
    animated.setValue(0);
    Animated.timing(animated, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  },
  // This defines animatiom behavior we expect onPressOut
  pressOutAnimation(animated: Animated.Value, duration: number = 150) {
    animated.setValue(1);
    Animated.timing(animated, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();
  },
};
