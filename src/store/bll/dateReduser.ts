import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DateType, TimeType} from '../../Types/StateTypes';
import {timeAPI} from '../../api/api';

//THUNKS
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
export const writeClientTC = createAsyncThunk(
  'date/writeClient',
  async (
    params: {timeId: string; clientId: string; dateId: string},
    {dispatch},
  ) => {
    try {
      const res = await timeAPI.writeClient(params);
      dispatch(setTimes(res.data));
    } catch (error) {
      console.log(error);
    }
  },
);

export let date = new Date();

//SLICE
const slice = createSlice({
  name: 'date',
  initialState: {
    dateForCalendar: date,
    date: {
      dateId: `${date.getDate()}-${+date.getMonth() + 1}-${date.getFullYear()}`,
      times: [],
    } as DateType,
  },
  reducers: {
    setSelectedDate(state, action: PayloadAction<any>) {
      state.dateForCalendar = action.payload;
      state.date.dateId = `${action.payload.getDate()}-${
        +action.payload.getMonth() + 1
      }-${action.payload.getFullYear()}`;
    },
    setTimes(state, action: PayloadAction<TimeType[]>) {
      state.date.times = action.payload;
    },
  },
});

export const dateReducer = slice.reducer;

export const {setSelectedDate, setTimes} = slice.actions;

export type ActionTypeForDataReducer =
  | ReturnType<typeof setSelectedDate>
  | ReturnType<typeof setTimes>;
