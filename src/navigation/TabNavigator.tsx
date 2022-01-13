import * as React from 'react';
import {Platform, StyleProp, View, ViewStyle} from 'react-native';
import {
  useNavigationBuilder,
  TabRouter,
  DefaultNavigatorOptions,
  TabRouterOptions,
  TabNavigationState,
  ParamListBase,
  TabActionHelpers,
  createNavigatorFactory,
} from '@react-navigation/native';
import {TabBar} from './TabBar';

// Props accepted by the view
type TabNavigationConfig = {
  tabBarStyle: StyleProp<ViewStyle>;
  contentStyle: StyleProp<ViewStyle>;
};

// Supported screen options
type TabNavigationOptions = {
  title?: string;
};

// Map of event name and the type of data (in event.data)
//
// canPreventDefault: true adds the defaultPrevented property to the
// emitted events.
type TabNavigationEventMap = {
  tabPress: {
    data: {isAlreadyFocused: boolean};
    canPreventDefault: true;
  };
};

// The props accepted by the component is a combination of 3 things
type Props = DefaultNavigatorOptions<TabNavigationOptions> &
  TabRouterOptions &
  TabNavigationConfig;

function TabNavigator({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle,
  contentStyle,
}: Props) {
  const {state, navigation, descriptors} = useNavigationBuilder<
    TabNavigationState<ParamListBase>,
    TabRouterOptions,
    TabActionHelpers<ParamListBase>,
    TabNavigationOptions,
    TabNavigationEventMap
  >(TabRouter, {
    children,
    screenOptions,
    initialRouteName,
  });

  const top = Platform.OS === 'web';

  return (
    <React.Fragment>
      {top && (
        <TabBar
          state={state}
          descriptors={descriptors}
          navigation={navigation}
        />
      )}
      <View style={[{flex: 1}, contentStyle]}>
        {descriptors[state.routes[state.index].key].render()}
      </View>
      {!top && (
        <TabBar
          state={state}
          descriptors={descriptors}
          navigation={navigation}
        />
      )}
    </React.Fragment>
  );
}

export const createTabNavigator = createNavigatorFactory<
  TabNavigationState<ParamListBase>,
  TabNavigationOptions,
  TabNavigationEventMap,
  typeof TabNavigator
>(TabNavigator);
