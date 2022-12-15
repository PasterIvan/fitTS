import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ClientType, TimeType, TrainingType} from '../../Types/StateTypes';

// THUNKS
// export const addTimeTC = createAsyncThunk('times', async (param, { dispatch }) => {
//   const res = await timeAPI.addTime(param)
//   // dispatch(setTimes(res.data))
// })

// export const addClientTC = createAsyncThunk(
//   'times',
//   async (nameNewClient: string, {dispatch}) => {
//     const res = await clientAPI.addClient(nameNewClient);
//     dispatch(addClient(res.data));
//   },
// );

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
    setClient(state, action: PayloadAction<ClientType>) {
      state = {...state, client: action.payload};
    },
    setTraining(state, action: PayloadAction<TrainingType>) {
      state = {...state, training: action.payload};
    },
    // setClients(state, action) {
    //   for (let i = 0; i < state.times.length; i++) {
    //     let timeId = state.times[i].timeId;
    //     let client = action.payload.find((client: any) =>
    //       client.timeId.find((time: any) => time === timeId),
    //     );
    //     if (client) {
    //       state.times[i].client = client;
    //     }
    //   }
    // },
    // setDescription(state, action: PayloadAction<string>) {
    //   state.training.trainingDescription = action.payload;
    // state.times = state.times.map((time: any) =>
    //   time.timeId === action.payload.timeId
    //     ? {
    //         ...time,
    //         training: {
    //           ...time.training,
    //           preview: action.payload.trainingPreview,
    //         },
    //       }
    //     : time,
    // );
    // },
    // changeExerciseStatus(state, action) {
    //   state.times = state.times.map(time =>
    //     time.timeId === action.payload.timeId
    //       ? {
    //           ...time,
    //           training: {
    //             ...time.training,
    //             exercises: state.map(exercise =>
    //               exercise.exerciseId === action.payload
    //                 ? (exercise.isDone = !exercise.isDone)
    //                 : exercise
    //             ),
    //           },
    //         }
    //       : time
    //   )
    // },
  },
});

export const timeReducer = slice.reducer;

export const {setTime, setClient, setTraining} = slice.actions;

export type ActionsTypeFromTimesReducer =
  | ReturnType<typeof setTime>
  | ReturnType<typeof setClient>
  // | ReturnType<typeof setClients>
  | ReturnType<typeof setTraining>;
// | ReturnType<typeof setPreview>;
