import React, {useContext} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {TrainingContext} from '../TrainingProvider';
import {
  MainStyles,
  DarkBackground,
  TrainingListStyles as styles,
} from '../Styles';
import {RoundsDataType} from '../components/Main';
import {formatTime} from '../utils';
import {Actions} from '../reducer';
import {routes} from '../utils/constants';

const TrainingsListScreen = ({navigation}: {navigation: any}) => {
  const {state, dispatch} = useContext(TrainingContext);
  const keys = Object.keys(state.savedTrainingSessions);

  const calculateTotalRounds = (trainingSession: RoundsDataType[]): number => {
    return trainingSession.reduce((acc, val) => acc + val.rounds, 0);
  };

  const calculateTotalTime = (trainingSession: RoundsDataType[]): number => {
    return trainingSession.reduce(
      (acc, val) => acc + (val.workTime + val.restTime) * val.rounds,
      0,
    );
  };

  // const onRemoveItem = (item: string) => {
  //   dispatch({type: Actions.REMOVE_TRAINING_SESSION, payload: item});
  // };

  const onSelectItem = (item: string) => {
    dispatch({
      type: Actions.SET_SELECTED_TRAINING_SESSION,
      payload: item,
    });
  };

  return (
    <ScrollView style={DarkBackground.darkBackground}>
      <View style={MainStyles.container}>
        {keys.map((item: any, index: number) => (
          <View key={index} style={styles.itemWrapper}>
            <View style={styles.summary}>
              <TouchableOpacity onPress={() => onSelectItem(item)}>
                <Text style={styles.summaryTitle}>{item}</Text>
                <Text style={styles.summaryInfo}>
                  Exercises: {state.savedTrainingSessions[item].length}
                </Text>
                <Text style={styles.summaryInfo}>
                  Total time:{' '}
                  {formatTime(
                    calculateTotalTime(state.savedTrainingSessions[item]),
                  )}
                </Text>
                <Text style={styles.summaryInfo}>
                  Rounds:{' '}
                  {calculateTotalRounds(state.savedTrainingSessions[item])}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.actionsWrapper}>
              <TouchableOpacity
                onPress={() => {
                  dispatch({
                    type: Actions.SAVE_TRAINING_SESSION,
                    payload: item,
                  });
                  navigation.navigate(routes.TRAINING);
                }}>
                <Text style={[styles.button, styles.start]}>Start Now</Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={state.savedTrainingSessions[item].length <= 0}
                onPress={() => {
                  dispatch({
                    type: Actions.SET_SELECTED_TRAINING_SESSION,
                    payload: item,
                  });
                  navigation.navigate(routes.FORM);
                }}>
                <Text style={[styles.button, styles.edit]}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  dispatch({
                    type: Actions.REMOVE_TRAINING_SESSION,
                    payload: item,
                  });
                }}>
                <Text style={[styles.button, styles.delete]}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default TrainingsListScreen;
