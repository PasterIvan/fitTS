import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TimeType, TrainingType} from '../../Types/StateTypes';
import {timeAPI, trainingAPI} from '../../api/api';

// THUNKS
export const getTimesTC = createAsyncThunk(
  'date/getTimes',
  async (params: {dateId: string}, {dispatch}) => {
    try {
      const res = await timeAPI.getTimes(params);
      dispatch(setTimes(res.data));
    } catch (dateId) {
      console.log(dateId);
    }
  },
);
export const getTimeTC = createAsyncThunk(
  'time/getTime',
  async (timeId: string, {dispatch}) => {
    try {
      const res = await timeAPI.getTime(timeId);
      dispatch(setTime(res.data));
    } catch (error) {
      console.log(error);
    }
  },
);
export const writeClientTC = createAsyncThunk(
  'times/writeClient',
  async (
    data: {timeId: string; clientId: string; dateId: string},
    {dispatch},
  ) => {
    try {
      const res = await timeAPI.writeClient(data);
      dispatch(setTimes(res.data));
    } catch (error) {
      console.log(error);
    }
  },
);
export const addTrainingTC = createAsyncThunk(
  'times/addTraining',
  async (
    data: {trainingTitle: string; timeId: string; dateId: string},
    {dispatch},
  ) => {
    try {
      const res = await trainingAPI.addTraining(data);
      dispatch(setTimes(res.data));
    } catch (error) {
      console.log(error);
    }
  },
);
export const addTrainingDescriptionTC = createAsyncThunk(
  'times/addTrainingDescription',
  async (
    data: {trainingId: string | undefined; trainingDescription: string},
    {dispatch},
  ) => {
    try {
      const res = await trainingAPI.addTrainingDescription(data);
      dispatch(setTrainingInTime(res.data));
    } catch (error) {
      console.log(error);
    }
  },
);

//SLICE
const slice = createSlice({
  name: 'times',
  initialState: {
    times: [] as TimeType[],
    time: {} as TimeType,
  },
  reducers: {
    setTimes(state, action: PayloadAction<TimeType[]>) {
      state.times = action.payload;
    },
    setTime(state, action: PayloadAction<TimeType>) {
      state.time = action.payload;
    },
    setTrainingInTime(state, action: PayloadAction<TrainingType>) {
      state.time = {...state.time, training: action.payload};
    },
  },
});

export const timesReducer = slice.reducer;

export const {setTime, setTimes, setTrainingInTime} = slice.actions;

export type ActionsTypeFromTimesReducer =
  | ReturnType<typeof setTime>
  | ReturnType<typeof setTrainingInTime>
  | ReturnType<typeof setTimes>;
// | ReturnType<typeof setClient>
// | ReturnType<typeof setClients>
// | ReturnType<typeof setTraining>;
// | ReturnType<typeof setPreview>;
