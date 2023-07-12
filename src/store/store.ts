import {configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {ActionsTypeForMeReducer, meReducer} from './bll/meReduser';
import {getData, storeData} from '../utils/sessionStorage-utils';
import thunkMiddleware from 'redux-thunk';
import {ActionsTypeFromTimesReducer, timesReducer} from './bll/timesReduser';
import {ActionTypeForDataReducer, dateReducer} from './bll/dateReduser';
import {
  ActionsTypeForExercisesReducer,
  exercisesReducer,
} from './bll/exercisesReduser';
import {
  ActionsTypeForClientSearchReducer,
  searchReducer,
} from '../Tabs/Timing/Modals/Search/searchReduser';
import {
  ActionsTypeForTrainingReducer,
  trainingReducer,
} from './bll/trainingReduser';
import {ActionsTypeFromAppReducer, appReducer} from './bll/appReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  me: meReducer,
  date: dateReducer,
  times: timesReducer,
  search: searchReducer,
  training: trainingReducer,
  exercises: exercisesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).prepend(thunkMiddleware),
  preloadedState: getData(),
});
store.subscribe(() => {
  storeData({
    app: store.getState().app,
    me: store.getState().me,
    date: store.getState().date,
    times: store.getState().times,
    training: store.getState().training,
    exercises: store.getState().exercises,
    search: store.getState().search,
  });
});

export type AppDispatch = ThunkDispatch<AppStateType, unknown, ActionsType>;

export type ActionsType =
  | ActionsTypeFromAppReducer
  | ActionTypeForDataReducer
  | ActionsTypeForMeReducer
  | ActionsTypeFromTimesReducer
  | ActionsTypeForExercisesReducer
  | ActionsTypeForTrainingReducer
  | ActionsTypeForClientSearchReducer;

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = typeof store;
// @ts-ignore
window.store = store; // for dev
