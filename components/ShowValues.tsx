import React from 'react';
import {View, Text} from 'react-native';
import {ShowValuesStyles as styles} from '../Styles';

type ShowValuesProps = {
  formatTime: (time: number) => string;
  rounds: number;
  inputRounds: number;
  totalTime: number;
  workTime: number;
  restTime: number;
  isWorkTime: boolean;
};
const ShowValues = ({
  formatTime,
  rounds,
  inputRounds,
  totalTime,
  workTime,
  restTime,
  isWorkTime,
}: ShowValuesProps) => {
  return (
    <>
      <View style={[styles.container, styles.timerContainer]}>
        <Text>Total Time</Text>
        <Text style={styles.timer}>{formatTime(totalTime)}</Text>
        {isWorkTime ? (
          <View style={[styles.roundTimerWrapper, styles.workTime]}>
            <Text style={styles.title}>Work Time</Text>
            <Text style={styles.roundTimer}>{formatTime(workTime)}</Text>
          </View>
        ) : (
          <View style={[styles.roundTimerWrapper, styles.restTime]}>
            <Text style={styles.title}>Rest Time</Text>
            <Text style={styles.roundTimer}>{formatTime(restTime)}</Text>
          </View>
        )}
        <Text>Rounds</Text>
        <Text style={styles.rounds}>
          {rounds}/{inputRounds}
        </Text>
      </View>
    </>
  );
};

export default ShowValues;
