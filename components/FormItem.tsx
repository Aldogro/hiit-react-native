import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {validateInput} from '../utils';
import LabeledInput from './LabeledInput';
import {RoundsDataType} from './Main';

const FormItem = ({
  data,
  index,
  removeItem,
  modifyItem,
}: {
  data: RoundsDataType;
  index: number;
  removeItem: (index: number) => void;
  modifyItem: (index: number, data: RoundsDataType) => void;
}) => {
  const [label, setLabel] = useState(data.label);
  const [workTime, setWorkTime] = useState<number>(data.workTime);
  const [restTime, setRestTime] = useState<number>(data.restTime);
  const [rounds, setRounds] = useState<number>(data.rounds);

  const [workMin, setWorkMin] = useState(Math.floor(workTime / 60));
  const [workSec, setWorkSec] = useState(workTime % 60);
  const [restMin, setRestMin] = useState(Math.floor(restTime / 60));
  const [restSec, setRestSec] = useState(restTime % 60);

  useEffect(() => {
    setWorkTime(Number(workMin) * 60 + Number(workSec));
    setRestTime(Number(restMin) * 60 + Number(restSec));
    const _data: RoundsDataType = {label, workTime, restTime, rounds};
    modifyItem(index, _data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [label, workMin, workSec, restMin, restSec, rounds, index]);

  return (
    <View style={styles.container}>
      <View>
        <LabeledInput
          label="Block Name"
          value={label}
          onChange={setLabel}
          keyboardType="default"
        />
        <View style={styles.halfScreen}>
          <LabeledInput
            label="Work Min"
            value={validateInput(workMin, setWorkMin).toString()}
            onChange={setWorkMin}
          />
          <LabeledInput
            label="Work Sec"
            value={validateInput(workSec, setWorkSec).toString()}
            onChange={setWorkSec}
          />
        </View>
        <View style={styles.halfScreen}>
          <LabeledInput
            label="Rest Min"
            value={validateInput(restMin, setRestMin).toString()}
            onChange={setRestMin}
          />
          <LabeledInput
            label="Rest Sec"
            value={validateInput(restSec, setRestSec).toString()}
            onChange={setRestSec}
          />
        </View>
        <LabeledInput
          label="Rounds"
          value={validateInput(rounds, setRounds).toString()}
          onChange={(e: string) => setRounds(Number(e))}
        />
      </View>
      <TouchableOpacity onPress={() => removeItem(index)}>
        <Text style={styles.deleteFormItem}>Delete Exercise</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 12,
    padding: 12,
    margin: 8,
  },
  halfScreen: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  deleteFormItem: {
    alignSelf: 'flex-end',
    marginTop: 30,
    color: 'tomato',
    borderColor: 'tomato',
    backgroundColor: '#ff634744',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
  },
});

export default FormItem;
