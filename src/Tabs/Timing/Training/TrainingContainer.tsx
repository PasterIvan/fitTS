import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks';
import {Training} from './Training';
import {
  addTrainingDescriptionTC,
  getTrainingTC,
} from '../../../store/bll/trainingReduser';
import {TrainingProps} from '../../../Types/TabsNavigationsTypes';

export const TrainingContainer = ({route}: TrainingProps) => {
  const dispatch = useAppDispatch();
  const {timeTitle, client, trainingId} = route.params;

  useEffect(() => {
    dispatch(getTrainingTC(trainingId));
  }, []);

  const {trainingTitle, trainingDescription} = useAppSelector(
    state => state.training.training,
  );

  const [isInputDescription, setIsInputDescription] = useState(false);
  const [newTrainingDescription, setNewTrainingDescription] = useState('');
  // const [exerciseName, setExerciseName] = useState('12313');

  const openInputDescription = () => {
    setIsInputDescription(true);
  };
  const onChangeInputDescription = (value: string) => {
    setNewTrainingDescription(value);
  };
  const cancelInputDescription = () => {
    setNewTrainingDescription('');
    setIsInputDescription(false);
  };
  const addTrainingDescription = () => {
    dispatch(
      addTrainingDescriptionTC({
        trainingId,
        trainingDescription: newTrainingDescription,
      }),
    );
    setIsInputDescription(false);
  };
  // const addExercise = () => {
  //   dispatch(addExerciseTC({trainingId, exerciseName}));
  //   // setIsInputDescription(false);
  // };

  return (
    <Training
      trainingTitle={trainingTitle}
      trainingDescription={trainingDescription}
      client={client}
      addDescription={addTrainingDescription}
      onChangeInputDescription={onChangeInputDescription}
      cancelInputDescription={cancelInputDescription}
      isInputDescription={isInputDescription}
      timeTitle={timeTitle}
      openInputDescription={openInputDescription}
      // exercises={exercises}
      // addExercise={addExercise}
    />
  );
};
