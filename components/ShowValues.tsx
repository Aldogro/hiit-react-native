import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  timerContainer: {
    maxHeight: 400,
  },
  timer: {
    fontSize: 30,
  },
  roundTimerWrapper: {
    minWidth: '90%',
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',
    padding: 20,
    marginTop: 15,
    marginBottom: 15,
  },
  workTime: {
    backgroundColor: 'tomato',
  },
  restTime: {
    backgroundColor: 'teal',
  },
  roundTimer: {
    fontSize: 100,
  },
  roundsContainer: {
    maxHeight: 80,
    marginBottom: 10,
  },
  rounds: {
    fontSize: 50,
  },
});

export default ShowValues;
