import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Card from './Card';
import Palette from './Palette';
import Spacer from './Spacer';
import Spacing from './Spacing';
import Text from './Text';

type Props = {
  title?: string;
  subtitle?: string;
  color?: string;
  image?: string;
  onPress?: () => void;
};

const ImageCard = (props: Props) => {
  return (
    <>
      <Card fullBleed>
        <View style={[styles.container, {backgroundColor: props.color}]}>
          <Image
            style={{width: '60%', height: '60%'}}
            resizeMode="contain"
            source={{
              uri: props.image,
            }}
          />
          <View
            style={{
              position: 'absolute',
              bottom: Spacing.l,
              left: Spacing.l,
            }}>
            {props.subtitle && (
              <Text style={{color: Palette.white, fontSize: 16}}>
                {props.subtitle}
              </Text>
            )}
            {props.title && (
              <Text h1 style={{color: Palette.white}}>
                {props.title}
              </Text>
            )}
          </View>
        </View>
      </Card>
    </>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 350,
    padding: Spacing.l,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
