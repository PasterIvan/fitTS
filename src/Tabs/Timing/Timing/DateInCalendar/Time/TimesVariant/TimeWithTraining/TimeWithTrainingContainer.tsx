import React from 'react';
import {TimeWithTraining} from './TimeWithTraining';
import {TimeType} from '../../../../../../../Types/StateTypes';
import {useAppNavigation} from '../../../../../../../hooks/hooks';

type TimeWithTrainingContainerProps = {
  time: TimeType;
};

export const TimeWithTrainingContainer: React.FC<
  TimeWithTrainingContainerProps
> = ({time}) => {
  const navigation = useAppNavigation();
  const trainingId = time.training!.trainingId;
  const watchTraining = () => {
    navigation.navigate('TimingTab', {
      screen: 'Training',
      params: {
        timeTitle: time.timeTitle,
        client: time.client!,
        trainingId: trainingId,
      },
    });
  };

  return (
    <TimeWithTraining
      client={time.client}
      training={time.training}
      watchTraining={watchTraining}
    />
  );
};
