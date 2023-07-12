import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NewTimeType, TimeType} from '../../Types/StateTypes';
import {timeAPI, myTrainingAPI} from '../../api/api';
import {requestStatus, setAppStatus} from './appReducer';

// THUNKS
export const getTimesTC = createAsyncThunk(
  'date/getTimes',
  async (params: {dateId: string}, {dispatch}) => {
    try {
      const res = await timeAPI.getTimes(params);

      dispatch(setTimes(res.data));
    } catch (err) {
      console.log(err);
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
  async (params: {time: TimeType; clientId: string}, {dispatch}) => {
    try {
      const newTime: NewTimeType = {
        timeTitle: params.time.timeTitle,
        clientId: params.clientId,
      };
      const res = await timeAPI.updateTime(
        params.time.timeId,
        newTime,
        params.time.dateId,
      );
      dispatch(setTimes(res.data));
    } catch (error) {
      console.log(error);
    }
  },
);
export const writeTrainingTC = createAsyncThunk(
  'times/writeTraining',
  async (params: {time: TimeType; trainingId: string}, {dispatch}) => {
    try {
      const newTime: NewTimeType = {
        timeTitle: params.time.timeTitle,
        clientId: params.time.client?.clientId,
        trainingId: params.trainingId,
      };
      const res = await timeAPI.updateTime(
        params.time.timeId,
        newTime,
        params.time.dateId,
      );
      dispatch(setTimes(res.data));
    } catch (error) {
      console.log(error);
    }
  },
);
export const addTrainingTC = createAsyncThunk(
  'times/addTraining',
  async (data: {trainingTitle: string}, {dispatch}) => {
    try {
      const res = await myTrainingAPI.addTraining(data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  },
);
export const repealTrainingTC = createAsyncThunk(
  'times/repealTraining',
  async (time: TimeType, {dispatch}) => {
    try {
      dispatch(setAppStatus(requestStatus.LOADING));

      const newTime: NewTimeType = {
        timeTitle: time.timeTitle,
      };
      const res = await timeAPI.updateTime(time.timeId, newTime, time.dateId);
      dispatch(setTimes(res.data));
      dispatch(setAppStatus(requestStatus.SUCCEEDED));
    } catch (error) {
      console.log(error);
      dispatch(setAppStatus(requestStatus.SUCCEEDED));
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
  },
});

export const timesReducer = slice.reducer;

export const {setTime, setTimes} = slice.actions;

export type ActionsTypeFromTimesReducer =
  | ReturnType<typeof setTime>
  | ReturnType<typeof setTimes>;
// | ReturnType<typeof setClient>
// | ReturnType<typeof setClients>
// | ReturnType<typeof setTraining>;
// | ReturnType<typeof setPreview>;
