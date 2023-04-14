import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useReducer} from 'react';
import {reducer, initialState, Actions} from './reducer';

export const TrainingContext = createContext<any>({});

const TrainingProvider = ({children}: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
      }}>
      {children}
    </TrainingContext.Provider>
  );
};

export default TrainingProvider;
