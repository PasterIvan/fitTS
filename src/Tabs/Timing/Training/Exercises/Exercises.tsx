import React from 'react';
import {Button, FlatList, ListRenderItem, Text, View} from 'react-native';
import {ExerciseType} from '../../../../Types/StateTypes';
import tw from 'twrnc';
import {CustomTextInput} from '../../../../common/TextInput/CustomTextInput';
import {ExerciseContainer} from './Exercinse/ExerciseContainer';

type ExercisesProps = {
  exercises: ExerciseType[] | undefined;
  isInputTraining: boolean;
  addExercise: () => void;
  openInput: () => void;
  cancelInput: () => void;
  onChangeInput: (value: string) => void;
};

export const Exercises: React.FC<ExercisesProps> = ({
  exercises,
  isInputTraining,
  addExercise,
  openInput,
  cancelInput,
  onChangeInput,
}) => {
  const renderExercise: ListRenderItem<ExerciseType> = ({item}) => (
    <ExerciseContainer {...item} />
  );
  return (
    <View style={tw`flex-1 pb-2`}>
      <Text style={tw`w-full py-2 text-lg font-medium text-center`}>
        Упражнения
      </Text>
      <FlatList data={exercises} renderItem={renderExercise} />
      {isInputTraining ? (
        <CustomTextInput
          action={addExercise}
          cancelInput={cancelInput}
          onChangeInput={onChangeInput}
        />
      ) : (
        <Button
          title={'Добавить упражнение'}
          color={'green'}
          onPress={openInput}
        />
      )}
    </View>
  );
};
