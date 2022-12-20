import React from 'react';
import {TimeWithTraining} from './TimeWithTraining';
import {TimeType} from '../../../../../../../Types/StateTypes';
import {
  useAppDispatch,
  useAppNavigation,
} from '../../../../../../../hooks/hooks';
import {getTimeTC} from '../../../../../../../store/bll/timesReduser';

type TimeWithTrainingContainerProps = {
  time: TimeType;
};

export const TimeWithTrainingContainer: React.FC<
  TimeWithTrainingContainerProps
> = ({time}) => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const watchTraining = () => {
    dispatch(getTimeTC(time.timeId));
    navigation.navigate('TimingTab', {screen: 'Training'});
  };

  return (
    <TimeWithTraining
      client={time.client}
      training={time.training}
      watchTraining={watchTraining}
    />
  );
};
