import {RoundsDataType} from './components/Main';
import {storeData} from './utils';

export enum Actions {
  LOAD_SAVED_DATA,
  SAVE_TRAINING_SESSION,
  ADD_TRAINING_SESSION,
  REMOVE_TRAINING_SESSION,
  SET_SELECTED_TRAINING_SESSION,
  SET_SELECTED_SOUND_SET,
  UPDATE_STATE_FROM_STORAGE,
}

export type ActionTypes =
  | {
      type: Actions.LOAD_SAVED_DATA;
      payload: TrainingSessionState;
    }
  | {
      type: Actions.SAVE_TRAINING_SESSION;
      payload: RoundsDataType[];
    }
  | {
      type: Actions.SET_SELECTED_TRAINING_SESSION;
      payload: RoundsDataType[];
    }
  | {
      type: Actions.SET_SELECTED_SOUND_SET;
      payload: string;
    }
  | {
      type: Actions.ADD_TRAINING_SESSION;
      payload: {name: string; session: RoundsDataType[]};
    }
  | {
      type: Actions.REMOVE_TRAINING_SESSION;
      payload: string;
    }
  | {
      type: Actions.UPDATE_STATE_FROM_STORAGE;
      payload: TrainingSessionState;
    };

export type TrainingSessionState = {
  savedTrainingSessions: {
    [key: string]: RoundsDataType[];
  };
  trainingSession: RoundsDataType[];
  selectedTrainingSession: RoundsDataType[];
  selectedSoundSet: string;
};

export const initialState: TrainingSessionState = {
  savedTrainingSessions: {},
  trainingSession: [],
  selectedTrainingSession: [],
  selectedSoundSet: 'sport_whistle',
};

export const reducer = (
  state: TrainingSessionState,
  action: ActionTypes,
): TrainingSessionState => {
  switch (action.type) {
    case Actions.LOAD_SAVED_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.SAVE_TRAINING_SESSION:
      const savedTrainingSession = {
        ...state,
        selectedTrainingSession: action.payload,
      };
      storeData('appState', savedTrainingSession);
      return savedTrainingSession;
    case Actions.SET_SELECTED_TRAINING_SESSION:
      const selectedTrainingSession = {
        ...state,
        selectedTrainingSession: action.payload,
      };
      storeData('appState', selectedTrainingSession);
      return selectedTrainingSession;
    case Actions.SET_SELECTED_SOUND_SET:
      const selectedSoundSet = {
        ...state,
        selectedSoundSet: action.payload,
      };
      storeData('appState', selectedSoundSet);
      return selectedSoundSet;
    case Actions.ADD_TRAINING_SESSION:
      const upsertedTrainingSession = {
        savedTrainingSessions: (state.savedTrainingSessions[
          action.payload.name
        ] = action.payload.session),
      };
      const addedTrainingSession = {
        ...state,
        savedTrainingSession: upsertedTrainingSession,
      };
      storeData('appState', addedTrainingSession);
      return addedTrainingSession;
    case Actions.REMOVE_TRAINING_SESSION:
      delete state.savedTrainingSessions[action.payload];
      const removedTrainingSession = {
        ...state,
      };
      storeData('appState', removedTrainingSession);
      return removedTrainingSession;
    case Actions.UPDATE_STATE_FROM_STORAGE:
      return {...action.payload};
    default:
      return state;
  }
};
