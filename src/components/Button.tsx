import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  ViewStyle,
  View,
} from 'react-native';
import {Pressable} from 'react-native-web-hover';
import Text from './Text';
import {Theme} from './Themes';

type Props = {
  title: string;
  style?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
};

const Button = (props: Props) => {
  const {colors} = useTheme() as Theme;
  return (
    <View style={props.style}>
      <Pressable
        onPress={props.onPress}
        android_ripple={{color: colors.hovered}}
        style={({hovered, focused, pressed}) => [
          styles.baseContainer,
          {backgroundColor: colors.card, borderColor: colors.hovered},
          hovered && {backgroundColor: colors.pressed},
          pressed && [styles.buttonPressed, {backgroundColor: colors.pressed}],
        ]}>
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  baseContainer: {
    padding: 16,
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 0.2,
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default Button;
