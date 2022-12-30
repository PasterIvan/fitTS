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

    return (
      <FreeTime
        clientFromSearch={clientFromSearch}
        isInputWrite={isInputWrite}
        openInputWrite={openInputWrite}
        cancelInputWrite={cancelInputWrite}
        onChangeInput={onChangeInput}
        // clientsFromSearch={clientsFromSearch}
        writeClient={writeClient}
      />
    );
  },
);
