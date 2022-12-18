import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TimeType} from '../../Types/StateTypes';
import {timeAPI, trainingAPI} from '../../api/api';
import {setTimes} from './dateReduser';

// THUNKS
// export const addTimeTC = createAsyncThunk('times', async (param, { dispatch }) => {
//   const res = await timeAPI.addTime(param)
//   // dispatch(setTimes(res.data))
// })
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
  'time/writeClient',
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
  'time/addTraining',
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

//SLICE
const slice = createSlice({
  name: 'time',
  initialState: {
    dateId: '',
    timeId: '',
    timeTitle: '',
    client: {
      clientId: '',
      clientName: '',
      photo: '',
    },
    training: {
      timeId: '',
      trainingId: '',
      trainingTitle: '',
      trainingDescription: '',
      exercises: [],
    },
  } as TimeType,
  reducers: {
    setTime(state, action: PayloadAction<TimeType>) {
      state = action.payload;
    },
  },
});

export const timeReducer = slice.reducer;

export const {setTime} = slice.actions;

export type ActionsTypeFromTimesReducer = ReturnType<typeof setTime>;
// | ReturnType<typeof setClient>
// | ReturnType<typeof setClients>
// | ReturnType<typeof setTraining>;
// | ReturnType<typeof setPreview>;
