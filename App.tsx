/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import TrainingProvider from './TrainingProvider';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DisplayScreen from './screens/Display';
import FormScreen from './screens/Form';
import {routes} from './utils/constants';
import SettingsScreen from './screens/Settings';
import TrainingsListScreen from './screens/TrainingList';

const Tab = createBottomTabNavigator();

const App = (): JSX.Element => {
  return (
    <TrainingProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: {
              fontSize: 16,
            },
            tabBarStyle: {
              backgroundColor: 'black',
              height: 90,
            },
          }}>
          <Tab.Screen
            name={routes.TRAININGS_LIST}
            component={TrainingsListScreen}
            options={{
              tabBarLabel: '',
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: ({color}) => (
                <Icon name="clipboard-list" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name={routes.FORM}
            component={FormScreen}
            options={{
              tabBarLabel: '',
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: ({color}) => (
                <Icon name="edit" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name={routes.TRAINING}
            component={DisplayScreen}
            options={{
              tabBarLabel: '',
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: ({color}) => (
                <Icon name="running" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name={routes.SETTINGS}
            component={SettingsScreen}
            options={{
              tabBarLabel: '',
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: ({color}) => (
                <Icon name="cog" size={24} color={color} />
              ),
            }}
          />
          {/* <Tab.Screen
            name={routes.TRAINING}
            component={DisplayScreen}
            options={{tabBarButton: () => null}}
          /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </TrainingProvider>
  );
};

export default App;
