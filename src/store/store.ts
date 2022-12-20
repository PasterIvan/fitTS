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
  clientSearchReducer,
} from '../Tabs/Timing/Timing/DateInCalendar/Time/TimesVariant/FreeTime/SearchClient/clientSearchReduser';
import {trainingReducer} from './bll/trainingReduser';

export const rootReducer = combineReducers({
  me: meReducer,
  date: dateReducer,
  times: timesReducer,
  clientsFromSearch: clientSearchReducer,
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
    me: store.getState().me,
    date: store.getState().date,
    times: store.getState().times,
    training: store.getState().training,
    exercises: store.getState().exercises,
    clientsFromSearch: store.getState().clientsFromSearch,
  });
});

export type AppDispatch = ThunkDispatch<AppStateType, unknown, ActionsType>;

export type ActionsType =
  | ActionTypeForDataReducer
  | ActionsTypeForMeReducer
  | ActionsTypeFromTimesReducer
  | ActionsTypeForExercisesReducer
  | ActionsTypeForClientSearchReducer;
export type AppStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = typeof store;
// @ts-ignore
window.store = store; // for dev
