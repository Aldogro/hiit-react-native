import React, {useContext, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {validateInput} from '../utils';
import LabeledInput from './LabeledInput';
import {RoundsDataType} from './Main';
import {FormItemStyles as styles} from '../Styles';
import {TrainingContext} from '../TrainingProvider';

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
  const {t} = useContext(TrainingContext);
  const [label, setLabel] = useState(data.label);
  const [workTime] = useState<number>(data.workTime);
  const [restTime] = useState<number>(data.restTime);
  const [rounds, setRounds] = useState<number>(data.rounds);

  const [workMin, setWorkMin] = useState(Math.floor(workTime / 60));
  const [workSec, setWorkSec] = useState(workTime % 60);
  const [restMin, setRestMin] = useState(Math.floor(restTime / 60));
  const [restSec, setRestSec] = useState(restTime % 60);

  useEffect(() => {
    const wTime = Number(workMin) * 60 + Number(workSec);
    const rTime = Number(restMin) * 60 + Number(restSec);
    const _data: RoundsDataType = {
      label,
      workTime: wTime,
      restTime: rTime,
      rounds,
    };
    modifyItem(index, _data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [label, workMin, workSec, restMin, restSec, rounds, index]);

  return (
    <View style={styles.container}>
      <View>
        <LabeledInput
          label={t('createTrainingSession.blockName')}
          value={label}
          onChange={setLabel}
          keyboardType="default"
        />
        <View style={styles.halfScreen}>
          <LabeledInput
            label={t('createTrainingSession.workMin')}
            value={validateInput(workMin, setWorkMin).toString()}
            onChange={setWorkMin}
          />
          <LabeledInput
            label={t('createTrainingSession.workSec')}
            value={validateInput(workSec, setWorkSec).toString()}
            onChange={setWorkSec}
          />
        </View>
        <View style={styles.halfScreen}>
          <LabeledInput
            label={t('createTrainingSession.restMin')}
            value={validateInput(restMin, setRestMin).toString()}
            onChange={setRestMin}
          />
          <LabeledInput
            label={t('createTrainingSession.restSec')}
            value={validateInput(restSec, setRestSec).toString()}
            onChange={setRestSec}
          />
        </View>
        <LabeledInput
          label={t('createTrainingSession.rounds')}
          value={validateInput(rounds, setRounds).toString()}
          onChange={(e: string) => setRounds(Number(e))}
        />
      </View>
      <TouchableOpacity onPress={() => removeItem(index)}>
        <Text style={styles.deleteFormItem}>
          {t('createTrainingSession.delete')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormItem;
