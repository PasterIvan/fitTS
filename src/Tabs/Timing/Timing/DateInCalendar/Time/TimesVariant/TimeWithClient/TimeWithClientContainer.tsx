import React, {useCallback, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../../../../../hooks/hooks';
import {addTrainingTC} from '../../../../../../../store/bll/timesReduser';
import {TimeWithClient} from './TimeWithClient';
import {ClientType} from '../../../../../../../Types/StateTypes';

type TimeWithClientContainerProps = {
  timeId: string;
  client: ClientType;
};

export const TimeWithClientContainer: React.FC<
  TimeWithClientContainerProps
> = ({timeId, client}) => {
  const dispatch = useAppDispatch();
  const [isInputTraining, setIsInputTraining] = useState(false);
  const [trainingTitle, setTrainingTitle] = useState('');
  const dateId = useAppSelector(state => state.date.date.dateId);

  const addTraining = useCallback(() => {
    dispatch(addTrainingTC({trainingTitle, timeId, dateId}));
    setIsInputTraining(false);
  }, [dispatch, trainingTitle, timeId, setIsInputTraining]);

  const onChangeInput = (value: string) => {
    setTrainingTitle(value);
  };

  const openInputTraining = useCallback(() => {
    setIsInputTraining(true);
  }, [setIsInputTraining]);

  const cancelInputTraining = useCallback(() => {
    setTrainingTitle('');
    setIsInputTraining(false);
  }, [setTrainingTitle, setIsInputTraining]);

  return (
    <TimeWithClient
      client={client}
      isInputTraining={isInputTraining}
      openInputTraining={openInputTraining}
      cancelInputTraining={cancelInputTraining}
      onChangeInput={onChangeInput}
      addTraining={addTraining}
    />
  );
};
