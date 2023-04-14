import React, {useContext, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TrainingContext} from '../TrainingProvider';
import {Actions} from '../reducer';
import {MainStyles, DarkBackground, SettingsStyles as styles} from '../Styles';
import {soundNames} from '../utils/constants';

const SettingsScreen = () => {
  const {state, dispatch} = useContext(TrainingContext);
  const {selectedSoundSet} = state;
  const [soundSet, setSoundSet] = useState(selectedSoundSet || '');

  useEffect(() => {
    dispatch({type: Actions.SET_SELECTED_SOUND_SET, payload: soundSet});
  }, [dispatch, soundSet]);

  const checkActiveStyle = (name: string) => {
    if (name === state.selectedSoundSet) {
      return styles.active;
    }
  };

  const soundsSetsOne = [soundNames.bells_small, soundNames.bells_med];

  const soundsSetsTwo = [soundNames.sport_whistle, soundNames.cartoon_whistle];

  const labelSoundNames = {
    [soundNames.bells_small]: 'Small Bells',
    [soundNames.bells_med]: 'Medium Bells',
    [soundNames.sport_whistle]: 'Sports Whistle',
    [soundNames.cartoon_whistle]: 'Cartoons Whistle',
  };

  return (
    <View style={[DarkBackground.darkBackground, MainStyles.container]}>
      <Text style={styles.title}>Sound Set</Text>
      <View style={styles.soundsContainer}>
        <View style={styles.soundsRow}>
          {soundsSetsOne.map(item => (
            <TouchableOpacity key={item} onPress={() => setSoundSet(item)}>
              <Text style={[styles.soundsButton, checkActiveStyle(item)]}>
                {labelSoundNames[item]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.soundsRow}>
          {soundsSetsTwo.map(item => (
            <TouchableOpacity key={item} onPress={() => setSoundSet(item)}>
              <Text style={[styles.soundsButton, checkActiveStyle(item)]}>
                {labelSoundNames[item]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
