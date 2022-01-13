import React from 'react';
import {StyleSheet, View, SafeAreaView, Platform} from 'react-native';
import {Pressable} from 'react-native-web-hover';
import {
  BottomTabBarOptions,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import Icon from '../components/Icon';
import {useTheme} from '@react-navigation/native';
import {Theme} from '../components/Themes';
import Text from '../components/Text';
import {Constants} from '../Constants';
import Palette from '../components/Palette';

export const TabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps<BottomTabBarOptions>) => {
  const {colors} = useTheme() as Theme;
  const renderTabButton = (name: string, key: string, index: number) => {
    const {options} = descriptors[key];
    const label =
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
        ? options.title
        : name;

    const isFocused = state.index === index;

    const onPress = () => {
      if (!isFocused) {
        navigation.navigate(name);
      }
    };

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: key,
      });
    };

    let iconName = 'bolt';
    switch (label) {
      case 'Home':
        iconName = 'play';
        break;
      case 'Details':
        iconName = 'settings';
        break;
      case 'Calendar':
        iconName = 'camera';
        break;
      case 'More':
        iconName = 'listen';
        break;
      default:
        break;
    }

    return (
      <View key={index} style={{flex: 1, marginHorizontal: 16}}>
        <Pressable
          accessibilityLabel={label}
          onPress={onPress}
          onLongPress={onLongPress}
          style={({hovered, pressed}) => [
            styles.pressibleContainer,
            hovered && {
              backgroundColor:
                Platform.OS === 'web' ? colors.hovered : undefined,
            },
            pressed && {
              backgroundColor:
                Platform.OS === 'web' ? colors.pressed : undefined,
            },
          ]}>
          {Platform.OS !== 'web' && (
            <Icon
              name={iconName}
              color={isFocused ? colors.text : colors.inactive}
            />
          )}
          {Platform.OS === 'web' && (
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: isFocused ? colors.text : colors.inactive,
              }}>
              {label}
            </Text>
          )}
        </Pressable>
        {Platform.OS === 'web' && (
          <View
            style={{
              width: '100%',
              height: 3,
              backgroundColor: isFocused ? colors.text : 'transparent',
              shadowColor: Palette.white,
              shadowOpacity: isFocused ? 1 : 0,
              shadowRadius: 3,
              shadowOffset: {width: 0, height: 0},
            }}
          />
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.tabBar}]}>
      <View style={styles.buttonContainer}>
        {state.routes.map((route, index) =>
          renderTabButton(route.name, route.key, index),
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    maxWidth: Constants.maxWidth,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  pressibleContainer: {
    height: 54,
    borderRadius: 10,
    marginVertical: 6,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
