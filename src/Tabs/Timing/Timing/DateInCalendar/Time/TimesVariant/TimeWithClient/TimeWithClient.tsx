import React, {useCallback} from 'react';
import {TimeType} from '../../../../../../../Types/StateTypes';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';
import {useAppNavigation} from '../../../../../../../hooks/hooks';

type TimeWithClientProps = {
  time: TimeType;
};

export const TimeWithClient: React.FC<TimeWithClientProps> = ({time}) => {
  const {navigate} = useAppNavigation();

  const openModalWriteTraining = useCallback(() => {
    navigate('TimingTab', {
      screen: 'AddTrainingModal',
      params: {
        time,
      },
    });
  }, [navigate]);
  return (
    <View style={tw`w-full flex-row items-center`}>
      <View style={tw`w-5/25 pr-2 items-center`}>
        <Image
          style={tw`w-10 h-10 rounded-full`}
          source={require('../../../../../../Profile/img/ava-man.png')}
        />
        <Text style={tw`text-gray-600`}>{time.client?.clientName}</Text>
      </View>
      <TouchableOpacity onPress={openModalWriteTraining}>
        <Text style={tw`px-5 w-full text-base text-orange-400`}>
          Добавить тренировку
        </Text>
      </TouchableOpacity>
    </View>
  );
};
