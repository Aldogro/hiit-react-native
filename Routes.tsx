import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TrainingsListScreen from './screens/TrainingList';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FormScreen from './screens/Form';
import DisplayScreen from './screens/Display';
import SettingsScreen from './screens/Settings';
import {TrainingContext} from './TrainingProvider';

const Tab = createBottomTabNavigator();

const Routes = () => {
  const {t} = useContext(TrainingContext);

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTitleStyle: {
          fontFamily: 'VarelaRound',
          color: 'white',
        },
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
        name={t('titles.trainingList')}
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
        name={t('titles.createTrainingSession')}
        component={FormScreen}
        options={{
          tabBarLabel: '',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => <Icon name="edit" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name={t('titles.training')}
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
        name={t('titles.settings')}
        component={SettingsScreen}
        options={{
          tabBarLabel: '',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => <Icon name="cog" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
