import React from 'react';
import {Text, View} from 'react-native';
import tw from 'twrnc';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {ExerciseStatuses} from '../../../../../Types/StateTypes';

type ExerciseComponentType = {
  exerciseName: string;
  exerciseDescription?: string;
  isDone: ExerciseStatuses;
  changeStatus: () => void;
};

export const Exercise: React.FC<ExerciseComponentType> = ({
  exerciseName,
  exerciseDescription,
  isDone,
  changeStatus,
}) => {
  return (
    <View style={tw`px-5 py-2 items-center flex-row`}>
      <BouncyCheckbox
        disableBuiltInState={true}
        isChecked={isDone === ExerciseStatuses.Completed}
        onPress={changeStatus}
        fillColor="orange"
      />
      <View>
        <Text style={tw`text-base`}>{exerciseName}</Text>
        <Text style={tw`text-gray-600`}>{exerciseDescription}</Text>
      </View>
    </View>
  );
};
