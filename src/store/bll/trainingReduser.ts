import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TrainingType} from '../../Types/StateTypes';
import {exerciseAPI, trainingAPI} from '../../api/api';

//THUNKS
export const getTrainingTC = createAsyncThunk(
  'training/getTraining',
  async (trainingId: string, {dispatch}) => {
    try {
      const res = await trainingAPI.getTraining(trainingId);
      dispatch(setTraining(res.data));
    } catch (error) {
      console.log(error);
    }
  },
);
export const addExerciseTC = createAsyncThunk(
  'training/addExercise',
  async (
    data: {trainingId: string | undefined; exerciseName: string},
    {dispatch},
  ) => {
    try {
      const res = await exerciseAPI.addExercise(data);
      dispatch(setTraining(res.data));
    } catch (error) {
      console.log(error);
    }
  },
);

export const addTrainingDescriptionTC = createAsyncThunk(
  'training/addDescription',
  async (
    data: {trainingId: string | undefined; trainingDescription: string},
    {dispatch},
  ) => {
    try {
      const res = await trainingAPI.addTrainingDescription(data);
      dispatch(setTraining(res.data));
    } catch (error) {
      console.log(error);
    }
  },
);
export const changeExerciseStatus = createAsyncThunk(
  'training/changeExerciseStatus',
  async (
    data: {trainingId: string | undefined; exerciseId: string},
    {dispatch},
  ) => {
    try {
      const res = await exerciseAPI.changeExerciseStatus(data);
      dispatch(setTraining(res.data));
    } catch (error) {
      console.log(error);
    }
  },
);

//SLICE
const slice = createSlice({
  name: 'training',
  initialState: {
    training: {} as TrainingType,
  },
  reducers: {
    setTraining(state, action: PayloadAction<TrainingType>) {
      state.training = action.payload;
    },
  },
});

export const trainingReducer = slice.reducer;

export const {setTraining} = slice.actions;

export type ActionsTypeForTrainingReducer = ReturnType<typeof setTraining>;
