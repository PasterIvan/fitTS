import React, {useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';
import {useAppDispatch} from '../../../../hooks/hooks';
import {setTrainingFromSearch} from './searchReduser';
import {TrainingType} from '../../../../Types/StateTypes';

export const TrainingInSearch = React.memo(
  ({trainingId, trainingTitle, trainingDescription}: TrainingType) => {
    const dispatch = useAppDispatch();
    const setTraining = useCallback(() => {
      dispatch(setTrainingFromSearch({trainingId, trainingTitle}));
    }, [dispatch, trainingId, trainingTitle]);
    return (
      <View
        style={tw`flex-row bg-stone-100 w-9.9/10 flex-row py-1 px-2 m-0.5 border rounded-lg border-gray-600 justify-between items-center`}>
        <View style={tw`flex-row items-center w-1/5`}>
          <Text style={tw`ml-3 text-base font-semibold`}>{trainingTitle}</Text>
        </View>
        <View style={tw`flex-row items-center w-1/3`}>
          <Text style={tw`ml-3 text-center`}>{trainingDescription}</Text>
        </View>
        <TouchableOpacity
          style={tw`w-3/10 bg-orange-400 border border-orange-700 rounded-xl py-2 items-center`}
          onPress={setTraining}>
          <Text style={tw`text-base font-bold text-slate-50`}>Выбрать</Text>
        </TouchableOpacity>
      </View>
    );
  },
);
