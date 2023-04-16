import React, {useState, useContext, useEffect} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {DarkBackground} from '../Styles';
import {RoundsDataType} from '../components/Main';
import FormItem from '../components/FormItem';
import {FormStyles as styles} from '../Styles';
import {TrainingContext} from '../TrainingProvider';
import {Actions} from '../reducer';
import {routes} from '../utils/constants';

const FormScreen = ({navigation}: any) => {
  const {state, dispatch} = useContext(TrainingContext);
  const [trainingSessionName, setTrainingSessionName] = useState(
    state.selectedTrainingSession,
  );
  const [formItems, setFormItems] = useState<RoundsDataType[]>(
    state.savedTrainingSessions?.[state.selectedTrainingSession] || [],
  );

  useEffect(() => {
    setFormItems(state.savedTrainingSessions[state.selectedTrainingSession]);
    setTrainingSessionName(state.selectedTrainingSession);
  }, [state]);

  const handleAddFormItems = () => {
    const item: RoundsDataType = {
      label: 'Exercise',
      workTime: 0,
      restTime: 0,
      rounds: 0,
    };
    setFormItems([...(formItems || []), item]);
  };

  const handleAddSessionsInStore = () => {
    dispatch({
      type: Actions.ADD_TRAINING_SESSION,
      payload: {
        name: trainingSessionName,
        session: formItems,
      },
    });
    navigation.navigate(routes.TRAININGS_LIST);
  };

  const handleRemoveFormItem = (index: number) => {
    const temp = formItems;
    temp.splice(index, 1);
    setFormItems([...temp]);
  };

  const handleFormItemChange = (index: number, data: RoundsDataType) => {
    const temp = formItems;
    temp[index] = data;
    setFormItems(temp);
  };

  return (
    <ScrollView style={DarkBackground.darkBackground}>
      <View style={styles.container}>
        <TextInput
          style={styles.sessionTrainingTitle}
          placeholder="Training Session Name"
          value={trainingSessionName}
          onChangeText={setTrainingSessionName}
        />
        {formItems &&
          formItems.map((formItem: RoundsDataType, index: number) => (
            <FormItem
              data={formItem}
              index={index}
              removeItem={handleRemoveFormItem}
              modifyItem={handleFormItemChange}
              key={formItem.label + index}
            />
          ))}
        <View style={styles.actionsWrapper}>
          <TouchableOpacity onPress={handleAddFormItems}>
            <Text style={[styles.button, styles.addExercise]}>
              Add Exercise
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionsWrapper}>
          <TouchableOpacity
            onPress={handleAddSessionsInStore}
            disabled={
              formItems && formItems.length > 0 && formItems.length <= 0
            }>
            <Text
              style={[
                styles.button,
                formItems && formItems.length > 0
                  ? styles.start
                  : styles.disabled,
              ]}>
              Save Training
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default FormScreen;
