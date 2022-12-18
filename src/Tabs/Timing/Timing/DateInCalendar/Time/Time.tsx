import {Text, View} from 'react-native';
import tw from 'twrnc';
import React from 'react';
import {TimeType} from '../../../../../Types/StateTypes';
import {FreeTimeContainer} from './TimesVariant/FreeTime/FreeTimeContainer';
import {TimeWithClientContainer} from './TimesVariant/TimeWithClient/TimeWithClientContainer';
import {TimeWithTrainingContainer} from './TimesVariant/TimeWithTraining/TimeWithTrainingContainer';

export const Time = React.memo((time: TimeType) => {
  return (
    <View
      style={tw`w-full flex-row py-2 px-5 border-b border-gray-600 items-center`}>
      <Text style={tw`w-4/25 pr-2 text-base`}>{time.timeTitle}</Text>
      {time.client ? (
        time.training ? (
          <TimeWithTrainingContainer time={time} />
        ) : (
          <TimeWithClientContainer timeId={time.timeId} client={time.client} />
        )
      ) : (
        <FreeTimeContainer timeId={time.timeId} />
      )}
    </View>
  );
});
