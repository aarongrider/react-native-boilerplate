import {StackNavigationState} from '@react-navigation/native';
import {StackNavigationOptions} from '@react-navigation/stack';
import {StackNavigationEventMap} from '@react-navigation/stack/lib/typescript/src/types';

declare function StackNavigator(): JSX.Element;

export declare const createStackNavigator: <
  ParamList extends Record<string, object | undefined>,
>() => import('@react-navigation/native').TypedNavigator<
  ParamList,
  StackNavigationState<Record<string, object | undefined>>,
  StackNavigationOptions,
  StackNavigationEventMap,
  typeof StackNavigator
>;
