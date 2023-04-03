/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {createContext, useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DisplayScreen from './screens/Display';
import FormScreen from './screens/Form';
import {routes} from './utils/constants';
import {initialState, reducer} from './reducer';

const Stack = createNativeStackNavigator();

export const TrainingContext = createContext<any>({});

function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TrainingContext.Provider value={{state, dispatch}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={routes.FORM} component={FormScreen} />
          <Stack.Screen name={routes.TRAINING} component={DisplayScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TrainingContext.Provider>
  );
}

export default App;
