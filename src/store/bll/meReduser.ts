import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authAPI} from '../../api/api';

//THUNKS
export const meTC = createAsyncThunk('me', async (id: string, {dispatch}) => {
  const res = await authAPI.getMe(id);

  dispatch(setName(res.data));
});

//SLICE
const slice = createSlice({
  name: 'me',
  initialState: {
    me: {
      id: 1,
      name: '',
      address: '',
      club: '',
      ava: '',
      aboutMe: '',
    },
  },
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.me.name = action.payload;
    },
    setAddress(state, action: PayloadAction<string>) {
      state.me.address = action.payload;
    },
    setClub(state, action: PayloadAction<string>) {
      state.me.club = action.payload;
    },
    setAboutMe(state, action: PayloadAction<string>) {
      state.me.aboutMe = action.payload;
    },
  },
});

export const meReducer = slice.reducer;

export const {setName, setAddress, setClub, setAboutMe} = slice.actions;

export type ActionsTypeForMeReducer =
  | ReturnType<typeof setName>
  | ReturnType<typeof setAddress>
  | ReturnType<typeof setClub>
  | ReturnType<typeof setAboutMe>;
