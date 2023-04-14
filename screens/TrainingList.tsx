import React, {useContext} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {TrainingContext} from '../TrainingProvider';
import {MainStyles, DarkBackground} from '../Styles';
import {RoundsDataType} from '../components/Main';
import {formatTime} from '../utils';
import {Actions} from '../reducer';

const TrainingsListScreen = () => {
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
      payload: state.savedTrainingSessions[item],
    });
    console.log(state.savedTrainingSessions[item]);
  };

  return (
    <ScrollView style={DarkBackground.darkBackground}>
      <View style={MainStyles.container}>
        {keys.map((item: any, index: number) => (
          <TouchableOpacity key={index} onPress={() => onSelectItem(item)}>
            <Text style={{padding: 30}}>
              {item} Rounds:{' '}
              {calculateTotalRounds(state.savedTrainingSessions[item])}
              Total time:{' '}
              {formatTime(
                calculateTotalTime(state.savedTrainingSessions[item]),
              )}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default TrainingsListScreen;
