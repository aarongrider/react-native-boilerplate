import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';

import Button from '../components/Button';
import Card from '../components/Card';
import Palette from '../components/Palette';
import Spacer from '../components/Spacer';
import Spacing from '../components/Spacing';
import Text from '../components/Text';
import {Constants} from '../Constants';
import {NavRoutes} from '../navigation/NavRoutes';

const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Spacer />
        <Card
          fullBleed
          onPress={() => {
            console.log('Test');
          }}>
          <View
            style={{
              width: '100%',
              height: 350,
              backgroundColor: '#F8D24C',
              padding: Spacing.l,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: '60%', height: '60%'}}
              resizeMode="contain"
              source={{
                uri: 'https://www.decorist.com/static/finds/product_images/full_size/220819-candelabra-cactus.956a5b8455a47c8ce1d486f8f3e2a774.png',
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: Spacing.l,
                left: Spacing.l,
              }}>
              <Text style={{color: Palette.white, fontSize: 16}}>Tomorrow</Text>
              <Text h1 style={{color: Palette.white}}>
                Pottery for beginners
              </Text>
            </View>
          </View>
        </Card>
        <Spacer />
        <Button
          title="Display Modal"
          style={styles.button}
          onPress={() => navigation.navigate(NavRoutes.Modal)}
        />
        <Spacer />
        <Card fullBleed>
          <View
            style={{
              width: '100%',
              height: 350,
              backgroundColor: '#E3518D',
              padding: Spacing.l,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: '60%', height: '60%'}}
              resizeMode="contain"
              source={{
                uri: 'https://cdn.shoplightspeed.com/shops/615663/files/21325875/800x1024x1/stickers-nw-sticker-cassette-tape.jpg',
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: Spacing.l,
                left: Spacing.l,
              }}>
              <Text style={{color: Palette.white, fontSize: 16}}>
                Next week
              </Text>
              <Text h1 style={{color: Palette.white}}>
                Music for nerds
              </Text>
            </View>
          </View>
        </Card>
        <Spacer />
        <Card fullBleed>
          <Image
            style={{width: '100%', height: 100}}
            source={{
              uri: 'https://images.unsplash.com/photo-1594114702404-7a9142c04afa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&auto=format&fit=crop&w=700&q=60',
            }}
          />
        </Card>
        <Spacer m />
        <Card>
          <Text h1 style={{marginBottom: 4}}>
            Lorem Ipsum
          </Text>
          <Text h2 style={{marginBottom: 12}}>
            Lorem Ipsum
          </Text>
          <Text p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            neque odio, iaculis id tempus id, egestas at ipsum. Nulla
            ullamcorper hendrerit arcu. In quis diam id felis finibus facilisis.
            Maecenas pretium quis lorem et molestie. Curabitur convallis, mi at
            laoreet semper, ante sapien vestibulum arcu, quis laoreet dui quam
            non tellus. Maecenas eget auctor nunc, quis auctor tellus. Donec nec
            orci sit amet quam dapibus fringilla. Maecenas ultricies eget lorem
            suscipit aliquet.
          </Text>
        </Card>
        <Spacer />
        <Card fullBleed>
          <Image
            style={{width: '100%', height: 300}}
            source={{
              uri: 'https://images.unsplash.com/photo-1589138455102-a9775d712f4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
            }}
          />
        </Card>
        <Spacer />
        <Button
          title="Go To Second Tab"
          style={styles.button}
          onPress={() => navigation.navigate(NavRoutes.SecondTab)}
        />
      </View>
      <Spacer />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
  },
  content: {
    width: '100%',
    maxWidth: Constants.maxWidth,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
  },
});
