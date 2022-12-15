import {createSlice} from '@reduxjs/toolkit';

//THUNKS
// export const meTC = createAsyncThunk('me', async (id, { dispatch }) => {
//   const res = await adminAPI.getMe(id)
//
//   dispatch(setName(res.data))
// })

//SLICE
const slice = createSlice({
  name: 'exercises',
  initialState: [],
  reducers: {
    setExercises(state, action) {
      console.log(action);
      state = action.payload;
    },
  },
});

export const exercisesReducer = slice.reducer;

export const {setExercises} = slice.actions;

export type ActionsTypeForExercisesReducer = ReturnType<typeof setExercises>;
