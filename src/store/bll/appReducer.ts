import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export enum requestStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

const slice = createSlice({
  name: 'app',
  initialState: {
    status: requestStatus.IDLE,
  },
  reducers: {
    setAppStatus(state, action: PayloadAction<requestStatus>) {
      state.status = action.payload;
    },
  },
});

export const appReducer = slice.reducer;
export const {setAppStatus} = slice.actions;

export type ActionsTypeFromAppReducer = ReturnType<typeof setAppStatus>;
