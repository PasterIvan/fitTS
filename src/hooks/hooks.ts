import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import {AppDispatch, AppStateType} from '../store/store';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootTabParamList} from '../Types/TabsNavigationsTypes';

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;

export type NavigationUseType = NavigationProp<RootTabParamList>;
export const useAppNavigation = () => useNavigation<NavigationUseType>();
