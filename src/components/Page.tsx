import {Theme, useTheme} from '@react-navigation/native';
import React from 'react';
import {Platform, ScrollView, StyleSheet, View} from 'react-native';
import {Constants} from '../Constants';

type Props = {
  modal?: boolean;
  children?: any;
};

const Page = (props: Props) => {
  const {colors} = useTheme() as Theme;

  if (props.modal === true && Platform.OS === 'web') {
    return (
      <View style={styles.webContainer}>
        <View style={[styles.webContent, {backgroundColor: colors.background}]}>
          {props.children}
        </View>
      </View>
    );
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
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
  webContainer: {
    width: '100%',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000BB',
  },
  webContent: {
    width: '80%',
    backgroundColor: 'red',
    padding: 64,
    borderRadius: 10,
    maxWidth: Constants.maxWidth,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
