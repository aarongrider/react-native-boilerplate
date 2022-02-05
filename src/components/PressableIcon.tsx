import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  View,
  ViewStyle,
  Pressable,
} from 'react-native';
import Icon, {IconNames} from './Icon';
import {Theme} from './Themes';

type Props = {
  onPress: ((event: GestureResponderEvent) => void) | null;
  name: IconNames;
  color?: string;
  disabled?: boolean;
  size?: number;
  style?: ViewStyle;
};

const PressableIcon = (props: Props) => {
  const {colors} = useTheme() as Theme;
  const {style = {}} = props;
  const size = props.size ? props.size : 24;
  return (
    <View style={[style, {overflow: 'hidden', borderRadius: (size + 16) / 2}]}>
      <Pressable
        onPress={props.onPress}
        android_ripple={{color: colors.pressed}}
        style={({hovered, focused, pressed}) => [
          styles.container,
          {width: size + 16, height: size + 16},
          hovered && {backgroundColor: colors.hovered},
          pressed && {backgroundColor: colors.pressed},
        ]}>
        <Icon name={props.name} size={size} style={{marginLeft: 1}} />
      </Pressable>
    </View>
  );
};

export default PressableIcon;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
