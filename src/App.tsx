import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {RootStackScreen} from './navigation/Navigator';
import {useColorScheme} from 'react-native';
import {DarkTheme, LightTheme} from './components/Themes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useFlipper} from '@react-navigation/devtools';

const App = () => {
  const scheme = useColorScheme();

  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);

  return (
    <SafeAreaProvider>
      <NavigationContainer
        ref={navigationRef}
        theme={scheme === 'dark' ? DarkTheme : LightTheme}>
        <RootStackScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
