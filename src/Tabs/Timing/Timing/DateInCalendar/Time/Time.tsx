import {Text, View} from 'react-native';
import tw from 'twrnc';
import React from 'react';
import {TimeType} from '../../../../../Types/StateTypes';
import {FreeTimeContainer} from './TimesVariant/FreeTime/FreeTimeContainer';

export const Time = ({timeTitle, timeId, client}: TimeType) => {
  return (
    <View
      style={tw`w-full flex-row py-2 px-5 border-b border-gray-600 items-center`}>
      <Text style={tw`w-4/25 pr-2 text-base`}>{timeTitle}</Text>
      {client ? (
        <Text>time with client</Text>
      ) : (
        <FreeTimeContainer timeId={timeId} />
      )}
    </View>
  );
};
