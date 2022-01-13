import React from 'react';
import {Platform} from 'react-native';

import {createStackNavigator} from './NavigationUtils';
import ModalScreen from '../screens/ModalScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import InfoScreen from '../screens/InfoScreen';
import {useTheme} from '@react-navigation/native';
import {Theme} from '../components/Themes';
import AnimatedScreen from '../screens/AnimatedScreen';
import PressableIcon from '../components/PressableIcon';
import {createTabNavigator} from './TabNavigator';

const RootStack = createStackNavigator();
const Tabs = createTabNavigator();

const FirstTabStack = createStackNavigator();
const SecondTabStack = createStackNavigator();
const ThirdTabStack = createStackNavigator();

const NavigationTabs = () => {
  return (
    <Tabs.Navigator>
      <FirstTabStack.Screen name="Home" component={FirstTab} />
      <SecondTabStack.Screen name="List" component={SecondTab} />
      <SecondTabStack.Screen name="Calendar" component={ThirdTab} />
      <SecondTabStack.Screen name="More" component={SecondTab} />
    </Tabs.Navigator>
  );
};

const modalStackPresentationOptions = Platform.select({
  ios: {
    presentation: 'formSheet',
    headerHideShadow: true,
    headerShown: false,
  },
  android: {
    stackPresentation: 'modal',
    headerHideShadow: true,
    headerShown: false,
  },
  web: {headerShown: false},
});

const FirstTab = () => {
  const {colors} = useTheme() as Theme;
  return (
    <FirstTabStack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: '800',
        },
        headerLargeTitle: true,
        headerBackTitleVisible: false,
        headerLargeTitleHideShadow: true,
        headerLargeTitleStyle: {
          color: colors.text,
          fontWeight: '800',
        },
        headerShown: Platform.select({
          native: true,
          web: false,
        }),
      }}>
      <SecondTabStack.Screen name="Discover" component={HomeScreen} />
    </FirstTabStack.Navigator>
  );
};

const SecondTab = () => {
  const {colors} = useTheme() as Theme;
  return (
    <SecondTabStack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: '800',
        },
        headerLargeTitle: true,
        headerBackTitleVisible: false,
        headerLargeTitleHideShadow: true,
        headerLargeTitleStyle: {
          color: colors.text,
          fontWeight: '800',
        },
        headerShown: Platform.select({
          native: true,
          web: false,
        }),
      }}>
      <SecondTabStack.Screen name="Discover" component={HomeScreen} />
      <SecondTabStack.Screen
        name="Info"
        component={InfoScreen}
        options={({navigation}) => ({
          headerLeft: () => (
            <PressableIcon
              onPress={() => navigation.goBack()}
              size={20}
              style={{marginStart: Platform.OS === 'web' ? 12 : 0}}
              name={Platform.select({
                ios: 'back-ios',
                default: 'bar-back-android',
              })}
            />
          ),
        })}
      />

      <SecondTabStack.Screen
        name="Animated"
        component={AnimatedScreen}
        options={({navigation}) => ({
          headerLeft: () => (
            <PressableIcon
              onPress={() => navigation.goBack()}
              size={20}
              style={{marginStart: Platform.OS === 'web' ? 12 : 0}}
              name={Platform.select({
                ios: 'back-ios',
                default: 'bar-back-android',
              })}
            />
          ),
        })}
      />
    </SecondTabStack.Navigator>
  );
};

const ThirdTab = () => {
  const {colors} = useTheme() as Theme;
  return (
    <ThirdTabStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: '700',
        },
        headerBackTitleVisible: false,
        headerShown: Platform.select({
          native: true,
          web: true,
        }),
      }}>
      <SecondTabStack.Screen name="Details" component={DetailScreen} />
    </ThirdTabStack.Navigator>
  );
};

export const RootStackScreen = () => {
  return (
    <RootStack.Navigator screenOptions={modalStackPresentationOptions}>
      <RootStack.Screen
        name="Main"
        component={NavigationTabs}
        options={{headerShown: false}}
      />
      <RootStack.Screen name="Modal" component={ModalScreen} />
    </RootStack.Navigator>
  );
};
