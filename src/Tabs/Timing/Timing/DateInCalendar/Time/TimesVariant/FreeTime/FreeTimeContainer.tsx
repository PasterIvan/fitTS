import React from 'react';
import {useAppDispatch} from '../../../../../../../hooks/hooks';
import {FreeTime} from './FreeTime';

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
