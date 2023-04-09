import {RoundsDataType} from './components/Main';

export enum Actions {
  SAVE_TRAINING_SESSION,
}

export type ActionTypes = {
  type: Actions.SAVE_TRAINING_SESSION;
  payload: RoundsDataType[];
};

export type TrainingSessionState = {
  trainingSession: RoundsDataType[];
  selectedTrainingSession: RoundsDataType[];
  selectedSoundSet: string;
};

export const initialState: TrainingSessionState = {
  trainingSession: [],
  selectedTrainingSession: [],
  selectedSoundSet: 'sport_whistle',
};

export const reducer = (
  state: TrainingSessionState,
  action: ActionTypes,
): TrainingSessionState => {
  switch (action.type) {
    case Actions.SAVE_TRAINING_SESSION:
      return {
        ...state,
        trainingSession: action.payload,
      };
    default:
      return state;
  }
};
