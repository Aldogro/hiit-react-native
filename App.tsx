/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import TrainingProvider from './TrainingProvider';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './Routes';

const App = (): JSX.Element => {
  return (
    <TrainingProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </TrainingProvider>
  );
};

export default App;
