import React, {useContext, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TrainingContext} from '../TrainingProvider';
import {Actions} from '../reducer';
import {MainStyles, DarkBackground, SettingsStyles as styles} from '../Styles';
import {soundNames} from '../utils/constants';

const SettingsScreen = () => {
  const {state, dispatch, t} = useContext(TrainingContext);
  const {selectedSoundSet, selectedLanguage} = state;
  const [soundSet, setSoundSet] = useState(selectedSoundSet || '');
  const [language, setLanguage] = useState(selectedLanguage || 'eng');

  useEffect(() => {
    dispatch({type: Actions.SET_SELECTED_SOUND_SET, payload: soundSet});
    dispatch({type: Actions.SET_SELECTED_LANGUAGE, payload: language});
  }, [dispatch, soundSet, language]);

  const checkActiveSound = (name: string) => {
    if (name === state.selectedSoundSet) {
      return styles.active;
    }
  };

  const checkActiveLanguage = (name: string) => {
    if (name === state.selectedLanguage) {
      return styles.active;
    }
  };

  const soundsSetsOne = [soundNames.bells_small, soundNames.bells_med];

  const soundsSetsTwo = [soundNames.sport_whistle, soundNames.cartoon_whistle];

  return (
    <View style={[DarkBackground.darkBackground, MainStyles.container]}>
      <Text style={styles.title}>{t('settings.soundSet')}</Text>
      <View style={styles.soundsContainer}>
        <View style={styles.soundsRow}>
          {soundsSetsOne.map(item => (
            <TouchableOpacity key={item} onPress={() => setSoundSet(item)}>
              <Text style={[styles.soundsButton, checkActiveSound(item)]}>
                {t(`settings.${item}`)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.soundsRow}>
          {soundsSetsTwo.map(item => (
            <TouchableOpacity key={item} onPress={() => setSoundSet(item)}>
              <Text style={[styles.soundsButton, checkActiveSound(item)]}>
                {t(`settings.${item}`)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Text style={styles.title}>{t('settings.language')}</Text>
      <View style={styles.soundsContainer}>
        <View style={styles.soundsRow}>
          <TouchableOpacity onPress={() => setLanguage('eng')}>
            <Text style={[styles.soundsButton, checkActiveLanguage('eng')]}>
              {t('settings.english')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.soundsRow}>
          <TouchableOpacity onPress={() => setLanguage('sp')}>
            <Text style={[styles.soundsButton, checkActiveLanguage('sp')]}>
              {t('settings.spanish')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
