import React, {useState, useContext} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {routes} from '../utils/constants';
import {DarkBackground} from '../Styles';
import {RoundsDataType} from '../components/Main';
import FormItem from '../components/FormItem';
import {FormStyles as styles} from '../Styles';
import {TrainingContext} from '../App';
import {Actions} from '../reducer';

const FormScreen = ({navigation}: {navigation: any}) => {
  const {dispatch} = useContext(TrainingContext);

  const [formItems, setFormItems] = useState<RoundsDataType[]>([]);

  const handleAddFormItems = () => {
    const item: RoundsDataType = {
      label: 'Exercise',
      workTime: 0,
      restTime: 0,
      rounds: 0,
    };
    setFormItems([...formItems, item]);
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
        {formItems.map((formItem: RoundsDataType, index: number) => (
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
          <TouchableOpacity onPress={handleAddFormItems}>
            <Text style={styles.button}>Save Training</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={formItems.length <= 0}
            onPress={() => {
              dispatch({
                type: Actions.SAVE_TRAINING_SESSION,
                payload: formItems,
              });
              navigation.navigate(routes.TRAINING);
            }}>
            <Text
              style={[
                styles.button,
                formItems.length > 0 ? styles.start : styles.disabled,
              ]}>
              Start
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default FormScreen;
