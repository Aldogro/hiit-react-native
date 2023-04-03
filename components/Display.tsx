import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {formatTime} from '../utils';
import {DisplayStyles as styles} from '../Styles';

type DisplayPropsType = {
  label: string;
  totalTime: number;
  isWorkTime: boolean;
  rounds: number;
  roundsLeft: number;
  timeLeft: number;
  exerciseComplete: boolean;
  isActive: boolean;
  setIsActive: any;
  reset: any;
};

const Display = ({
  label,
  totalTime,
  isWorkTime,
  roundsLeft,
  timeLeft,
  exerciseComplete,
  rounds,
  isActive,
  setIsActive,
  reset,
}: DisplayPropsType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.totalTime}>Total time: {formatTime(totalTime)}</Text>
      <View
        style={[
          styles.roundWrapper,
          isWorkTime ? styles.isWorkTime : styles.isRestTime,
        ]}>
        <Text style={styles.timeLeftLabel}>
          {!exerciseComplete && (isWorkTime ? 'Work!' : 'Rest!')}
        </Text>
        <Text style={styles.timeLeft}>{formatTime(timeLeft)}</Text>
        <Text style={styles.roundsLeft}>
          Rounds: {roundsLeft} of {rounds}
        </Text>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={() => setIsActive(!isActive)}>
          <Text style={[styles.actionButton, styles.toggle]}>
            {isActive ? 'Pause' : 'Start'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reset}>
          <Text style={[styles.actionButton, styles.reset]}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Display;
