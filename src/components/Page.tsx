import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Constants} from '../Constants';

type Props = {
  children?: any;
};

const Page = (props: Props) => {
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
});
