/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import TrainingProvider from './TrainingProvider';
import {NavigationContainer} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
import Routes from './Routes';

const App = (): JSX.Element => {
  Orientation.lockToPortrait();
  return (
    <TrainingProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </TrainingProvider>
  );
};

export default App;
