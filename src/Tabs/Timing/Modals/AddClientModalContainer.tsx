import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Image, ListRenderItem, Text, View} from 'react-native';
import tw from 'twrnc';
import {CustomTextInput} from '../../../common/TextInput/CustomTextInput';
import {ClientType} from '../../../Types/StateTypes';
import {
  useAppDispatch,
  useAppNavigation,
  useAppSelector,
} from '../../../hooks/hooks';
import {ClientInSearch} from './Search/ClientInSearch';
import {setClientFromSearch} from './Search/searchReduser';
import {writeClientTC} from '../../../store/bll/timesReduser';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {clientAPI} from '../../../api/api';
import {AddClientModalProps} from '../../../Types/TabsNavigationsTypes';
import Icon from 'react-native-vector-icons/AntDesign';
import dayjs from 'dayjs';
import {AddClientModal} from './AddClientModal';

export const AddClientModalContainer = ({route}: AddClientModalProps) => {
  const dispatch = useAppDispatch();
  const {navigate} = useAppNavigation();
  const {time} = route.params;
  const [clientNameSearch, setClientNameSearch] = useState('');
  const [clientsFromSearch, setClientsFromSearch] = useState(
    [] as ClientType[],
  );
  const dateId = useAppSelector(state => state.date.date.dateId);
  const clientFromSearch = useAppSelector(state => state.search.client);
  const selectedDate = useAppSelector(state => state.date.dateForCalendar);
  const date = dayjs(selectedDate).format('DD.MM.YYYY');
  const timeId = time.timeId;
  const clientId = clientFromSearch.clientId;

  const onChangeInput = useCallback(
    (value: string) => {
      setClientNameSearch(value);
    },
    [setClientNameSearch],
  );

  const cancelInputWrite = useCallback(() => {
    setClientNameSearch('');
    dispatch(setClientFromSearch({clientName: '', clientId: ''}));
    navigate('TimingTab', {
      screen: 'Timing',
    });
  }, [dispatch]);

  const writeClient = useCallback(() => {
    dispatch(writeClientTC({time, clientId}));
    dispatch(setClientFromSearch({clientName: '', clientId: ''}));
    navigate('TimingTab', {
      screen: 'Timing',
    });
  }, [dispatch, clientId, timeId, dateId, navigate]);

  const getClientsInSearchTC = createAsyncThunk(
    'clientsSearch',
    async (params: {clientNameSearch: string}) => {
      const res = await clientAPI.getClients(params);
      setClientsFromSearch(res.data);
    },
  );

  useEffect(() => {
    dispatch(getClientsInSearchTC({clientNameSearch}));
  }, [clientNameSearch]);

  return (
    <AddClientModal
      clientsFromSearch={clientsFromSearch}
      time={time}
      clientId={clientId}
      onChangeInput={onChangeInput}
      cancelInputWrite={cancelInputWrite}
      clientFromSearch={clientFromSearch}
      writeClient={writeClient}
      date={date}
    />
  );
};
