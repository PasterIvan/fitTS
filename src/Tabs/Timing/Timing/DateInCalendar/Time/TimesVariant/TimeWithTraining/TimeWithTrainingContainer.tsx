import React from 'react';
import {TimeWithTraining} from './TimeWithTraining';
import {TimeType} from '../../../../../../../Types/StateTypes';
import {
  useAppDispatch,
  useAppNavigation,
} from '../../../../../../../hooks/hooks';
import {setTime} from '../../../../../../../store/bll/timeReduser';

type TimeWithTrainingContainerProps = {
  time: TimeType;
};

export const TimeWithTrainingContainer: React.FC<
  TimeWithTrainingContainerProps
> = ({time}) => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const watchTraining = () => {
    dispatch(setTime(time));
    navigation.navigate('TimingTab', {screen: 'Training', params: time});
  };

  return (
    <TimeWithTraining
      client={time.client}
      training={time.training}
      watchTraining={watchTraining}
    />
  );
};
