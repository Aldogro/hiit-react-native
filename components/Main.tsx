import React, {useState, useEffect, useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TrainingContext} from '../TrainingProvider';
import {MainStyles as styles} from '../Styles';
import Display from './Display';
import {playSound} from '../utils';

export type RoundsDataType = {
  label: string;
  workTime: number;
  restTime: number;
  rounds: number;
};

const MainComponent = () => {
  const {state} = useContext(TrainingContext);
  const data: RoundsDataType[] = state.selectedTrainingSession || [];
  const [timer, setTimer] = useState<any>(null);
  const [isActive, setIsActive] = useState(false);
  const [current, setCurrent] = useState(0);
  const [timeLeft, setTimeLeft] = useState(
    data.length ? data[current].workTime : 0,
  );
  const [roundsLeft, setRoundsLeft] = useState(
    data.length ? data[current].rounds : 0,
  );
  const [isWorkTime, setIsWorkTime] = useState(true);
  const [exerciseComplete, setExerciseComplete] = useState(false);

  const getTotalTime = () => {
    let num = 0;
    data.forEach(
      item => (num += (item.restTime + item.workTime) * item.rounds),
    );
    return num;
  };
  const [totalTime, setTotalTime] = useState(getTotalTime());

  useEffect(() => {
    if (timeLeft === 0) {
      if (roundsLeft >= 1 && isWorkTime) {
        setTimeLeft(data[current].restTime);
        setIsWorkTime(false);
        playSound(`${state.selectedSoundSet}_round`);
      }
      if (!isWorkTime) {
        if (roundsLeft > 1) {
          playSound(`${state.selectedSoundSet}_round`);
          setTimeLeft(data[current].workTime);
          setIsWorkTime(true);
          setRoundsLeft(roundsLeft - 1);
        }
        if (roundsLeft === 1) {
          if (current === data.length - 1) {
            // All rounds of all exercises completed
            setExerciseComplete(true);
            clearInterval(timer);
            setTimer(null);
            playSound(`${state.selectedSoundSet}_end`);
            return;
          }
          // All rounds of current exercise completed, move to next exercise
          setCurrent(current + 1);
          setIsWorkTime(true);
          setTimeLeft(data[current + 1].workTime);
          setRoundsLeft(data[current + 1].rounds);
          playSound(`${state.selectedSoundSet}_end`);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, roundsLeft, current, data]);

  useEffect(() => {
    if (isActive) {
      if (!timer && timeLeft > 0) {
        // Start timer if not already running
        setTimer(
          setInterval(() => {
            setTimeLeft(_timeLeft => _timeLeft - 1);
            setTotalTime(_totalTime => _totalTime - 1);
          }, 1000),
        );
      }
    } else {
      clearInterval(timer);
      setTimer(null);
    }
  }, [isActive, timeLeft, timer]);

  const reset = () => {
    setCurrent(0);
    setExerciseComplete(false);
    setIsWorkTime(true);
    setTotalTime(getTotalTime());
    setRoundsLeft(data[current].rounds);
    setTimeLeft(data[current].workTime);
    setIsActive(false);
  };

  return (
    <View style={[styles.container]}>
      {exerciseComplete ? (
        <View style={styles.containerComplete}>
          <Text style={styles.textComplete}>Exercise Complete!!</Text>
          <TouchableOpacity onPress={reset}>
            <Text style={[styles.actionButton, styles.reset]}>Reset</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          {data.length === 0 ||
            (totalTime === 0 && <Text>Add some rounds first</Text>)}
          {data.length > 0 && totalTime > 0 && (
            <Display
              label={data[current].label}
              totalTime={totalTime}
              isWorkTime={isWorkTime}
              exerciseComplete={exerciseComplete}
              timeLeft={timeLeft}
              rounds={data[current].rounds}
              roundsLeft={roundsLeft}
              isActive={isActive}
              setIsActive={setIsActive}
              reset={reset}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default MainComponent;
