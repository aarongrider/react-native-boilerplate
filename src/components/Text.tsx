import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text as RNText, TextStyle} from 'react-native';
import {Theme} from './Themes';

type Props = {
  p?: boolean;
  h1?: boolean;
  h2?: boolean;
  style?: TextStyle;
  children?: any;
};

const Text = (props: Props) => {
  const {colors} = useTheme() as Theme;
  const {p, h1, h2, style = {}} = props;

  const getSize = () => {
    if (h1) {
      return 22;
    } else if (h2) {
      return 13;
    }
    return 14;
  };

  const getColor = () => {
    if (h2) {
      return colors.textSecondary;
    }
    return colors.text;
  };

  const getLineHeight = () => {
    if (p) {
      return 22;
    }
    return undefined;
  };

  const getFontWeight = () => {
    if (h1) {
      return '800';
    } else if (h2) {
      return '600';
    }
    return '400';
  };

  const textStyle: TextStyle = {
    fontSize: getSize(),
    color: getColor(),
    lineHeight: getLineHeight(),
    fontWeight: getFontWeight(),
  };

  return <RNText style={[textStyle, style]}>{props.children}</RNText>;
};

export default Text;
