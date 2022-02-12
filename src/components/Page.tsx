import {Theme, useTheme} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, useWindowDimensions, View} from 'react-native';
import {Constants} from '../Constants';

type Props = {
  modal?: boolean;
  children?: any;
};

const Page = (props: Props) => {
  const {colors} = useTheme() as Theme;
  const {width} = useWindowDimensions();

  if (props.modal && width > Constants.maxWidth) {
    return (
      <View style={styles.webOverlay}>
        <View
          style={[
            styles.webContent,
            {backgroundColor: colors.background, borderColor: colors.hovered},
          ]}>
          {props.children}
        </View>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      contentInsetAdjustmentBehavior="automatic">
      <View style={styles.content}>{props.children}</View>
    </ScrollView>
  );
};

export default Page;

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
  webOverlay: {
    width: '100%',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000BB',
  },
  webContent: {
    width: '80%',
    padding: 64,
    borderWidth: 0.2,
    borderColor: 'red',
    borderRadius: 10,
    maxWidth: Constants.maxWidth - 20,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
