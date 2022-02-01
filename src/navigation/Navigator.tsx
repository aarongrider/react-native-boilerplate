import React from 'react';
import {Platform} from 'react-native';

import {createStackNavigator} from './NavigationUtils';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ModalScreen from '../screens/ModalScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import InfoScreen from '../screens/InfoScreen';
import {useRoute, useTheme} from '@react-navigation/native';
import {Theme} from '../components/Themes';
import AnimatedScreen from '../screens/AnimatedScreen';
import PressableIcon from '../components/PressableIcon';
import {createTabNavigator} from './TabNavigator';
import {NavRoutes} from './NavRoutes';

const getHeaderProps = (theme: Theme, route: string) => {
  return {
    headerTitleStyle: {
      fontSize: 16,
      fontWeight: '800',
    },
    headerLargeTitle: route === NavRoutes.FirstTab,
    headerBackTitleVisible: false,
    headerLargeTitleHideShadow: true,
    headerLargeTitleStyle: {
      color: theme.colors.text,
      fontWeight: '800',
    },
    headerShown: Platform.select({
      native: true,
      web: false,
    }),
  };
};

const RootStack = createStackNavigator();
const Tabs = createTabNavigator();
const TopTabs = createMaterialTopTabNavigator();

const FirstTabStack = createStackNavigator();
const SecondTabStack = createStackNavigator();
const ThirdTabStack = createStackNavigator();
const FourthTabStack = createStackNavigator();

const NavigationTabs = () => {
  return (
    <Tabs.Navigator>
      <FirstTabStack.Screen name={NavRoutes.FirstTab} component={FirstTab} />
      <SecondTabStack.Screen name={NavRoutes.SecondTab} component={SecondTab} />
      <ThirdTabStack.Screen name={NavRoutes.ThirdTab} component={ThirdTab} />
      <FourthTabStack.Screen name={NavRoutes.FourthTab} component={FourthTab} />
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
  const theme = useTheme() as Theme;
  const route = useRoute();
  return (
    <FirstTabStack.Navigator screenOptions={getHeaderProps(theme, route.name)}>
      <FirstTabStack.Screen name={NavRoutes.Discover} component={HomeScreen} />
    </FirstTabStack.Navigator>
  );
};

const SecondTab = () => {
  const theme = useTheme() as Theme;
  const route = useRoute();
  return (
    <SecondTabStack.Navigator screenOptions={getHeaderProps(theme, route.name)}>
      <SecondTabStack.Screen
        name={NavRoutes.Animated}
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
  const theme = useTheme() as Theme;
  const route = useRoute();
  return (
    <ThirdTabStack.Navigator screenOptions={getHeaderProps(theme, route.name)}>
      <ThirdTabStack.Screen name={NavRoutes.Details} component={DetailScreen} />
    </ThirdTabStack.Navigator>
  );
};

const FourthTab = () => {
  const theme = useTheme() as Theme;
  const route = useRoute();
  return (
    <FourthTabStack.Navigator screenOptions={getHeaderProps(theme, route.name)}>
      <FourthTabStack.Screen name="Fourth" component={FourthTabTopTabs} />
    </FourthTabStack.Navigator>
  );
};

const FourthTabTopTabs = () => {
  const theme = useTheme() as Theme;
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: theme.colors.text},
      }}>
      <TopTabs.Screen name="Info" component={InfoScreen} />
      <TopTabs.Screen name="Details" component={DetailScreen} />
    </TopTabs.Navigator>
  );
};

export const RootStackScreen = () => {
  return (
    <RootStack.Navigator screenOptions={modalStackPresentationOptions}>
      <RootStack.Screen
        name={NavRoutes.Main}
        component={NavigationTabs}
        options={{headerShown: false}}
      />
      <RootStack.Screen name={NavRoutes.Modal} component={ModalScreen} />
    </RootStack.Navigator>
  );
};
