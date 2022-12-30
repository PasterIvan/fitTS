import React, {
  MutableRefObject,
  Ref,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {ClientType, TimeType} from '../../../../../Types/StateTypes';
import {useAppDispatch, useAppSelector} from '../../../../../hooks/hooks';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {clientAPI} from '../../../../../api/api';
import {setClientFromSearch} from './TimesVariant/FreeTime/SearchClient/clientSearchReduser';
import {writeClientTC} from '../../../../../store/bll/timesReduser';
import {Time} from './Time';

type TimeContainerProps = {
  time: TimeType;
  simultaneousHandlers: Ref<unknown> | Ref<unknown>[];
};

export const TimeContainer: React.FC<TimeContainerProps> = React.memo(
  ({time, simultaneousHandlers}) => {
    const dispatch = useAppDispatch();

    const [clientNameSearch, setClientNameSearch] = useState('');
    const [clientsFromSearch, setClientsFromSearch] = useState(
      [] as ClientType[],
    );

    const clientFromSearch = useAppSelector(
      state => state.clientsFromSearch.client,
    );

    const timeId = time.timeId;
    const clientId = clientFromSearch.clientId;

    const [isInputWrite, setIsInputWrite] = useState(false);

    const dateId = useAppSelector(state => state.date.date.dateId);

    const openInputWrite = useCallback(() => {
      setIsInputWrite(true);
    }, [setIsInputWrite]);

    const onChangeInput = useCallback(
      (value: string) => {
        setClientNameSearch(value);
      },
      [setClientNameSearch],
    );

    const cancelInputWrite = useCallback(() => {
      setClientNameSearch('');
      setIsInputWrite(false);
      dispatch(setClientFromSearch({clientName: '', clientId: ''}));
    }, [dispatch, setIsInputWrite]);

    const writeClient = useCallback(() => {
      dispatch(writeClientTC({timeId, clientId, dateId}));
      setIsInputWrite(false);
      dispatch(setClientFromSearch({clientName: '', clientId: ''}));
    }, [dispatch, clientId, timeId, dateId]);

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
      <Time
        time={time}
        openInputWrite={openInputWrite}
        cancelInputWrite={cancelInputWrite}
        onChangeInput={onChangeInput}
        writeClient={writeClient}
        clientsFromSearch={clientsFromSearch}
        clientFromSearch={clientFromSearch}
        isInputWrite={isInputWrite}
        simultaneousHandlers={simultaneousHandlers}
      />
    );
  },
);
