import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import Button from '../components/Button';
import Card from '../components/Card';
import Loader from '../components/Loader';
import Spacer from '../components/Spacer';
import Text from '../components/Text';
import {NavRoutes} from '../navigation/NavRoutes';

const DetailScreen = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Spacer />
      <Card>
        <Loader />
      </Card>
      <Spacer />
      <Card>
        <Text p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam neque
          odio, iaculis id tempus id, egestas at ipsum. Nulla ullamcorper
          hendrerit arcu. In quis diam id felis finibus facilisis. Maecenas
          pretium quis lorem et molestie. Curabitur convallis, mi at laoreet
          semper, ante sapien vestibulum arcu, quis laoreet dui quam non tellus.
          Maecenas eget auctor nunc, quis auctor tellus. Donec nec orci sit amet
          quam dapibus fringilla. Maecenas ultricies eget lorem suscipit
          aliquet.
        </Text>
      </Card>
      <Button
        title="Go To Home Tab"
        style={styles.button}
        onPress={() => navigation.navigate(NavRoutes.FirstTab)}
      />
      <Spacer />
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
  },
  button: {
    width: '100%',
    marginVertical: 16,
  },
});
