import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks';
import {Training} from './Training';
import {TrainingProps} from '../../../Types/TabsNavigationsTypes';

export const TrainingContainer = ({route}: TrainingProps) => {
  const dispatch = useAppDispatch();
  const {timeId} = route.params;

  const times = useAppSelector(state => state.date.date.times);

  const selectedTime = times.find(time => time.timeId === timeId);

  const [isInputPreview, setIsInputPreview] = useState(false);
  const [trainingPreview, setTrainingPreview] = useState('');

  const openInputPreview = () => {
    setIsInputPreview(true);
  };
  const onChangeInputPreview = (value: string) => {
    setTrainingPreview(value);
  };
  const cancelInputPreview = () => {
    setTrainingPreview('');
    setIsInputPreview(false);
  };
  const addPreview = () => {
    // dispatch(setPreview({timeId, trainingPreview}));
    setIsInputPreview(false);
  };

  return (
    <Training
      training={selectedTime!.training}
      client={selectedTime!.client}
      addPreview={addPreview}
      onChangeInputPreview={onChangeInputPreview}
      cancelInputPreview={cancelInputPreview}
      isInputPreview={isInputPreview}
      timeTitle={selectedTime!.timeTitle}
      openInputPreview={openInputPreview}
    />
  );
};
