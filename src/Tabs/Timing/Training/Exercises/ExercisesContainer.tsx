import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../../hooks/hooks';
import {addExerciseTC} from '../../../../store/bll/trainingReduser';
import {Exercises} from './Exercises';

export const ExercisesContainer = () => {
  const dispatch = useAppDispatch();
  const {trainingId, exercises} = useAppSelector(
    state => state.training.training,
  );
  const [isInputTraining, setIsInputTraining] = useState(false);
  const [exerciseName, setExerciseName] = useState('');
  const onChangeInput = (value: string) => {
    setExerciseName(value);
  };
  const cancelInput = () => {
    setIsInputTraining(false);
  };
  const openInput = () => {
    setIsInputTraining(true);
  };

  const addExercise = () => {
    dispatch(addExerciseTC({trainingId, exerciseName}));
    setIsInputTraining(false);
  };

  return (
    <Exercises
      exercises={exercises}
      addExercise={addExercise}
      cancelInput={cancelInput}
      openInput={openInput}
      onChangeInput={onChangeInput}
      isInputTraining={isInputTraining}
    />
  );
};
