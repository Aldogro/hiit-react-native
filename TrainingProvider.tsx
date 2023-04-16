import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useReducer} from 'react';
import {reducer, initialState, Actions} from './reducer';
import {eng, sp} from './utils/langs';

export const TrainingContext = createContext<any>({});

const TrainingProvider = ({children}: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const t = (word: string): string => {
    const lang = state.selectedLanguage;
    const langs: {eng: any; sp: any} = {eng, sp};
    const namespaces = word.split('.');
    return langs[lang as keyof typeof langs][namespaces[0]][namespaces[1]];
  };

  useEffect(() => {
    (async () => {
      try {
        const _state = await AsyncStorage.getItem('appState');
        dispatch({
          type: Actions.LOAD_SAVED_DATA,
          payload: JSON.parse(_state || ''),
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.setItem('appState', JSON.stringify(state));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [state]);

  return (
    <TrainingContext.Provider
      value={{
        state,
        dispatch,
        t,
      }}>
      {children}
    </TrainingContext.Provider>
  );
};

export default TrainingProvider;
