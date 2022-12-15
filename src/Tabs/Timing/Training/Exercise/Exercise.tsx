import React from 'react';
import {Text, View} from 'react-native';
import tw from 'twrnc';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
// import {useAppDispatch} from '../../../../hooks/hooks';
// import { changeExerciseStatus } from '../../../../store/bll/timesReduser'

export const Exercise = ({
  // exerciseId,
  exerciseName,
  description,
  isDone,
}: any) => {
  // const dispatch = useAppDispatch();
  // const changeStatus = (exerciseId: string) => {
  //   // dispatch(changeExerciseStatus(exerciseId))
  // };
  console.log(isDone);
  return (
    <View style={tw`px-5 py-2 items-center flex-row`}>
      <BouncyCheckbox
        isChecked={isDone}
        // onPress={() => changeStatus(exerciseId)}
        fillColor="orange"
      />
      <View>
        <Text style={tw`text-base`}>{exerciseName}</Text>
        <Text style={tw`text-gray-600`}>{description}</Text>
      </View>
    </View>
  );
};
