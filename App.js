import 'react-native-gesture-handler';
import React from 'react';
import {ScreenNavigator} from './src/navigation/ScreenNavigator';
import {LogBox} from 'react-native';

const App = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);
  return <ScreenNavigator />;
};
export default App;
