import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ClientType, TrainingType} from '../../../../Types/StateTypes';

// THUNKS

//SLICE
const slice = createSlice({
  name: 'search',
  initialState: {
    clients: [] as ClientType[],
    client: {} as ClientType,
    trainings: [] as TrainingType[],
    training: {} as TrainingType,
  },
  reducers: {
    setClientsFromSearch(state, action: PayloadAction<ClientType[]>) {
      state.clients = action.payload;
    },
    setClientFromSearch(state, action: PayloadAction<ClientType>) {
      state.client = action.payload;
    },
    setTrainingsFromSearch(state, action: PayloadAction<TrainingType[]>) {
      state.trainings = action.payload;
    },
    setTrainingFromSearch(state, action: PayloadAction<TrainingType>) {
      state.training = action.payload;
    },
  },
});

export const searchReducer = slice.reducer;

export const {
  setClientsFromSearch,
  setClientFromSearch,
  setTrainingsFromSearch,
  setTrainingFromSearch,
} = slice.actions;

export type ActionsTypeForClientSearchReducer =
  | ReturnType<typeof setClientsFromSearch>
  | ReturnType<typeof setClientFromSearch>
  | ReturnType<typeof setTrainingsFromSearch>
  | ReturnType<typeof setTrainingFromSearch>;
