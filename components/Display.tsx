import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {formatTime} from '../utils';
import {DisplayStyles as styles} from '../Styles';
import {TrainingContext} from '../TrainingProvider';

type DisplayPropsType = {
  name: string;
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
  name,
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
  const {t} = useContext(TrainingContext);
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.totalTime}>
        {t('training.totalTime')}: {formatTime(totalTime)}
      </Text>
      <View
        style={[
          styles.roundWrapper,
          isWorkTime ? styles.isWorkTime : styles.isRestTime,
        ]}>
        <Text style={styles.timeLeftLabel}>
          {!exerciseComplete &&
            (isWorkTime ? t('training.work!!') : t('training.rest'))}
        </Text>
        <Text style={styles.timeLeft}>{formatTime(timeLeft)}</Text>
        <Text style={styles.roundsLeft}>
          {t('training.rounds')}: {roundsLeft} {t('training.of')} {rounds}
        </Text>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          onPress={() => setIsActive(!isActive)}
          disabled={totalTime < 1}>
          <Text
            style={[
              styles.actionButton,
              totalTime > 0 ? styles.toggle : styles.disabled,
            ]}>
            {isActive ? t('training.pause') : t('training.start')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reset}>
          <Text style={[styles.actionButton, styles.reset]}>
            {t('training.reset')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Display;
