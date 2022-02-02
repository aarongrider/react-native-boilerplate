import React from 'react';
import {Image, StyleSheet} from 'react-native';

import Button from '../components/Button';
import Card from '../components/Card';
import Page from '../components/Page';
import Spacer from '../components/Spacer';
import Text from '../components/Text';

const ModalScreen = ({navigation}: {navigation: any}) => {
  return (
    <Page modal>
      <Card>
        <Text h1>Modal</Text>
        <Spacer s />
        <Text h2>Presentation Style</Text>
      </Card>
      <Spacer m />
      <Card fullBleed>
        <Image
          style={{width: '100%', height: 300}}
          source={{
            uri: 'https://images.unsplash.com/photo-1594114702404-7a9142c04afa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&auto=format&fit=crop&w=700&q=60',
          }}
        />
      </Card>
      <Spacer m />
      <Button
        onPress={() => navigation.goBack()}
        style={styles.button}
        title="Dismiss"
      />
    </Page>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  button: {
    width: '100%',
  },
});
