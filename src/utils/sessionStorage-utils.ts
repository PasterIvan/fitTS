import AsyncStorage from '@react-native-community/async-storage';
import {AppStateType} from '../store/store';

export const getData = () => {
  try {
    const jsonValue = AsyncStorage.getItem('app-state');
    // @ts-ignore
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const storeData = (state: AppStateType) => {
  try {
    const jsonValue = JSON.stringify(state);
    AsyncStorage.setItem('app-state', jsonValue);
  } catch (e) {
    // saving error
  }
};
