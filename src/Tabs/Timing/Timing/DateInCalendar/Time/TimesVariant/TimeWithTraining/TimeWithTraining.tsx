import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import {ClientType, TrainingType} from '../../../../../../../Types/StateTypes';

type TimeWithTrainingProps = {
  client: ClientType | undefined;
  training: TrainingType | undefined;
  watchTraining: () => void;
};

export const TimeWithTraining: React.FC<TimeWithTrainingProps> = ({
  client,
  training,
  watchTraining,
}) => {
  return (
    <View style={tw`w-full flex-row items-center`}>
      <View style={tw`w-5/25 pr-2 items-center`}>
        <Image
          style={tw`w-10 h-10 rounded-full`}
          source={require('../../../../../../Profile/img/ava-man.png')}
        />
        <Text style={tw`text-gray-600`}>{client?.clientName}</Text>
      </View>
      <Text style={tw` w-8/25 pr-2 text-base font-semibold text-center`}>
        {training?.trainingTitle}
      </Text>
      <TouchableOpacity style={tw`w-6/14 items-center`} onPress={watchTraining}>
        <Text style={tw`px-5 w-full text-base`}>Смотреть</Text>
      </TouchableOpacity>
    </View>
  );
};
