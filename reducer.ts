import {RoundsDataType} from './components/Main';

export enum Actions {
  LOAD_SAVED_DATA,
  SAVE_TRAINING_SESSION,
  ADD_TRAINING_SESSION,
  REMOVE_TRAINING_SESSION,
  SET_SELECTED_TRAINING_SESSION,
  SET_SELECTED_SOUND_SET,
  SET_SELECTED_LANGUAGE,
  UPDATE_STATE_FROM_STORAGE,
}

export type ActionTypes =
  | {
      type: Actions.LOAD_SAVED_DATA;
      payload: TrainingSessionState;
    }
  | {
      type: Actions.SAVE_TRAINING_SESSION;
      payload: string;
    }
  | {
      type: Actions.SET_SELECTED_TRAINING_SESSION;
      payload: string;
    }
  | {
      type: Actions.SET_SELECTED_SOUND_SET;
      payload: string;
    }
  | {
      type: Actions.SET_SELECTED_LANGUAGE;
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
  selectedTrainingSession: string;
  selectedSoundSet: string;
  selectedLanguage: string;
};

export const initialState: TrainingSessionState = {
  savedTrainingSessions: {},
  selectedTrainingSession: '',
  selectedSoundSet: 'sport_whistle',
  selectedLanguage: 'sp',
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
      return savedTrainingSession;
    case Actions.SET_SELECTED_TRAINING_SESSION:
      const selectedTrainingSession = {
        ...state,
        selectedTrainingSession: action.payload,
      };
      return selectedTrainingSession;
    case Actions.SET_SELECTED_SOUND_SET:
      const selectedSoundSet = {
        ...state,
        selectedSoundSet: action.payload,
      };
      return selectedSoundSet;
    case Actions.SET_SELECTED_LANGUAGE:
      const selectedLanguage = {
        ...state,
        selectedLanguage: action.payload,
      };
      return selectedLanguage;
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
      return addedTrainingSession;
    case Actions.REMOVE_TRAINING_SESSION:
      delete state.savedTrainingSessions[action.payload];
      const removedTrainingSession = {
        ...state,
        selectedTrainingSession: '',
      };
      return removedTrainingSession;
    case Actions.UPDATE_STATE_FROM_STORAGE:
      return {...action.payload};
    default:
      return state;
  }
};
