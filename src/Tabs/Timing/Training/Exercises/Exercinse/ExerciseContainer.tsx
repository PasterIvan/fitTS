import React from 'react';
import {ExerciseType} from '../../../../../Types/StateTypes';
import {useAppDispatch, useAppSelector} from '../../../../../hooks/hooks';
import {changeExerciseStatus} from '../../../../../store/bll/trainingReduser';
import {Exercise} from './Exercise';

export const ExerciseContainer = ({
  exerciseName,
  exerciseDescription,
  isDone,
  exerciseId,
}: ExerciseType) => {
  const dispatch = useAppDispatch();
  const {trainingId} = useAppSelector(state => state.training.training);
  const changeStatus = () => {
    dispatch(changeExerciseStatus({trainingId, exerciseId}));
  };
  return (
    <Exercise
      exerciseName={exerciseName}
      exerciseDescription={exerciseDescription}
      isDone={isDone}
      changeStatus={changeStatus}
    />
  );
};
