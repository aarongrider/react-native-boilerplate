import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import ScalePressable from './ScalePressable';
import Spacing from './Spacing';
import {Theme} from './Themes';

type Props = {
  fullBleed?: boolean;
  children?: any;
  onPress?: () => void;
};

const Card = (props: Props) => {
  const {colors} = useTheme() as Theme;

  const renderCard = () => {
    return (
      <View
        style={[
          styles.container,
          {
            overflow: 'hidden',
            backgroundColor: colors.card,
            borderRadius: Spacing.borderRadius,
            padding: props.fullBleed ? 0 : Spacing.l,
          },
        ]}>
        {props.children}
      </View>
    );
  };

  if (props.onPress) {
    return (
      <ScalePressable onPress={props.onPress} style={{width: '100%'}}>
        {renderCard()}
      </ScalePressable>
    );
  } else {
    return renderCard();
  }
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowRadius: 18,
    shadowOpacity: 0.03,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
});
