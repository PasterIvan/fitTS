import {createSlice} from '@reduxjs/toolkit';
import {TrainingType} from '../../Types/StateTypes';

//THUNKS
// export const meTC = createAsyncThunk('me', async (id, { dispatch }) => {
//   const res = await adminAPI.getMe(id)
//
//   dispatch(setName(res.data))
// })

//SLICE
const slice = createSlice({
  name: 'training',
  initialState: {} as TrainingType,
  reducers: {
    // setTraining(state, action) {
    //   state = action.payload;
    // },
  },
});

export const trainingReducer = slice.reducer;

export const {} = slice.actions;

// export type ActionsTypeForExercisesReducer = ReturnType<typeof setTraining>;
