import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DateType} from '../../Types/StateTypes';
import {timeAPI} from '../../api/api';
import {setTimes} from './timesReduser';

//THUNKS

export let date = new Date();

//SLICE
const slice = createSlice({
  name: 'date',
  initialState: {
    dateForCalendar: date,
    date: {
      dateId: `${date.getDate()}-${+date.getMonth() + 1}-${date.getFullYear()}`,
    } as DateType,
  },
  reducers: {
    setSelectedDate(state, action: PayloadAction<any>) {
      state.dateForCalendar = action.payload;
      state.date.dateId = `${action.payload.getDate()}-${
        +action.payload.getMonth() + 1
      }-${action.payload.getFullYear()}`;
    },
  },
});

export const dateReducer = slice.reducer;

export const {setSelectedDate} = slice.actions;

export type ActionTypeForDataReducer = ReturnType<typeof setSelectedDate>;
