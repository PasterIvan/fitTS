import React, {useCallback, useEffect, useState} from 'react';
import {ClientType} from '../../../../../../../Types/StateTypes';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {clientAPI} from '../../../../../../../api/api';
import {useAppDispatch, useAppSelector} from '../../../../../../../hooks/hooks';
import {FreeTime} from './FreeTime';
import {setClientFromSearch} from './SearchClient/clientSearchReduser';
import {writeClientTC} from '../../../../../../../store/bll/timesReduser';

type FreeTimeContainerProps = {
  timeId: string;
};
export const FreeTimeContainer: React.FC<FreeTimeContainerProps> = React.memo(
  ({timeId}) => {
    const dispatch = useAppDispatch();
    const [isInputWrite, setIsInputWrite] = useState(false);
    const [clientNameSearch, setClientNameSearch] = useState('');
    const [clientsFromSearch, setClientsFromSearch] = useState(
      [] as ClientType[],
    );

    const dateId = useAppSelector(state => state.date.date.dateId);
    const clientFromSearch = useAppSelector(
      state => state.clientsFromSearch.client,
    );
    const clientId = clientFromSearch.clientId;

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

    return (
      <FreeTime
        clientFromSearch={clientFromSearch}
        isInputWrite={isInputWrite}
        openInputWrite={openInputWrite}
        cancelInputWrite={cancelInputWrite}
        onChangeInput={onChangeInput}
        clientsFromSearch={clientsFromSearch}
        writeClient={writeClient}
      />
    );
  },
);
