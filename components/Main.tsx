import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ShowValues from './ShowValues';
import Input from './Input';
import {formatTime, toSeconds, validateInput} from '../utils';

// const playSound = async () => {
//   const {sound} = await Audio.Sound.createAsync(
//     require('../../assets/sounds/deskbell.wav'),
//   );
//   await sound.playAsync();
// };

const HIITTimer = () => {
  // CALCULATION VALUES
  const [seconds, setSeconds] = useState(0);
  const [workTime, setWorkTime] = useState(0);
  const [restTime, setRestTime] = useState(0);
  const [rounds, setRounds] = useState(1);
  const [time, setTime] = useState(0);

  // INPUT VALUES
  const [workMinutes, setWorkMinutes] = useState<number>(0);
  const [workSeconds, setWorkSeconds] = useState<number>(5);
  const [restMinutes, setRestMinutes] = useState<number>(0);
  const [restSeconds, setRestSeconds] = useState<number>(3);
  const [inputRounds, setInputRounds] = useState(5);

  const [isActive, setIsActive] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  const [isWorkTime, setIsWorkTime] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(secs => secs - 1);
        setWorkTime(wrkTime => wrkTime - 1);
        setRestTime(rstTime => rstTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    if (isActive && seconds < 0 && rounds === inputRounds) {
      // playSound();
      setIsActive(false);
      setIsWorkTime(false);
      reset();
    }
    if (workTime === 0) {
      setIsWorkTime(false);
    }
    if (restTime === 0) {
      setIsWorkTime(true);
    }

    if (isActive && isWorkTime) {
      if (workTime === 0) {
        setRestTime(toSeconds(restMinutes, restSeconds));
        // playSound();
      }
      if (workTime < 0) {
        setWorkTime(toSeconds(workMinutes, workSeconds));
      }
    }

    if (isActive && !isWorkTime) {
      if (restTime === 0) {
        setWorkTime(toSeconds(workMinutes, workSeconds));
        // playSound();
        if (rounds < inputRounds) {
          console.log(rounds);
          setRounds(rounds + 1);
        }
      }
      if (restTime < 0) {
        setRestTime(toSeconds(restMinutes, restSeconds));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, seconds, workTime, restTime, rounds]);

  useEffect(() => {
    const workTemp = toSeconds(workMinutes, workSeconds);
    const restTemp = toSeconds(restMinutes, restSeconds);
    const temp = (workTemp + restTemp) * inputRounds;
    setWorkTime(workTemp);
    setRestTime(restTemp);
    setSeconds(temp);
    setTime(temp);
  }, [workMinutes, workSeconds, restMinutes, restSeconds, inputRounds]);

  const toggle = () => {
    setShowTimer(true);
    setIsActive(!isActive);
  };

  const reset = () => {
    setIsActive(false);
    setIsWorkTime(true);
    setSeconds(time);
    setWorkTime(toSeconds(workMinutes, workSeconds));
    setRestTime(toSeconds(restMinutes, restSeconds));
    setRounds(1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        {isActive || showTimer ? (
          <ShowValues
            formatTime={formatTime}
            totalTime={seconds}
            workTime={workTime}
            restTime={restTime}
            rounds={rounds}
            inputRounds={inputRounds}
            isWorkTime={isWorkTime}
          />
        ) : (
          <>
            <Text style={styles.title}>Create Your Rounds</Text>
            <View style={[styles.timeSection, styles.timeSectionWorkDetail]}>
              <Text>Workout Time</Text>
              <View style={styles.timeSelectContainer}>
                <Input
                  value={validateInput(workMinutes, setWorkMinutes)}
                  setValue={e => setWorkMinutes(Number(e))}
                  placeholder="Min"
                  increaseValue={() => setWorkMinutes(Number(workMinutes) + 1)}
                  decreaseValue={() => setWorkMinutes(Number(workMinutes) - 1)}
                />
                <Input
                  value={validateInput(workSeconds, setWorkSeconds)}
                  setValue={e => setWorkSeconds(Number(e))}
                  placeholder="Sec"
                  increaseValue={() => setWorkSeconds(Number(workSeconds) + 1)}
                  decreaseValue={() => setWorkSeconds(Number(workSeconds) - 1)}
                />
              </View>
            </View>
            <View style={[styles.timeSection, styles.timeSectionRestDetail]}>
              <Text>Rest Time</Text>
              <View style={styles.timeSelectContainer}>
                <Input
                  value={validateInput(restMinutes, setRestMinutes)}
                  setValue={e => setRestMinutes(Number(e))}
                  placeholder="Min"
                  increaseValue={() => setRestMinutes(Number(restMinutes) + 1)}
                  decreaseValue={() => setRestMinutes(Number(restMinutes) - 1)}
                />
                <Input
                  value={validateInput(restSeconds, setRestSeconds)}
                  setValue={e => setRestSeconds(Number(e))}
                  placeholder="Sec"
                  increaseValue={() => setRestSeconds(Number(restSeconds) + 1)}
                  decreaseValue={() => setRestSeconds(Number(restSeconds) - 1)}
                />
              </View>
            </View>
            <View style={[styles.timeSection, styles.timeSectionRoundsDetail]}>
              <View style={styles.timeSelectContainer}>
                <Input
                  value={validateInput(inputRounds, setInputRounds)}
                  setValue={e => setInputRounds(Number(e))}
                  placeholder="Rounds"
                  increaseValue={() => setInputRounds(Number(inputRounds) + 1)}
                  decreaseValue={() => setInputRounds(Number(inputRounds) - 1)}
                />
              </View>
            </View>
          </>
        )}
      </View>
      <View style={styles.actionsContainer}>
        {isActive ? (
          <TouchableOpacity style={styles.button} onPress={toggle}>
            <Text style={styles.buttonText}>Pause</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={toggle}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={
            !isActive ? styles.button : {...styles.button, ...styles.disabled}
          }
          onPress={reset}
          disabled={isActive}>
          <Text
            style={
              !isActive
                ? styles.buttonText
                : {...styles.buttonText, ...styles.disabled}
            }>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
      {showTimer && (
        <View style={styles.backButtonWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowTimer(false)}>
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 12,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 13,
  },
  actionsContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
  },
  inputsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  timeSection: {
    alignItems: 'center',
    borderRadius: 12,
    padding: 8,
  },
  timeSectionRestDetail: {
    backgroundColor: 'teal',
  },
  timeSectionWorkDetail: {
    backgroundColor: 'tomato',
  },
  timeSectionRoundsDetail: {
    backgroundColor: 'goldenrod',
  },
  timeSelectContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    maxHeight: 90,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundsSelectorContainer: {
    width: '100%',
    backgroundColor: 'goldenrod',
    flex: 1,
    flexDirection: 'row',
    maxHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonWrapper: {
    marginTop: 10,
    maxHeight: 60,
  },
  button: {
    flex: 1,
    padding: 15,
    borderWidth: 1,
    borderColor: 'goldenrod',
    borderRadius: 9,
  },
  buttonText: {
    color: 'goldenrod',
    textAlign: 'center',
  },
  disabled: {
    color: 'gray',
    borderColor: 'gray',
  },
});

export default HIITTimer;
