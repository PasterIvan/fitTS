import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Image, ListRenderItem, Text, View} from 'react-native';
import tw from 'twrnc';
import {CustomTextInput} from '../../../common/TextInput/CustomTextInput';
import {
  useAppDispatch,
  useAppNavigation,
  useAppSelector,
} from '../../../hooks/hooks';
import {writeTrainingTC} from '../../../store/bll/timesReduser';
import {AddTrainingModalProps} from '../../../Types/TabsNavigationsTypes';
import dayjs from 'dayjs';
import {TrainingType} from '../../../Types/StateTypes';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {myTrainingAPI} from '../../../api/api';
import {TrainingInSearch} from './Search/TrainingInSearch';
import {setTrainingFromSearch} from './Search/searchReduser';

export const AddTrainingModal = ({route}: AddTrainingModalProps) => {
  const dispatch = useAppDispatch();
  const {navigate} = useAppNavigation();
  const {time} = route.params;
  const [trainingTitleSearch, setTrainingTitleSearch] = useState('');
  const [trainingsFromSearch, setTrainingsFromSearch] = useState(
    [] as TrainingType[],
  );

  const dateId = useAppSelector(state => state.date.date.dateId);
  const trainingFromSearch = useAppSelector(state => state.search.training);

  const selectedDate = useAppSelector(state => state.date.dateForCalendar);
  const date = dayjs(selectedDate).format('DD.MM.YYYY');
  const timeId = time.timeId;
  const trainingId = trainingFromSearch.trainingId;

  const writeTraining = useCallback(() => {
    dispatch(writeTrainingTC({time, trainingId}));
    dispatch(setTrainingFromSearch({trainingTitle: '', trainingId: ''}));
    navigate('TimingTab', {
      screen: 'Timing',
    });
  }, [dispatch, trainingId, timeId, dateId, navigate]);

  const onChangeInput = useCallback(
    (value: string) => {
      setTrainingTitleSearch(value);
    },
    [setTrainingTitleSearch],
  );

  const cancelModal = useCallback(() => {
    dispatch(setTrainingFromSearch({trainingTitle: '', trainingId: ''}));
    navigate('TimingTab', {
      screen: 'Timing',
    });
  }, [setTrainingTitleSearch]);

  const getTrainingsInSearchTC = createAsyncThunk(
    'trainingSearch',
    async (params: {trainingTitleSearch: string}) => {
      const res = await myTrainingAPI.getMyTrainings(params);
      setTrainingsFromSearch(res.data);
    },
  );

  useEffect(() => {
    dispatch(getTrainingsInSearchTC({trainingTitleSearch}));
  }, [trainingTitleSearch]);

  const renderTraining: ListRenderItem<TrainingType> = ({item}) => (
    <TrainingInSearch {...item} />
  );

  return (
    <View style={tw`flex-1 bg-gray-50 items-center `}>
      <Text style={tw`w-full pr-2 text-base text-center`}>
        {time.timeTitle} {date}
      </Text>
      {trainingFromSearch.trainingTitle !== '' ? (
        <View style={tw`items-center px-2`}>
          <Text style={tw`text-gray-600`}>
            {trainingFromSearch.trainingTitle}
          </Text>
        </View>
      ) : (
        ''
      )}
      <View style={tw`w-full flex-row items-center`}>
        <View style={tw`items-center px-2`}>
          <Image
            style={tw`w-20 h-20 rounded-full`}
            source={require('../../Profile/img/ava-man.png')}
          />
          <Text style={tw`text-gray-600`}>{time.client?.clientName}</Text>
        </View>
        <CustomTextInput
          disabled={!trainingId}
          onChangeInput={onChangeInput}
          cancelModal={cancelModal}
          action={writeTraining}
        />
      </View>
      <View style={tw`w-full border-t`}>
        {trainingsFromSearch.length === 0 ? (
          <Text style={tw`text-center py-2`}>Ни чего не найдено</Text>
        ) : (
          <FlatList data={trainingsFromSearch} renderItem={renderTraining} />
        )}
      </View>
    </View>
  );
};
