import {useTheme} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Theme} from './Themes';

type Props = {
  color?: string;
};

const Loader = (props: Props) => {
  const {colors} = useTheme() as Theme;

  return <ActivityIndicator color={props.color ? props.color : colors.text} />;
};

export default Loader;
