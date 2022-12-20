import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks';
import {Training} from './Training';
import {addTrainingDescriptionTC} from '../../../store/bll/timesReduser';

export const TrainingContainer = () => {
  const dispatch = useAppDispatch();

  const {training, timeTitle, client} = useAppSelector(
    state => state.times.time,
  );
  const trainingId = training?.trainingId;

  const [isInputDescription, setIsInputDescription] = useState(false);
  const [trainingDescription, setTrainingDescription] = useState('');

  const openInputDescription = () => {
    setIsInputDescription(true);
  };
  const onChangeInputDescription = (value: string) => {
    setTrainingDescription(value);
  };
  const cancelInputDescription = () => {
    setTrainingDescription('');
    setIsInputDescription(false);
  };
  const addTrainingDescription = () => {
    dispatch(addTrainingDescriptionTC({trainingId, trainingDescription}));
    setIsInputDescription(false);
  };

  return (
    <Training
      training={training}
      client={client}
      addDescription={addTrainingDescription}
      onChangeInputDescription={onChangeInputDescription}
      cancelInputDescription={cancelInputDescription}
      isInputDescription={isInputDescription}
      timeTitle={timeTitle}
      openInputDescription={openInputDescription}
    />
  );
};
